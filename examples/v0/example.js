const authzed = require('@authzed/authzed-node/v0');
const client = authzed.NewClient("mytokenhere");

// Create an object that will be protected by Authzed.
const testuserset = new authzed.ObjectAndRelation();
testuserset.setNamespace("mytenant/note");
testuserset.setObjectId("README");
testuserset.setRelation("reader");

const userset = new authzed.ObjectAndRelation();
userset.setNamespace("mytenant/user");
userset.setObjectId("jimmy");
userset.setRelation("...");

const user = new authzed.User();
user.setUserset(userset);

const writeRequest = new authzed.WriteRequest();
request.setTestUserset(testuserset);
request.setUser(user);

client.write(writeRequest, function (err, response) {
    // Save the zookie off somewhere for the write.
});

// Run a permissions check.
const checkRequest = new authzed.CheckRequest();
request.setTestUserset(testuserset);
request.setUser(user);

client.check(checkRequest, function (err, response) {
    console.log(response);
    console.log(err);
});