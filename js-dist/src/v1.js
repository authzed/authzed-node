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
exports.NewClient = void 0;
const permission_service_grpc_client_1 = require("./authzedapi/authzed/api/v1/permission_service.grpc-client");
const schema_grpc_client_1 = require("./authzedapi/authzed/api/v1/schema.grpc-client");
const watch_service_grpc_client_1 = require("./authzedapi/authzed/api/v1/watch_service.grpc-client");
const util = __importStar(require("./util"));
const util_1 = require("./util");
function NewClient(token, endpoint = util.authzedEndpoint, security = util_1.ClientSecurity.SECURE) {
    const creds = util.createClientCreds(endpoint, token, security);
    const acl = new permission_service_grpc_client_1.PermissionsServiceClient(endpoint, creds);
    const ns = new schema_grpc_client_1.SchemaServiceClient(endpoint, creds);
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
    return new Proxy(acl, handler);
}
exports.NewClient = NewClient;
__exportStar(require("./authzedapi/authzed/api/v1/core"), exports);
__exportStar(require("./authzedapi/authzed/api/v1/permission_service"), exports);
__exportStar(require("./authzedapi/authzed/api/v1/schema"), exports);
__exportStar(require("./authzedapi/authzed/api/v1/watch_service"), exports);
__exportStar(require("./authzedapi/authzed/api/v1/watch_service.grpc-client"), exports);
__exportStar(require("./authzedapi/authzed/api/v1/permission_service.grpc-client"), exports);
__exportStar(require("./authzedapi/authzed/api/v1/schema.grpc-client"), exports);
exports.default = {
    NewClient: NewClient,
};
//# sourceMappingURL=v1.js.map