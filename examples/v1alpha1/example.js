const authzed = require('@authzed/authzed-node/v1alpha1');

const client = new authzed.Client("mytokenhere");

const writeSchemaRequest = new authzed.WriteSchemaRequest();
writeSchemaRequest.setSchema(`
    definition test/user {}

    definition test/resource {
        relation viewer: test/user
        permission view = viewer
    }
`
);

client.schema.writeSchema(writeSchemaRequest, function (err, response) {
    // Continue onward
});