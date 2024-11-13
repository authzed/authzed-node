/* eslint-disable  @typescript-eslint/no-explicit-any */
"use strict";

import { promisify } from "util";

import * as grpc from "@grpc/grpc-js";
import { ExperimentalServiceClient } from './authzedapi/authzed/api/v1/experimental_service.grpc-client';
import { PermissionsServiceClient } from './authzedapi/authzed/api/v1/permission_service.grpc-client';
import { SchemaServiceClient } from './authzedapi/authzed/api/v1/schema_service.grpc-client';
import { WatchServiceClient } from './authzedapi/authzed/api/v1/watch_service.grpc-client';
import * as util from './util';
import {
  ClientSecurity,
  PreconnectServices,
  deadlineInterceptor,
  promisifyStream,
} from './util';

import type { OmitBaseMethods, PromisifiedClient } from './types';

// A merge of the three generated gRPC clients, with their base methods omitted
export type ZedDefaultClientInterface = OmitBaseMethods<
  PermissionsServiceClient,
  grpc.Client
> &
  OmitBaseMethods<SchemaServiceClient, grpc.Client> &
  OmitBaseMethods<WatchServiceClient, grpc.Client> &
  OmitBaseMethods<ExperimentalServiceClient, grpc.Client> &
  Pick<grpc.Client, 'close'>;

// The promisified version of the interface
export type ZedPromiseClientInterface =
  PromisifiedClient<PermissionsServiceClient> &
    PromisifiedClient<SchemaServiceClient> &
    PromisifiedClient<WatchServiceClient> &
    PromisifiedClient<ExperimentalServiceClient> &
    Pick<ZedDefaultClientInterface, 'close'>;

// A combined client containing the root gRPC client methods and a promisified set at a "promises" key
export type ZedClientInterface = ZedDefaultClientInterface & {
  promises: ZedPromiseClientInterface;
};

const DEFAULT_DEADLINE_MS = 30 * 1000; // 30 seconds

/**
 * A standard client (via @grpc/grpc-js) that will correctly
 * proxy the namespaced methods to the correct service client.
 */
class ZedClient implements ProxyHandler<ZedDefaultClientInterface> {
  private acl: PermissionsServiceClient | undefined;
  private ns: SchemaServiceClient | undefined;
  private watch: WatchServiceClient | undefined;
  private experimental: ExperimentalServiceClient | undefined;
  private options: grpc.ClientOptions;

  constructor(
    private endpoint: string,
    private creds: grpc.ChannelCredentials,
    preconnect: PreconnectServices,
    options: grpc.ClientOptions | undefined
  ) {
    this.options = {
      ...(options ?? {}),
      interceptors: [
        ...(options?.interceptors ?? []),

        // We put this interceptor last because it checks if the deadline is already
        // set and, if so, does not overwrite it.
        deadlineInterceptor(DEFAULT_DEADLINE_MS),
      ],
    };

    if (preconnect & PreconnectServices.PERMISSIONS_SERVICE) {
      this.acl = new PermissionsServiceClient(
        this.endpoint,
        this.creds,
        options
      );
    }
    if (preconnect & PreconnectServices.SCHEMA_SERVICE) {
      this.ns = new SchemaServiceClient(this.endpoint, this.creds, options);
    }
    if (preconnect & PreconnectServices.WATCH_SERVICE) {
      this.watch = new WatchServiceClient(this.endpoint, this.creds, options);
    }
    if (preconnect & PreconnectServices.EXPERIMENTAL_SERVICE) {
      this.experimental = new ExperimentalServiceClient(
        this.endpoint,
        this.creds,
        options
      );
    }
  }

  static create(
    endpoint: string,
    creds: grpc.ChannelCredentials,
    preconnect: PreconnectServices,
    options: grpc.ClientOptions | undefined
  ) {
    return new Proxy(
      {} as any,
      new ZedClient(endpoint, creds, preconnect, options)
    );
  }

