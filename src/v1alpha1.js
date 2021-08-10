'use strict';

const schemasvc = require('./authzedapi/authzed/api/v1alpha1/schema_grpc_pb')
const schemapb = require('./authzedapi/authzed/api/v1alpha1/schema_pb')
const util = require('./util')

function NewClient(token, endpoint = util.authzedEndpoint, insecure = false) {
    const creds = util.createClientCreds(token, insecure);
    const schema = new schemasvc.SchemaServiceClient(endpoint, creds);
    return schema;
}

module.exports = {
    NewClient: NewClient,
    ...schemapb,
};
