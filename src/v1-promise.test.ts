import * as grpc from "@grpc/grpc-js";
import { generateTestToken } from "./__utils__/helpers.js";
import { Struct } from "./authzedapi/google/protobuf/struct.js";
import {
  BulkExportRelationshipsRequest,
  BulkImportRelationshipsRequest,
  CheckPermissionRequest,
  CheckPermissionResponse_Permissionship,
  ClientSecurity,
  Consistency,
  ContextualizedCaveat,
  LookupResourcesRequest,
  LookupSubjectsRequest,
  NewClient,
  ObjectReference,
  Relationship,
  RelationshipUpdate,
  RelationshipUpdate_Operation,
  SubjectReference,
  WriteRelationshipsRequest,
  WriteSchemaRequest,
} from "./v1.js";
import { describe, it, expect, beforeEach } from "vitest";

describe("a check with an unknown namespace", () => {
  it("should raise a failed precondition", async () => {
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

    const { promises: client } = NewClient(
      generateTestToken("v1-promise-test-unknown"),
      "localhost:50051",
      ClientSecurity.INSECURE_LOCALHOST_ALLOWED,
    );
    try {
      await client.checkPermission(checkPermissionRequest);
      throw new Error("Error should be thrown");
    } catch (err) {
      expect((err as grpc.ServiceError)?.code).toBe(
        grpc.status.FAILED_PRECONDITION,
      );
      client.close();
    }
  });
});

