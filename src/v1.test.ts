import {
  CheckPermissionRequest,
  NewClient,
  ObjectReference,
  SubjectReference,
} from "./v1";
import * as grpc from "@grpc/grpc-js";

describe("a check with an unknown namespace", () => {
  it("should raise a failed precondition", (done) => {
    const resource = ObjectReference.create({
      objectType: "test/somenamespace",
      objectId: "bar",
    });

    const testUser = ObjectReference.create({
      objectType: "test/user",
      objectId: "someuser",
    });

    const checkPermissionRequest = CheckPermissionRequest.create({
      resource,
      permission: "someperm",
      subject: SubjectReference.create({
        object: testUser,
      }),
    });

    const client = NewClient("sometoken", "localhost:50051", true);
    client.checkPermission(checkPermissionRequest, function (err, response) {
      expect(response).toBe(undefined);
      expect(err?.code).toBe(grpc.status.FAILED_PRECONDITION);
      done();
    });
  });
});
