// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var authzed_api_v1_schema_pb = require('../../../authzed/api/v1/schema_pb.js');
var validate_validate_pb = require('../../../validate/validate_pb.js');

function serialize_authzed_api_v1_ReadSchemaRequest(arg) {
  if (!(arg instanceof authzed_api_v1_schema_pb.ReadSchemaRequest)) {
    throw new Error('Expected argument of type authzed.api.v1.ReadSchemaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v1_ReadSchemaRequest(buffer_arg) {
  return authzed_api_v1_schema_pb.ReadSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v1_ReadSchemaResponse(arg) {
  if (!(arg instanceof authzed_api_v1_schema_pb.ReadSchemaResponse)) {
    throw new Error('Expected argument of type authzed.api.v1.ReadSchemaResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v1_ReadSchemaResponse(buffer_arg) {
  return authzed_api_v1_schema_pb.ReadSchemaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v1_WriteSchemaRequest(arg) {
  if (!(arg instanceof authzed_api_v1_schema_pb.WriteSchemaRequest)) {
    throw new Error('Expected argument of type authzed.api.v1.WriteSchemaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v1_WriteSchemaRequest(buffer_arg) {
  return authzed_api_v1_schema_pb.WriteSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v1_WriteSchemaResponse(arg) {
  if (!(arg instanceof authzed_api_v1_schema_pb.WriteSchemaResponse)) {
    throw new Error('Expected argument of type authzed.api.v1.WriteSchemaResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v1_WriteSchemaResponse(buffer_arg) {
  return authzed_api_v1_schema_pb.WriteSchemaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// SchemaService implements operations on a Permissions System's Schema.
var SchemaServiceService = exports.SchemaServiceService = {
  // Read returns the current Object Definitions for a Permissions System.
//
// Errors include:
// - INVALID_ARGUMENT: a provided value has failed to semantically validate
// - NOT_FOUND: no schema has been defined
readSchema: {
    path: '/authzed.api.v1.SchemaService/ReadSchema',
    requestStream: false,
    responseStream: false,
    requestType: authzed_api_v1_schema_pb.ReadSchemaRequest,
    responseType: authzed_api_v1_schema_pb.ReadSchemaResponse,
    requestSerialize: serialize_authzed_api_v1_ReadSchemaRequest,
    requestDeserialize: deserialize_authzed_api_v1_ReadSchemaRequest,
    responseSerialize: serialize_authzed_api_v1_ReadSchemaResponse,
    responseDeserialize: deserialize_authzed_api_v1_ReadSchemaResponse,
  },
  // Write overwrites the current Object Definitions for a Permissions System.
writeSchema: {
    path: '/authzed.api.v1.SchemaService/WriteSchema',
    requestStream: false,
    responseStream: false,
    requestType: authzed_api_v1_schema_pb.WriteSchemaRequest,
    responseType: authzed_api_v1_schema_pb.WriteSchemaResponse,
    requestSerialize: serialize_authzed_api_v1_WriteSchemaRequest,
    requestDeserialize: deserialize_authzed_api_v1_WriteSchemaRequest,
    responseSerialize: serialize_authzed_api_v1_WriteSchemaResponse,
    responseDeserialize: deserialize_authzed_api_v1_WriteSchemaResponse,
  },
};

exports.SchemaServiceClient = grpc.makeGenericClientConstructor(SchemaServiceService);
