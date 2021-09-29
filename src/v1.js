'use strict';

const corepb = require('./authzedapi/authzed/api/v1/core_pb.js')
const permpb = require('./authzedapi/authzed/api/v1/permission_service_pb.js')
const permsvc = require('./authzedapi/authzed/api/v1/permission_service_grpc_pb.js')
const schemapb = require('./authzedapi/authzed/api/v1/schema_pb.js')
const schemasvc = require('./authzedapi/authzed/api/v1/schema_grpc_pb.js')

const util = require('./util')

function NewClient(token, endpoint = util.authzedEndpoint, insecure = false) {
  const creds = util.createClientCreds(token, insecure);

  const perm = new permsvc.PermissionServiceClient(endpoint, creds);
  const schema = new schemasvc.SchemaServiceClient(endpoint, creds);

  const handler = {
    get(target, name) {
      if (perm[name]) {
        return perm[name];
      }

      if (schema[name]) {
        return schema[name];
      }

      return undefined;
    }
  }

  return new Proxy({}, handler);
}

module.exports = {
  NewClient: NewClient,
  ...corepb,
  ...permpb,
  ...schemapb,
};
