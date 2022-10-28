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

type CombinedClientInterface = ZedClientInterface & { promises: ZedPromiseClientInterface}

/**
 * A standard client (via @grpc/grpc-js) that will correctly
 * proxy the namespaced methods to the correct service client.
 */
class ZedClient implements ProxyHandler<ZedClientInterface> {
  private acl: PermissionsServiceClient
  private ns: SchemaServiceClient
  private watch: WatchServiceClient

  constructor(endpoint: string, creds: grpc.ChannelCredentials) {
    this.acl = new PermissionsServiceClient(endpoint, creds);
    this.ns = new SchemaServiceClient(endpoint, creds);
    this.watch = new WatchServiceClient(endpoint, creds);
  }

  static create(endpoint: string, creds: grpc.ChannelCredentials) {
    return new Proxy({} as any, new ZedClient(endpoint, creds))
  }

  get(_target: object, name: string | symbol) {
    if ((this.acl as any)[name as string]) {
      return (this.acl as any)[name as string];
    }

    if ((this.ns as any)[name as string]) {
      return (this.ns as any)[name as string];
    }

    if ((this.watch as any)[name as string]) {
      return (this.watch as any)[name as string];
    }

    return undefined;
  }
}

/**
 * Proxies all methods from the {@link ZedClientInterface} to return promises
 * in order to support async/await for {@link ClientUnaryCall} and {@link ClientReadableStream}
 * responses. Methods that normally return an instance of stream, will instead return an 
 * array of objects collected while the stream was open.
 * 
 * @param client The default grpc1 client
 * @returns A promise-wrapped grpc1 client
 */
class ZedPromiseClient implements ProxyHandler<ZedPromiseClientInterface>{
  private client: ZedClientInterface
  private promiseCache: Record<string, any> = {}
  private streamMethods = new Set([
    'readRelationships',
    'lookupResources',
    'lookupSubjects'
  ])

  constructor(client: ZedClientInterface) {
    this.client = client
  }

  static create(client: ZedClientInterface) {
    return new Proxy({} as any, new ZedPromiseClient(client))
  }

  get(_target: Record<string, any>, name: string | symbol) {
    if (!(name in this.promiseCache)) {
      const clientMethod = (this.client as any)[name as string]
      if (clientMethod !== undefined) {
        if (this.streamMethods.has(name as string)) {
          this.promiseCache[name as string] = promisifyStream(clientMethod, this.client)
        } else if (typeof clientMethod === 'function') {
          this.promiseCache[name as string] = promisify((this.client as any)[name as string]).bind(this.client)
        } else {
          return clientMethod
        }
      }
    }

    return this.promiseCache[name as string]
  }
}

/**
 * The {@link ZedCombinedClient} proxies both callback/promise-style methods to the underlying
 * {@link ZedClient} and {@link ZedPromiseClient} instances. Direct method calls on the combined
 * client will result in calling the underlying callback methods (the generated gRPC methods) while
 * the same methods accessed at a sub-path `.promises.<method>` will result in the promise-wrapped
 * methods.
 */
class ZedCombinedClient implements ProxyHandler<ZedCombinedClient>{
  private client: ZedClientInterface
  private promiseClient: ZedPromiseClientInterface

  constructor(client: ZedClientInterface, promiseClient: ZedPromiseClientInterface) {
    this.client = client
    this.promiseClient = promiseClient
  }

  static create(endpoint: string, creds: grpc.ChannelCredentials) {
    const client = ZedClient.create(endpoint, creds)
    const promiseClient = ZedPromiseClient.create(client)

    return new Proxy({} as any, new ZedCombinedClient(client, promiseClient))
  }

  get(_target: object, name: string | symbol) {
    if (name === 'promises') {
      return this.promiseClient
    }

    return (this.client as any)[name as string]
  }
}

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
 The {@link ZedCombinedClient} proxies both callback/promise-style methods to the underlying
 * {@link ZedClient} and {@link ZedPromiseClient} instances. Direct method calls on the combined
 * client will result in calling the underlying callback methods (the generated gRPC methods) while
 * the same methods accessed at a sub-path `.promises.<method>` will result in the promise-wrapped
 * methods. For all methods that return a {@link ClientReadableStream}, the promise-wrapped method 
 * will return an array of the resulting responses after the stream has been closed.
 * 
 * @param endpoint Uri for communicating with Authzed.
 * @param creds ChannelCredentials used for grpc.
 * @returns Client for calling Authzed APIs.
 */
export function NewClientWithChannelCredentials(
  endpoint = util.authzedEndpoint,
  creds: grpc.ChannelCredentials
): CombinedClientInterface {
  return ZedCombinedClient.create(endpoint, creds)
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
