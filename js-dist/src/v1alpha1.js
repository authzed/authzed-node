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
const schema_grpc_client_1 = require("./authzedapi/authzed/api/v1alpha1/schema.grpc-client");
const util_1 = __importStar(require("./util"));
function NewClient(token, endpoint = util_1.default.authzedEndpoint, security = util_1.ClientSecurity.SECURE) {
    const creds = util_1.default.createClientCreds(endpoint, token, security);
    const schema = new schema_grpc_client_1.SchemaServiceClient(endpoint, creds);
    return schema;
}
exports.NewClient = NewClient;
__exportStar(require("./authzedapi/authzed/api/v1alpha1/schema"), exports);
exports.default = {
    NewClient,
};
//# sourceMappingURL=v1alpha1.js.map