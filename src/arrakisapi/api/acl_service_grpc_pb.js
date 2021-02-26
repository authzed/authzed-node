// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var arrakisapi_api_acl_service_pb = require('../../arrakisapi/api/acl_service_pb.js');
var arrakisapi_api_core_pb = require('../../arrakisapi/api/core_pb.js');

function serialize_CheckRequest(arg) {
  if (!(arg instanceof arrakisapi_api_acl_service_pb.CheckRequest)) {
    throw new Error('Expected argument of type CheckRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CheckRequest(buffer_arg) {
  return arrakisapi_api_acl_service_pb.CheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CheckResponse(arg) {
  if (!(arg instanceof arrakisapi_api_acl_service_pb.CheckResponse)) {
    throw new Error('Expected argument of type CheckResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CheckResponse(buffer_arg) {
  return arrakisapi_api_acl_service_pb.CheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ContentChangeCheckRequest(arg) {
  if (!(arg instanceof arrakisapi_api_acl_service_pb.ContentChangeCheckRequest)) {
    throw new Error('Expected argument of type ContentChangeCheckRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ContentChangeCheckRequest(buffer_arg) {
  return arrakisapi_api_acl_service_pb.ContentChangeCheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ExpandRequest(arg) {
  if (!(arg instanceof arrakisapi_api_acl_service_pb.ExpandRequest)) {
    throw new Error('Expected argument of type ExpandRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ExpandRequest(buffer_arg) {
  return arrakisapi_api_acl_service_pb.ExpandRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ExpandResponse(arg) {
  if (!(arg instanceof arrakisapi_api_acl_service_pb.ExpandResponse)) {
    throw new Error('Expected argument of type ExpandResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ExpandResponse(buffer_arg) {
  return arrakisapi_api_acl_service_pb.ExpandResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ReadRequest(arg) {
  if (!(arg instanceof arrakisapi_api_acl_service_pb.ReadRequest)) {
    throw new Error('Expected argument of type ReadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ReadRequest(buffer_arg) {
  return arrakisapi_api_acl_service_pb.ReadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ReadResponse(arg) {
  if (!(arg instanceof arrakisapi_api_acl_service_pb.ReadResponse)) {
    throw new Error('Expected argument of type ReadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ReadResponse(buffer_arg) {
  return arrakisapi_api_acl_service_pb.ReadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WriteRequest(arg) {
  if (!(arg instanceof arrakisapi_api_acl_service_pb.WriteRequest)) {
    throw new Error('Expected argument of type WriteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WriteRequest(buffer_arg) {
  return arrakisapi_api_acl_service_pb.WriteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WriteResponse(arg) {
  if (!(arg instanceof arrakisapi_api_acl_service_pb.WriteResponse)) {
    throw new Error('Expected argument of type WriteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WriteResponse(buffer_arg) {
  return arrakisapi_api_acl_service_pb.WriteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ACLServiceService = exports.ACLServiceService = {
  read: {
    path: '/ACLService/Read',
    requestStream: false,
    responseStream: false,
    requestType: arrakisapi_api_acl_service_pb.ReadRequest,
    responseType: arrakisapi_api_acl_service_pb.ReadResponse,
    requestSerialize: serialize_ReadRequest,
    requestDeserialize: deserialize_ReadRequest,
    responseSerialize: serialize_ReadResponse,
    responseDeserialize: deserialize_ReadResponse,
  },
  write: {
    path: '/ACLService/Write',
    requestStream: false,
    responseStream: false,
    requestType: arrakisapi_api_acl_service_pb.WriteRequest,
    responseType: arrakisapi_api_acl_service_pb.WriteResponse,
    requestSerialize: serialize_WriteRequest,
    requestDeserialize: deserialize_WriteRequest,
    responseSerialize: serialize_WriteResponse,
    responseDeserialize: deserialize_WriteResponse,
  },
  check: {
    path: '/ACLService/Check',
    requestStream: false,
    responseStream: false,
    requestType: arrakisapi_api_acl_service_pb.CheckRequest,
    responseType: arrakisapi_api_acl_service_pb.CheckResponse,
    requestSerialize: serialize_CheckRequest,
    requestDeserialize: deserialize_CheckRequest,
    responseSerialize: serialize_CheckResponse,
    responseDeserialize: deserialize_CheckResponse,
  },
  contentChangeCheck: {
    path: '/ACLService/ContentChangeCheck',
    requestStream: false,
    responseStream: false,
    requestType: arrakisapi_api_acl_service_pb.ContentChangeCheckRequest,
    responseType: arrakisapi_api_acl_service_pb.CheckResponse,
    requestSerialize: serialize_ContentChangeCheckRequest,
    requestDeserialize: deserialize_ContentChangeCheckRequest,
    responseSerialize: serialize_CheckResponse,
    responseDeserialize: deserialize_CheckResponse,
  },
  expand: {
    path: '/ACLService/Expand',
    requestStream: false,
    responseStream: false,
    requestType: arrakisapi_api_acl_service_pb.ExpandRequest,
    responseType: arrakisapi_api_acl_service_pb.ExpandResponse,
    requestSerialize: serialize_ExpandRequest,
    requestDeserialize: deserialize_ExpandRequest,
    responseSerialize: serialize_ExpandResponse,
    responseDeserialize: deserialize_ExpandResponse,
  },
};

exports.ACLServiceClient = grpc.makeGenericClientConstructor(ACLServiceService);
