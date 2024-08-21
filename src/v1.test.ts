import * as grpc from "@grpc/grpc-js";
import { generateTestToken } from "./__utils__/helpers";
import { Struct } from "./authzedapi/google/protobuf/struct";
import { PreconnectServices, deadlineInterceptor } from "./util";
import {
  BulkExportRelationshipsRequest,
  type BulkExportRelationshipsResponse,
  BulkImportRelationshipsRequest,
  CheckPermissionRequest,
  type CheckPermissionResponse,
  CheckPermissionResponse_Permissionship,
  ClientSecurity,
  Consistency,
  ContextualizedCaveat,
  LookupResourcesRequest,
  type LookupResourcesResponse,
  LookupSubjectsRequest,
  type LookupSubjectsResponse,
  NewClient,
  ObjectReference,
  Relationship,
  RelationshipUpdate,
  RelationshipUpdate_Operation,
  SubjectReference,
  WriteRelationshipsRequest,
  type WriteRelationshipsResponse,
  WriteSchemaRequest,
} from "./v1";

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
      generateTestToken("v1-test-unknown"),
      "localhost:50051",
      ClientSecurity.INSECURE_LOCALHOST_ALLOWED,
    );
    client.checkPermission(checkPermissionRequest, (err, response) => {
      expect(response).toBe(undefined);
      expect(err?.code).toBe(grpc.status.FAILED_PRECONDITION);
      client.close();
      done();
    });
  });
});

