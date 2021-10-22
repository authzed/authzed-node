import { ObjectAndRelation, User, CheckRequest, NewClient } from "./v0";
import * as grpc from "@grpc/grpc-js";

describe("a check with an unknown namespace", () => {
  it("should raise a failed precondition", (done) => {
    const testuserset = ObjectAndRelation.create();
    testuserset.namespace = "test/somenamespace";
    testuserset.objectId = "bar";
    testuserset.relation = "someperm";

    const user = User.create();
    user.userOneof = {
      userset: testuserset,
      oneofKind: "userset",
    };

    const request = CheckRequest.create();
    request.testUserset = testuserset;
    request.user = user;

    const client = NewClient("sometoken", "localhost:50051", true);
    client.check(request, function (err, response) {
      expect(response).toBe(undefined);
      expect(err!.code).toBe(grpc.status.FAILED_PRECONDITION);
      done();
    });
  });
});
