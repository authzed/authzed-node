const authzedv0 = require('./v0.js');
const authzedv1 = require('./v1alpha1.js');

describe("a check following a write of schema and relationships", () => {
    it("should succeed", (done) => {
        // Write the schema.
        const v1client = authzedv1.NewClient("sometoken", "localhost:50051", true);

        const writeSchemaRequest = new authzedv1.WriteSchemaRequest();
        writeSchemaRequest.setSchema(`
definition test/user {}

definition test/resource {
    relation viewer: test/user
    permission view = viewer
}
`
        );

        v1client.writeSchema(writeSchemaRequest, function (err, response) {
            expect(err).toBe(null);
            expect(response.getObjectDefinitionsNamesList()).toEqual(['test/user', 'test/resource']);

            const v0client = authzedv0.NewClient("sometoken", "localhost:50051", true);

            // Create the relationship between the resource and the user.
            const resourceViewerRelation = new authzedv0.ObjectAndRelation();
            resourceViewerRelation.setNamespace("test/resource");
            resourceViewerRelation.setObjectId("someresource");
            resourceViewerRelation.setRelation("viewer");

            // Create the user reference.
            const userref = new authzedv0.ObjectAndRelation();
            userref.setNamespace("test/user");
            userref.setObjectId("someuser");
            userref.setRelation("...");

            const user = new authzedv0.User();
            user.setUserset(userref);

            const relationship = new authzedv0.RelationTuple();
            relationship.setObjectAndRelation(resourceViewerRelation);
            relationship.setUser(user);

            const update = new authzedv0.RelationTupleUpdate();
            update.setOperation(authzedv0.RelationTupleUpdate.Operation.CREATE);
            update.setTuple(relationship);

            // Write the relationship.
            const writeRequest = new authzedv0.WriteRequest();
            writeRequest.addUpdates(update);

            v0client.write(writeRequest, function (err, response) {
                expect(err).toBe(null);
                expect(response).toBeTruthy();
                const revision = response.getRevision()

                // Check and verify.
                const viewResourcePermission = new authzedv0.ObjectAndRelation();
                viewResourcePermission.setNamespace("test/resource");
                viewResourcePermission.setObjectId("someresource");
                viewResourcePermission.setRelation("view");

                const checkRequest = new authzedv0.CheckRequest();
                checkRequest.setTestUserset(viewResourcePermission);
                checkRequest.setUser(user);
                checkRequest.setAtRevision(revision);

                v0client.check(checkRequest, function (err, response) {
                    expect(err).toBe(null);
                    expect(response.getMembership()).toBe(authzedv0.CheckResponse.Membership.MEMBER);
                    done();
                });
            });
        });
    });
})