describe("a check with an known namespace", () => {
  it("should succeed", (done) => {
    // Write some schema.
    const client = NewClient(
      generateTestToken("v1-namespace"),
      "localhost:50051",
      ClientSecurity.INSECURE_LOCALHOST_ALLOWED,
      PreconnectServices.PERMISSIONS_SERVICE |
        PreconnectServices.SCHEMA_SERVICE,
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
      client.writeSchema(request, (err, response) => {
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

          client.writeRelationships(writeRequest, (err, response) => {
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

          client.checkPermission(checkPermissionRequest, (err, response) => {
            expect(err).toBe(null);
            resolve(response);
          });
        });
      })
      .then((response) => {
        const checkResponse = response as CheckPermissionResponse;
        expect(checkResponse?.permissionship).toBe(
          CheckPermissionResponse_Permissionship.HAS_PERMISSION,
        );

        client.close();
        done();
      });
  });

  describe("with caveated relations", () => {
    it("should succeed", (done) => {
      // Write some schema.
      const client = NewClient(
        generateTestToken("v1-namespace-caveats"),
        "localhost:50051",
        ClientSecurity.INSECURE_LOCALHOST_ALLOWED,
      );

      const request = WriteSchemaRequest.create({
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

      new Promise((resolve) => {
        client.writeSchema(request, (err, response) => {
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
              objectId: "specialuser",
            });

            const writeRequest = WriteRelationshipsRequest.create({
              updates: [
                RelationshipUpdate.create({
                  relationship: Relationship.create({
                    resource: resource,
                    relation: "caveated_viewer",
                    subject: SubjectReference.create({
                      object: testUser,
                    }),
                    optionalCaveat: ContextualizedCaveat.create({
                      caveatName: "has_special_attribute",
                    }),
                  }),
                  operation: RelationshipUpdate_Operation.CREATE,
                }),
              ],
            });

            client.writeRelationships(writeRequest, (err, response) => {
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
            // Call check when user has special attribute.
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
              context: Struct.fromJson({ special: true }),
            });

            client.checkPermission(checkPermissionRequest, (err, response) => {
              expect(err).toBe(null);
              resolve(response);
            });
          });
        })
        .then((response) => {
          const checkResponse = response as CheckPermissionResponse;
          expect(checkResponse?.permissionship).toBe(
            CheckPermissionResponse_Permissionship.HAS_PERMISSION,
          );

          client.close();
          done();
        });
    });
  });
});

describe("Lookup APIs", () => {
  let token: string;

  beforeEach((done) => {
    token = generateTestToken("v1-lookup");
    const client = NewClient(
      token,
      "localhost:50051",
      ClientSecurity.INSECURE_LOCALHOST_ALLOWED,
    );

    const request = WriteSchemaRequest.create({
      schema: `definition test/user {}

      definition test/document {
        relation viewer: test/user
        permission view = viewer
      }
      `,
    });

    const resource = ObjectReference.create({
      objectType: "test/document",
      objectId: "somedocument",
    });

    const writeRequest = WriteRelationshipsRequest.create({
      updates: [
        RelationshipUpdate.create({
          relationship: Relationship.create({
            resource: resource,
            relation: "viewer",
            subject: SubjectReference.create({
              object: ObjectReference.create({
                objectType: "test/user",
                objectId: "someuser",
              }),
            }),
          }),
          operation: RelationshipUpdate_Operation.CREATE,
        }),
        RelationshipUpdate.create({
          relationship: Relationship.create({
            resource: resource,
            relation: "viewer",
            subject: SubjectReference.create({
              object: ObjectReference.create({
                objectType: "test/user",
                objectId: "someuser2",
              }),
            }),
          }),
          operation: RelationshipUpdate_Operation.CREATE,
        }),
      ],
    });

    client.writeSchema(request, (err) => {
      expect(err).toBe(null);

      client.writeRelationships(writeRequest, (err) => {
        expect(err).toBe(null);
        done();
      });
    });
  });

  it("can lookup subjects", (done) => {
    const client = NewClient(
      token,
      "localhost:50051",
      ClientSecurity.INSECURE_LOCALHOST_ALLOWED,
    );

    const request = LookupSubjectsRequest.create({
      resource: ObjectReference.create({
        objectType: "test/document",
        objectId: "somedocument",
      }),
      permission: "view",
      subjectObjectType: "test/user",
      consistency: Consistency.create({
        requirement: {
          oneofKind: "fullyConsistent",
          fullyConsistent: true,
        },
      }),
    });

    const resStream = client.lookupSubjects(request);

    resStream.on("data", (subject: LookupSubjectsResponse) => {
      expect(["someuser", "someuser2"]).toContain(subject.subjectObjectId);
    });

    resStream.on("end", () => {
      client.close();
      done();
    });

    resStream.on("error", (e) => {
      client.close();
      done.fail(e);
    });

    resStream.on("status", (status) => {
      expect(status.code).toEqual(grpc.status.OK);
    });
  });

  it("can lookup resources", (done) => {
    const client = NewClient(
      token,
      "localhost:50051",
      ClientSecurity.INSECURE_LOCALHOST_ALLOWED,
    );

    const request = LookupResourcesRequest.create({
      subject: SubjectReference.create({
        object: ObjectReference.create({
          objectType: "test/user",
          objectId: "someuser",
        }),
      }),
      permission: "view",
      resourceObjectType: "test/document",
      consistency: Consistency.create({
        requirement: {
          oneofKind: "fullyConsistent",
          fullyConsistent: true,
        },
      }),
    });

    const resStream = client.lookupResources(request);

    resStream.on("data", (response: LookupResourcesResponse) => {
      expect(response.resourceObjectId).toEqual("somedocument");
    });

    resStream.on("end", () => {
      client.close();
      done();
    });

    resStream.on("error", (e) => {
      client.close();
      done.fail(e);
    });

    resStream.on("status", (status) => {
      expect(status.code).toEqual(grpc.status.OK);
    });
  });
});

describe("a check with a negative timeout", () => {
  it("should fail immediately", (done) => {
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
      generateTestToken("v1-test-unknown"),
      "localhost:50051",
      ClientSecurity.INSECURE_LOCALHOST_ALLOWED,
      PreconnectServices.NONE,
      {
        interceptors: [deadlineInterceptor(-100)],
      },
    );
    client.checkPermission(checkPermissionRequest, (err, response) => {
      expect(response).toBe(undefined);
      expect(err?.code).toBe(grpc.status.DEADLINE_EXCEEDED);
      client.close();
      done();
    });
  });
});

