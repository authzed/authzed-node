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

function Client(token, endpoint = util.authzedEndpoint, insecure = false) {
  const creds = util.createClientCreds(token, insecure);
  this.acl = new aclsvc.ACLServiceClient(endpoint, creds);
  this.ns = new nssvc.NamespaceServiceClient(endpoint, creds);
  this.watch = new watchsvc.WatchServiceClient(endpoint, creds);
}

module.exports = {
  Client: Client,
  ...aclpb,
  ...corepb,
  ...nsdefpb,
  ...nspb,
  ...watchpb,
};
