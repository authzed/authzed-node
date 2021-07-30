/**
 * @fileoverview gRPC-Web generated client stub for authzed.api.v0
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as authzed_api_v0_namespace_service_pb from '../../../authzed/api/v0/namespace_service_pb';


export class NamespaceServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoReadConfig = new grpcWeb.AbstractClientBase.MethodInfo(
    authzed_api_v0_namespace_service_pb.ReadConfigResponse,
    (request: authzed_api_v0_namespace_service_pb.ReadConfigRequest) => {
      return request.serializeBinary();
    },
    authzed_api_v0_namespace_service_pb.ReadConfigResponse.deserializeBinary
  );

  readConfig(
    request: authzed_api_v0_namespace_service_pb.ReadConfigRequest,
    metadata: grpcWeb.Metadata | null): Promise<authzed_api_v0_namespace_service_pb.ReadConfigResponse>;

  readConfig(
    request: authzed_api_v0_namespace_service_pb.ReadConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: authzed_api_v0_namespace_service_pb.ReadConfigResponse) => void): grpcWeb.ClientReadableStream<authzed_api_v0_namespace_service_pb.ReadConfigResponse>;

  readConfig(
    request: authzed_api_v0_namespace_service_pb.ReadConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: authzed_api_v0_namespace_service_pb.ReadConfigResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/authzed.api.v0.NamespaceService/ReadConfig',
        request,
        metadata || {},
        this.methodInfoReadConfig,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/authzed.api.v0.NamespaceService/ReadConfig',
    request,
    metadata || {},
    this.methodInfoReadConfig);
  }

  methodInfoWriteConfig = new grpcWeb.AbstractClientBase.MethodInfo(
    authzed_api_v0_namespace_service_pb.WriteConfigResponse,
    (request: authzed_api_v0_namespace_service_pb.WriteConfigRequest) => {
      return request.serializeBinary();
    },
    authzed_api_v0_namespace_service_pb.WriteConfigResponse.deserializeBinary
  );

  writeConfig(
    request: authzed_api_v0_namespace_service_pb.WriteConfigRequest,
    metadata: grpcWeb.Metadata | null): Promise<authzed_api_v0_namespace_service_pb.WriteConfigResponse>;

  writeConfig(
    request: authzed_api_v0_namespace_service_pb.WriteConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: authzed_api_v0_namespace_service_pb.WriteConfigResponse) => void): grpcWeb.ClientReadableStream<authzed_api_v0_namespace_service_pb.WriteConfigResponse>;

  writeConfig(
    request: authzed_api_v0_namespace_service_pb.WriteConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: authzed_api_v0_namespace_service_pb.WriteConfigResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/authzed.api.v0.NamespaceService/WriteConfig',
        request,
        metadata || {},
        this.methodInfoWriteConfig,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/authzed.api.v0.NamespaceService/WriteConfig',
    request,
    metadata || {},
    this.methodInfoWriteConfig);
  }

}

