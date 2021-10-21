import authzed from "./v1alpha1";

describe("a write", () => {
  it("should succeed", (done) => {
    const client = authzed.NewClient("sometoken", "localhost:50051", true);

    const request = new authzed.WriteSchemaRequest();
    request.setSchema("definition test/something {}");

    client.writeSchema(request, function (err, response) {
      expect(err).toBe(null);
      expect(response.getObjectDefinitionsNamesList()).toEqual([
        "test/something",
      ]);
      done();
    });
  });
});
