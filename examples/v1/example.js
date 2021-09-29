const authzed = require('@authzed/authzed-node/v1');

const client = authzed.NewClient("mytokenhere");

const writeSchemaRequest = new authzed.WriteSchemaRequest();
writeSchemaRequest.setSchema(`
    definition test/user {}

    definition test/resource {
        relation viewer: test/user
        permission view = viewer
    }
`
);

client.writeSchema(writeSchemaRequest, function (err, response) {
    // Continue onward
});
