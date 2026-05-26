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
  CheckBulkPermissionsRequest,
  CheckBulkPermissionsRequestItem,
  CheckBulkPermissionsResponse,
  ZedPromiseClientInterface,
} from "./v1.js";
import { generateTestToken } from "./__utils__/helpers.js";


describe("V1TestPromise", () => {
  it("TestBasicSchema", async () => {
    const client = createTestClient("v1test-basic-schema");
    const schema = `
      definition document {
          relation reader: user
      }
      definition user {}
    `;
    const response: WriteSchemaResponse = await client.writeSchema(WriteSchemaRequest.create({ schema }));
    expect(response.writtenAt).toBeDefined();

    const readResponse: ReadSchemaResponse = await client.readSchema(ReadSchemaRequest.create({}));
    expect(readResponse.schemaText).toContain("definition document");
    expect(readResponse.schemaText).toContain("definition user");
    client.close();
  });

  it("TestSchemaWithCaveats", async () => {
    const client = createTestClient("v1test-schema-caveats");
    await client.writeSchema(WriteSchemaRequest.create({ schema: DEFAULT_TEST_SCHEMA }));
    client.close();
  });

  it("TestCheck", async () => {
    const client = createTestClient("v1test-check");
    await client.writeSchema(WriteSchemaRequest.create({ schema: DEFAULT_TEST_SCHEMA }));
    const { emilia, beatrice, postOne } = await writeTestTuples(client);
    // emilia can view postOne
    const emiliaViewResp = await client.checkPermission(
      CheckPermissionRequest.create({
        resource: postOne,
        permission: "view",
        subject: emilia,
        consistency: Consistency.create({
          requirement: { oneofKind: "fullyConsistent", fullyConsistent: true },
        }),
      })
    );
    expect(emiliaViewResp.permissionship).toBe(CheckPermissionResponse_Permissionship.HAS_PERMISSION);
    // emilia can write postOne
    const emiliaWriteResp = await client.checkPermission(
      CheckPermissionRequest.create({
        resource: postOne,
        permission: "write",
        subject: emilia,
        consistency: Consistency.create({
          requirement: { oneofKind: "fullyConsistent", fullyConsistent: true },
        }),
      })
    );
    expect(emiliaWriteResp.permissionship).toBe(CheckPermissionResponse_Permissionship.HAS_PERMISSION);
    // beatrice can view postOne
    const beatriceViewResp = await client.checkPermission(
      CheckPermissionRequest.create({
        resource: postOne,
        permission: "view",
        subject: beatrice,
        consistency: Consistency.create({
          requirement: { oneofKind: "fullyConsistent", fullyConsistent: true },
        }),
      })
    );
    expect(beatriceViewResp.permissionship).toBe(CheckPermissionResponse_Permissionship.HAS_PERMISSION);
    // beatrice cannot write postOne
    const beatriceWriteResp = await client.checkPermission(
      CheckPermissionRequest.create({
        resource: postOne,
        permission: "write",
        subject: beatrice,
        consistency: Consistency.create({
          requirement: { oneofKind: "fullyConsistent", fullyConsistent: true },
        }),
      })
    );
    expect(beatriceWriteResp.permissionship).toBe(CheckPermissionResponse_Permissionship.NO_PERMISSION);
    client.close();
  });

  it("TestCaveatedCheck", async () => {
    const client = createTestClient("v1test-caveated-check");
    await client.writeSchema(WriteSchemaRequest.create({ schema: DEFAULT_TEST_SCHEMA }));
    const { beatrice, postOne } = (await writeTestTuples(client)) as {
      emilia: SubjectReference;
      beatrice: SubjectReference;
      postOne: ObjectReference;
      postTwo: ObjectReference;
    };
    // Likes Harry Potter
    const beatriceFanLikesResp = await client.checkPermission(
      CheckPermissionRequest.create({
        resource: postOne,
        permission: "view_as_fan",
        subject: beatrice,
        consistency: Consistency.create({
          requirement: { oneofKind: "fullyConsistent", fullyConsistent: true },
        }),
        context: createStructFromObject({ likes: true }),
      })
    );
    expect(beatriceFanLikesResp.permissionship).toBe(CheckPermissionResponse_Permissionship.HAS_PERMISSION);
    // No longer likes Harry Potter
    const beatriceFanDislikesResp = await client.checkPermission(
      CheckPermissionRequest.create({
        resource: postOne,
        permission: "view_as_fan",
        subject: beatrice,
        consistency: Consistency.create({
          requirement: { oneofKind: "fullyConsistent", fullyConsistent: true },
        }),
        context: createStructFromObject({ likes: false }),
      })
    );
    expect(beatriceFanDislikesResp.permissionship).toBe(CheckPermissionResponse_Permissionship.NO_PERMISSION);
    // Fandom is in question (no context)
    const beatriceFanUnknownResp = await client.checkPermission(
      CheckPermissionRequest.create({
        resource: postOne,
        permission: "view_as_fan",
        subject: beatrice,
        consistency: Consistency.create({
          requirement: { oneofKind: "fullyConsistent", fullyConsistent: true },
        }),
      })
    );
    expect(beatriceFanUnknownResp.permissionship).toBe(CheckPermissionResponse_Permissionship.CONDITIONAL_PERMISSION);
    expect(beatriceFanUnknownResp.partialCaveatInfo?.missingRequiredContext).toContain("likes");
    client.close();
  });

  it("TestLookupResources", async () => {
    const client = createTestClient("v1test-lookup-resources");
    await client.writeSchema(WriteSchemaRequest.create({ schema: DEFAULT_TEST_SCHEMA }));
    const { emilia, postOne, postTwo } = (await writeTestTuples(client)) as {
      emilia: SubjectReference;
      beatrice: SubjectReference;
      postOne: ObjectReference;
      postTwo: ObjectReference;
    };
    const responses = await client.lookupResources(
      LookupResourcesRequest.create({
        resourceObjectType: "post",
        permission: "write",
        subject: emilia,
        consistency: Consistency.create({
          requirement: { oneofKind: "fullyConsistent", fullyConsistent: true },
        }),
      })
    );
    const postIds = responses.map(resp => resp.resourceObjectId);
    expect(postIds).toContain(postOne.objectId);
    expect(postIds).toContain(postTwo.objectId);
    expect(postIds.length).toBe(2);
    client.close();
  });

  it("TestLookupSubjects", async () => {
    const client = createTestClient("v1test-lookup-subjects");
    await client.writeSchema(WriteSchemaRequest.create({ schema: DEFAULT_TEST_SCHEMA }));
    const { emilia, beatrice, postOne } = (await writeTestTuples(client)) as {
      emilia: SubjectReference;
      beatrice: SubjectReference;
      postOne: ObjectReference;
      postTwo: ObjectReference;
    };
    const responses = await client.lookupSubjects(
      LookupSubjectsRequest.create({
        subjectObjectType: "user",
        permission: "view",
        resource: postOne,
        consistency: Consistency.create({
          requirement: { oneofKind: "fullyConsistent", fullyConsistent: true },
        }),
      })
    );
    const userIds = responses.map(resp => resp.subject?.subjectObjectId);
    expect(userIds).toContain(emilia.object?.objectId);
    expect(userIds).toContain(beatrice.object?.objectId);
    expect(userIds.length).toBe(2);
    client.close();
  });

  it("TestCheckBulkPermissions", async () => {
    const client = createTestClient("v1test-check-bulk-permissions");
    await client.writeSchema(WriteSchemaRequest.create({ schema: DEFAULT_TEST_SCHEMA }));
    const { emilia, postOne } = await writeTestTuples(client);
    const checkBulkPermissionsRequest = CheckBulkPermissionsRequest.create({
      consistency: Consistency.create({
        requirement: { oneofKind: "fullyConsistent", fullyConsistent: true },
      }),
      items: [
        CheckBulkPermissionsRequestItem.create({
          resource: postOne,
          permission: "view",
          subject: emilia,
        }),
        CheckBulkPermissionsRequestItem.create({
          resource: postOne,
          permission: "write",
          subject: emilia,
        })
      ]
    });
    const response: CheckBulkPermissionsResponse = await client.checkBulkPermissions(checkBulkPermissionsRequest);
    expect(response.pairs.length).toBe(2);
    if (response.pairs[0].response.oneofKind === "item") {
      expect(response.pairs[0].response.item.permissionship).toBe(CheckPermissionResponse_Permissionship.HAS_PERMISSION);
    } else {
      throw new Error("Expected response.pairs[0].response to be of kind 'item'");
    }
    if (response.pairs[1].response.oneofKind === "item") {
      expect(response.pairs[1].response.item.permissionship).toBe(CheckPermissionResponse_Permissionship.HAS_PERMISSION);
    } else {
      throw new Error("Expected response.pairs[1].response to be of kind 'item'");
    }
  });

  it("TestBulkExportImport", async () => {
    const client = createTestClient("v1test-bulk-export-import");
    await client.writeSchema(WriteSchemaRequest.create({ schema: DEFAULT_TEST_SCHEMA }));
    await writeTestTuples(client);

    // Export
    const exported: Relationship[] = [];
    const exportResponses = await client.exportBulkRelationships(
      BulkExportRelationshipsRequest.create({
        consistency: Consistency.create({
          requirement: { oneofKind: "fullyConsistent", fullyConsistent: true },
        }),
      })
    );
    exportResponses.forEach(resp => {
      exported.push(...resp.relationships);
    });
    expect(exported.length).toBe(4);

    // Import into a new client (new preshared key)
    const importClient = createTestClient("v1test-bulk-import");
    await importClient.writeSchema(WriteSchemaRequest.create({ schema: DEFAULT_TEST_SCHEMA }));
    await new Promise((resolve) => {
      const stream = importClient.importBulkRelationships((err, value) => {
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
    const importResponses = await importClient.exportBulkRelationships(
      BulkExportRelationshipsRequest.create({
        consistency: Consistency.create({
          requirement: { oneofKind: "fullyConsistent", fullyConsistent: true },
        }),
      })
    );
    importResponses.forEach(resp => {
      imported.push(...resp.relationships);
    });
    expect(imported.length).toBe(4);
    client.close();
    importClient.close();
  });
});

function createTestClient(tokenName: string): ZedPromiseClientInterface {
  const {promises: client} = NewClient(
    generateTestToken(tokenName),
    "localhost:50051",
    ClientSecurity.INSECURE_LOCALHOST_ALLOWED,
    PreconnectServices.PERMISSIONS_SERVICE |
      PreconnectServices.SCHEMA_SERVICE,
  );
  return client;
}

// Add the default schema constant at the top (after imports)
const DEFAULT_TEST_SCHEMA = `
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
  `;

// Helper to write the test tuples
async function writeTestTuples(client: ZedPromiseClientInterface): Promise<{
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

  await client.writeRelationships(WriteRelationshipsRequest.create({ updates }));
  return { emilia, beatrice, postOne, postTwo };
}
