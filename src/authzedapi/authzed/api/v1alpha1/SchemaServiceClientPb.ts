/**
 * @fileoverview gRPC-Web generated client stub for authzed.api.v1alpha1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as authzed_api_v1alpha1_schema_pb from '../../../authzed/api/v1alpha1/schema_pb';


export class SchemaServiceClient {
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

  methodInfoReadSchema = new grpcWeb.AbstractClientBase.MethodInfo(
    authzed_api_v1alpha1_schema_pb.ReadSchemaResponse,
    (request: authzed_api_v1alpha1_schema_pb.ReadSchemaRequest) => {
      return request.serializeBinary();
    },
    authzed_api_v1alpha1_schema_pb.ReadSchemaResponse.deserializeBinary
  );

  readSchema(
    request: authzed_api_v1alpha1_schema_pb.ReadSchemaRequest,
    metadata: grpcWeb.Metadata | null): Promise<authzed_api_v1alpha1_schema_pb.ReadSchemaResponse>;

  readSchema(
    request: authzed_api_v1alpha1_schema_pb.ReadSchemaRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: authzed_api_v1alpha1_schema_pb.ReadSchemaResponse) => void): grpcWeb.ClientReadableStream<authzed_api_v1alpha1_schema_pb.ReadSchemaResponse>;

  readSchema(
    request: authzed_api_v1alpha1_schema_pb.ReadSchemaRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: authzed_api_v1alpha1_schema_pb.ReadSchemaResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/authzed.api.v1alpha1.SchemaService/ReadSchema',
        request,
        metadata || {},
        this.methodInfoReadSchema,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/authzed.api.v1alpha1.SchemaService/ReadSchema',
    request,
    metadata || {},
    this.methodInfoReadSchema);
  }

  methodInfoWriteSchema = new grpcWeb.AbstractClientBase.MethodInfo(
    authzed_api_v1alpha1_schema_pb.WriteSchemaResponse,
    (request: authzed_api_v1alpha1_schema_pb.WriteSchemaRequest) => {
      return request.serializeBinary();
    },
    authzed_api_v1alpha1_schema_pb.WriteSchemaResponse.deserializeBinary
  );

  writeSchema(
    request: authzed_api_v1alpha1_schema_pb.WriteSchemaRequest,
    metadata: grpcWeb.Metadata | null): Promise<authzed_api_v1alpha1_schema_pb.WriteSchemaResponse>;

  writeSchema(
    request: authzed_api_v1alpha1_schema_pb.WriteSchemaRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: authzed_api_v1alpha1_schema_pb.WriteSchemaResponse) => void): grpcWeb.ClientReadableStream<authzed_api_v1alpha1_schema_pb.WriteSchemaResponse>;

  writeSchema(
    request: authzed_api_v1alpha1_schema_pb.WriteSchemaRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: authzed_api_v1alpha1_schema_pb.WriteSchemaResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/authzed.api.v1alpha1.SchemaService/WriteSchema',
        request,
        metadata || {},
        this.methodInfoWriteSchema,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/authzed.api.v1alpha1.SchemaService/WriteSchema',
    request,
    metadata || {},
    this.methodInfoWriteSchema);
  }

}

