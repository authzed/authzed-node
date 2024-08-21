import { generateTestToken } from "./__utils__/helpers";
import { ClientSecurity } from "./util";
import * as v1 from "./v1";
import { Consistency } from "./v1";

describe("a check following a write of schema and relationships", () => {
  it("should succeed", async () => {
    // Write the schema.
    const token = generateTestToken("full-promises");
    const { promises: v1client } = v1.NewClient(
      token,
      "localhost:50051",
      ClientSecurity.INSECURE_LOCALHOST_ALLOWED,
    );

    const writeSchemaRequest = v1.WriteSchemaRequest.create({
      schema: `
  definition test/user {}
  
  definition test/resource {
      relation viewer: test/user
      permission view = viewer
  }
  `,
    });

    await v1client.writeSchema(writeSchemaRequest);
    // Create the relationship between the resource and the user.
    const resource = v1.ObjectReference.create({
      objectType: "test/resource",
      objectId: "someresource",
    });

    // Create the user reference.
    const userref = v1.ObjectReference.create({
      objectType: "test/user",
      objectId: "someuser",
    });

    const user = v1.SubjectReference.create({
      object: userref,
    });

    const relationship = v1.Relationship.create({
      resource,
      relation: "viewer",
      subject: user,
    });

    const update = v1.RelationshipUpdate.create({
      operation: v1.RelationshipUpdate_Operation.CREATE,
      relationship: relationship,
    });

    // Write the relationship.
    const writeRequest = v1.WriteRelationshipsRequest.create({
      updates: [update],
    });

    const response = await v1client.writeRelationships(writeRequest);
    expect(response).toBeTruthy();

    const checkPermissionRequest = v1.CheckPermissionRequest.create({
      resource,
      permission: "view",
      subject: user,
      consistency: Consistency.create({
        requirement: {
          oneofKind: "fullyConsistent",
          fullyConsistent: true,
        },
      }),
    });

    const permissionResponse = await v1client.checkPermission(
      checkPermissionRequest,
    );
    expect(permissionResponse?.permissionship).toBe(
      v1.CheckPermissionResponse_Permissionship.HAS_PERMISSION,
    );
  });
});
