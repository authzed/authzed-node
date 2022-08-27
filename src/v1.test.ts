import {
  CheckPermissionRequest,
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
} from "./v1";
import * as grpc from "@grpc/grpc-js";
import { ClientSecurity } from "./util";

describe("a check with an unknown namespace", () => {
  it("should raise a failed precondition", (done) => {
    const resource = ObjectReference.create({
      objectType: "test/somenamespace",
      objectId: "bar",
    });

    const testUser = ObjectReference.create({
      objectType: "test/user",
      objectId: "someuser",
    });

    const checkPermissionRequest = CheckPermissionRequest.create({
      resource,
      permission: "someperm",
      subject: SubjectReference.create({
        object: testUser,
      }),
    });

    const client = NewClient(
      "v1-failed-sometoken",
      "localhost:50051",
      ClientSecurity.INSECURE_LOCALHOST_ALLOWED
    );
    client.checkPermission(checkPermissionRequest, function (err, response) {
      expect(response).toBe(undefined);
      expect(err?.code).toBe(grpc.status.FAILED_PRECONDITION);
      done();
    });
  });
});

describe("a check with an known namespace", () => {
  it("should succeed", (done) => {
    // Write some schema.
    const client = NewClient(
      "v1-sometoken",
      "localhost:50051",
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
            objectType: "test/document",
            objectId: "somedocument",
          });

          const testUser = ObjectReference.create({
            objectType: "test/user",
            objectId: "someuser",
          });

          const writeRequest = WriteRelationshipsRequest.create({
            updates: [
              RelationshipUpdate.create({
                relationship: Relationship.create({
                  resource: resource,
                  relation: "viewer",
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
            permission: "view",
            subject: SubjectReference.create({
              object: testUser,
            }),
            consistency: Consistency.create({
              requirement: {
                oneofKind: "fullyConsistent",
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

        done();
      });
  });
});
