import * as v0 from "./v0";
import * as v1 from "./v1alpha1";

describe("a check following a write of schema and relationships", () => {
  it("should succeed", (done) => {
    // Write the schema.
    const v1client = v1.NewClient("sometoken", "localhost:50051", true);

    const writeSchemaRequest = v1.WriteSchemaRequest.create({
      schema: `
  definition test/user {}
  
  definition test/resource {
      relation viewer: test/user
      permission view = viewer
  }
  `,
    });

    v1client.writeSchema(writeSchemaRequest, function (err, response) {
      expect(err).toBe(null);
      expect(response?.objectDefinitionsNames).toEqual([
        "test/user",
        "test/resource",
      ]);

      const v0client = v0.NewClient("sometoken", "localhost:50051", true);

      // Create the relationship between the resource and the user.
      const resourceViewerRelation = v0.ObjectAndRelation.create({
        namespace: "test/resource",
        objectId: "someresource",
        relation: "viewer",
      });

      // Create the user reference.
      const userref = v0.ObjectAndRelation.create({
        namespace: "test/user",
        objectId: "someuser",
        relation: "...",
      });

      const user = v0.User.create({
        userOneof: {
          userset: userref,
          oneofKind: "userset",
        },
      });

      const relationship = v0.RelationTuple.create({
        objectAndRelation: resourceViewerRelation,
        user,
      });

      const update = v0.RelationTupleUpdate.create({
        operation: v0.RelationTupleUpdate_Operation.CREATE,
        tuple: relationship,
      });

      // Write the relationship.
      const writeRequest = v0.WriteRequest.create({
        updates: [update],
      });

      v0client.write(writeRequest, function (err, response) {
        expect(err).toBe(null);
        expect(response).toBeTruthy();
        const revision = response?.revision;

        // Check and verify.
        const viewResourcePermission = v0.ObjectAndRelation.create({
          namespace: "test/resource",
          objectId: "someresource",
          relation: "view",
        });

        const checkRequest = v0.CheckRequest.create({
          testUserset: viewResourcePermission,
          user,
          atRevision: revision,
        });

        v0client.check(checkRequest, function (err, response) {
          expect(err).toBe(null);
          expect(response?.membership).toBe(v0.CheckResponse_Membership.MEMBER);
          done();
        });
      });
    });
  });
});
