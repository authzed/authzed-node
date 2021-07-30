// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var authzed_api_v0_watch_service_pb = require('../../../authzed/api/v0/watch_service_pb.js');
var validate_validate_pb = require('../../../validate/validate_pb.js');
var authzed_api_v0_core_pb = require('../../../authzed/api/v0/core_pb.js');

function serialize_authzed_api_v0_WatchRequest(arg) {
  if (!(arg instanceof authzed_api_v0_watch_service_pb.WatchRequest)) {
    throw new Error('Expected argument of type authzed.api.v0.WatchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v0_WatchRequest(buffer_arg) {
  return authzed_api_v0_watch_service_pb.WatchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v0_WatchResponse(arg) {
  if (!(arg instanceof authzed_api_v0_watch_service_pb.WatchResponse)) {
    throw new Error('Expected argument of type authzed.api.v0.WatchResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v0_WatchResponse(buffer_arg) {
  return authzed_api_v0_watch_service_pb.WatchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var WatchServiceService = exports.WatchServiceService = {
  watch: {
    path: '/authzed.api.v0.WatchService/Watch',
    requestStream: false,
    responseStream: true,
    requestType: authzed_api_v0_watch_service_pb.WatchRequest,
    responseType: authzed_api_v0_watch_service_pb.WatchResponse,
    requestSerialize: serialize_authzed_api_v0_WatchRequest,
    requestDeserialize: deserialize_authzed_api_v0_WatchRequest,
    responseSerialize: serialize_authzed_api_v0_WatchResponse,
    responseDeserialize: deserialize_authzed_api_v0_WatchResponse,
  },
};

exports.WatchServiceClient = grpc.makeGenericClientConstructor(WatchServiceService);
