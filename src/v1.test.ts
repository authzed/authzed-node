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
  CheckPermissionResponse,
  WriteRelationshipsResponse,
  LookupSubjectsRequest,
  LookupSubjectsResponse,
  LookupResourcesRequest,
  LookupResourcesResponse,
} from './v1';
import * as grpc from '@grpc/grpc-js';
import { generateTestToken } from './__utils__/helpers'

describe('a check with an unknown namespace', () => {
  it('should raise a failed precondition', (done) => {
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

    const client = NewClient(
      generateTestToken('v1-test-unknown'),
      'localhost:50051',
      ClientSecurity.INSECURE_LOCALHOST_ALLOWED
    );
    client.checkPermission(checkPermissionRequest, function (err, response) {
      expect(response).toBe(undefined);
      expect(err?.code).toBe(grpc.status.FAILED_PRECONDITION);
      client.close()
      done();
    });
  });
});

describe('a check with an known namespace', () => {
  it('should succeed', (done) => {
    // Write some schema.
    const client = NewClient(
      generateTestToken('v1-namespace'),
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

          client.writeRelationships(writeRequest, function (err, response) {
            expect(err).toBe(null);
            resolve({ response, resource, testUser });
          });
        });
      })
      .then((vals) => {
        const { response, resource, testUser } = vals as {
          response: WriteRelationshipsResponse;
          resource: ObjectReference;
          testUser: ObjectReference;
        };
        expect(response).toBeTruthy();

        return new Promise((resolve) => {
          // Call check.
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

          client.checkPermission(
            checkPermissionRequest,
            function (err, response) {
              expect(err).toBe(null);
              resolve(response);
            }
          );
        });
      })
      .then((response) => {
        const checkResponse = response as CheckPermissionResponse;
        expect(checkResponse?.permissionship).toBe(
          CheckPermissionResponse_Permissionship.HAS_PERMISSION
        );

        client.close()
        done();
      });
  });
});

describe('Lookup APIs', () => {
  let token: string;
  beforeEach(async () => {
    token = generateTestToken('v1-lookup');
    const client = NewClient(
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

    await new Promise((resolve) => {
      client.writeSchema(request, function (err, response) {
        expect(err).toBe(null);
        resolve(response);
      });
    });

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

    await new Promise((resolve) => {
      client.writeRelationships(writeRequest, function (err, response) {
        expect(err).toBe(null);
        resolve(response);
      });
    });
  });

  it('can lookup subjects', (done) => {
    const client = NewClient(
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

    const resStream = client.lookupSubjects(request);

    resStream.on('data', function (subject: LookupSubjectsResponse) {
      expect(['someuser', 'someuser2']).toContain(subject.subjectObjectId);
    });

    resStream.on('end', function () {
      client.close()
      done();
    });

    resStream.on('error', function (e) {
      client.close()
      done.fail(e);
    });

    resStream.on('status', function (status) {
      expect(status.code).toEqual(grpc.status.OK);
    });
  });

  it('can lookup resources', (done) => {
    const client = NewClient(
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

    const resStream = client.lookupResources(request);

    resStream.on('data', function (response: LookupResourcesResponse) {
      expect(response.resourceObjectId).toEqual('somedocument');
    });

    resStream.on('end', function () {
      client.close()
      done();
    });

    resStream.on('error', function (e) {
      client.close()
      done.fail(e);
    });

    resStream.on('status', function (status) {
      expect(status.code).toEqual(grpc.status.OK);
    });
  });
});
