import * as jspb from 'google-protobuf'

import * as validate_validate_pb from '../../../validate/validate_pb';


export class ReadSchemaRequest extends jspb.Message {
  getObjectDefinitionsNamesList(): Array<string>;
  setObjectDefinitionsNamesList(value: Array<string>): ReadSchemaRequest;
  clearObjectDefinitionsNamesList(): ReadSchemaRequest;
  addObjectDefinitionsNames(value: string, index?: number): ReadSchemaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadSchemaRequest): ReadSchemaRequest.AsObject;
  static serializeBinaryToWriter(message: ReadSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadSchemaRequest;
  static deserializeBinaryFromReader(message: ReadSchemaRequest, reader: jspb.BinaryReader): ReadSchemaRequest;
}

export namespace ReadSchemaRequest {
  export type AsObject = {
    objectDefinitionsNamesList: Array<string>,
  }
}

export class ReadSchemaResponse extends jspb.Message {
  getObjectDefinitionsList(): Array<string>;
  setObjectDefinitionsList(value: Array<string>): ReadSchemaResponse;
  clearObjectDefinitionsList(): ReadSchemaResponse;
  addObjectDefinitions(value: string, index?: number): ReadSchemaResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadSchemaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReadSchemaResponse): ReadSchemaResponse.AsObject;
  static serializeBinaryToWriter(message: ReadSchemaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadSchemaResponse;
  static deserializeBinaryFromReader(message: ReadSchemaResponse, reader: jspb.BinaryReader): ReadSchemaResponse;
}

export namespace ReadSchemaResponse {
  export type AsObject = {
    objectDefinitionsList: Array<string>,
  }
}

export class WriteSchemaRequest extends jspb.Message {
  getSchema(): string;
  setSchema(value: string): WriteSchemaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WriteSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WriteSchemaRequest): WriteSchemaRequest.AsObject;
  static serializeBinaryToWriter(message: WriteSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WriteSchemaRequest;
  static deserializeBinaryFromReader(message: WriteSchemaRequest, reader: jspb.BinaryReader): WriteSchemaRequest;
}

export namespace WriteSchemaRequest {
  export type AsObject = {
    schema: string,
  }
}

export class WriteSchemaResponse extends jspb.Message {
  getObjectDefinitionsNamesList(): Array<string>;
  setObjectDefinitionsNamesList(value: Array<string>): WriteSchemaResponse;
  clearObjectDefinitionsNamesList(): WriteSchemaResponse;
  addObjectDefinitionsNames(value: string, index?: number): WriteSchemaResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WriteSchemaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WriteSchemaResponse): WriteSchemaResponse.AsObject;
  static serializeBinaryToWriter(message: WriteSchemaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WriteSchemaResponse;
  static deserializeBinaryFromReader(message: WriteSchemaResponse, reader: jspb.BinaryReader): WriteSchemaResponse;
}

export namespace WriteSchemaResponse {
  export type AsObject = {
    objectDefinitionsNamesList: Array<string>,
  }
}

