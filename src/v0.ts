"use strict";

import { ACLServiceClient } from "./authzedapi/authzed/api/v0/acl_service.grpc-client";
import { NamespaceServiceClient } from "./authzedapi/authzed/api/v0/namespace_service.grpc-client";
import { WatchServiceClient } from "./authzedapi/authzed/api/v0/watch_service.grpc-client";

import * as util from "./util";

export function NewClient(
  token: string,
  endpoint = util.authzedEndpoint,
  insecure = false
) {
  const creds = util.createClientCreds(token, insecure);

  const acl = new ACLServiceClient(endpoint, creds);
  const ns = new NamespaceServiceClient(endpoint, creds);
  const watch = new WatchServiceClient(endpoint, creds);

  const handler = {
    get(target: object, name: string | symbol) {
      if ((acl as any)[name as string]) {
        return (acl as any)[name as string];
      }

      if ((ns as any)[name as string]) {
        return (ns as any)[name as string];
      }

      if ((watch as any)[name as string]) {
        return (watch as any)[name as string];
      }

      return undefined;
    },
  };

  return new Proxy<
    Omit<ACLServiceClient, "_binaryOptions"> &
      Omit<NamespaceServiceClient, "_binaryOptions"> &
      Omit<WatchServiceClient, "_binaryOptions">
  >(acl as any, handler);
}

export * from "./authzedapi/authzed/api/v0/acl_service.grpc-client";
export * from "./authzedapi/authzed/api/v0/acl_service";
export * from "./authzedapi/authzed/api/v0/core";
export * from "./authzedapi/authzed/api/v0/developer.grpc-client";
export * from "./authzedapi/authzed/api/v0/developer";
export * from "./authzedapi/authzed/api/v0/namespace";
export * from "./authzedapi/authzed/api/v0/namespace_service";
export * from "./authzedapi/authzed/api/v0/namespace_service.grpc-client";
export * from "./authzedapi/authzed/api/v0/watch_service";
export * from "./authzedapi/authzed/api/v0/watch_service.grpc-client";

export default {
  NewClient: NewClient,
};
