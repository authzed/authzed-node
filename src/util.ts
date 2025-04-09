import * as grpc from "@grpc/grpc-js";
import { NextCall } from "@grpc/grpc-js/build/src/client-interceptors.js";
import type { SecureConnector } from "@grpc/grpc-js/build/src/channel-credentials.js"
import type { ChannelOptions } from "@grpc/grpc-js/build/src/channel-options.js"
import type { GrpcUri } from "@grpc/grpc-js/build/src/uri-parser.js"

// NOTE: Copied from channel-credentials.ts in gRPC Node package because its not exported:
// https://github.com/grpc/grpc-node/blob/3106057f5ad8f79a71d2ae411e116ad308a2e835/packages/grpc-js/src/call-credentials.ts#L143
class KnownInsecureComposedChannelCredentialsImpl extends grpc.ChannelCredentials {
  constructor(
    private channelCredentials: grpc.ChannelCredentials,
    private callCredentials: grpc.CallCredentials
  ) {
    super();
    // NOTE: leaving this here to show what changed from the upstream.
    /*
    if (!channelCredentials._isSecure()) {
      throw new Error('Cannot compose insecure credentials');
    }
    */
  }
  compose(callCredentials: grpc.CallCredentials) {
    const combinedCallCredentials =
      this.callCredentials.compose(callCredentials);
    return new KnownInsecureComposedChannelCredentialsImpl(
      this.channelCredentials,
      combinedCallCredentials
    );
  }
  _isSecure(): boolean {
    return false;
  }
  _equals(other: grpc.ChannelCredentials): boolean {
    if (this === other) {
      return true;
    }
    if (other instanceof KnownInsecureComposedChannelCredentialsImpl) {
      return (
        this.channelCredentials._equals(other.channelCredentials) &&
        this.callCredentials._equals(other.callCredentials)
      );
    } else {
      return false;
    }
  }
  _createSecureConnector(channelTarget: GrpcUri, options: ChannelOptions, callCredentials?: grpc.CallCredentials): SecureConnector {
    const combinedCallCredentials = this.callCredentials.compose(callCredentials ?? grpc.CallCredentials.createEmpty());
    return this.channelCredentials._createSecureConnector(channelTarget, options, combinedCallCredentials);
  }
}

// Create our own known insecure channel creds.
// See https://github.com/grpc/grpc-node/issues/543 for why this is necessary.
class KnownInsecureChannelCredentialsImpl extends grpc.ChannelCredentials {
    private insecureChannelCredentials: grpc.ChannelCredentials
  constructor() {
      super()
      // NOTE: we create an instance of insecureChannelCredentials so taht we can use
      // its _createSecureConnector function, which is a pure function (i.e. doesn't
      // depend on the internals of the instance).
      this.insecureChannelCredentials = grpc.ChannelCredentials.createInsecure()
  }
  compose(callCredentials: grpc.CallCredentials): grpc.ChannelCredentials {
    return new KnownInsecureComposedChannelCredentialsImpl(this, callCredentials);
  }

  _createSecureConnector(channelTarget: GrpcUri, options: ChannelOptions, callCredentials?: grpc.CallCredentials): SecureConnector {
      // We pass through the insecure version of _createSecureConnector, which is
      return this.insecureChannelCredentials._createSecureConnector(channelTarget, options, callCredentials)
  }

  _isSecure(): boolean {
    return false;
  }

  _equals(other: grpc.ChannelCredentials): boolean {
    return other instanceof KnownInsecureChannelCredentialsImpl;
  }
}

export enum ClientSecurity {
  SECURE = 0,
  INSECURE_LOCALHOST_ALLOWED = 1,
  INSECURE_PLAINTEXT_CREDENTIALS = 2,
}

export enum PreconnectServices {
  NONE = 0,
  PERMISSIONS_SERVICE = 1,
  SCHEMA_SERVICE = 2,
  WATCH_SERVICE = 4,
  EXPERIMENTAL_SERVICE = 8,
}

function createClientCreds(
  endpoint: string,
  token: string,
  security: ClientSecurity = ClientSecurity.SECURE
): grpc.ChannelCredentials {
  const metadata = new grpc.Metadata();
  metadata.set('authorization', 'Bearer ' + token);

  const creds = [];

  if (
    security === ClientSecurity.SECURE ||
    security === ClientSecurity.INSECURE_PLAINTEXT_CREDENTIALS ||
    (security === ClientSecurity.INSECURE_LOCALHOST_ALLOWED &&
      endpoint.startsWith('localhost:'))
  ) {
    creds.push(
      grpc.credentials.createFromMetadataGenerator((_, callback) => {
        callback(null, metadata);
      })
    );
  }

  return grpc.credentials.combineChannelCredentials(
    security === ClientSecurity.SECURE
      ? grpc.credentials.createSsl()
      : new KnownInsecureChannelCredentialsImpl(),
    ...creds
  );
}

function createClientCredsWithCustomCert(
  token: string,
  certificate: Buffer
): grpc.ChannelCredentials {
  const metadata = new grpc.Metadata();
  metadata.set('authorization', 'Bearer ' + token);

  const creds = [];

  creds.push(
    grpc.credentials.createFromMetadataGenerator((_, callback) => {
      callback(null, metadata);
    })
  );

  return grpc.credentials.combineChannelCredentials(
    grpc.credentials.createSsl(certificate),
    ...creds
  );
}

function promisifyStream<P1, P2, P3>(
  fn: (req: P1) => grpc.ClientReadableStream<P2>,
  bind: P3
): (req: P1) => Promise<P2[]> {
  return (req: P1) => {
    return new Promise((resolve, reject) => {
      const results: P2[] = [];
      const stream = fn.bind(bind)(req);
      stream.on('data', function (response: P2) {
        results.push(response);
      });

      stream.on('error', function (e) {
        return reject(e);
      });

      stream.on('end', function () {
        return resolve(results);
      });

      stream.on('status', function (status) {
        if (status.code !== grpc.status.OK) {
          return reject(status);
        }
      });
    });
  };
}

// Based on: https://github.com/grpc/grpc-node/issues/541#issuecomment-631191356
export function deadlineInterceptor(timeoutInMS: number): grpc.Interceptor {
  return (options: grpc.InterceptorOptions, nextCall: NextCall) => {
    if (!options.deadline) {
      options.deadline = Date.now() + (timeoutInMS ? timeoutInMS : 60000);
    }
    return new grpc.InterceptingCall(nextCall(options));
  };
}

const authzedEndpoint = "grpc.authzed.com:443";

export {
  createClientCreds,
  createClientCredsWithCustomCert,
  authzedEndpoint,
  promisifyStream,
};
export default {
  createClientCreds,
  createClientCredsWithCustomCert,
  authzedEndpoint,
  promisifyStream,
};
