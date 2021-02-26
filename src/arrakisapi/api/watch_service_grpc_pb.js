// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var arrakisapi_api_watch_service_pb = require('../../arrakisapi/api/watch_service_pb.js');
var arrakisapi_api_core_pb = require('../../arrakisapi/api/core_pb.js');

function serialize_WatchRequest(arg) {
  if (!(arg instanceof arrakisapi_api_watch_service_pb.WatchRequest)) {
    throw new Error('Expected argument of type WatchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WatchRequest(buffer_arg) {
  return arrakisapi_api_watch_service_pb.WatchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WatchResponse(arg) {
  if (!(arg instanceof arrakisapi_api_watch_service_pb.WatchResponse)) {
    throw new Error('Expected argument of type WatchResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WatchResponse(buffer_arg) {
  return arrakisapi_api_watch_service_pb.WatchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var WatchServiceService = exports.WatchServiceService = {
  watch: {
    path: '/WatchService/Watch',
    requestStream: false,
    responseStream: true,
    requestType: arrakisapi_api_watch_service_pb.WatchRequest,
    responseType: arrakisapi_api_watch_service_pb.WatchResponse,
    requestSerialize: serialize_WatchRequest,
    requestDeserialize: deserialize_WatchRequest,
    responseSerialize: serialize_WatchResponse,
    responseDeserialize: deserialize_WatchResponse,
  },
};

exports.WatchServiceClient = grpc.makeGenericClientConstructor(WatchServiceService);
