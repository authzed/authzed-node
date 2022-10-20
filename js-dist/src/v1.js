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
const streamMethods = new Set([
    'readRelationships',
    'lookupResources',
    'lookupSubjects'
]);
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
 * The combined client exposes all service-level methods at the root which directly call grpc1-generated methods
 * while also exposing a `promises` object containing all promise-wrapped methods.
 *
 * @param endpoint Uri for communicating with Authzed.
 * @param creds ChannelCredentials used for grpc.
 * @returns Client for calling Authzed APIs.
 */
function NewClientWithChannelCredentials(endpoint = util.authzedEndpoint, creds) {
    const proxy = createClient(endpoint, creds);
    const promiseClient = createPromiseClient(proxy);
    const fullHandler = {
        get(target, name) {
            if (name === 'promises') {
                return promiseClient;
            }
            return proxy[name];
        }
    };
    return new Proxy({}, fullHandler);
}
exports.NewClientWithChannelCredentials = NewClientWithChannelCredentials;
/**
 * Creates the standard client_grpc1 (via @grpc/grpc-js) that will correctly
 * proxy the namespaced methods to the correct service client.
 *
 * @param endpoint The grpc endpoing
 * @param creds The channel credentials
 * @returns A default grpc1 client
 */
function createClient(endpoint, creds) {
    const acl = new permission_service_grpc_client_1.PermissionsServiceClient(endpoint, creds);
    const ns = new schema_service_grpc_client_1.SchemaServiceClient(endpoint, creds);
    const watch = new watch_service_grpc_client_1.WatchServiceClient(endpoint, creds);
    const handler = {
        get(target, name) {
            if (acl[name]) {
                return acl[name];
            }
            if (ns[name]) {
                return ns[name];
            }
            if (watch[name]) {
                return watch[name];
            }
            return undefined;
        },
    };
    return new Proxy({}, handler);
}
/**
 * Proxies all methods from the {@link IZedClient} to return promises
 * in order to support async/await for {@link ClientUnaryCall} and {@link ClientReadableStream}
 * responses.
 *
 * @param client The default grpc1 client
 * @returns A promise-wrapped grpc1 client
 */
function createPromiseClient(client) {
    const handler = {
        get(target, name) {
            if (client[name]) {
                if (streamMethods.has(name)) {
                    return util_2.promisifyStream(client[name], client);
                }
                if (typeof client[name] === 'function') {
                    return util_1.promisify(client[name]).bind(client);
                }
                return client[name];
            }
            return undefined;
        },
    };
    return new Proxy({}, handler);
}
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