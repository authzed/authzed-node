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
        const { promises: client } = v1_1.NewClient('v1-failed-sometoken', 'localhost:50051', v1_1.ClientSecurity.INSECURE_LOCALHOST_ALLOWED);
        try {
            await client.checkPermission(checkPermissionRequest);
            throw new Error('Error should be thrown');
        }
        catch (err) {
            expect((_a = err) === null || _a === void 0 ? void 0 : _a.code).toBe(grpc.status.FAILED_PRECONDITION);
        }
    });
});
describe('a check with an known namespace', () => {
    it('should succeed', async () => {
        // Write some schema.
        const { promises: client } = v1_1.NewClient(`v1-namespace-${Math.floor(Math.random() * 1000)}`, 'localhost:50051', v1_1.ClientSecurity.INSECURE_LOCALHOST_ALLOWED);
        const request = v1_1.WriteSchemaRequest.create({
            schema: `definition test/user {}

      definition test/document {
        relation viewer: test/user
        permission view = viewer
      }
      `,
        });
        const schemaResponse = await client.writeSchema(request);
        expect(schemaResponse).toBeTruthy();
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
        const response = await client.writeRelationships(writeRequest);
        expect(response).toBeTruthy();
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
        const checkResponse = await client.checkPermission(checkPermissionRequest);
        expect(checkResponse === null || checkResponse === void 0 ? void 0 : checkResponse.permissionship).toBe(v1_1.CheckPermissionResponse_Permissionship.HAS_PERMISSION);
    });
});
describe('Lookup APIs', () => {
    let token;
    beforeEach(async () => {
        token = `v1-lookupsubject-${Math.floor(Math.random() * 1000)}`;
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
        return client.writeRelationships(writeRequest);
    });
    it('can lookup subjects', async () => {
        const { promises: client } = v1_1.NewClient(token, 'localhost:50051', v1_1.ClientSecurity.INSECURE_LOCALHOST_ALLOWED);
        const request = v1_1.LookupSubjectsRequest.create({
            resource: v1_1.ObjectReference.create({
                objectType: 'test/document',
                objectId: 'somedocument',
            }),
            permission: 'view',
            subjectObjectType: 'test/user',
        });
        const result = await client.lookupSubjects(request);
        expect(['someuser', 'someuser2']).toContain(result[0].subjectObjectId);
    });
    it('can lookup resources', async () => {
        const { promises: client } = v1_1.NewClient(token, 'localhost:50051', v1_1.ClientSecurity.INSECURE_LOCALHOST_ALLOWED);
        const request = v1_1.LookupResourcesRequest.create({
            subject: v1_1.SubjectReference.create({
                object: v1_1.ObjectReference.create({
                    objectType: 'test/user',
                    objectId: 'someuser',
                }),
            }),
            permission: 'view',
            resourceObjectType: 'test/document',
        });
        const resStream = await client.lookupResources(request);
        expect(resStream[0].resourceObjectId).toEqual('somedocument');
    });
});
//# sourceMappingURL=v1-promise.test.js.map