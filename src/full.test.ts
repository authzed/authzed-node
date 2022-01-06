import { Client } from "@grpc/grpc-js";
import { ClientSecurity } from "./util";
import * as v0 from "./v0";
import * as v1 from "./v1";
import { Consistency } from "./v1";
import * as v1alpha from "./v1alpha1";

describe("a check following a write of schema and relationships", () => {
  it("should succeed", (done) => {
    // Write the schema.
    const alphaClient = v1alpha.NewClient("fulltest-sometoken", "localhost:50051", ClientSecurity.INSECURE_LOCALHOST_ALLOWED);
    const v1client = v1.NewClient("fulltest-sometoken", "localhost:50051", ClientSecurity.INSECURE_LOCALHOST_ALLOWED);

    const writeSchemaRequest = v1alpha.WriteSchemaRequest.create({
      schema: `
  definition test/user {}
  
  definition test/resource {
      relation viewer: test/user
      permission view = viewer
  }
  `,
    });

    alphaClient.writeSchema(writeSchemaRequest, function (err) {
      expect(err).toBe(null);

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

      v1client.writeRelationships(writeRequest, function (err, response) {
        expect(err).toBe(null);
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
          })
        });

        v1client.checkPermission(checkPermissionRequest, (err, response) => {
          expect(err).toBe(null);
          expect(response?.permissionship).toBe(
            v1.CheckPermissionResponse_Permissionship.HAS_PERMISSION
          );
          done();
        });
      });
    });
  });
});
