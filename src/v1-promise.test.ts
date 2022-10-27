import {
  CheckPermissionRequest,
  ClientSecurity,
  NewClient,
  ObjectReference,
  SubjectReference,
  WriteSchemaRequest,
  WriteRelationshipsRequest,
  Relationship,
  RelationshipUpdate,
  Consistency,
  CheckPermissionResponse_Permissionship,
  RelationshipUpdate_Operation,
  LookupSubjectsRequest,
  LookupResourcesRequest,
} from './v1';
import * as grpc from '@grpc/grpc-js';

describe('a check with an unknown namespace', () => {
  it('should raise a failed precondition', async () => {
    const resource = ObjectReference.create({
      objectType: 'test/somenamespace',
      objectId: 'bar',
    });

    const testUser = ObjectReference.create({
      objectType: 'test/user',
      objectId: 'someuser',
    });

    const checkPermissionRequest = CheckPermissionRequest.create({
      resource,
      permission: 'someperm',
      subject: SubjectReference.create({
        object: testUser,
      }),
    });

    const { promises: client } = NewClient(
      'v1-failed-sometoken',
      'localhost:50051',
      ClientSecurity.INSECURE_LOCALHOST_ALLOWED
    );
    try {
      await client.checkPermission(checkPermissionRequest)
      throw new Error('Error should be thrown')
    } catch (err) {
      expect((err as grpc.ServiceError)?.code).toBe(grpc.status.FAILED_PRECONDITION);
    }
  });
});

describe('a check with an known namespace', () => {
  it('should succeed', async () => {
    // Write some schema.
    const { promises: client } = NewClient(
      `v1-namespace-${Math.floor(Math.random() * 1000)}`,
      'localhost:50051',
      ClientSecurity.INSECURE_LOCALHOST_ALLOWED
    );

    const request = WriteSchemaRequest.create({
      schema: `definition test/user {}

      definition test/document {
        relation viewer: test/user
        permission view = viewer
      }
      `,
    });

    const schemaResponse = await client.writeSchema(request)
    expect(schemaResponse).toBeTruthy();

    const resource = ObjectReference.create({
      objectType: 'test/document',
      objectId: 'somedocument',
    });

    const testUser = ObjectReference.create({
      objectType: 'test/user',
      objectId: 'someuser',
    });

    const writeRequest = WriteRelationshipsRequest.create({
      updates: [
        RelationshipUpdate.create({
          relationship: Relationship.create({
            resource: resource,
            relation: 'viewer',
            subject: SubjectReference.create({
              object: testUser,
            }),
          }),
          operation: RelationshipUpdate_Operation.CREATE,
        }),
      ],
    });

    const response = await client.writeRelationships(writeRequest)
    expect(response).toBeTruthy();

    const checkPermissionRequest = CheckPermissionRequest.create({
      resource,
      permission: 'view',
      subject: SubjectReference.create({
        object: testUser,
      }),
      consistency: Consistency.create({
        requirement: {
          oneofKind: 'fullyConsistent',
          fullyConsistent: true,
        },
      }),
    });

    const checkResponse = await client.checkPermission(checkPermissionRequest)
    expect(checkResponse?.permissionship).toBe(
      CheckPermissionResponse_Permissionship.HAS_PERMISSION
    );
  });
});

describe('Lookup APIs', () => {
  let token: string;

  beforeEach(async () => {
    token = `v1-lookupsubject-${Math.floor(Math.random() * 1000)}`;
    const { promises: client } = NewClient(
      token,
      'localhost:50051',
      ClientSecurity.INSECURE_LOCALHOST_ALLOWED
    );

    const request = WriteSchemaRequest.create({
      schema: `definition test/user {}

      definition test/document {
        relation viewer: test/user
        permission view = viewer
      }
      `,
    });

    await client.writeSchema(request)

    const resource = ObjectReference.create({
      objectType: 'test/document',
      objectId: 'somedocument',
    });

    const writeRequest = WriteRelationshipsRequest.create({
      updates: [
        RelationshipUpdate.create({
          relationship: Relationship.create({
            resource: resource,
            relation: 'viewer',
            subject: SubjectReference.create({
              object: ObjectReference.create({
                objectType: 'test/user',
                objectId: 'someuser',
              }),
            }),
          }),
          operation: RelationshipUpdate_Operation.CREATE,
        }),
        RelationshipUpdate.create({
          relationship: Relationship.create({
            resource: resource,
            relation: 'viewer',
            subject: SubjectReference.create({
              object: ObjectReference.create({
                objectType: 'test/user',
                objectId: 'someuser2',
              }),
            }),
          }),
          operation: RelationshipUpdate_Operation.CREATE,
        }),
      ],
    });

    return client.writeRelationships(writeRequest)
  });

  it('can lookup subjects', async () => {
    const { promises: client } = NewClient(
      token,
      'localhost:50051',
      ClientSecurity.INSECURE_LOCALHOST_ALLOWED
    );

    const request = LookupSubjectsRequest.create({
      resource: ObjectReference.create({
        objectType: 'test/document',
        objectId: 'somedocument',
      }),
      permission: 'view',
      subjectObjectType: 'test/user',
      consistency: Consistency.create({
        requirement: {
          oneofKind: 'fullyConsistent',
          fullyConsistent: true,
        },
      }),
    });

    const result = await client.lookupSubjects(request)
    expect(['someuser', 'someuser2']).toContain(result[0].subjectObjectId);
  });

  it('can lookup resources', async () => {
    const { promises: client } = NewClient(
      token,
      'localhost:50051',
      ClientSecurity.INSECURE_LOCALHOST_ALLOWED
    );

    const request = LookupResourcesRequest.create({
      subject: SubjectReference.create({
        object: ObjectReference.create({
          objectType: 'test/user',
          objectId: 'someuser',
        }),
      }),
      permission: 'view',
      resourceObjectType: 'test/document',
      consistency: Consistency.create({
        requirement: {
          oneofKind: 'fullyConsistent',
          fullyConsistent: true,
        },
      }),
    });

    const resStream = await client.lookupResources(request)
    expect(resStream[0].resourceObjectId).toEqual('somedocument');
  });
});
