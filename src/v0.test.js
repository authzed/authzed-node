const authzed = require('./v0.js');
const grpc = require('@grpc/grpc-js');

describe("a check with an unknown namespace", () => {
  it("should raise a failed precondition", (done) => {
    const testuserset = new authzed.ObjectAndRelation();
    testuserset.setNamespace("test/somenamespace");
    testuserset.setObjectId("bar");
    testuserset.setRelation("someperm");

    const user = new authzed.User();
    user.setUserset(testuserset);

    const request = new authzed.CheckRequest();
    request.setTestUserset(testuserset);
    request.setUser(user);

    const client = authzed.NewClient("sometoken", "localhost:50051", true);
    client.check(request, function (err, response) {
      expect(response).toBe(undefined);
      expect(err.code).toBe(grpc.status.FAILED_PRECONDITION);
      done();
    });
  });
})
