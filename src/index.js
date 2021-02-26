'use strict';

const aclsvc = require('./arrakisapi/api/acl_service_grpc_pb.js')
const aclpb = require('./arrakisapi/api/acl_service_pb.js')
const coresvc = require('./arrakisapi/api/core_grpc_pb.js')
const corepb = require('./arrakisapi/api/core_pb.js')
const devsvc = require('./arrakisapi/api/developer_grpc_pb.js')
const devpb = require('./arrakisapi/api/developer_pb.js')
const nsdefsvc = require('./arrakisapi/api/namespace_grpc_pb.js')
const nsdefpb = require('./arrakisapi/api/namespace_pb.js')
const nssvc = require('./arrakisapi/api/namespace_service_grpc_pb.js')
const nspb = require('./arrakisapi/api/namespace_service_pb.js')
const watchsvc = require('./arrakisapi/api/watch_service_grpc_pb.js')
const watchpb = require('./arrakisapi/api/watch_service_pb.js')

const grpc = require('@grpc/grpc-js');

const authzedEndpoint = "grpc.authzed.com:443";

function Client(token) {
  const metadata = new grpc.Metadata();
  metadata.set('authorization', 'Bearer ' + token);

  const creds = grpc.credentials.combineChannelCredentials(
    grpc.credentials.createSsl(),
    grpc.credentials.createFromMetadataGenerator((_, callback) => {
      callback(null, metadata)
    }),
  );

  this.acl = new aclsvc.ACLServiceClient(authzedEndpoint, creds);
  this.dev =  new devsvc.DeveloperServiceClient(authzedEndpoint, creds);
  this.ns = new nssvc.NamespaceServiceClient(authzedEndpoint, creds);
  this.watch = new watchsvc.WatchServiceClient(authzedEndpoint, creds);
};

module.exports = {
  Client: Client,
  ...aclpb,
  ...corepb,
  ...devpb,
  ...nsdefpb,
  ...nspb,
  ...watchpb,
};
