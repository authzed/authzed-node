import { ClientSecurity } from "./util";
import authzed, { WriteSchemaRequest } from "./v1alpha1";

describe("a write", () => {
  it("should succeed", (done) => {
    const client = authzed.NewClient("v1alpha1sometoken", "localhost:50051", ClientSecurity.INSECURE_LOCALHOST_ALLOWED);

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
