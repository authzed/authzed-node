const authzed = require('./index.js');
const grpc = require('@grpc/grpc-js');

describe("a check with a random token", () => {
  it("should raise permission denied", (done) => {
    const testuserset = new authzed.ObjectAndRelation();
    testuserset.setNamespace("test/foo");
    testuserset.setObjectId("bar");
    testuserset.setRelation("baz");

    const user = new authzed.User();
    user.setUserset(testuserset);

    const request = new authzed.CheckRequest();
    request.setTestUserset(testuserset);
    request.setUser(user);

    const client = new authzed.Client("garbagetoken");
    client.acl.check(request, function(err, response) {
      expect(response).toBe(undefined); 
      expect(err.code).toBe(grpc.status.PERMISSION_DENIED);
      done();
    });
  });
})

describe("a check with an invalid token", () => {
  it("should raise unauthenticated", (done) => {
    const testuserset = new authzed.ObjectAndRelation();
    testuserset.setNamespace("foo");
    testuserset.setObjectId("bar");
    testuserset.setRelation("baz");

    const user = new authzed.User();
    user.setUserset(testuserset);

    const request = new authzed.CheckRequest();
    request.setTestUserset(testuserset);
    request.setUser(user);

    const client = new authzed.Client("invalid token");
    client.acl.check(request, function(err, response) {
      expect(response).toBe(undefined); 
      expect(err.code).toBe(grpc.status.UNAUTHENTICATED);
      done();
    });
  });
})
