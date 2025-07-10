import { describe, it, expect } from "vitest";
import { PreconnectServices } from "./util.js";
import {
  NewClient,
  WriteSchemaRequest,
  CheckPermissionRequest,
  CheckPermissionResponse_Permissionship,
  ClientSecurity,
  Consistency,
  ObjectReference,
  SubjectReference,
  WriteRelationshipsRequest,
  RelationshipUpdate,
  RelationshipUpdate_Operation,
  Relationship,
  ContextualizedCaveat,
  LookupResourcesRequest,
  LookupSubjectsRequest,
  BulkExportRelationshipsRequest,
  BulkImportRelationshipsRequest,
  createStructFromObject,
  WriteSchemaResponse,
  ReadSchemaRequest,
  ReadSchemaResponse,
} from "./v1.js";
import { generateTestToken } from "./__utils__/helpers.js";

function createTestClient(tokenName: string) {
  return NewClient(
    generateTestToken(tokenName),
    "localhost:50051",
    ClientSecurity.INSECURE_LOCALHOST_ALLOWED,
    PreconnectServices.PERMISSIONS_SERVICE |
      PreconnectServices.SCHEMA_SERVICE,
  );
}

describe("V1Test", () => {
  it("TestBasicSchema", async () => {
    const client = createTestClient("v1test-basic-schema");
    const schema = `
      definition document {
          relation reader: user
      }
      definition user {}
    `;
    const response: WriteSchemaResponse = await writeTestSchema(client,  schema);
    expect(response).toBeDefined();
    expect(response?.writtenAt).toBeDefined();

    const readResponse: ReadSchemaResponse = await readTestSchema(client);
    expect(readResponse?.schemaText).toContain("definition document");
    expect(readResponse?.schemaText).toContain("definition user");
    client.close();
  });

  it("TestSchemaWithCaveats", async () => {
    const client = createTestClient("v1test-schema-caveats");
    await writeTestSchema(client);
    client.close();
  });

  it("TestCheck", async () => {
    const client = createTestClient("v1test-check");
    await writeTestSchema(client);
    const { emilia, beatrice, postOne } = await writeTestTuples(client);
    // emilia can view postOne
    await new Promise((resolve) => {
      client.checkPermission(
        CheckPermissionRequest.create({
          resource: postOne,
          permission: "view",
          subject: emilia,
          consistency: Consistency.create({
            requirement: { oneofKind: "fullyConsistent", fullyConsistent: true },
          }),
        }),
        (err, resp) => {
          expect(resp?.permissionship).toBe(CheckPermissionResponse_Permissionship.HAS_PERMISSION);
          resolve(null);
        }
      );
    });
    // emilia can write postOne
    await new Promise((resolve) => {
      client.checkPermission(
        CheckPermissionRequest.create({
          resource: postOne,
          permission: "write",
          subject: emilia,
          consistency: Consistency.create({
            requirement: { oneofKind: "fullyConsistent", fullyConsistent: true },
          }),
        }),
        (err, resp) => {
          expect(resp?.permissionship).toBe(CheckPermissionResponse_Permissionship.HAS_PERMISSION);
          resolve(null);
        }
      );
    });
    // beatrice can view postOne
    await new Promise((resolve) => {
      client.checkPermission(
        CheckPermissionRequest.create({
          resource: postOne,
          permission: "view",
          subject: beatrice,
          consistency: Consistency.create({
            requirement: { oneofKind: "fullyConsistent", fullyConsistent: true },
          }),
        }),
        (err, resp) => {
          expect(resp?.permissionship).toBe(CheckPermissionResponse_Permissionship.HAS_PERMISSION);
          resolve(null);
        }
      );
    });
    // beatrice cannot write postOne
    await new Promise((resolve) => {
      client.checkPermission(
        CheckPermissionRequest.create({
          resource: postOne,
          permission: "write",
          subject: beatrice,
          consistency: Consistency.create({
            requirement: { oneofKind: "fullyConsistent", fullyConsistent: true },
          }),
        }),
        (err, resp) => {
          expect(resp?.permissionship).toBe(CheckPermissionResponse_Permissionship.NO_PERMISSION);
          resolve(null);
        }
      );
    });
    client.close();
  });

  it("TestCaveatedCheck", async () => {
    const client = createTestClient("v1test-caveated-check");
    await writeTestSchema(client);
    const { beatrice, postOne } = (await writeTestTuples(client)) as {
      emilia: SubjectReference;
      beatrice: SubjectReference;
      postOne: ObjectReference;
      postTwo: ObjectReference;
    };
    // Likes Harry Potter
    await new Promise((resolve) => {
      client.checkPermission(
        CheckPermissionRequest.create({
          resource: postOne,
          permission: "view_as_fan",
          subject: beatrice,
          consistency: Consistency.create({
            requirement: { oneofKind: "fullyConsistent", fullyConsistent: true },
          }),
          context: createStructFromObject({ likes: true }),
        }),
        (err, resp) => {
          expect(resp?.permissionship).toBe(CheckPermissionResponse_Permissionship.HAS_PERMISSION);
          resolve(null);
        }
      );
    });
    // No longer likes Harry Potter
    await new Promise((resolve) => {
      client.checkPermission(
        CheckPermissionRequest.create({
          resource: postOne,
          permission: "view_as_fan",
          subject: beatrice,
          consistency: Consistency.create({
            requirement: { oneofKind: "fullyConsistent", fullyConsistent: true },
          }),
          context: createStructFromObject({ likes: false }),
        }),
        (err, resp) => {
          expect(resp?.permissionship).toBe(CheckPermissionResponse_Permissionship.NO_PERMISSION);
          resolve(null);
        }
      );
    });
    // Fandom is in question (no context)
    await new Promise((resolve) => {
      client.checkPermission(
        CheckPermissionRequest.create({
          resource: postOne,
          permission: "view_as_fan",
          subject: beatrice,
          consistency: Consistency.create({
            requirement: { oneofKind: "fullyConsistent", fullyConsistent: true },
          }),
        }),
        (err, resp) => {
          expect(resp?.permissionship).toBe(CheckPermissionResponse_Permissionship.CONDITIONAL_PERMISSION);
          expect(resp?.partialCaveatInfo?.missingRequiredContext).toContain("likes");
          resolve(null);
        }
      );
    });
    client.close();
  });

  it("TestLookupResources", async () => {
    const client = createTestClient("v1test-lookup-resources");
    await writeTestSchema(client);
    const { emilia, postOne, postTwo } = (await writeTestTuples(client)) as {
      emilia: SubjectReference;
      beatrice: SubjectReference;
      postOne: ObjectReference;
      postTwo: ObjectReference;
    };
    await new Promise((resolve) => {
      const stream = client.lookupResources(
        LookupResourcesRequest.create({
          resourceObjectType: "post",
          permission: "write",
          subject: emilia,
          consistency: Consistency.create({
            requirement: { oneofKind: "fullyConsistent", fullyConsistent: true },
          }),
        })
      );
      const postIds: string[] = [];
      stream.on("data", (resp) => {
        postIds.push(resp.resourceObjectId);
      });
      stream.on("end", () => {
        expect(postIds).toContain(postOne.objectId);
        expect(postIds).toContain(postTwo.objectId);
        expect(postIds.length).toBe(2);
        client.close();
        resolve(null);
      });
      stream.on("error", (e) => { throw e; });
    });
  });

  it("TestLookupSubjects", async () => {
    const client = createTestClient("v1test-lookup-subjects");
    await writeTestSchema(client);
    const { emilia, beatrice, postOne } = (await writeTestTuples(client)) as {
      emilia: SubjectReference;
      beatrice: SubjectReference;
      postOne: ObjectReference;
      postTwo: ObjectReference;
    };
    await new Promise((resolve) => {
      const stream = client.lookupSubjects(
        LookupSubjectsRequest.create({
          subjectObjectType: "user",
          permission: "view",
          resource: postOne,
          consistency: Consistency.create({
            requirement: { oneofKind: "fullyConsistent", fullyConsistent: true },
          }),
        })
      );
      const userIds: string[] = [];
      stream.on("data", (resp) => {
        userIds.push(resp.subject?.subjectObjectId);
      });
      stream.on("end", () => {
        expect(userIds).toContain(emilia.object?.objectId);
        expect(userIds).toContain(beatrice.object?.objectId);
        expect(userIds.length).toBe(2);
        client.close();
        resolve(null);
      });
      stream.on("error", (e) => { throw e; });
    });
  });

  it("TestCheckBulkPermissions", async () => {
    // Not implemented: CheckBulkPermissionsRequest is not in the node client as of now
    // Skipping this test
  });

  it("TestBulkExportImport", async () => {
    const client = createTestClient("v1test-bulk-export-import");
    await writeTestSchema(client);
    await writeTestTuples(client);
    // Export
    const exported: Relationship[] = [];
    await new Promise((resolve) => {
      const stream = client.bulkExportRelationships(
        BulkExportRelationshipsRequest.create({
          consistency: Consistency.create({
            requirement: { oneofKind: "fullyConsistent", fullyConsistent: true },
          }),
        })
      );
      stream.on("data", (resp) => {
        exported.push(...resp.relationships);
      });
      stream.on("end", () => resolve(null));
      stream.on("error", (e) => { throw e; });
    });
    expect(exported.length).toBe(4);
    // Import into a new client (new preshared key)
    const importClient = createTestClient("v1test-bulk-import");
    await writeTestSchema(importClient);
    await new Promise((resolve) => {
      const stream = importClient.bulkImportRelationships((err, value) => {
        if (err) throw err;
        else resolve(value);
      });
      stream.write(
        BulkImportRelationshipsRequest.create({
          relationships: exported,
        })
      );
      stream.end();
    });
    // Validate import
    const imported: Relationship[] = [];
    await new Promise((resolve) => {
      const stream = importClient.bulkExportRelationships(
        BulkExportRelationshipsRequest.create({
          consistency: Consistency.create({
            requirement: { oneofKind: "fullyConsistent", fullyConsistent: true },
          }),
        })
      );
      stream.on("data", (resp) => {
        imported.push(...resp.relationships);
      });
      stream.on("end", () => resolve(null));
      stream.on("error", (e) => { throw e; });
    });
    expect(imported.length).toBe(4);
    client.close();
    importClient.close();
  });
});

