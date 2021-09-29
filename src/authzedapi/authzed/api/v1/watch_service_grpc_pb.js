// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var authzed_api_v1_watch_service_pb = require('../../../authzed/api/v1/watch_service_pb.js');
var validate_validate_pb = require('../../../validate/validate_pb.js');
var authzed_api_v1_core_pb = require('../../../authzed/api/v1/core_pb.js');

function serialize_authzed_api_v1_WatchRequest(arg) {
  if (!(arg instanceof authzed_api_v1_watch_service_pb.WatchRequest)) {
    throw new Error('Expected argument of type authzed.api.v1.WatchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v1_WatchRequest(buffer_arg) {
  return authzed_api_v1_watch_service_pb.WatchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authzed_api_v1_WatchResponse(arg) {
  if (!(arg instanceof authzed_api_v1_watch_service_pb.WatchResponse)) {
    throw new Error('Expected argument of type authzed.api.v1.WatchResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authzed_api_v1_WatchResponse(buffer_arg) {
  return authzed_api_v1_watch_service_pb.WatchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var WatchServiceService = exports.WatchServiceService = {
  watch: {
    path: '/authzed.api.v1.WatchService/Watch',
    requestStream: false,
    responseStream: true,
    requestType: authzed_api_v1_watch_service_pb.WatchRequest,
    responseType: authzed_api_v1_watch_service_pb.WatchResponse,
    requestSerialize: serialize_authzed_api_v1_WatchRequest,
    requestDeserialize: deserialize_authzed_api_v1_WatchRequest,
    responseSerialize: serialize_authzed_api_v1_WatchResponse,
    responseDeserialize: deserialize_authzed_api_v1_WatchResponse,
  },
};

exports.WatchServiceClient = grpc.makeGenericClientConstructor(WatchServiceService);