describe("Experimental Service", () => {
  let token: string;

  beforeEach((done) => {
    token = generateTestToken("v1-experimental-service");
    const client = NewClient(
      token,
      "localhost:50051",
      ClientSecurity.INSECURE_LOCALHOST_ALLOWED,
    );

    const request = WriteSchemaRequest.create({
      schema: `definition test/user {}

      definition test/document {
        relation viewer: test/user
        permission view = viewer
      }
      `,
    });

    client.writeSchema(request, (err) => {
      expect(err).toBe(null);
      client.close();
      done();
    });
  });

  it("can bulk import relationships", (done) => {
    const client = NewClient(
      token,
      "localhost:50051",
      ClientSecurity.INSECURE_LOCALHOST_ALLOWED,
    );

    const writeStream = client.bulkImportRelationships((err, value) => {
      if (err) {
        done.fail(err);
      }

      expect(value?.numLoaded).toEqual("2");
      client.close();
      done();
    });

    writeStream.on("error", (e) => {
      done.fail(e);
    });

    const resource = ObjectReference.create({
      objectType: "test/document",
      objectId: "somedocument",
    });

    writeStream.write(
      BulkImportRelationshipsRequest.create({
        relationships: [
          Relationship.create({
            resource: resource,
            relation: "viewer",
            subject: SubjectReference.create({
              object: ObjectReference.create({
                objectType: "test/user",
                objectId: "someuser",
              }),
            }),
          }),
          Relationship.create({
            resource: resource,
            relation: "viewer",
            subject: SubjectReference.create({
              object: ObjectReference.create({
                objectType: "test/user",
                objectId: "someuser2",
              }),
            }),
          }),
        ],
      }),
    );

    writeStream.end();
  });

  it("can bulk export relationships", (done) => {
    const client = NewClient(
      token,
      "localhost:50051",
      ClientSecurity.INSECURE_LOCALHOST_ALLOWED,
    );

    const resource = ObjectReference.create({
      objectType: "test/document",
      objectId: "somedocument",
    });

    const writeRequest = WriteRelationshipsRequest.create({
      updates: [
        RelationshipUpdate.create({
          relationship: Relationship.create({
            resource: resource,
            relation: "viewer",
            subject: SubjectReference.create({
              object: ObjectReference.create({
                objectType: "test/user",
                objectId: "someuser",
              }),
            }),
          }),
          operation: RelationshipUpdate_Operation.CREATE,
        }),
        RelationshipUpdate.create({
          relationship: Relationship.create({
            resource: resource,
            relation: "viewer",
            subject: SubjectReference.create({
              object: ObjectReference.create({
                objectType: "test/user",
                objectId: "someuser2",
              }),
            }),
          }),
          operation: RelationshipUpdate_Operation.CREATE,
        }),
      ],
    });

    client.writeRelationships(writeRequest, (err) => {
      expect(err).toBe(null);

      const resStream = client.bulkExportRelationships(
        BulkExportRelationshipsRequest.create({
          consistency: Consistency.create({
            requirement: {
              oneofKind: "fullyConsistent",
              fullyConsistent: true,
            },
          }),
        }),
      );

      resStream.on("data", (response: BulkExportRelationshipsResponse) => {
        expect(response.relationships).toEqual([
          {
            relation: "viewer",
            resource: {
              objectType: "test/document",
              objectId: "somedocument",
            },
            subject: {
              optionalRelation: "",
              object: {
                objectType: "test/user",
                objectId: "someuser",
              },
            },
          },
          {
            relation: "viewer",
            resource: {
              objectType: "test/document",
              objectId: "somedocument",
            },
            subject: {
              optionalRelation: "",
              object: {
                objectType: "test/user",
                objectId: "someuser2",
              },
            },
          },
        ]);
      });

      resStream.on("end", () => {
        client.close();
        done();
      });

      resStream.on("error", (e) => {
        client.close();
        done.fail(e);
      });

      resStream.on("status", (status) => {
        expect(status.code).toEqual(grpc.status.OK);
      });
    });
  });
});
