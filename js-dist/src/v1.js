/* eslint-disable  @typescript-eslint/no-explicit-any */
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewClientWithChannelCredentials = exports.NewClientWithCustomCert = exports.NewClient = void 0;
const util_1 = require("util");
const permission_service_grpc_client_1 = require("./authzedapi/authzed/api/v1/permission_service.grpc-client");
const schema_service_grpc_client_1 = require("./authzedapi/authzed/api/v1/schema_service.grpc-client");
const watch_service_grpc_client_1 = require("./authzedapi/authzed/api/v1/watch_service.grpc-client");
const util = __importStar(require("./util"));
const util_2 = require("./util");
/**
 * A standard client (via @grpc/grpc-js) that will correctly
 * proxy the namespaced methods to the correct service client.
 */
class ZedClient {
    constructor(endpoint, creds) {
        this.close = () => {
            [this.acl, this.ns, this.watch].forEach((client) => client.close());
        };
        this.acl = new permission_service_grpc_client_1.PermissionsServiceClient(endpoint, creds);
        this.ns = new schema_service_grpc_client_1.SchemaServiceClient(endpoint, creds);
        this.watch = new watch_service_grpc_client_1.WatchServiceClient(endpoint, creds);
    }
    static create(endpoint, creds) {
        return new Proxy({}, new ZedClient(endpoint, creds));
    }
    get(_target, name) {
        if (name === 'close') {
            return this.close;
        }
        if (this.acl[name]) {
            return this.acl[name];
        }
        if (this.ns[name]) {
            return this.ns[name];
        }
        if (this.watch[name]) {
            return this.watch[name];
        }
        return undefined;
    }
}
/**
 * Proxies all methods from the {@link ZedDefaultClientInterface} to return promises
 * in order to support async/await for {@link ClientUnaryCall} and {@link ClientReadableStream}
 * responses. Methods that normally return an instance of stream, will instead return an
 * array of objects collected while the stream was open.
 *
 * @param client The default grpc1 client
 * @returns A promise-wrapped grpc1 client
 */
class ZedPromiseClient {
    constructor(client) {
        this.promiseCache = {};
        this.streamMethods = new Set([
            'readRelationships',
            'lookupResources',
            'lookupSubjects'
        ]);
        this.client = client;
    }
    static create(client) {
        return new Proxy({}, new ZedPromiseClient(client));
    }
    get(_target, name) {
        if (!(name in this.promiseCache)) {
            const clientMethod = this.client[name];
            if (clientMethod !== undefined) {
                if (this.streamMethods.has(name)) {
                    this.promiseCache[name] = util_2.promisifyStream(clientMethod, this.client);
                }
                else if (typeof clientMethod === 'function') {
                    this.promiseCache[name] = util_1.promisify(this.client[name]).bind(this.client);
                }
                else {
                    return clientMethod;
                }
            }
        }
        return this.promiseCache[name];
    }
}
/**
 * The {@link ZedCombinedClient} proxies both callback/promise-style methods to the underlying
 * {@link ZedClient} and {@link ZedPromiseClient} instances. Direct method calls on the combined
 * client will result in calling the underlying callback methods (the generated gRPC methods) while
 * the same methods accessed at a sub-path `.promises.<method>` will result in the promise-wrapped
 * methods.
 */
class ZedCombinedClient {
    constructor(client, promiseClient) {
        this.client = client;
        this.promiseClient = promiseClient;
    }
    static create(endpoint, creds) {
        const client = ZedClient.create(endpoint, creds);
        const promiseClient = ZedPromiseClient.create(client);
        return new Proxy({}, new ZedCombinedClient(client, promiseClient));
    }
    get(_target, name) {
        if (name === 'promises') {
            return this.promiseClient;
        }
        return this.client[name];
    }
}
/**
 * NewClient creates a new client for calling Authzed APIs.
 * @param token Secret token for authentication.
 * @param endpoint Uri for communicating with Authzed.
 * @param security Security level for the connection.
 * @returns Client for calling Authzed APIs.
 */
function NewClient(token, endpoint = util.authzedEndpoint, security = util_2.ClientSecurity.SECURE) {
    const creds = util.createClientCreds(endpoint, token, security);
    return NewClientWithChannelCredentials(endpoint, creds);
}
exports.NewClient = NewClient;
/**
 * NewClientWithCustomCert creates a new client for calling Authzed APIs using a custom TLS certificate.
 * @param token Secret token for authentication.
 * @param endpoint Uri for communicating with Authzed.
 * @param certificate Buffer read from certificate file.
 * @returns Client for calling Authzed APIs.
 */
function NewClientWithCustomCert(token, endpoint = util.authzedEndpoint, certificate) {
    const creds = util.createClientCredsWithCustomCert(token, certificate);
    return NewClientWithChannelCredentials(endpoint, creds);
}
exports.NewClientWithCustomCert = NewClientWithCustomCert;
/**
 * NewClientWithChannelCredentials creates a new client for calling Authzed APIs using custom grpc ChannelCredentials.
 *
 The {@link ZedCombinedClient} proxies both callback/promise-style methods to the underlying
 * {@link ZedClient} and {@link ZedPromiseClient} instances. Direct method calls on the combined
 * client will result in calling the underlying callback methods (the generated gRPC methods) while
 * the same methods accessed at a sub-path `.promises.<method>` will result in the promise-wrapped
 * methods. For all methods that return a {@link ClientReadableStream}, the promise-wrapped method
 * will return an array of the resulting responses after the stream has been closed.
 *
 * @param endpoint Uri for communicating with Authzed.
 * @param creds ChannelCredentials used for grpc.
 * @returns Client for calling Authzed APIs.
 */
function NewClientWithChannelCredentials(endpoint = util.authzedEndpoint, creds) {
    return ZedCombinedClient.create(endpoint, creds);
}
exports.NewClientWithChannelCredentials = NewClientWithChannelCredentials;
__exportStar(require("./authzedapi/authzed/api/v1/core"), exports);
__exportStar(require("./authzedapi/authzed/api/v1/permission_service"), exports);
__exportStar(require("./authzedapi/authzed/api/v1/schema_service"), exports);
__exportStar(require("./authzedapi/authzed/api/v1/watch_service"), exports);
__exportStar(require("./authzedapi/authzed/api/v1/watch_service.grpc-client"), exports);
__exportStar(require("./authzedapi/authzed/api/v1/permission_service.grpc-client"), exports);
__exportStar(require("./authzedapi/authzed/api/v1/schema_service.grpc-client"), exports);
var util_3 = require("./util");
Object.defineProperty(exports, "ClientSecurity", { enumerable: true, get: function () { return util_3.ClientSecurity; } });
exports.default = {
    NewClient: NewClient,
};
//# sourceMappingURL=v1.js.map