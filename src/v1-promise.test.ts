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
import { generateTestToken } from './__utils__/helpers'

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
      generateTestToken('v1-promise-test-unknown'),
      'localhost:50051',
      ClientSecurity.INSECURE_LOCALHOST_ALLOWED
    );
    try {
      await client.checkPermission(checkPermissionRequest)
      throw new Error('Error should be thrown')
    } catch (err) {
      expect((err as grpc.ServiceError)?.code).toBe(grpc.status.FAILED_PRECONDITION);
      client.close()
    }
  });
});

describe('a check with an known namespace', () => {
  const schemaRequest = WriteSchemaRequest.create({
    schema: `definition test/user {}

    definition test/document {
      relation viewer: test/user
      permission view = viewer
    }
    `,
  });

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

  it('should succeed', async () => {
    const { promises: client } = NewClient(
      generateTestToken('v1-promise-namespace'),
      'localhost:50051',
      ClientSecurity.INSECURE_LOCALHOST_ALLOWED
    );

    const schemaResponse = await client.writeSchema(schemaRequest)
    expect(schemaResponse).toBeTruthy();

    const response = await client.writeRelationships(writeRequest)
    expect(response).toBeTruthy();

    const checkResponse = await client.checkPermission(checkPermissionRequest)
    expect(checkResponse?.permissionship).toBe(
      CheckPermissionResponse_Permissionship.HAS_PERMISSION
    );

    client.close()
  });

  it('should succeed with full signatures', async () => {
    const { promises: client } = NewClient(
      generateTestToken('v1-promise-namespace'),
      'localhost:50051',
      ClientSecurity.INSECURE_LOCALHOST_ALLOWED
    );

    const schemaResponse = await client.writeSchema(schemaRequest, new grpc.Metadata(), {} as grpc.CallOptions)
    expect(schemaResponse).toBeTruthy();

    const response = await client.writeRelationships(writeRequest, new grpc.Metadata(), {} as grpc.CallOptions)
    expect(response).toBeTruthy();

    const checkResponse = await client.checkPermission(checkPermissionRequest, new grpc.Metadata(), {} as grpc.CallOptions)
    expect(checkResponse?.permissionship).toBe(
      CheckPermissionResponse_Permissionship.HAS_PERMISSION
    );

    client.close()
  })
});

describe('Lookup APIs', () => {
  let token: string;

  const lookupSubjectRequest = LookupSubjectsRequest.create({
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

  const lookupResourceRequest = LookupResourcesRequest.create({
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

  beforeEach(async () => {
    token = generateTestToken('v1-promise-lookup');
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

    await client.writeRelationships(writeRequest)
    client.close()
  });

  it('can lookup subjects', async () => {
    const { promises: client } = NewClient(
      token,
      'localhost:50051',
      ClientSecurity.INSECURE_LOCALHOST_ALLOWED
    );

    const result = await client.lookupSubjects(lookupSubjectRequest)
    expect(['someuser', 'someuser2']).toContain(result[0].subjectObjectId);
    client.close()
  });

  it('can lookup resources', async () => {
    const { promises: client } = NewClient(
      token,
      'localhost:50051',
      ClientSecurity.INSECURE_LOCALHOST_ALLOWED
    );

    const resStream = await client.lookupResources(lookupResourceRequest)
    expect(resStream[0].resourceObjectId).toEqual('somedocument');

    client.close()
  });

  it('can lookup using full signatures', async () => {
    const { promises: client } = NewClient(
      token,
      'localhost:50051',
      ClientSecurity.INSECURE_LOCALHOST_ALLOWED
    );

    const result = await client.lookupSubjects(lookupSubjectRequest, new grpc.Metadata(), {} as grpc.CallOptions)
    expect(['someuser', 'someuser2']).toContain(result[0].subjectObjectId);

    const resStream = await client.lookupResources(lookupResourceRequest, new grpc.Metadata(), {} as grpc.CallOptions)
    expect(resStream[0].resourceObjectId).toEqual('somedocument');

    client.close()
  })
});