// Helper to write the test schema
async function writeTestSchema(client: ReturnType<typeof NewClient>, schema: string = `
    caveat likes_harry_potter(likes bool) {
      likes == true
    }

    definition post {
      relation writer: user
      relation reader: user
      relation caveated_reader: user with likes_harry_potter

      permission write = writer
      permission view = reader + writer
      permission view_as_fan = caveated_reader + writer
    }
    definition user {}
  `): Promise<WriteSchemaResponse> {
  return new Promise((resolve, reject) => {
    client.writeSchema(
      WriteSchemaRequest.create({ schema }),
      (err, response) => {
        if (err || !response) reject(err);
        else resolve(response);
      }
    );
  });
}

async function readTestSchema(client: ReturnType<typeof NewClient>): Promise<ReadSchemaResponse> {
  return new Promise((resolve, reject) => {
    client.readSchema(
      ReadSchemaRequest.create({}),
      (err, response) => {
        if (err || !response) reject(err);
        else resolve(response);
      }
    );
  });
}

// Helper to write the test tuples
async function writeTestTuples(client: ReturnType<typeof NewClient>): Promise<{
  emilia: SubjectReference;
  beatrice: SubjectReference;
  postOne: ObjectReference;
  postTwo: ObjectReference;
}> {
  const emilia = SubjectReference.create({
    object: ObjectReference.create({ objectType: "user", objectId: "emilia" }),
  });
  const beatrice = SubjectReference.create({
    object: ObjectReference.create({ objectType: "user", objectId: "beatrice" }),
  });
  const postOne = ObjectReference.create({ objectType: "post", objectId: "post-one" });
  const postTwo = ObjectReference.create({ objectType: "post", objectId: "post-two" });

  const updates = [
    // Emilia is a Writer on Post 1
    RelationshipUpdate.create({
      operation: RelationshipUpdate_Operation.CREATE,
      relationship: Relationship.create({
        resource: postOne,
        relation: "writer",
        subject: emilia,
      }),
    }),
    // Emilia is a Writer on Post 2
    RelationshipUpdate.create({
      operation: RelationshipUpdate_Operation.CREATE,
      relationship: Relationship.create({
        resource: postTwo,
        relation: "writer",
        subject: emilia,
      }),
    }),
    // Beatrice is a Reader on Post 1
    RelationshipUpdate.create({
      operation: RelationshipUpdate_Operation.CREATE,
      relationship: Relationship.create({
        resource: postOne,
        relation: "reader",
        subject: beatrice,
      }),
    }),
    // Beatrice is also a caveated Reader on Post 1
    RelationshipUpdate.create({
      operation: RelationshipUpdate_Operation.CREATE,
      relationship: Relationship.create({
        resource: postOne,
        relation: "caveated_reader",
        subject: beatrice,
        optionalCaveat: ContextualizedCaveat.create({ caveatName: "likes_harry_potter" }),
      }),
    }),
  ];

  return new Promise((resolve, reject) => {
    client.writeRelationships(
      WriteRelationshipsRequest.create({ updates }),
      (err) => {
        if (err) reject(err);
        else resolve({ emilia, beatrice, postOne, postTwo });
      }
    );
  });
}