  close = () => {
    [this.acl, this.ns, this.watch, this.experimental].forEach((client) =>
      client?.close()
    );
  };

  get(_target: object, name: string | symbol) {
    if (name === 'close') {
      return this.close;
    }

    // If the name is a symbol, pass it to the underlying gRPC code.
    // NOTE: it doesn't really matter to which client we give symbols, so just
    // pick ACL by default since its the most likely be used.
    if (typeof name === 'symbol') {
      if (this.acl === undefined) {
        this.acl = new PermissionsServiceClient(
          this.endpoint,
          this.creds,
          this.options
        );
      }

      return (this.acl as any)[name];
    }

    // Otherwise, lazily instantiate the client based on the method requested.
    if (name in PermissionsServiceClient.prototype) {
      if (this.acl === undefined) {
        this.acl = new PermissionsServiceClient(
          this.endpoint,
          this.creds,
          this.options
        );
      }

      return (this.acl as any)[name];
    }

    if (name in SchemaServiceClient.prototype) {
      if (this.ns === undefined) {
        this.ns = new SchemaServiceClient(
          this.endpoint,
          this.creds,
          this.options
        );
      }

      return (this.ns as any)[name as string];
    }

    if (name in WatchServiceClient.prototype) {
      if (this.watch === undefined) {
        this.watch = new WatchServiceClient(
          this.endpoint,
          this.creds,
          this.options
        );
      }

      return (this.watch as any)[name];
    }

    if (name in ExperimentalServiceClient.prototype) {
      if (this.experimental === undefined) {
        this.experimental = new ExperimentalServiceClient(
          this.endpoint,
          this.creds,
          this.options
        );
      }

      return (this.experimental as any)[name];
    }

    return undefined;
  }
}

/**
 * Proxies all methods from the {@link ZedDefaultClientInterface} to return promises
 * in order to support async/await for {@link ClientUnaryCall} and {@link ClientReadableStream}
 * responses. Methods that normally return an instance of stream, will instead return an
 * array of objects collected while the stream was open.
 *
 * @param client The default grpc1 client
 * @returns A promise-wrapped grpc1 client
 */
class ZedPromiseClient implements ProxyHandler<ZedPromiseClientInterface> {
  private client: ZedDefaultClientInterface;
  private promiseCache: Record<string, any> = {};
  private streamMethods = new Set([
    'readRelationships',
    'lookupResources',
    'lookupSubjects',
    'bulkExportRelationships',
    'exportBulkRelationships',
  ]);
  private writableStreamMethods = new Set(['bulkImportRelationships', 'importBulkRelationships']);

  constructor(client: ZedDefaultClientInterface) {
    this.client = client;
  }

  static create(client: ZedDefaultClientInterface) {
    return new Proxy({} as any, new ZedPromiseClient(client));
  }

  get(_target: Record<string, any>, name: string | symbol) {
    if (!(name in this.promiseCache)) {
      const clientMethod = (this.client as any)[name as string];
      if (clientMethod !== undefined) {
        if (this.streamMethods.has(name as string)) {
          this.promiseCache[name as string] = promisifyStream(
            clientMethod,
            this.client
          );
        } else if (this.writableStreamMethods.has(name as string)) {
          this.promiseCache[name as string] = clientMethod.bind(this.client);
        } else if (typeof clientMethod === 'function') {
          this.promiseCache[name as string] = promisify(
            (this.client as any)[name as string]
          ).bind(this.client);
        } else {
          return clientMethod;
        }
      }
    }

    return this.promiseCache[name as string];
  }
}

/**
 * The {@link ZedCombinedClient} proxies both callback/promise-style methods to the underlying
 * {@link ZedClient} and {@link ZedPromiseClient} instances. Direct method calls on the combined
 * client will result in calling the underlying callback methods (the generated gRPC methods) while
 * the same methods accessed at a sub-path `.promises.<method>` will result in the promise-wrapped
 * methods.
 */
