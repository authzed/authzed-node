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
const struct_1 = require("./authzedapi/google/protobuf/struct");
describe('a check with an unknown namespace', () => {
    it('should raise a failed precondition', async () => {
        var _a;
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
        const { promises: client } = v1_1.NewClient(helpers_1.generateTestToken('v1-promise-test-unknown'), 'localhost:50051', v1_1.ClientSecurity.INSECURE_LOCALHOST_ALLOWED);
        try {
            await client.checkPermission(checkPermissionRequest);
            throw new Error('Error should be thrown');
        }
        catch (err) {
            expect((_a = err) === null || _a === void 0 ? void 0 : _a.code).toBe(grpc.status.FAILED_PRECONDITION);
            client.close();
        }
    });
});
describe('a check with an known namespace', () => {
    const schemaRequest = v1_1.WriteSchemaRequest.create({
        schema: `definition test/user {}

    definition test/document {
      relation viewer: test/user
      permission view = viewer
    }
    `,
    });
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
    it('should succeed', async () => {
        const { promises: client } = v1_1.NewClient(helpers_1.generateTestToken('v1-promise-namespace'), 'localhost:50051', v1_1.ClientSecurity.INSECURE_LOCALHOST_ALLOWED);
        const schemaResponse = await client.writeSchema(schemaRequest);
        expect(schemaResponse).toBeTruthy();
        const response = await client.writeRelationships(writeRequest);
        expect(response).toBeTruthy();
        const checkResponse = await client.checkPermission(checkPermissionRequest);
        expect(checkResponse === null || checkResponse === void 0 ? void 0 : checkResponse.permissionship).toBe(v1_1.CheckPermissionResponse_Permissionship.HAS_PERMISSION);
        client.close();
    });
    it('should succeed with full signatures', async () => {
        const { promises: client } = v1_1.NewClient(helpers_1.generateTestToken('v1-promise-namespace'), 'localhost:50051', v1_1.ClientSecurity.INSECURE_LOCALHOST_ALLOWED);
        const schemaResponse = await client.writeSchema(schemaRequest, new grpc.Metadata(), {});
        expect(schemaResponse).toBeTruthy();
        const response = await client.writeRelationships(writeRequest, new grpc.Metadata(), {});
        expect(response).toBeTruthy();
        const checkResponse = await client.checkPermission(checkPermissionRequest, new grpc.Metadata(), {});
        expect(checkResponse === null || checkResponse === void 0 ? void 0 : checkResponse.permissionship).toBe(v1_1.CheckPermissionResponse_Permissionship.HAS_PERMISSION);
        client.close();
    });
    describe('with caveated relations', () => {
        it('should succeed', async () => {
            // Write some schema.
            const { promises: client } = v1_1.NewClient(helpers_1.generateTestToken('v1-promise-caveats'), 'localhost:50051', v1_1.ClientSecurity.INSECURE_LOCALHOST_ALLOWED);
            const schemaRequest = v1_1.WriteSchemaRequest.create({
                schema: `definition test/user {}

          caveat has_special_attribute(special bool) {
            special == true
          }

          definition test/document {
            relation viewer: test/user
            relation caveated_viewer: test/user with has_special_attribute
            permission view = viewer + caveated_viewer
          }
      `,
            });
            const schemaResponse = await client.writeSchema(schemaRequest, new grpc.Metadata(), {});
            expect(schemaResponse).toBeTruthy();
            // Write a relationship.
            const resource = v1_1.ObjectReference.create({
                objectType: 'test/document',
                objectId: 'somedocument',
            });
            const testUser = v1_1.ObjectReference.create({
                objectType: 'test/user',
                objectId: 'specialuser',
            });
            const writeRequest = v1_1.WriteRelationshipsRequest.create({
                updates: [
                    v1_1.RelationshipUpdate.create({
                        relationship: v1_1.Relationship.create({
                            resource: resource,
                            relation: 'caveated_viewer',
                            subject: v1_1.SubjectReference.create({
                                object: testUser,
                            }),
                            optionalCaveat: v1_1.ContextualizedCaveat.create({
                                caveatName: 'has_special_attribute',
                            }),
                        }),
                        operation: v1_1.RelationshipUpdate_Operation.CREATE,
                    }),
                ],
            });
            const response = await client.writeRelationships(writeRequest, new grpc.Metadata(), {});
            expect(response).toBeTruthy();
            // Call check when user has special attribute.
            let checkPermissionRequest = v1_1.CheckPermissionRequest.create({
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
                context: struct_1.Struct.fromJson({ special: true }),
            });
            let checkResponse = await client.checkPermission(checkPermissionRequest, new grpc.Metadata(), {});
            expect(checkResponse === null || checkResponse === void 0 ? void 0 : checkResponse.permissionship).toBe(v1_1.CheckPermissionResponse_Permissionship.HAS_PERMISSION);
            // Call check when user does not have the special attribute.
            checkPermissionRequest = v1_1.CheckPermissionRequest.create({
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
                context: struct_1.Struct.fromJson({ special: false }),
            });
            checkResponse = await client.checkPermission(checkPermissionRequest, new grpc.Metadata(), {});
            expect(checkResponse === null || checkResponse === void 0 ? void 0 : checkResponse.permissionship).toBe(v1_1.CheckPermissionResponse_Permissionship.NO_PERMISSION);
            // Call check when user's special attribute is unspecified.
            checkPermissionRequest = v1_1.CheckPermissionRequest.create({
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
                context: {},
            });
            checkResponse = await client.checkPermission(checkPermissionRequest, new grpc.Metadata(), {});
            expect(checkResponse === null || checkResponse === void 0 ? void 0 : checkResponse.permissionship).toBe(v1_1.CheckPermissionResponse_Permissionship.CONDITIONAL_PERMISSION);
            client.close();
        });
    });
});
describe('Lookup APIs', () => {
    let token;
    const lookupSubjectRequest = v1_1.LookupSubjectsRequest.create({
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
    const lookupResourceRequest = v1_1.LookupResourcesRequest.create({
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
    beforeEach(async () => {
        token = helpers_1.generateTestToken('v1-promise-lookup');
        const { promises: client } = v1_1.NewClient(token, 'localhost:50051', v1_1.ClientSecurity.INSECURE_LOCALHOST_ALLOWED);
        const request = v1_1.WriteSchemaRequest.create({
            schema: `definition test/user {}

      definition test/document {
        relation viewer: test/user
        permission view = viewer
      }
      `,
        });
        await client.writeSchema(request);
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
        await client.writeRelationships(writeRequest);
        client.close();
    });
    it('can lookup subjects', async () => {
        const { promises: client } = v1_1.NewClient(token, 'localhost:50051', v1_1.ClientSecurity.INSECURE_LOCALHOST_ALLOWED);
        const result = await client.lookupSubjects(lookupSubjectRequest);
        expect(['someuser', 'someuser2']).toContain(result[0].subjectObjectId);
        client.close();
    });
    it('can lookup resources', async () => {
        const { promises: client } = v1_1.NewClient(token, 'localhost:50051', v1_1.ClientSecurity.INSECURE_LOCALHOST_ALLOWED);
        const resStream = await client.lookupResources(lookupResourceRequest);
        expect(resStream[0].resourceObjectId).toEqual('somedocument');
        client.close();
    });
    it('can lookup using full signatures', async () => {
        const { promises: client } = v1_1.NewClient(token, 'localhost:50051', v1_1.ClientSecurity.INSECURE_LOCALHOST_ALLOWED);
        const result = await client.lookupSubjects(lookupSubjectRequest, new grpc.Metadata(), {});
        expect(['someuser', 'someuser2']).toContain(result[0].subjectObjectId);
        const resStream = await client.lookupResources(lookupResourceRequest, new grpc.Metadata(), {});
        expect(resStream[0].resourceObjectId).toEqual('somedocument');
        client.close();
    });
});
//# sourceMappingURL=v1-promise.test.js.map