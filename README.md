# authzed-node

An authzed client library for [nodejs](https://nodejs.org).

## Example

```js
const authzed = require('authzed-node');

const testuserset = new authzed.ObjectAndRelation();
testuserset.setNamespace("mytenant/note");
testuserset.setObjectId("README");
testuserset.setRelation("reader");

const userset = new authzed.ObjectAndRelation();
userset.setNamespace("mytenant/user");
userset.setObjectId("joey");
userset.setRelation("...");
const user = new authzed.User();
user.setUserset(userset);

const request = new authzed.CheckRequest();
request.setTestUserset(testuserset);
request.setUser(user);

const client = new authzed.Client("myAPIToken");
client.acl.check(request, function(err, response) {
  console.log(response);
  console.log(err);
});
```