describe("a check with an known namespace", () => {
  const schemaRequest = WriteSchemaRequest.create({
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

  it("should succeed", async () => {
    const { promises: client } = NewClient(
      generateTestToken("v1-promise-namespace"),
      "localhost:50051",
      ClientSecurity.INSECURE_LOCALHOST_ALLOWED,
    );

    const schemaResponse = await client.writeSchema(schemaRequest);
    expect(schemaResponse).toBeTruthy();

    const response = await client.writeRelationships(writeRequest);
    expect(response).toBeTruthy();

    const checkResponse = await client.checkPermission(checkPermissionRequest);
    expect(checkResponse?.permissionship).toBe(
      CheckPermissionResponse_Permissionship.HAS_PERMISSION,
    );

    client.close();
  });

  it("should succeed with full signatures", async () => {
    const { promises: client } = NewClient(
      generateTestToken("v1-promise-namespace"),
      "localhost:50051",
      ClientSecurity.INSECURE_LOCALHOST_ALLOWED,
    );

    const schemaResponse = await client.writeSchema(
      schemaRequest,
      new grpc.Metadata(),
      {} as grpc.CallOptions,
    );
    expect(schemaResponse).toBeTruthy();

    const response = await client.writeRelationships(
      writeRequest,
      new grpc.Metadata(),
      {} as grpc.CallOptions,
    );
    expect(response).toBeTruthy();

    const checkResponse = await client.checkPermission(
      checkPermissionRequest,
      new grpc.Metadata(),
      {} as grpc.CallOptions,
    );
    expect(checkResponse?.permissionship).toBe(
      CheckPermissionResponse_Permissionship.HAS_PERMISSION,
    );

    client.close();
  });

  describe("with caveated relations", () => {
    it("should succeed", async () => {
      // Write some schema.
      const { promises: client } = NewClient(
        generateTestToken("v1-promise-caveats"),
        "localhost:50051",
        ClientSecurity.INSECURE_LOCALHOST_ALLOWED,
      );

      const schemaRequest = WriteSchemaRequest.create({
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

      const schemaResponse = await client.writeSchema(
        schemaRequest,
        new grpc.Metadata(),
        {} as grpc.CallOptions,
      );
      expect(schemaResponse).toBeTruthy();

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

      const response = await client.writeRelationships(
        writeRequest,
        new grpc.Metadata(),
        {} as grpc.CallOptions,
      );
      expect(response).toBeTruthy();

      // Call check when user has special attribute.
      let checkPermissionRequest = CheckPermissionRequest.create({
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

      let checkResponse = await client.checkPermission(
        checkPermissionRequest,
        new grpc.Metadata(),
        {} as grpc.CallOptions,
      );
      expect(checkResponse?.permissionship).toBe(
        CheckPermissionResponse_Permissionship.HAS_PERMISSION,
      );

      // Call check when user does not have the special attribute.
      checkPermissionRequest = CheckPermissionRequest.create({
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
        context: Struct.fromJson({ special: false }),
      });

      checkResponse = await client.checkPermission(
        checkPermissionRequest,
        new grpc.Metadata(),
        {} as grpc.CallOptions,
      );
      expect(checkResponse?.permissionship).toBe(
        CheckPermissionResponse_Permissionship.NO_PERMISSION,
      );

      // Call check when user's special attribute is unspecified.
      checkPermissionRequest = CheckPermissionRequest.create({
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
        context: {},
      });

      checkResponse = await client.checkPermission(
        checkPermissionRequest,
        new grpc.Metadata(),
        {} as grpc.CallOptions,
      );
      expect(checkResponse?.permissionship).toBe(
        CheckPermissionResponse_Permissionship.CONDITIONAL_PERMISSION,
      );

      client.close();
    });
  });
});

describe("Lookup APIs", () => {
  let token: string;

  const lookupSubjectRequest = LookupSubjectsRequest.create({
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

  const lookupResourceRequest = LookupResourcesRequest.create({
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

  beforeEach(async () => {
    token = generateTestToken("v1-promise-lookup");
    const { promises: client } = NewClient(
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

    await client.writeSchema(request);

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

    await client.writeRelationships(writeRequest);
    client.close();
  });

  it("can lookup subjects", async () => {
    const { promises: client } = NewClient(
      token,
      "localhost:50051",
      ClientSecurity.INSECURE_LOCALHOST_ALLOWED,
    );

    const result = await client.lookupSubjects(lookupSubjectRequest);
    expect(["someuser", "someuser2"]).toContain(
      result[0].subject?.subjectObjectId,
    );
    client.close();
  });

  it("can lookup resources", async () => {
    const { promises: client } = NewClient(
      token,
      "localhost:50051",
      ClientSecurity.INSECURE_LOCALHOST_ALLOWED,
    );

    const resStream = await client.lookupResources(lookupResourceRequest);
    expect(resStream[0].resourceObjectId).toEqual("somedocument");

    client.close();
  });

  it("can lookup using full signatures", async () => {
    const { promises: client } = NewClient(
      token,
      "localhost:50051",
      ClientSecurity.INSECURE_LOCALHOST_ALLOWED,
    );

    const result = await client.lookupSubjects(
      lookupSubjectRequest,
      new grpc.Metadata(),
      {} as grpc.CallOptions,
    );
    expect(["someuser", "someuser2"]).toContain(
      result[0].subject?.subjectObjectId,
    );

    const resStream = await client.lookupResources(
      lookupResourceRequest,
      new grpc.Metadata(),
      {} as grpc.CallOptions,
    );
    expect(resStream[0].resourceObjectId).toEqual("somedocument");

    client.close();
  });
});

describe("Experimental Service", () => {
  let token: string;

  beforeEach(async () => {
    token = generateTestToken("v1-experimental-service");
    const { promises: client } = NewClient(
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

    await client.writeSchema(request);
    client.close();
  });

  it("can bulk import relationships", () =>
    new Promise<void>((done, fail) => {
      const { promises: client } = NewClient(
        token,
        "localhost:50051",
        ClientSecurity.INSECURE_LOCALHOST_ALLOWED,
      );

      const writeStream = client.bulkImportRelationships((err, value) => {
        if (err) {
          fail(err);
        }

        expect(value?.numLoaded).toEqual("2");
        client.close();
        done();
      });

      writeStream.on("error", (e) => {
        fail(e);
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
    }));

  it("can bulk export relationships", async () => {
    const { promises: client } = NewClient(
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

    await client.writeRelationships(writeRequest);

    const resStream = await client.bulkExportRelationships(
      BulkExportRelationshipsRequest.create({
        consistency: Consistency.create({
          requirement: {
            oneofKind: "fullyConsistent",
            fullyConsistent: true,
          },
        }),
      }),
    );

    expect(resStream[0].relationships).toEqual([
      {
        relation: "viewer",
        resource: {
          objectType: "test/document",
          objectId: "somedocument",
        },
        subject: {
          optionalRelation: "",
          object: { objectType: "test/user", objectId: "someuser" },
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
          object: { objectType: "test/user", objectId: "someuser2" },
        },
      },
    ]);

    client.close();
  });
});
