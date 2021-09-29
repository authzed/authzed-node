// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var authzed_api_v1_permission_service_pb = require('../../../authzed/api/v1/permission_service_pb.js');
var validate_validate_pb = require('../../../validate/validate_pb.js');
var authzed_api_v1_core_pb = require('../../../authzed/api/v1/core_pb.js');

function serialize_authzed_api_v1_CheckPermissionRequest(arg) {
  if (!(arg instanceof authzed_api_v1_permission_service_pb.CheckPermissionRequest)) {
    throw new Error('Expected argument of type authzed.api.v1.CheckPermissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v1_CheckPermissionRequest(buffer_arg) {
  return authzed_api_v1_permission_service_pb.CheckPermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v1_CheckPermissionResponse(arg) {
  if (!(arg instanceof authzed_api_v1_permission_service_pb.CheckPermissionResponse)) {
    throw new Error('Expected argument of type authzed.api.v1.CheckPermissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v1_CheckPermissionResponse(buffer_arg) {
  return authzed_api_v1_permission_service_pb.CheckPermissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v1_DeleteRelationshipsRequest(arg) {
  if (!(arg instanceof authzed_api_v1_permission_service_pb.DeleteRelationshipsRequest)) {
    throw new Error('Expected argument of type authzed.api.v1.DeleteRelationshipsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v1_DeleteRelationshipsRequest(buffer_arg) {
  return authzed_api_v1_permission_service_pb.DeleteRelationshipsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v1_DeleteRelationshipsResponse(arg) {
  if (!(arg instanceof authzed_api_v1_permission_service_pb.DeleteRelationshipsResponse)) {
    throw new Error('Expected argument of type authzed.api.v1.DeleteRelationshipsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v1_DeleteRelationshipsResponse(buffer_arg) {
  return authzed_api_v1_permission_service_pb.DeleteRelationshipsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v1_ExpandPermissionTreeRequest(arg) {
  if (!(arg instanceof authzed_api_v1_permission_service_pb.ExpandPermissionTreeRequest)) {
    throw new Error('Expected argument of type authzed.api.v1.ExpandPermissionTreeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v1_ExpandPermissionTreeRequest(buffer_arg) {
  return authzed_api_v1_permission_service_pb.ExpandPermissionTreeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v1_ExpandPermissionTreeResponse(arg) {
  if (!(arg instanceof authzed_api_v1_permission_service_pb.ExpandPermissionTreeResponse)) {
    throw new Error('Expected argument of type authzed.api.v1.ExpandPermissionTreeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v1_ExpandPermissionTreeResponse(buffer_arg) {
  return authzed_api_v1_permission_service_pb.ExpandPermissionTreeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v1_LookupResourcesRequest(arg) {
  if (!(arg instanceof authzed_api_v1_permission_service_pb.LookupResourcesRequest)) {
    throw new Error('Expected argument of type authzed.api.v1.LookupResourcesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v1_LookupResourcesRequest(buffer_arg) {
  return authzed_api_v1_permission_service_pb.LookupResourcesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v1_LookupResourcesResponse(arg) {
  if (!(arg instanceof authzed_api_v1_permission_service_pb.LookupResourcesResponse)) {
    throw new Error('Expected argument of type authzed.api.v1.LookupResourcesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v1_LookupResourcesResponse(buffer_arg) {
  return authzed_api_v1_permission_service_pb.LookupResourcesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v1_ReadRelationshipsRequest(arg) {
  if (!(arg instanceof authzed_api_v1_permission_service_pb.ReadRelationshipsRequest)) {
    throw new Error('Expected argument of type authzed.api.v1.ReadRelationshipsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v1_ReadRelationshipsRequest(buffer_arg) {
  return authzed_api_v1_permission_service_pb.ReadRelationshipsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v1_ReadRelationshipsResponse(arg) {
  if (!(arg instanceof authzed_api_v1_permission_service_pb.ReadRelationshipsResponse)) {
    throw new Error('Expected argument of type authzed.api.v1.ReadRelationshipsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v1_ReadRelationshipsResponse(buffer_arg) {
  return authzed_api_v1_permission_service_pb.ReadRelationshipsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v1_WriteRelationshipsRequest(arg) {
  if (!(arg instanceof authzed_api_v1_permission_service_pb.WriteRelationshipsRequest)) {
    throw new Error('Expected argument of type authzed.api.v1.WriteRelationshipsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v1_WriteRelationshipsRequest(buffer_arg) {
  return authzed_api_v1_permission_service_pb.WriteRelationshipsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v1_WriteRelationshipsResponse(arg) {
  if (!(arg instanceof authzed_api_v1_permission_service_pb.WriteRelationshipsResponse)) {
    throw new Error('Expected argument of type authzed.api.v1.WriteRelationshipsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v1_WriteRelationshipsResponse(buffer_arg) {
  return authzed_api_v1_permission_service_pb.WriteRelationshipsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// PermissionsService is used to perform permissions and relationship
// operations.
var PermissionsServiceService = exports.PermissionsServiceService = {
  // ReadRelationships reads a set of the relationships matching one or more
// filters.
readRelationships: {
    path: '/authzed.api.v1.PermissionsService/ReadRelationships',
    requestStream: false,
    responseStream: true,
    requestType: authzed_api_v1_permission_service_pb.ReadRelationshipsRequest,
    responseType: authzed_api_v1_permission_service_pb.ReadRelationshipsResponse,
    requestSerialize: serialize_authzed_api_v1_ReadRelationshipsRequest,
    requestDeserialize: deserialize_authzed_api_v1_ReadRelationshipsRequest,
    responseSerialize: serialize_authzed_api_v1_ReadRelationshipsResponse,
    responseDeserialize: deserialize_authzed_api_v1_ReadRelationshipsResponse,
  },
  // WriteRelationships writes and/or deletes a set of specified relationships,
// with an optional set of precondition relationships that must exist before
// the operation can commit.
writeRelationships: {
    path: '/authzed.api.v1.PermissionsService/WriteRelationships',
    requestStream: false,
    responseStream: false,
    requestType: authzed_api_v1_permission_service_pb.WriteRelationshipsRequest,
    responseType: authzed_api_v1_permission_service_pb.WriteRelationshipsResponse,
    requestSerialize: serialize_authzed_api_v1_WriteRelationshipsRequest,
    requestDeserialize: deserialize_authzed_api_v1_WriteRelationshipsRequest,
    responseSerialize: serialize_authzed_api_v1_WriteRelationshipsResponse,
    responseDeserialize: deserialize_authzed_api_v1_WriteRelationshipsResponse,
  },
  // DeleteRelationships deletes relationships matching one or more filters, in
// bulk.
deleteRelationships: {
    path: '/authzed.api.v1.PermissionsService/DeleteRelationships',
    requestStream: false,
    responseStream: false,
    requestType: authzed_api_v1_permission_service_pb.DeleteRelationshipsRequest,
    responseType: authzed_api_v1_permission_service_pb.DeleteRelationshipsResponse,
    requestSerialize: serialize_authzed_api_v1_DeleteRelationshipsRequest,
    requestDeserialize: deserialize_authzed_api_v1_DeleteRelationshipsRequest,
    responseSerialize: serialize_authzed_api_v1_DeleteRelationshipsResponse,
    responseDeserialize: deserialize_authzed_api_v1_DeleteRelationshipsResponse,
  },
  // CheckPermission checks whether a subject has a particular permission or is
// a member of a particular relation, on a given resource.
checkPermission: {
    path: '/authzed.api.v1.PermissionsService/CheckPermission',
    requestStream: false,
    responseStream: false,
    requestType: authzed_api_v1_permission_service_pb.CheckPermissionRequest,
    responseType: authzed_api_v1_permission_service_pb.CheckPermissionResponse,
    requestSerialize: serialize_authzed_api_v1_CheckPermissionRequest,
    requestDeserialize: deserialize_authzed_api_v1_CheckPermissionRequest,
    responseSerialize: serialize_authzed_api_v1_CheckPermissionResponse,
    responseDeserialize: deserialize_authzed_api_v1_CheckPermissionResponse,
  },
  // ExpandPermissionTree expands the relationships reachable from a particular
// permission or relation of a given resource.
expandPermissionTree: {
    path: '/authzed.api.v1.PermissionsService/ExpandPermissionTree',
    requestStream: false,
    responseStream: false,
    requestType: authzed_api_v1_permission_service_pb.ExpandPermissionTreeRequest,
    responseType: authzed_api_v1_permission_service_pb.ExpandPermissionTreeResponse,
    requestSerialize: serialize_authzed_api_v1_ExpandPermissionTreeRequest,
    requestDeserialize: deserialize_authzed_api_v1_ExpandPermissionTreeRequest,
    responseSerialize: serialize_authzed_api_v1_ExpandPermissionTreeResponse,
    responseDeserialize: deserialize_authzed_api_v1_ExpandPermissionTreeResponse,
  },
  // LookupResources returns the IDs of all resources on which the specified
// subject has permission or on which the specified subject is a member of the
// relation.
lookupResources: {
    path: '/authzed.api.v1.PermissionsService/LookupResources',
    requestStream: false,
    responseStream: true,
    requestType: authzed_api_v1_permission_service_pb.LookupResourcesRequest,
    responseType: authzed_api_v1_permission_service_pb.LookupResourcesResponse,
    requestSerialize: serialize_authzed_api_v1_LookupResourcesRequest,
    requestDeserialize: deserialize_authzed_api_v1_LookupResourcesRequest,
    responseSerialize: serialize_authzed_api_v1_LookupResourcesResponse,
    responseDeserialize: deserialize_authzed_api_v1_LookupResourcesResponse,
  },
};

exports.PermissionsServiceClient = grpc.makeGenericClientConstructor(PermissionsServiceService);
