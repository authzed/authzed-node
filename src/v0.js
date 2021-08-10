'use strict';

const aclsvc = require('./authzedapi/authzed/api/v0/acl_service_grpc_pb.js')
const aclpb = require('./authzedapi/authzed/api/v0/acl_service_pb.js')
const corepb = require('./authzedapi/authzed/api/v0/core_pb.js')
const nsdefpb = require('./authzedapi/authzed/api/v0/namespace_pb.js')
const nssvc = require('./authzedapi/authzed/api/v0/namespace_service_grpc_pb.js')
const nspb = require('./authzedapi/authzed/api/v0/namespace_service_pb.js')
const watchsvc = require('./authzedapi/authzed/api/v0/watch_service_grpc_pb.js')
const watchpb = require('./authzedapi/authzed/api/v0/watch_service_pb.js')

const util = require('./util')

function NewClient(token, endpoint = util.authzedEndpoint, insecure = false) {
  const creds = util.createClientCreds(token, insecure);

  const acl = new aclsvc.ACLServiceClient(endpoint, creds);
  const ns = new nssvc.NamespaceServiceClient(endpoint, creds);
  const watch = new watchsvc.WatchServiceClient(endpoint, creds);

  const handler = {
    get(target, name) {
      if (acl[name]) {
        return acl[name];
      }

      if (ns[name]) {
        return ns[name];
      }

      if (watch[name]) {
        return watch[name];
      }

      return undefined;
    }
  }

  return new Proxy({}, handler);
}

module.exports = {
  NewClient: NewClient,
  ...aclpb,
  ...corepb,
  ...nsdefpb,
  ...nspb,
  ...watchpb,
};
