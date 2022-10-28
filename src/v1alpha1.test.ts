import authzed, { ClientSecurity, WriteSchemaRequest } from "./v1alpha1";
import { generateTestToken } from './__utils__/helpers' 

describe("a write", () => {
  it("should succeed", (done) => {
    const client = authzed.NewClient(generateTestToken("v1-alpha1"), "localhost:50051", ClientSecurity.INSECURE_LOCALHOST_ALLOWED);

    const request = WriteSchemaRequest.create({
      schema: "definition test/something {}",
    });

    client.writeSchema(request, function (err, response) {
      expect(err).toBe(null);
      expect(response?.objectDefinitionsNames).toEqual(["test/something"]);
      done();
    });
  });
});
