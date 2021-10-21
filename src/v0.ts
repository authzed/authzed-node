"use strict";

import * as aclsvc from "./authzedapi/authzed/api/v0/acl_service_grpc_pb";
import * as nssvc from "./authzedapi/authzed/api/v0/namespace_service_grpc_pb";
import * as watchsvc from "./authzedapi/authzed/api/v0/watch_service_grpc_pb";

import * as aclpb from "./authzedapi/authzed/api/v0/acl_service_pb";
import * as corepb from "./authzedapi/authzed/api/v0/core_pb";
import * as nsdefpb from "./authzedapi/authzed/api/v0/namespace_service_pb";
import * as nspb from "./authzedapi/authzed/api/v0/namespace_pb";
import * as watchpb from "./authzedapi/authzed/api/v0/watch_service_pb";

import * as util from "./util";

export function NewClient(
  token: string,
  endpoint = util.authzedEndpoint,
  insecure = false
) {
  const creds = util.createClientCreds(token, insecure);

  const acl = new aclsvc.ACLServiceClient(endpoint, creds);
  const ns = new nssvc.NamespaceServiceClient(endpoint, creds);
  const watch = new watchsvc.WatchServiceClient(endpoint, creds);

  const handler = {
    get(target: object, name: string | symbol) {
      if (acl[name as string]) {
        return acl[name as string];
      }

      if (ns[name as string]) {
        return ns[name as string];
      }

      if (watch[name as string]) {
        return watch[name as string];
      }

      return undefined;
    },
  };

  return new Proxy({}, handler);
}

export * from "./authzedapi/authzed/api/v0/acl_service_grpc_pb";
export * from "./authzedapi/authzed/api/v0/namespace_service_grpc_pb";
export * from "./authzedapi/authzed/api/v0/watch_service_grpc_pb";
export * from "./authzedapi/authzed/api/v0/acl_service_pb";
export * from "./authzedapi/authzed/api/v0/core_pb";
export * from "./authzedapi/authzed/api/v0/namespace_pb";
export * from "./authzedapi/authzed/api/v0/namespace_service_pb";
export * from "./authzedapi/authzed/api/v0/watch_service_pb";

export default {
  NewClient: NewClient,
  ...aclpb,
  ...corepb,
  ...nsdefpb,
  ...nspb,
  ...watchpb,
};
