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
const helpers_1 = require("./__utils__/helpers");
describe('a check with an unknown namespace', () => {
    it('should raise a failed precondition', (done) => {
        const resource = v1_1.ObjectReference.create({
            objectType: 'test/somenamespace',
            objectId: 'bar',
        });
        const testUser = v1_1.ObjectReference.create({
            objectType: 'test/user',
            objectId: 'someuser',
        });
        const checkPermissionRequest = v1_1.CheckPermissionRequest.create({
            resource,
            permission: 'someperm',
            subject: v1_1.SubjectReference.create({
                object: testUser,
            }),
        });
        const client = v1_1.NewClient(helpers_1.generateTestToken('v1-test-unknown'), 'localhost:50051', v1_1.ClientSecurity.INSECURE_LOCALHOST_ALLOWED);
        client.checkPermission(checkPermissionRequest, function (err, response) {
            expect(response).toBe(undefined);
            expect(err === null || err === void 0 ? void 0 : err.code).toBe(grpc.status.FAILED_PRECONDITION);
            client.close();
            done();
        });
    });
});
describe('a check with an known namespace', () => {
    it('should succeed', (done) => {
        // Write some schema.
        const client = v1_1.NewClient(helpers_1.generateTestToken('v1-namespace'), 'localhost:50051', v1_1.ClientSecurity.INSECURE_LOCALHOST_ALLOWED);
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
                    objectType: 'test/document',
                    objectId: 'somedocument',
                });
                const testUser = v1_1.ObjectReference.create({
                    objectType: 'test/user',
                    objectId: 'someuser',
                });
                const writeRequest = v1_1.WriteRelationshipsRequest.create({
                    updates: [
                        v1_1.RelationshipUpdate.create({
                            relationship: v1_1.Relationship.create({
                                resource: resource,
                                relation: 'viewer',
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
                    permission: 'view',
                    subject: v1_1.SubjectReference.create({
                        object: testUser,
                    }),
                    consistency: v1_1.Consistency.create({
                        requirement: {
                            oneofKind: 'fullyConsistent',
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
            client.close();
            done();
        });
    });
});
describe('Lookup APIs', () => {
    let token;
    beforeEach(async () => {
        token = helpers_1.generateTestToken('v1-lookup');
        const client = v1_1.NewClient(token, 'localhost:50051', v1_1.ClientSecurity.INSECURE_LOCALHOST_ALLOWED);
        const request = v1_1.WriteSchemaRequest.create({
            schema: `definition test/user {}

      definition test/document {
        relation viewer: test/user
        permission view = viewer
      }
      `,
        });
        await new Promise((resolve) => {
            client.writeSchema(request, function (err, response) {
                expect(err).toBe(null);
                resolve(response);
            });
        });
        const resource = v1_1.ObjectReference.create({
            objectType: 'test/document',
            objectId: 'somedocument',
        });
        const writeRequest = v1_1.WriteRelationshipsRequest.create({
            updates: [
                v1_1.RelationshipUpdate.create({
                    relationship: v1_1.Relationship.create({
                        resource: resource,
                        relation: 'viewer',
                        subject: v1_1.SubjectReference.create({
                            object: v1_1.ObjectReference.create({
                                objectType: 'test/user',
                                objectId: 'someuser',
                            }),
                        }),
                    }),
                    operation: v1_1.RelationshipUpdate_Operation.CREATE,
                }),
                v1_1.RelationshipUpdate.create({
                    relationship: v1_1.Relationship.create({
                        resource: resource,
                        relation: 'viewer',
                        subject: v1_1.SubjectReference.create({
                            object: v1_1.ObjectReference.create({
                                objectType: 'test/user',
                                objectId: 'someuser2',
                            }),
                        }),
                    }),
                    operation: v1_1.RelationshipUpdate_Operation.CREATE,
                }),
            ],
        });
        await new Promise((resolve) => {
            client.writeRelationships(writeRequest, function (err, response) {
                expect(err).toBe(null);
                resolve(response);
            });
        });
    });
    it('can lookup subjects', (done) => {
        const client = v1_1.NewClient(token, 'localhost:50051', v1_1.ClientSecurity.INSECURE_LOCALHOST_ALLOWED);
        const request = v1_1.LookupSubjectsRequest.create({
            resource: v1_1.ObjectReference.create({
                objectType: 'test/document',
                objectId: 'somedocument',
            }),
            permission: 'view',
            subjectObjectType: 'test/user',
            consistency: v1_1.Consistency.create({
                requirement: {
                    oneofKind: 'fullyConsistent',
                    fullyConsistent: true,
                },
            }),
        });
        const resStream = client.lookupSubjects(request);
        resStream.on('data', function (subject) {
            expect(['someuser', 'someuser2']).toContain(subject.subjectObjectId);
        });
        resStream.on('end', function () {
            client.close();
            done();
        });
        resStream.on('error', function (e) {
            client.close();
            done.fail(e);
        });
        resStream.on('status', function (status) {
            expect(status.code).toEqual(grpc.status.OK);
        });
    });
    it('can lookup resources', (done) => {
        const client = v1_1.NewClient(token, 'localhost:50051', v1_1.ClientSecurity.INSECURE_LOCALHOST_ALLOWED);
        const request = v1_1.LookupResourcesRequest.create({
            subject: v1_1.SubjectReference.create({
                object: v1_1.ObjectReference.create({
                    objectType: 'test/user',
                    objectId: 'someuser',
                }),
            }),
            permission: 'view',
            resourceObjectType: 'test/document',
            consistency: v1_1.Consistency.create({
                requirement: {
                    oneofKind: 'fullyConsistent',
                    fullyConsistent: true,
                },
            }),
        });
        const resStream = client.lookupResources(request);
        resStream.on('data', function (response) {
            expect(response.resourceObjectId).toEqual('somedocument');
        });
        resStream.on('end', function () {
            client.close();
            done();
        });
        resStream.on('error', function (e) {
            client.close();
            done.fail(e);
        });
        resStream.on('status', function (status) {
            expect(status.code).toEqual(grpc.status.OK);
        });
    });
});
//# sourceMappingURL=v1.test.js.map