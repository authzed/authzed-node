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
const util_1 = require("./util");
const v1 = __importStar(require("./v1"));
const v1_1 = require("./v1");
const helpers_1 = require("./__utils__/helpers");
describe("a check following a write of schema and relationships", () => {
    it("should succeed", (done) => {
        // Write the schema.
        const token = helpers_1.generateTestToken('full-test');
        const v1client = v1.NewClient(token, "localhost:50051", util_1.ClientSecurity.INSECURE_LOCALHOST_ALLOWED);
        const writeSchemaRequest = v1.WriteSchemaRequest.create({
            schema: `
  definition test/user {}
  
  definition test/resource {
      relation viewer: test/user
      permission view = viewer
  }
  `,
        });
        v1client.writeSchema(writeSchemaRequest, function (err) {
            expect(err).toBe(null);
            // Create the relationship between the resource and the user.
            const resource = v1.ObjectReference.create({
                objectType: "test/resource",
                objectId: "someresource",
            });
            // Create the user reference.
            const userref = v1.ObjectReference.create({
                objectType: "test/user",
                objectId: "someuser",
            });
            const user = v1.SubjectReference.create({
                object: userref,
            });
            const relationship = v1.Relationship.create({
                resource,
                relation: "viewer",
                subject: user,
            });
            const update = v1.RelationshipUpdate.create({
                operation: v1.RelationshipUpdate_Operation.CREATE,
                relationship: relationship,
            });
            // Write the relationship.
            const writeRequest = v1.WriteRelationshipsRequest.create({
                updates: [update],
            });
            v1client.writeRelationships(writeRequest, function (err, response) {
                expect(err).toBe(null);
                expect(response).toBeTruthy();
                const checkPermissionRequest = v1.CheckPermissionRequest.create({
                    resource,
                    permission: "view",
                    subject: user,
                    consistency: v1_1.Consistency.create({
                        requirement: {
                            oneofKind: "fullyConsistent",
                            fullyConsistent: true,
                        },
                    })
                });
                v1client.checkPermission(checkPermissionRequest, (err, response) => {
                    expect(err).toBe(null);
                    expect(response === null || response === void 0 ? void 0 : response.permissionship).toBe(v1.CheckPermissionResponse_Permissionship.HAS_PERMISSION);
                    done();
                });
            });
        });
    });
});
//# sourceMappingURL=full.test.js.map