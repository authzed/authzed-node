// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var authzed_api_v0_acl_service_pb = require('../../../authzed/api/v0/acl_service_pb.js');
var validate_validate_pb = require('../../../validate/validate_pb.js');
var authzed_api_v0_core_pb = require('../../../authzed/api/v0/core_pb.js');

function serialize_authzed_api_v0_CheckRequest(arg) {
  if (!(arg instanceof authzed_api_v0_acl_service_pb.CheckRequest)) {
    throw new Error('Expected argument of type authzed.api.v0.CheckRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v0_CheckRequest(buffer_arg) {
  return authzed_api_v0_acl_service_pb.CheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v0_CheckResponse(arg) {
  if (!(arg instanceof authzed_api_v0_acl_service_pb.CheckResponse)) {
    throw new Error('Expected argument of type authzed.api.v0.CheckResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v0_CheckResponse(buffer_arg) {
  return authzed_api_v0_acl_service_pb.CheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v0_ContentChangeCheckRequest(arg) {
  if (!(arg instanceof authzed_api_v0_acl_service_pb.ContentChangeCheckRequest)) {
    throw new Error('Expected argument of type authzed.api.v0.ContentChangeCheckRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v0_ContentChangeCheckRequest(buffer_arg) {
  return authzed_api_v0_acl_service_pb.ContentChangeCheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v0_ExpandRequest(arg) {
  if (!(arg instanceof authzed_api_v0_acl_service_pb.ExpandRequest)) {
    throw new Error('Expected argument of type authzed.api.v0.ExpandRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v0_ExpandRequest(buffer_arg) {
  return authzed_api_v0_acl_service_pb.ExpandRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v0_ExpandResponse(arg) {
  if (!(arg instanceof authzed_api_v0_acl_service_pb.ExpandResponse)) {
    throw new Error('Expected argument of type authzed.api.v0.ExpandResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v0_ExpandResponse(buffer_arg) {
  return authzed_api_v0_acl_service_pb.ExpandResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v0_LookupRequest(arg) {
  if (!(arg instanceof authzed_api_v0_acl_service_pb.LookupRequest)) {
    throw new Error('Expected argument of type authzed.api.v0.LookupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v0_LookupRequest(buffer_arg) {
  return authzed_api_v0_acl_service_pb.LookupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v0_LookupResponse(arg) {
  if (!(arg instanceof authzed_api_v0_acl_service_pb.LookupResponse)) {
    throw new Error('Expected argument of type authzed.api.v0.LookupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v0_LookupResponse(buffer_arg) {
  return authzed_api_v0_acl_service_pb.LookupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v0_ReadRequest(arg) {
  if (!(arg instanceof authzed_api_v0_acl_service_pb.ReadRequest)) {
    throw new Error('Expected argument of type authzed.api.v0.ReadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v0_ReadRequest(buffer_arg) {
  return authzed_api_v0_acl_service_pb.ReadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v0_ReadResponse(arg) {
  if (!(arg instanceof authzed_api_v0_acl_service_pb.ReadResponse)) {
    throw new Error('Expected argument of type authzed.api.v0.ReadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v0_ReadResponse(buffer_arg) {
  return authzed_api_v0_acl_service_pb.ReadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v0_WriteRequest(arg) {
  if (!(arg instanceof authzed_api_v0_acl_service_pb.WriteRequest)) {
    throw new Error('Expected argument of type authzed.api.v0.WriteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v0_WriteRequest(buffer_arg) {
  return authzed_api_v0_acl_service_pb.WriteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v0_WriteResponse(arg) {
  if (!(arg instanceof authzed_api_v0_acl_service_pb.WriteResponse)) {
    throw new Error('Expected argument of type authzed.api.v0.WriteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v0_WriteResponse(buffer_arg) {
  return authzed_api_v0_acl_service_pb.WriteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ACLServiceService = exports.ACLServiceService = {
  read: {
    path: '/authzed.api.v0.ACLService/Read',
    requestStream: false,
    responseStream: false,
    requestType: authzed_api_v0_acl_service_pb.ReadRequest,
    responseType: authzed_api_v0_acl_service_pb.ReadResponse,
    requestSerialize: serialize_authzed_api_v0_ReadRequest,
    requestDeserialize: deserialize_authzed_api_v0_ReadRequest,
    responseSerialize: serialize_authzed_api_v0_ReadResponse,
    responseDeserialize: deserialize_authzed_api_v0_ReadResponse,
  },
  write: {
    path: '/authzed.api.v0.ACLService/Write',
    requestStream: false,
    responseStream: false,
    requestType: authzed_api_v0_acl_service_pb.WriteRequest,
    responseType: authzed_api_v0_acl_service_pb.WriteResponse,
    requestSerialize: serialize_authzed_api_v0_WriteRequest,
    requestDeserialize: deserialize_authzed_api_v0_WriteRequest,
    responseSerialize: serialize_authzed_api_v0_WriteResponse,
    responseDeserialize: deserialize_authzed_api_v0_WriteResponse,
  },
  check: {
    path: '/authzed.api.v0.ACLService/Check',
    requestStream: false,
    responseStream: false,
    requestType: authzed_api_v0_acl_service_pb.CheckRequest,
    responseType: authzed_api_v0_acl_service_pb.CheckResponse,
    requestSerialize: serialize_authzed_api_v0_CheckRequest,
    requestDeserialize: deserialize_authzed_api_v0_CheckRequest,
    responseSerialize: serialize_authzed_api_v0_CheckResponse,
    responseDeserialize: deserialize_authzed_api_v0_CheckResponse,
  },
  contentChangeCheck: {
    path: '/authzed.api.v0.ACLService/ContentChangeCheck',
    requestStream: false,
    responseStream: false,
    requestType: authzed_api_v0_acl_service_pb.ContentChangeCheckRequest,
    responseType: authzed_api_v0_acl_service_pb.CheckResponse,
    requestSerialize: serialize_authzed_api_v0_ContentChangeCheckRequest,
    requestDeserialize: deserialize_authzed_api_v0_ContentChangeCheckRequest,
    responseSerialize: serialize_authzed_api_v0_CheckResponse,
    responseDeserialize: deserialize_authzed_api_v0_CheckResponse,
  },
  expand: {
    path: '/authzed.api.v0.ACLService/Expand',
    requestStream: false,
    responseStream: false,
    requestType: authzed_api_v0_acl_service_pb.ExpandRequest,
    responseType: authzed_api_v0_acl_service_pb.ExpandResponse,
    requestSerialize: serialize_authzed_api_v0_ExpandRequest,
    requestDeserialize: deserialize_authzed_api_v0_ExpandRequest,
    responseSerialize: serialize_authzed_api_v0_ExpandResponse,
    responseDeserialize: deserialize_authzed_api_v0_ExpandResponse,
  },
  lookup: {
    path: '/authzed.api.v0.ACLService/Lookup',
    requestStream: false,
    responseStream: false,
    requestType: authzed_api_v0_acl_service_pb.LookupRequest,
    responseType: authzed_api_v0_acl_service_pb.LookupResponse,
    requestSerialize: serialize_authzed_api_v0_LookupRequest,
    requestDeserialize: deserialize_authzed_api_v0_LookupRequest,
    responseSerialize: serialize_authzed_api_v0_LookupResponse,
    responseDeserialize: deserialize_authzed_api_v0_LookupResponse,
  },
};

exports.ACLServiceClient = grpc.makeGenericClientConstructor(ACLServiceService);
