/* eslint-disable  @typescript-eslint/no-explicit-any */
'use strict';

import { ChannelCredentials } from '@grpc/grpc-js';
import { promisify as utilPromisify } from 'util';
import { PermissionsServiceClient } from './authzedapi/authzed/api/v1/permission_service.grpc-client';
import { SchemaServiceClient } from './authzedapi/authzed/api/v1/schema.grpc-client';
import { WatchServiceClient } from './authzedapi/authzed/api/v1/watch_service.grpc-client';

import * as util from './util';
import { ClientSecurity } from './util';

/**
 * NewClient creates a new client for calling Authzed APIs.
 * @param token Secret token for authentication.
 * @param endpoint Uri for communicating with Authzed.
 * @param security Security level for the connection.
 * @returns Client for calling Authzed APIs.
 */
export function NewClient(
  token: string,
  endpoint = util.authzedEndpoint,
  security: ClientSecurity = ClientSecurity.SECURE
) {
  const creds = util.createClientCreds(endpoint, token, security);
  return NewClientWithChannelCredentials(endpoint, creds);
}

/**
 * NewClientWithCustomCert creates a new client for calling Authzed APIs using a custom TLS certificate.
 * @param token Secret token for authentication.
 * @param endpoint Uri for communicating with Authzed.
 * @param certificate Buffer read from certificate file.
 * @returns Client for calling Authzed APIs.
 */
export function NewClientWithCustomCert(
  token: string,
  endpoint = util.authzedEndpoint,
  certificate: Buffer
) {
  const creds = util.createClientCredsWithCustomCert(token, certificate);
  return NewClientWithChannelCredentials(endpoint, creds);
}

/**
 * NewClientWithChannelCredentials creates a new client for calling Authzed APIs using custom grpc ChannelCredentials.
 * @param endpoint Uri for communicating with Authzed.
 * @param creds ChannelCredentials used for grpc.
 * @returns Client for calling Authzed APIs.
 */
export function NewClientWithChannelCredentials(
  endpoint = util.authzedEndpoint,
  creds: ChannelCredentials
) {
  const acl = new PermissionsServiceClient(endpoint, creds);
  const ns = new SchemaServiceClient(endpoint, creds);
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
    Omit<PermissionsServiceClient, '_binaryOptions'> &
      Omit<SchemaServiceClient, '_binaryOptions'> &
      Omit<WatchServiceClient, '_binaryOptions'>
  >(acl as any, handler);
}

type V1Client = Omit<PermissionsServiceClient, '_binaryOptions'> &
  Omit<SchemaServiceClient, '_binaryOptions'> &
  Omit<WatchServiceClient, '_binaryOptions'>;

function promisifyStreamApi<TInput, TResult>(
  fn: (input: TInput) => TResult
): (input: TInput) => Promise<TResult> {
  return (input) => {
    return new Promise((resolve) => resolve(fn(input)));
  };
}

/**
 * Promisify converts the APIs in the input client to return promises.
 * @param client is a V1 API grpc client instance.
 * @returns A V1 grpc client that returns promisess.
 */
export function Promisify(client: V1Client) {
  return {
    writeRelationships: utilPromisify(client.writeRelationships),
    deleteRelationships: utilPromisify(client.deleteRelationships),
    expandPermissionTree: utilPromisify(client.expandPermissionTree),
    checkPermission: utilPromisify(client.checkPermission),
    readSchema: utilPromisify(client.readSchema),
    writeSchema: utilPromisify(client.writeSchema),
    readRelationships: promisifyStreamApi(client.readRelationships),
    lookupResources: promisifyStreamApi(client.lookupResources),
    lookupSubjects: promisifyStreamApi(client.lookupSubjects),
    watch: promisifyStreamApi(client.watch),
  };
}

export * from './authzedapi/authzed/api/v1/core';
export * from './authzedapi/authzed/api/v1/permission_service';
export * from './authzedapi/authzed/api/v1/schema';
export * from './authzedapi/authzed/api/v1/watch_service';
export * from './authzedapi/authzed/api/v1/watch_service.grpc-client';
export * from './authzedapi/authzed/api/v1/permission_service.grpc-client';
export * from './authzedapi/authzed/api/v1/schema.grpc-client';
export { ClientSecurity } from './util';

export default {
  NewClient: NewClient,
};
