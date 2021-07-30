// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var authzed_api_v0_namespace_service_pb = require('../../../authzed/api/v0/namespace_service_pb.js');
var validate_validate_pb = require('../../../validate/validate_pb.js');
var authzed_api_v0_core_pb = require('../../../authzed/api/v0/core_pb.js');
var authzed_api_v0_namespace_pb = require('../../../authzed/api/v0/namespace_pb.js');

function serialize_authzed_api_v0_ReadConfigRequest(arg) {
  if (!(arg instanceof authzed_api_v0_namespace_service_pb.ReadConfigRequest)) {
    throw new Error('Expected argument of type authzed.api.v0.ReadConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v0_ReadConfigRequest(buffer_arg) {
  return authzed_api_v0_namespace_service_pb.ReadConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v0_ReadConfigResponse(arg) {
  if (!(arg instanceof authzed_api_v0_namespace_service_pb.ReadConfigResponse)) {
    throw new Error('Expected argument of type authzed.api.v0.ReadConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v0_ReadConfigResponse(buffer_arg) {
  return authzed_api_v0_namespace_service_pb.ReadConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v0_WriteConfigRequest(arg) {
  if (!(arg instanceof authzed_api_v0_namespace_service_pb.WriteConfigRequest)) {
    throw new Error('Expected argument of type authzed.api.v0.WriteConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v0_WriteConfigRequest(buffer_arg) {
  return authzed_api_v0_namespace_service_pb.WriteConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v0_WriteConfigResponse(arg) {
  if (!(arg instanceof authzed_api_v0_namespace_service_pb.WriteConfigResponse)) {
    throw new Error('Expected argument of type authzed.api.v0.WriteConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v0_WriteConfigResponse(buffer_arg) {
  return authzed_api_v0_namespace_service_pb.WriteConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var NamespaceServiceService = exports.NamespaceServiceService = {
  readConfig: {
    path: '/authzed.api.v0.NamespaceService/ReadConfig',
    requestStream: false,
    responseStream: false,
    requestType: authzed_api_v0_namespace_service_pb.ReadConfigRequest,
    responseType: authzed_api_v0_namespace_service_pb.ReadConfigResponse,
    requestSerialize: serialize_authzed_api_v0_ReadConfigRequest,
    requestDeserialize: deserialize_authzed_api_v0_ReadConfigRequest,
    responseSerialize: serialize_authzed_api_v0_ReadConfigResponse,
    responseDeserialize: deserialize_authzed_api_v0_ReadConfigResponse,
  },
  writeConfig: {
    path: '/authzed.api.v0.NamespaceService/WriteConfig',
    requestStream: false,
    responseStream: false,
    requestType: authzed_api_v0_namespace_service_pb.WriteConfigRequest,
    responseType: authzed_api_v0_namespace_service_pb.WriteConfigResponse,
    requestSerialize: serialize_authzed_api_v0_WriteConfigRequest,
    requestDeserialize: deserialize_authzed_api_v0_WriteConfigRequest,
    responseSerialize: serialize_authzed_api_v0_WriteConfigResponse,
    responseDeserialize: deserialize_authzed_api_v0_WriteConfigResponse,
  },
};

exports.NamespaceServiceClient = grpc.makeGenericClientConstructor(NamespaceServiceService);
