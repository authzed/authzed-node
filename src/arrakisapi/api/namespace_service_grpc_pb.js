// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var arrakisapi_api_namespace_service_pb = require('../../arrakisapi/api/namespace_service_pb.js');
var arrakisapi_api_core_pb = require('../../arrakisapi/api/core_pb.js');
var arrakisapi_api_namespace_pb = require('../../arrakisapi/api/namespace_pb.js');

function serialize_ReadConfigRequest(arg) {
  if (!(arg instanceof arrakisapi_api_namespace_service_pb.ReadConfigRequest)) {
    throw new Error('Expected argument of type ReadConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ReadConfigRequest(buffer_arg) {
  return arrakisapi_api_namespace_service_pb.ReadConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ReadConfigResponse(arg) {
  if (!(arg instanceof arrakisapi_api_namespace_service_pb.ReadConfigResponse)) {
    throw new Error('Expected argument of type ReadConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ReadConfigResponse(buffer_arg) {
  return arrakisapi_api_namespace_service_pb.ReadConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WriteConfigRequest(arg) {
  if (!(arg instanceof arrakisapi_api_namespace_service_pb.WriteConfigRequest)) {
    throw new Error('Expected argument of type WriteConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WriteConfigRequest(buffer_arg) {
  return arrakisapi_api_namespace_service_pb.WriteConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WriteConfigResponse(arg) {
  if (!(arg instanceof arrakisapi_api_namespace_service_pb.WriteConfigResponse)) {
    throw new Error('Expected argument of type WriteConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WriteConfigResponse(buffer_arg) {
  return arrakisapi_api_namespace_service_pb.WriteConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var NamespaceServiceService = exports.NamespaceServiceService = {
  readConfig: {
    path: '/NamespaceService/ReadConfig',
    requestStream: false,
    responseStream: false,
    requestType: arrakisapi_api_namespace_service_pb.ReadConfigRequest,
    responseType: arrakisapi_api_namespace_service_pb.ReadConfigResponse,
    requestSerialize: serialize_ReadConfigRequest,
    requestDeserialize: deserialize_ReadConfigRequest,
    responseSerialize: serialize_ReadConfigResponse,
    responseDeserialize: deserialize_ReadConfigResponse,
  },
  writeConfig: {
    path: '/NamespaceService/WriteConfig',
    requestStream: false,
    responseStream: false,
    requestType: arrakisapi_api_namespace_service_pb.WriteConfigRequest,
    responseType: arrakisapi_api_namespace_service_pb.WriteConfigResponse,
    requestSerialize: serialize_WriteConfigRequest,
    requestDeserialize: deserialize_WriteConfigRequest,
    responseSerialize: serialize_WriteConfigResponse,
    responseDeserialize: deserialize_WriteConfigResponse,
  },
};

exports.NamespaceServiceClient = grpc.makeGenericClientConstructor(NamespaceServiceService);
