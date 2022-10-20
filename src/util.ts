import * as grpc from "@grpc/grpc-js";
import { ConnectionOptions } from 'tls';


// NOTE: Copied from channel-credentials.ts in gRPC Node package because its not exported:
// https://github.com/grpc/grpc-node/blob/3106057f5ad8f79a71d2ae411e116ad308a2e835/packages/grpc-js/src/call-credentials.ts#L143
class ComposedChannelCredentials extends grpc.ChannelCredentials {
  constructor(
    private channelCredentials: KnownInsecureChannelCredentialsImpl,
    callCreds: grpc.CallCredentials
  ) {
    super(callCreds);
  }
  compose(callCredentials: grpc.CallCredentials) {
    const combinedCallCredentials = this.callCredentials.compose(
      callCredentials
    );
    return new ComposedChannelCredentials(
      this.channelCredentials,
      combinedCallCredentials
    );
  }

  _getConnectionOptions(): ConnectionOptions | null {
    return this.channelCredentials._getConnectionOptions();
  }
  _isSecure(): boolean {
    return false;
  }
  _equals(other: grpc.ChannelCredentials): boolean {
    if (this === other) {
      return true;
    }
    if (other instanceof ComposedChannelCredentials) {
      return (
        this.channelCredentials._equals(other.channelCredentials) &&
        this.callCredentials._equals(other.callCredentials)
      );
    } else {
      return false;
    }
  }
}

// Create our own known insecure channel creds.
// See https://github.com/grpc/grpc-node/issues/543 for why this is necessary.
class KnownInsecureChannelCredentialsImpl extends grpc.ChannelCredentials {
  constructor(callCredentials?: grpc.CallCredentials) {
    super(callCredentials);
  }

  compose(callCredentials: grpc.CallCredentials): grpc.ChannelCredentials {
    const combinedCallCredentials = this.callCredentials.compose(
      callCredentials
    );
    return new ComposedChannelCredentials(this, combinedCallCredentials);
  }

  _getConnectionOptions(): ConnectionOptions | null {
    return null;
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

function createClientCreds(
  endpoint: string,
  token: string,
  security: ClientSecurity = ClientSecurity.SECURE
): grpc.ChannelCredentials {
  const metadata = new grpc.Metadata();
  metadata.set("authorization", "Bearer " + token);

  const creds = [];

  if (security === ClientSecurity.SECURE ||
    security === ClientSecurity.INSECURE_PLAINTEXT_CREDENTIALS ||
    (security === ClientSecurity.INSECURE_LOCALHOST_ALLOWED && endpoint.startsWith('localhost:'))) {
    creds.push(
      grpc.credentials.createFromMetadataGenerator((_, callback) => {
        callback(null, metadata);
      })
    );
  }

  return grpc.credentials.combineChannelCredentials(
    security === ClientSecurity.SECURE ? grpc.credentials.createSsl() : new KnownInsecureChannelCredentialsImpl(),
    ...creds
  );
}

function createClientCredsWithCustomCert(
  token: string,
  certificate:  Buffer
): grpc.ChannelCredentials {
  const metadata = new grpc.Metadata();
  metadata.set("authorization", "Bearer " + token);

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

function promisifyStream<P1, P2, P3>(fn: (req: P1) => grpc.ClientReadableStream<P2>, bind: P3): (req: P1) => Promise<P2[]> {
  return (req: P1) => {
    return new Promise((resolve, reject) => {
      const results: P2[] = []
      const stream = fn.bind(bind)(req)
      stream.on('data', function (response: P2) {
        results.push(response)
      });
  
      stream.on('error', function (e) {
        return reject(e)
      });

      stream.on('end', function () {
        return resolve(results)
      });
  
      stream.on('status', function (status) {
        if (status.code !== grpc.status.OK) {
          return reject(status)
        }
      });
    }) 
  }
}

const authzedEndpoint = "grpc.authzed.com:443";


export { createClientCreds, createClientCredsWithCustomCert, authzedEndpoint, promisifyStream };
export default { createClientCreds, createClientCredsWithCustomCert, authzedEndpoint, promisifyStream };
