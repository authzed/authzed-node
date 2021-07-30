// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var authzed_api_v0_developer_pb = require('../../../authzed/api/v0/developer_pb.js');
var authzed_api_v0_core_pb = require('../../../authzed/api/v0/core_pb.js');
var authzed_api_v0_namespace_pb = require('../../../authzed/api/v0/namespace_pb.js');

function serialize_authzed_api_v0_EditCheckRequest(arg) {
  if (!(arg instanceof authzed_api_v0_developer_pb.EditCheckRequest)) {
    throw new Error('Expected argument of type authzed.api.v0.EditCheckRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v0_EditCheckRequest(buffer_arg) {
  return authzed_api_v0_developer_pb.EditCheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v0_EditCheckResponse(arg) {
  if (!(arg instanceof authzed_api_v0_developer_pb.EditCheckResponse)) {
    throw new Error('Expected argument of type authzed.api.v0.EditCheckResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v0_EditCheckResponse(buffer_arg) {
  return authzed_api_v0_developer_pb.EditCheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v0_LookupShareRequest(arg) {
  if (!(arg instanceof authzed_api_v0_developer_pb.LookupShareRequest)) {
    throw new Error('Expected argument of type authzed.api.v0.LookupShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v0_LookupShareRequest(buffer_arg) {
  return authzed_api_v0_developer_pb.LookupShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v0_LookupShareResponse(arg) {
  if (!(arg instanceof authzed_api_v0_developer_pb.LookupShareResponse)) {
    throw new Error('Expected argument of type authzed.api.v0.LookupShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v0_LookupShareResponse(buffer_arg) {
  return authzed_api_v0_developer_pb.LookupShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v0_ShareRequest(arg) {
  if (!(arg instanceof authzed_api_v0_developer_pb.ShareRequest)) {
    throw new Error('Expected argument of type authzed.api.v0.ShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v0_ShareRequest(buffer_arg) {
  return authzed_api_v0_developer_pb.ShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v0_ShareResponse(arg) {
  if (!(arg instanceof authzed_api_v0_developer_pb.ShareResponse)) {
    throw new Error('Expected argument of type authzed.api.v0.ShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v0_ShareResponse(buffer_arg) {
  return authzed_api_v0_developer_pb.ShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v0_UpgradeSchemaRequest(arg) {
  if (!(arg instanceof authzed_api_v0_developer_pb.UpgradeSchemaRequest)) {
    throw new Error('Expected argument of type authzed.api.v0.UpgradeSchemaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v0_UpgradeSchemaRequest(buffer_arg) {
  return authzed_api_v0_developer_pb.UpgradeSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v0_UpgradeSchemaResponse(arg) {
  if (!(arg instanceof authzed_api_v0_developer_pb.UpgradeSchemaResponse)) {
    throw new Error('Expected argument of type authzed.api.v0.UpgradeSchemaResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v0_UpgradeSchemaResponse(buffer_arg) {
  return authzed_api_v0_developer_pb.UpgradeSchemaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v0_ValidateRequest(arg) {
  if (!(arg instanceof authzed_api_v0_developer_pb.ValidateRequest)) {
    throw new Error('Expected argument of type authzed.api.v0.ValidateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v0_ValidateRequest(buffer_arg) {
  return authzed_api_v0_developer_pb.ValidateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v0_ValidateResponse(arg) {
  if (!(arg instanceof authzed_api_v0_developer_pb.ValidateResponse)) {
    throw new Error('Expected argument of type authzed.api.v0.ValidateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v0_ValidateResponse(buffer_arg) {
  return authzed_api_v0_developer_pb.ValidateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var DeveloperServiceService = exports.DeveloperServiceService = {
  editCheck: {
    path: '/authzed.api.v0.DeveloperService/EditCheck',
    requestStream: false,
    responseStream: false,
    requestType: authzed_api_v0_developer_pb.EditCheckRequest,
    responseType: authzed_api_v0_developer_pb.EditCheckResponse,
    requestSerialize: serialize_authzed_api_v0_EditCheckRequest,
    requestDeserialize: deserialize_authzed_api_v0_EditCheckRequest,
    responseSerialize: serialize_authzed_api_v0_EditCheckResponse,
    responseDeserialize: deserialize_authzed_api_v0_EditCheckResponse,
  },
  validate: {
    path: '/authzed.api.v0.DeveloperService/Validate',
    requestStream: false,
    responseStream: false,
    requestType: authzed_api_v0_developer_pb.ValidateRequest,
    responseType: authzed_api_v0_developer_pb.ValidateResponse,
    requestSerialize: serialize_authzed_api_v0_ValidateRequest,
    requestDeserialize: deserialize_authzed_api_v0_ValidateRequest,
    responseSerialize: serialize_authzed_api_v0_ValidateResponse,
    responseDeserialize: deserialize_authzed_api_v0_ValidateResponse,
  },
  share: {
    path: '/authzed.api.v0.DeveloperService/Share',
    requestStream: false,
    responseStream: false,
    requestType: authzed_api_v0_developer_pb.ShareRequest,
    responseType: authzed_api_v0_developer_pb.ShareResponse,
    requestSerialize: serialize_authzed_api_v0_ShareRequest,
    requestDeserialize: deserialize_authzed_api_v0_ShareRequest,
    responseSerialize: serialize_authzed_api_v0_ShareResponse,
    responseDeserialize: deserialize_authzed_api_v0_ShareResponse,
  },
  lookupShared: {
    path: '/authzed.api.v0.DeveloperService/LookupShared',
    requestStream: false,
    responseStream: false,
    requestType: authzed_api_v0_developer_pb.LookupShareRequest,
    responseType: authzed_api_v0_developer_pb.LookupShareResponse,
    requestSerialize: serialize_authzed_api_v0_LookupShareRequest,
    requestDeserialize: deserialize_authzed_api_v0_LookupShareRequest,
    responseSerialize: serialize_authzed_api_v0_LookupShareResponse,
    responseDeserialize: deserialize_authzed_api_v0_LookupShareResponse,
  },
  upgradeSchema: {
    path: '/authzed.api.v0.DeveloperService/UpgradeSchema',
    requestStream: false,
    responseStream: false,
    requestType: authzed_api_v0_developer_pb.UpgradeSchemaRequest,
    responseType: authzed_api_v0_developer_pb.UpgradeSchemaResponse,
    requestSerialize: serialize_authzed_api_v0_UpgradeSchemaRequest,
    requestDeserialize: deserialize_authzed_api_v0_UpgradeSchemaRequest,
    responseSerialize: serialize_authzed_api_v0_UpgradeSchemaResponse,
    responseDeserialize: deserialize_authzed_api_v0_UpgradeSchemaResponse,
  },
};

exports.DeveloperServiceClient = grpc.makeGenericClientConstructor(DeveloperServiceService);
