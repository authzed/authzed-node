/* eslint-disable  @typescript-eslint/no-explicit-any */
"use strict";

import { promisify } from 'util'

import { PermissionsServiceClient } from "./authzedapi/authzed/api/v1/permission_service.grpc-client";
import { SchemaServiceClient } from "./authzedapi/authzed/api/v1/schema_service.grpc-client";
import { WatchServiceClient } from "./authzedapi/authzed/api/v1/watch_service.grpc-client";
import * as grpc from "@grpc/grpc-js";


import * as util from "./util";
import { ClientSecurity, promisifyStream } from "./util";

type ZedClientInterface = Omit<PermissionsServiceClient, "_binaryOptions"> &
  Omit<SchemaServiceClient, "_binaryOptions"> &
  Omit<WatchServiceClient, "_binaryOptions">;

type ZedPromiseClientInterface = {
  [P in keyof ZedClientInterface]:
  ZedClientInterface[P] extends (p1: infer P1, p2?: infer P2, p3?: infer P3) => grpc.ClientReadableStream<infer TResult> ? (p1: P1, p2?: P2, p3?: P3) => Promise<TResult[]> :
  ZedClientInterface[P] extends (p1: infer P1, callback: (err: grpc.ServiceError | null, value?: infer TResponse) => void) => grpc.ClientUnaryCall  ? (p1: P1) => Promise<TResponse> :
  ZedClientInterface[P] extends (p1: infer P1, p2: infer P2, callback: (err: grpc.ServiceError | null, value?: infer TResponse) => void) => grpc.ClientUnaryCall  ? (p1: P1, p2: P2) => Promise<TResponse> :
  ZedClientInterface[P] extends (p1: infer P1, p2: infer P2, p3: infer P3, callback: (err: grpc.ServiceError | null, value?: infer TResponse) => void) => grpc.ClientUnaryCall  ? (p1: P1, p2: P2, p3: P3) => Promise<TResponse> :
  never;
}

type ICombinedClient = ZedClientInterface & { promises: ZedPromiseClientInterface}

const streamMethods = new Set([
  'readRelationships',
  'lookupResources',
  'lookupSubjects'
])

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
 * 
 * The combined client exposes all service-level methods at the root which directly call grpc-generated methods
 * while also exposing a `promises` object containing all promise-wrapped methods. For all methods that 
 * return a {@link ClientReadableStream}, the promise-wrapped method will return an array of the resulting responses
 * after the stream has been closed.
 * 
 * @param endpoint Uri for communicating with Authzed.
 * @param creds ChannelCredentials used for grpc.
 * @returns Client for calling Authzed APIs.
 */
export function NewClientWithChannelCredentials(
  endpoint = util.authzedEndpoint,
  creds: grpc.ChannelCredentials
): ICombinedClient {
  const proxy = createClient(endpoint, creds)
  const promiseClient = createPromiseClient(proxy)

  const fullHandler = {
    get(target: object, name: string | symbol) {
      if (name === 'promises') {
        return promiseClient
      }

      return (proxy as any)[name as string]
    }
  }

  return new Proxy({}, fullHandler) as ICombinedClient
}

/**
 * Creates the standard client_grpc1 (via @grpc/grpc-js) that will correctly
 * proxy the namespaced methods to the correct service client.
 * 
 * @param endpoint The grpc endpoing
 * @param creds The channel credentials
 * @returns A default grpc1 client
 */
function createClient(endpoint: string, creds: grpc.ChannelCredentials): ZedClientInterface {
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

  return new Proxy<ZedClientInterface>({} as ZedClientInterface, handler)
}

/**
 * Proxies all methods from the {@link ZedClientInterface} to return promises
 * in order to support async/await for {@link ClientUnaryCall} and {@link ClientReadableStream}
 * responses.
 * 
 * @param client The default grpc1 client
 * @returns A promise-wrapped grpc1 client
 */
function createPromiseClient(client: ZedClientInterface): ZedPromiseClientInterface {
  const handler = {
    get(target: object, name: string | symbol) {
      if ((client as any)[name as string]) {
        if (streamMethods.has(name as string)) {
          return promisifyStream((client as any)[name as string], client)
        }
  
        if (typeof (client as any)[name as string] === 'function') {
          return promisify((client as any)[name as string]).bind(client);
        }
  
        return (client as any)[name as string]
      }

      return undefined
    },
  };

  return new Proxy<ZedPromiseClientInterface>({} as any, handler);
}

export * from "./authzedapi/authzed/api/v1/core";
export * from "./authzedapi/authzed/api/v1/permission_service";
export * from "./authzedapi/authzed/api/v1/schema_service";
export * from "./authzedapi/authzed/api/v1/watch_service";
export * from "./authzedapi/authzed/api/v1/watch_service.grpc-client";
export * from "./authzedapi/authzed/api/v1/permission_service.grpc-client";
export * from "./authzedapi/authzed/api/v1/schema_service.grpc-client";

export { ClientSecurity } from './util';

export default {
  NewClient: NewClient,
};