class ZedCombinedClient implements ProxyHandler<ZedCombinedClient> {
  private client: ZedDefaultClientInterface;
  private promiseClient: ZedPromiseClientInterface;

  constructor(
    client: ZedDefaultClientInterface,
    promiseClient: ZedPromiseClientInterface
  ) {
    this.client = client;
    this.promiseClient = promiseClient;
  }

  static create(
    endpoint: string,
    creds: grpc.ChannelCredentials,
    preconnect: util.PreconnectServices,
    options: grpc.ClientOptions | undefined
  ) {
    const client = ZedClient.create(endpoint, creds, preconnect, options);
    const promiseClient = ZedPromiseClient.create(client);
    return new Proxy({} as any, new ZedCombinedClient(client, promiseClient));
  }

  get(_target: object, name: string | symbol) {
    if (name === 'promises') {
      return this.promiseClient;
    }

    return (this.client as any)[name as string];
  }
}

/**
 * NewClient creates a new client for calling Authzed APIs.
 * @param token Secret token for authentication.
 * @param endpoint Uri for communicating with Authzed.
 * @param security Security level for the connection.
 * @param preconnect The services to which the client will preconnect.
 *    All others will open a connection when first used.
 * @returns Client for calling Authzed APIs.
 */
export function NewClient(
  token: string,
  endpoint = util.authzedEndpoint,
  security: ClientSecurity = ClientSecurity.SECURE,
  preconnect: PreconnectServices = PreconnectServices.PERMISSIONS_SERVICE,
  options: grpc.ClientOptions | undefined = undefined
) {
  const creds = util.createClientCreds(endpoint, token, security);
  return NewClientWithChannelCredentials(endpoint, creds, preconnect, options);
}

/**
 * NewClientWithCustomCert creates a new client for calling Authzed APIs using a custom TLS certificate.
 * @param token Secret token for authentication.
 * @param endpoint Uri for communicating with Authzed.
 * @param certificate Buffer read from certificate file.
 * @param preconnect The services to which the client will preconnect.
 *    All others will open a connection when first used.
 * @returns Client for calling Authzed APIs.
 */
export function NewClientWithCustomCert(
  token: string,
  endpoint = util.authzedEndpoint,
  certificate: Buffer,
  preconnect: PreconnectServices = PreconnectServices.PERMISSIONS_SERVICE,
  options: grpc.ClientOptions | undefined = undefined
) {
  const creds = util.createClientCredsWithCustomCert(token, certificate);
  return NewClientWithChannelCredentials(endpoint, creds, preconnect, options);
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
 * @param preconnect The services to which the client will preconnect.
 *    All others will open a connection when first used.
 * @returns Client for calling Authzed APIs.
 */
export function NewClientWithChannelCredentials(
  endpoint = util.authzedEndpoint,
  creds: grpc.ChannelCredentials,
  preconnect: PreconnectServices = PreconnectServices.PERMISSIONS_SERVICE,
  options: grpc.ClientOptions | undefined = undefined
): ZedClientInterface {
  return ZedCombinedClient.create(endpoint, creds, preconnect, options);
}

export * from './authzedapi/authzed/api/v1/core';
export * from './authzedapi/authzed/api/v1/experimental_service';
export * from './authzedapi/authzed/api/v1/experimental_service.grpc-client';
export * from './authzedapi/authzed/api/v1/permission_service';
export * from './authzedapi/authzed/api/v1/permission_service.grpc-client';
export * from './authzedapi/authzed/api/v1/schema_service';
export * from './authzedapi/authzed/api/v1/schema_service.grpc-client';
export * from './authzedapi/authzed/api/v1/watch_service';
export * from './authzedapi/authzed/api/v1/watch_service.grpc-client';
export { ClientSecurity } from "./util";

export default {
  NewClient: NewClient,
};
