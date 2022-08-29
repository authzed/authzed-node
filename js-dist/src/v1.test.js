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
const v1_1 = require("./v1");
const grpc = __importStar(require("@grpc/grpc-js"));
const util_1 = require("./util");
describe("a check with an unknown namespace", () => {
    it("should raise a failed precondition", (done) => {
        const resource = v1_1.ObjectReference.create({
            objectType: "test/somenamespace",
            objectId: "bar",
        });
        const testUser = v1_1.ObjectReference.create({
            objectType: "test/user",
            objectId: "someuser",
        });
        const checkPermissionRequest = v1_1.CheckPermissionRequest.create({
            resource,
            permission: "someperm",
            subject: v1_1.SubjectReference.create({
                object: testUser,
            }),
        });
        const client = v1_1.NewClient("v1-failed-sometoken", "localhost:50051", util_1.ClientSecurity.INSECURE_LOCALHOST_ALLOWED);
        client.checkPermission(checkPermissionRequest, function (err, response) {
            expect(response).toBe(undefined);
            expect(err === null || err === void 0 ? void 0 : err.code).toBe(grpc.status.FAILED_PRECONDITION);
            done();
        });
    });
});
describe("a check with an known namespace", () => {
    it("should succeed", (done) => {
        // Write some schema.
        const client = v1_1.NewClient("v1-sometoken", "localhost:50051", util_1.ClientSecurity.INSECURE_LOCALHOST_ALLOWED);
        const request = v1_1.WriteSchemaRequest.create({
            schema: `definition test/user {}

      definition test/document {
        relation viewer: test/user
        permission view = viewer
      }
      `,
        });
        new Promise((resolve) => {
            client.writeSchema(request, function (err, response) {
                expect(err).toBe(null);
                resolve(response);
            });
        })
            .then((schemaResponse) => {
            expect(schemaResponse).toBeTruthy();
            return new Promise((resolve) => {
                // Write a relationship.
                const resource = v1_1.ObjectReference.create({
                    objectType: "test/document",
                    objectId: "somedocument",
                });
                const testUser = v1_1.ObjectReference.create({
                    objectType: "test/user",
                    objectId: "someuser",
                });
                const writeRequest = v1_1.WriteRelationshipsRequest.create({
                    updates: [
                        v1_1.RelationshipUpdate.create({
                            relationship: v1_1.Relationship.create({
                                resource: resource,
                                relation: "viewer",
                                subject: v1_1.SubjectReference.create({
                                    object: testUser,
                                }),
                            }),
                            operation: v1_1.RelationshipUpdate_Operation.CREATE,
                        }),
                    ],
                });
                client.writeRelationships(writeRequest, function (err, response) {
                    expect(err).toBe(null);
                    resolve({ response, resource, testUser });
                });
            });
        })
            .then((vals) => {
            const { response, resource, testUser } = vals;
            expect(response).toBeTruthy();
            return new Promise((resolve) => {
                // Call check.
                const checkPermissionRequest = v1_1.CheckPermissionRequest.create({
                    resource,
                    permission: "view",
                    subject: v1_1.SubjectReference.create({
                        object: testUser,
                    }),
                    consistency: v1_1.Consistency.create({
                        requirement: {
                            oneofKind: "fullyConsistent",
                            fullyConsistent: true,
                        },
                    }),
                });
                client.checkPermission(checkPermissionRequest, function (err, response) {
                    expect(err).toBe(null);
                    resolve(response);
                });
            });
        })
            .then((response) => {
            const checkResponse = response;
            expect(checkResponse === null || checkResponse === void 0 ? void 0 : checkResponse.permissionship).toBe(v1_1.CheckPermissionResponse_Permissionship.HAS_PERMISSION);
            done();
        });
    });
});
//# sourceMappingURL=v1.test.js.map