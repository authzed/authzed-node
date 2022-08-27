"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authzedEndpoint = exports.createClientCreds = exports.ClientSecurity = void 0;
const grpc = __importStar(require("@grpc/grpc-js"));
// NOTE: Copied from channel-credentials.ts in gRPC Node package because its not exported:
// https://github.com/grpc/grpc-node/blob/3106057f5ad8f79a71d2ae411e116ad308a2e835/packages/grpc-js/src/call-credentials.ts#L143
class ComposedChannelCredentials extends grpc.ChannelCredentials {
    constructor(channelCredentials, callCreds) {
        super(callCreds);
        this.channelCredentials = channelCredentials;
    }
    compose(callCredentials) {
        const combinedCallCredentials = this.callCredentials.compose(callCredentials);
        return new ComposedChannelCredentials(this.channelCredentials, combinedCallCredentials);
    }
    _getConnectionOptions() {
        return this.channelCredentials._getConnectionOptions();
    }
    _isSecure() {
        return false;
    }
    _equals(other) {
        if (this === other) {
            return true;
        }
        if (other instanceof ComposedChannelCredentials) {
            return (this.channelCredentials._equals(other.channelCredentials) &&
                this.callCredentials._equals(other.callCredentials));
        }
        else {
            return false;
        }
    }
}
// Create our own known insecure channel creds.
// See https://github.com/grpc/grpc-node/issues/543 for why this is necessary.
class KnownInsecureChannelCredentialsImpl extends grpc.ChannelCredentials {
    constructor(callCredentials) {
        super(callCredentials);
    }
    compose(callCredentials) {
        const combinedCallCredentials = this.callCredentials.compose(callCredentials);
        return new ComposedChannelCredentials(this, combinedCallCredentials);
    }
    _getConnectionOptions() {
        return null;
    }
    _isSecure() {
        return false;
    }
    _equals(other) {
        return other instanceof KnownInsecureChannelCredentialsImpl;
    }
}
var ClientSecurity;
(function (ClientSecurity) {
    ClientSecurity[ClientSecurity["SECURE"] = 0] = "SECURE";
    ClientSecurity[ClientSecurity["INSECURE_LOCALHOST_ALLOWED"] = 1] = "INSECURE_LOCALHOST_ALLOWED";
    ClientSecurity[ClientSecurity["INSECURE_PLAINTEXT_CREDENTIALS"] = 2] = "INSECURE_PLAINTEXT_CREDENTIALS";
})(ClientSecurity = exports.ClientSecurity || (exports.ClientSecurity = {}));
function createClientCreds(endpoint, token, security = ClientSecurity.SECURE) {
    const metadata = new grpc.Metadata();
    metadata.set("authorization", "Bearer " + token);
    const creds = [];
    if (security === ClientSecurity.SECURE ||
        security === ClientSecurity.INSECURE_PLAINTEXT_CREDENTIALS ||
        (security === ClientSecurity.INSECURE_LOCALHOST_ALLOWED && endpoint.startsWith('localhost:'))) {
        creds.push(grpc.credentials.createFromMetadataGenerator((_, callback) => {
            callback(null, metadata);
        }));
    }
    return grpc.credentials.combineChannelCredentials(security === ClientSecurity.SECURE ? grpc.credentials.createSsl() : new KnownInsecureChannelCredentialsImpl(), ...creds);
}
exports.createClientCreds = createClientCreds;
const authzedEndpoint = "grpc.authzed.com:443";
exports.authzedEndpoint = authzedEndpoint;
exports.default = { createClientCreds, authzedEndpoint };
//# sourceMappingURL=util.js.map