// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var arrakisapi_api_developer_pb = require('../../arrakisapi/api/developer_pb.js');
var arrakisapi_api_core_pb = require('../../arrakisapi/api/core_pb.js');
var arrakisapi_api_namespace_pb = require('../../arrakisapi/api/namespace_pb.js');

function serialize_LookupShareRequest(arg) {
  if (!(arg instanceof arrakisapi_api_developer_pb.LookupShareRequest)) {
    throw new Error('Expected argument of type LookupShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_LookupShareRequest(buffer_arg) {
  return arrakisapi_api_developer_pb.LookupShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_LookupShareResponse(arg) {
  if (!(arg instanceof arrakisapi_api_developer_pb.LookupShareResponse)) {
    throw new Error('Expected argument of type LookupShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_LookupShareResponse(buffer_arg) {
  return arrakisapi_api_developer_pb.LookupShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ShareRequest(arg) {
  if (!(arg instanceof arrakisapi_api_developer_pb.ShareRequest)) {
    throw new Error('Expected argument of type ShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ShareRequest(buffer_arg) {
  return arrakisapi_api_developer_pb.ShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ShareResponse(arg) {
  if (!(arg instanceof arrakisapi_api_developer_pb.ShareResponse)) {
    throw new Error('Expected argument of type ShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ShareResponse(buffer_arg) {
  return arrakisapi_api_developer_pb.ShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ValidateRequest(arg) {
  if (!(arg instanceof arrakisapi_api_developer_pb.ValidateRequest)) {
    throw new Error('Expected argument of type ValidateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ValidateRequest(buffer_arg) {
  return arrakisapi_api_developer_pb.ValidateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ValidateResponse(arg) {
  if (!(arg instanceof arrakisapi_api_developer_pb.ValidateResponse)) {
    throw new Error('Expected argument of type ValidateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ValidateResponse(buffer_arg) {
  return arrakisapi_api_developer_pb.ValidateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var DeveloperServiceService = exports.DeveloperServiceService = {
  validate: {
    path: '/DeveloperService/Validate',
    requestStream: false,
    responseStream: false,
    requestType: arrakisapi_api_developer_pb.ValidateRequest,
    responseType: arrakisapi_api_developer_pb.ValidateResponse,
    requestSerialize: serialize_ValidateRequest,
    requestDeserialize: deserialize_ValidateRequest,
    responseSerialize: serialize_ValidateResponse,
    responseDeserialize: deserialize_ValidateResponse,
  },
  share: {
    path: '/DeveloperService/Share',
    requestStream: false,
    responseStream: false,
    requestType: arrakisapi_api_developer_pb.ShareRequest,
    responseType: arrakisapi_api_developer_pb.ShareResponse,
    requestSerialize: serialize_ShareRequest,
    requestDeserialize: deserialize_ShareRequest,
    responseSerialize: serialize_ShareResponse,
    responseDeserialize: deserialize_ShareResponse,
  },
  lookupShared: {
    path: '/DeveloperService/LookupShared',
    requestStream: false,
    responseStream: false,
    requestType: arrakisapi_api_developer_pb.LookupShareRequest,
    responseType: arrakisapi_api_developer_pb.LookupShareResponse,
    requestSerialize: serialize_LookupShareRequest,
    requestDeserialize: deserialize_LookupShareRequest,
    responseSerialize: serialize_LookupShareResponse,
    responseDeserialize: deserialize_LookupShareResponse,
  },
};

exports.DeveloperServiceClient = grpc.makeGenericClientConstructor(DeveloperServiceService);
