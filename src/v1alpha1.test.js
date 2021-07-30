const authzed = require('./v1alpha1.js');

describe("a write", () => {
    it("should succeed", (done) => {
        const client = new authzed.Client("sometoken", "localhost:50051", true);

        const request = new authzed.WriteSchemaRequest();
        request.setSchema('definition test/something {}');

        client.schema.writeSchema(request, function (err, response) {
            expect(err).toBe(null);
            expect(response.getObjectDefinitionsNamesList()).toEqual(['test/something']);
            done();
        });
    });
})