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
const v1alpha1_1 = __importStar(require("./v1alpha1"));
const helpers_1 = require("./__utils__/helpers");
describe("a write", () => {
    it("should succeed", (done) => {
        const client = v1alpha1_1.default.NewClient(helpers_1.generateTestToken("v1-alpha1"), "localhost:50051", v1alpha1_1.ClientSecurity.INSECURE_LOCALHOST_ALLOWED);
        const request = v1alpha1_1.WriteSchemaRequest.create({
            schema: "definition test/something {}",
        });
        client.writeSchema(request, function (err, response) {
            expect(err).toBe(null);
            expect(response === null || response === void 0 ? void 0 : response.objectDefinitionsNames).toEqual(["test/something"]);
            done();
        });
    });
});
//# sourceMappingURL=v1alpha1.test.js.map