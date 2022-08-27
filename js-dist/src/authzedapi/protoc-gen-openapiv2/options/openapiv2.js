"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scopes = exports.SecurityRequirement_SecurityRequirementValue = exports.SecurityRequirement = exports.SecurityScheme = exports.SecurityDefinitions = exports.Tag = exports.JSONSchema = exports.Schema = exports.ExternalDocumentation = exports.License = exports.Contact = exports.Info = exports.Response = exports.Header = exports.Operation = exports.Swagger = exports.Scheme = exports.SecurityScheme_Flow = exports.SecurityScheme_In = exports.SecurityScheme_Type = exports.JSONSchema_JSONSchemaSimpleTypes = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const struct_1 = require("../../google/protobuf/struct");
/**
 * @generated from protobuf enum grpc.gateway.protoc_gen_openapiv2.options.JSONSchema.JSONSchemaSimpleTypes
 */
var JSONSchema_JSONSchemaSimpleTypes;
(function (JSONSchema_JSONSchemaSimpleTypes) {
    /**
     * @generated from protobuf enum value: UNKNOWN = 0;
     */
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * @generated from protobuf enum value: ARRAY = 1;
     */
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["ARRAY"] = 1] = "ARRAY";
    /**
     * @generated from protobuf enum value: BOOLEAN = 2;
     */
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["BOOLEAN"] = 2] = "BOOLEAN";
    /**
     * @generated from protobuf enum value: INTEGER = 3;
     */
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["INTEGER"] = 3] = "INTEGER";
    /**
     * @generated from protobuf enum value: NULL = 4;
     */
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["NULL"] = 4] = "NULL";
    /**
     * @generated from protobuf enum value: NUMBER = 5;
     */
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["NUMBER"] = 5] = "NUMBER";
    /**
     * @generated from protobuf enum value: OBJECT = 6;
     */
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["OBJECT"] = 6] = "OBJECT";
    /**
     * @generated from protobuf enum value: STRING = 7;
     */
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["STRING"] = 7] = "STRING";
})(JSONSchema_JSONSchemaSimpleTypes = exports.JSONSchema_JSONSchemaSimpleTypes || (exports.JSONSchema_JSONSchemaSimpleTypes = {}));
/**
 * The type of the security scheme. Valid values are "basic",
 * "apiKey" or "oauth2".
 *
 * @generated from protobuf enum grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.Type
 */
var SecurityScheme_Type;
(function (SecurityScheme_Type) {
    /**
     * @generated from protobuf enum value: TYPE_INVALID = 0;
     */
    SecurityScheme_Type[SecurityScheme_Type["INVALID"] = 0] = "INVALID";
    /**
     * @generated from protobuf enum value: TYPE_BASIC = 1;
     */
    SecurityScheme_Type[SecurityScheme_Type["BASIC"] = 1] = "BASIC";
    /**
     * @generated from protobuf enum value: TYPE_API_KEY = 2;
     */
    SecurityScheme_Type[SecurityScheme_Type["API_KEY"] = 2] = "API_KEY";
    /**
     * @generated from protobuf enum value: TYPE_OAUTH2 = 3;
     */
    SecurityScheme_Type[SecurityScheme_Type["OAUTH2"] = 3] = "OAUTH2";
})(SecurityScheme_Type = exports.SecurityScheme_Type || (exports.SecurityScheme_Type = {}));
/**
 * The location of the API key. Valid values are "query" or "header".
 *
 * @generated from protobuf enum grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.In
 */
var SecurityScheme_In;
(function (SecurityScheme_In) {
    /**
     * @generated from protobuf enum value: IN_INVALID = 0;
     */
    SecurityScheme_In[SecurityScheme_In["INVALID"] = 0] = "INVALID";
    /**
     * @generated from protobuf enum value: IN_QUERY = 1;
     */
    SecurityScheme_In[SecurityScheme_In["QUERY"] = 1] = "QUERY";
    /**
     * @generated from protobuf enum value: IN_HEADER = 2;
     */
    SecurityScheme_In[SecurityScheme_In["HEADER"] = 2] = "HEADER";
})(SecurityScheme_In = exports.SecurityScheme_In || (exports.SecurityScheme_In = {}));
/**
 * The flow used by the OAuth2 security scheme. Valid values are
 * "implicit", "password", "application" or "accessCode".
 *
 * @generated from protobuf enum grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.Flow
 */
var SecurityScheme_Flow;
(function (SecurityScheme_Flow) {
    /**
     * @generated from protobuf enum value: FLOW_INVALID = 0;
     */
    SecurityScheme_Flow[SecurityScheme_Flow["INVALID"] = 0] = "INVALID";
    /**
     * @generated from protobuf enum value: FLOW_IMPLICIT = 1;
     */
    SecurityScheme_Flow[SecurityScheme_Flow["IMPLICIT"] = 1] = "IMPLICIT";
    /**
     * @generated from protobuf enum value: FLOW_PASSWORD = 2;
     */
    SecurityScheme_Flow[SecurityScheme_Flow["PASSWORD"] = 2] = "PASSWORD";
    /**
     * @generated from protobuf enum value: FLOW_APPLICATION = 3;
     */
    SecurityScheme_Flow[SecurityScheme_Flow["APPLICATION"] = 3] = "APPLICATION";
    /**
     * @generated from protobuf enum value: FLOW_ACCESS_CODE = 4;
     */
    SecurityScheme_Flow[SecurityScheme_Flow["ACCESS_CODE"] = 4] = "ACCESS_CODE";
})(SecurityScheme_Flow = exports.SecurityScheme_Flow || (exports.SecurityScheme_Flow = {}));
/**
 * Scheme describes the schemes supported by the OpenAPI Swagger
 * and Operation objects.
 *
 * @generated from protobuf enum grpc.gateway.protoc_gen_openapiv2.options.Scheme
 */
var Scheme;
(function (Scheme) {
    /**
     * @generated from protobuf enum value: UNKNOWN = 0;
     */
    Scheme[Scheme["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * @generated from protobuf enum value: HTTP = 1;
     */
    Scheme[Scheme["HTTP"] = 1] = "HTTP";
    /**
     * @generated from protobuf enum value: HTTPS = 2;
     */
    Scheme[Scheme["HTTPS"] = 2] = "HTTPS";
    /**
     * @generated from protobuf enum value: WS = 3;
     */
    Scheme[Scheme["WS"] = 3] = "WS";
    /**
     * @generated from protobuf enum value: WSS = 4;
     */
    Scheme[Scheme["WSS"] = 4] = "WSS";
})(Scheme = exports.Scheme || (exports.Scheme = {}));
// @generated message type with reflection information, may provide speed optimized methods
class Swagger$Type extends runtime_5.MessageType {
    constructor() {
        super("grpc.gateway.protoc_gen_openapiv2.options.Swagger", [
            { no: 1, name: "swagger", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "info", kind: "message", T: () => exports.Info },
            { no: 3, name: "host", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "base_path", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "schemes", kind: "enum", repeat: 1 /*RepeatType.PACKED*/, T: () => ["grpc.gateway.protoc_gen_openapiv2.options.Scheme", Scheme] },
            { no: 6, name: "consumes", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "produces", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "responses", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "message", T: () => exports.Response } },
            { no: 11, name: "security_definitions", kind: "message", T: () => exports.SecurityDefinitions },
            { no: 12, name: "security", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.SecurityRequirement },
            { no: 14, name: "external_docs", kind: "message", T: () => exports.ExternalDocumentation },
            { no: 15, name: "extensions", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "message", T: () => struct_1.Value } }
        ]);
    }
    create(value) {
        const message = { swagger: "", host: "", basePath: "", schemes: [], consumes: [], produces: [], responses: {}, security: [], extensions: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string swagger */ 1:
                    message.swagger = reader.string();
                    break;
                case /* grpc.gateway.protoc_gen_openapiv2.options.Info info */ 2:
                    message.info = exports.Info.internalBinaryRead(reader, reader.uint32(), options, message.info);
                    break;
                case /* string host */ 3:
                    message.host = reader.string();
                    break;
                case /* string base_path */ 4:
                    message.basePath = reader.string();
                    break;
                case /* repeated grpc.gateway.protoc_gen_openapiv2.options.Scheme schemes */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.schemes.push(reader.int32());
                    else
                        message.schemes.push(reader.int32());
                    break;
                case /* repeated string consumes */ 6:
                    message.consumes.push(reader.string());
                    break;
                case /* repeated string produces */ 7:
                    message.produces.push(reader.string());
                    break;
                case /* map<string, grpc.gateway.protoc_gen_openapiv2.options.Response> responses */ 10:
                    this.binaryReadMap10(message.responses, reader, options);
                    break;
                case /* grpc.gateway.protoc_gen_openapiv2.options.SecurityDefinitions security_definitions */ 11:
                    message.securityDefinitions = exports.SecurityDefinitions.internalBinaryRead(reader, reader.uint32(), options, message.securityDefinitions);
                    break;
                case /* repeated grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement security */ 12:
                    message.security.push(exports.SecurityRequirement.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation external_docs */ 14:
                    message.externalDocs = exports.ExternalDocumentation.internalBinaryRead(reader, reader.uint32(), options, message.externalDocs);
                    break;
                case /* map<string, google.protobuf.Value> extensions */ 15:
                    this.binaryReadMap15(message.extensions, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap10(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = exports.Response.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field grpc.gateway.protoc_gen_openapiv2.options.Swagger.responses");
            }
        }
        map[key !== null && key !== void 0 ? key : ""] = val !== null && val !== void 0 ? val : exports.Response.create();
    }
    binaryReadMap15(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = struct_1.Value.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field grpc.gateway.protoc_gen_openapiv2.options.Swagger.extensions");
            }
        }
        map[key !== null && key !== void 0 ? key : ""] = val !== null && val !== void 0 ? val : struct_1.Value.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* string swagger = 1; */
        if (message.swagger !== "")
            writer.tag(1, runtime_2.WireType.LengthDelimited).string(message.swagger);
        /* grpc.gateway.protoc_gen_openapiv2.options.Info info = 2; */
        if (message.info)
            exports.Info.internalBinaryWrite(message.info, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* string host = 3; */
        if (message.host !== "")
            writer.tag(3, runtime_2.WireType.LengthDelimited).string(message.host);
        /* string base_path = 4; */
        if (message.basePath !== "")
            writer.tag(4, runtime_2.WireType.LengthDelimited).string(message.basePath);
        /* repeated grpc.gateway.protoc_gen_openapiv2.options.Scheme schemes = 5; */
        if (message.schemes.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.schemes.length; i++)
                writer.int32(message.schemes[i]);
            writer.join();
        }
        /* repeated string consumes = 6; */
        for (let i = 0; i < message.consumes.length; i++)
            writer.tag(6, runtime_2.WireType.LengthDelimited).string(message.consumes[i]);
        /* repeated string produces = 7; */
        for (let i = 0; i < message.produces.length; i++)
            writer.tag(7, runtime_2.WireType.LengthDelimited).string(message.produces[i]);
        /* map<string, grpc.gateway.protoc_gen_openapiv2.options.Response> responses = 10; */
        for (let k of Object.keys(message.responses)) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.LengthDelimited).string(k);
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            exports.Response.internalBinaryWrite(message.responses[k], writer, options);
            writer.join().join();
        }
        /* grpc.gateway.protoc_gen_openapiv2.options.SecurityDefinitions security_definitions = 11; */
        if (message.securityDefinitions)
            exports.SecurityDefinitions.internalBinaryWrite(message.securityDefinitions, writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement security = 12; */
        for (let i = 0; i < message.security.length; i++)
            exports.SecurityRequirement.internalBinaryWrite(message.security[i], writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation external_docs = 14; */
        if (message.externalDocs)
            exports.ExternalDocumentation.internalBinaryWrite(message.externalDocs, writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* map<string, google.protobuf.Value> extensions = 15; */
        for (let k of Object.keys(message.extensions)) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.LengthDelimited).string(k);
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            struct_1.Value.internalBinaryWrite(message.extensions[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message grpc.gateway.protoc_gen_openapiv2.options.Swagger
 */
exports.Swagger = new Swagger$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Operation$Type extends runtime_5.MessageType {
    constructor() {
        super("grpc.gateway.protoc_gen_openapiv2.options.Operation", [
            { no: 1, name: "tags", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "summary", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "external_docs", kind: "message", T: () => exports.ExternalDocumentation },
            { no: 5, name: "operation_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "consumes", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "produces", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "responses", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "message", T: () => exports.Response } },
            { no: 10, name: "schemes", kind: "enum", repeat: 1 /*RepeatType.PACKED*/, T: () => ["grpc.gateway.protoc_gen_openapiv2.options.Scheme", Scheme] },
            { no: 11, name: "deprecated", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "security", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.SecurityRequirement },
            { no: 13, name: "extensions", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "message", T: () => struct_1.Value } }
        ]);
    }
    create(value) {
        const message = { tags: [], summary: "", description: "", operationId: "", consumes: [], produces: [], responses: {}, schemes: [], deprecated: false, security: [], extensions: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string tags */ 1:
                    message.tags.push(reader.string());
                    break;
                case /* string summary */ 2:
                    message.summary = reader.string();
                    break;
                case /* string description */ 3:
                    message.description = reader.string();
                    break;
                case /* grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation external_docs */ 4:
                    message.externalDocs = exports.ExternalDocumentation.internalBinaryRead(reader, reader.uint32(), options, message.externalDocs);
                    break;
                case /* string operation_id */ 5:
                    message.operationId = reader.string();
                    break;
                case /* repeated string consumes */ 6:
                    message.consumes.push(reader.string());
                    break;
                case /* repeated string produces */ 7:
                    message.produces.push(reader.string());
                    break;
                case /* map<string, grpc.gateway.protoc_gen_openapiv2.options.Response> responses */ 9:
                    this.binaryReadMap9(message.responses, reader, options);
                    break;
                case /* repeated grpc.gateway.protoc_gen_openapiv2.options.Scheme schemes */ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.schemes.push(reader.int32());
                    else
                        message.schemes.push(reader.int32());
                    break;
                case /* bool deprecated */ 11:
                    message.deprecated = reader.bool();
                    break;
                case /* repeated grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement security */ 12:
                    message.security.push(exports.SecurityRequirement.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* map<string, google.protobuf.Value> extensions */ 13:
                    this.binaryReadMap13(message.extensions, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap9(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = exports.Response.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field grpc.gateway.protoc_gen_openapiv2.options.Operation.responses");
            }
        }
        map[key !== null && key !== void 0 ? key : ""] = val !== null && val !== void 0 ? val : exports.Response.create();
    }
    binaryReadMap13(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = struct_1.Value.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field grpc.gateway.protoc_gen_openapiv2.options.Operation.extensions");
            }
        }
        map[key !== null && key !== void 0 ? key : ""] = val !== null && val !== void 0 ? val : struct_1.Value.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated string tags = 1; */
        for (let i = 0; i < message.tags.length; i++)
            writer.tag(1, runtime_2.WireType.LengthDelimited).string(message.tags[i]);
        /* string summary = 2; */
        if (message.summary !== "")
            writer.tag(2, runtime_2.WireType.LengthDelimited).string(message.summary);
        /* string description = 3; */
        if (message.description !== "")
            writer.tag(3, runtime_2.WireType.LengthDelimited).string(message.description);
        /* grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation external_docs = 4; */
        if (message.externalDocs)
            exports.ExternalDocumentation.internalBinaryWrite(message.externalDocs, writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* string operation_id = 5; */
        if (message.operationId !== "")
            writer.tag(5, runtime_2.WireType.LengthDelimited).string(message.operationId);
        /* repeated string consumes = 6; */
        for (let i = 0; i < message.consumes.length; i++)
            writer.tag(6, runtime_2.WireType.LengthDelimited).string(message.consumes[i]);
        /* repeated string produces = 7; */
        for (let i = 0; i < message.produces.length; i++)
            writer.tag(7, runtime_2.WireType.LengthDelimited).string(message.produces[i]);
        /* map<string, grpc.gateway.protoc_gen_openapiv2.options.Response> responses = 9; */
        for (let k of Object.keys(message.responses)) {
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.LengthDelimited).string(k);
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            exports.Response.internalBinaryWrite(message.responses[k], writer, options);
            writer.join().join();
        }
        /* repeated grpc.gateway.protoc_gen_openapiv2.options.Scheme schemes = 10; */
        if (message.schemes.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.schemes.length; i++)
                writer.int32(message.schemes[i]);
            writer.join();
        }
        /* bool deprecated = 11; */
        if (message.deprecated !== false)
            writer.tag(11, runtime_2.WireType.Varint).bool(message.deprecated);
        /* repeated grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement security = 12; */
        for (let i = 0; i < message.security.length; i++)
            exports.SecurityRequirement.internalBinaryWrite(message.security[i], writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* map<string, google.protobuf.Value> extensions = 13; */
        for (let k of Object.keys(message.extensions)) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.LengthDelimited).string(k);
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            struct_1.Value.internalBinaryWrite(message.extensions[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message grpc.gateway.protoc_gen_openapiv2.options.Operation
 */
exports.Operation = new Operation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Header$Type extends runtime_5.MessageType {
    constructor() {
        super("grpc.gateway.protoc_gen_openapiv2.options.Header", [
            { no: 1, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "format", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "default", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "pattern", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { description: "", type: "", format: "", default: "", pattern: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string description */ 1:
                    message.description = reader.string();
                    break;
                case /* string type */ 2:
                    message.type = reader.string();
                    break;
                case /* string format */ 3:
                    message.format = reader.string();
                    break;
                case /* string default */ 6:
                    message.default = reader.string();
                    break;
                case /* string pattern */ 13:
                    message.pattern = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string description = 1; */
        if (message.description !== "")
            writer.tag(1, runtime_2.WireType.LengthDelimited).string(message.description);
        /* string type = 2; */
        if (message.type !== "")
            writer.tag(2, runtime_2.WireType.LengthDelimited).string(message.type);
        /* string format = 3; */
        if (message.format !== "")
            writer.tag(3, runtime_2.WireType.LengthDelimited).string(message.format);
        /* string default = 6; */
        if (message.default !== "")
            writer.tag(6, runtime_2.WireType.LengthDelimited).string(message.default);
        /* string pattern = 13; */
        if (message.pattern !== "")
            writer.tag(13, runtime_2.WireType.LengthDelimited).string(message.pattern);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message grpc.gateway.protoc_gen_openapiv2.options.Header
 */
exports.Header = new Header$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Response$Type extends runtime_5.MessageType {
    constructor() {
        super("grpc.gateway.protoc_gen_openapiv2.options.Response", [
            { no: 1, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "schema", kind: "message", T: () => exports.Schema },
            { no: 3, name: "headers", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "message", T: () => exports.Header } },
            { no: 4, name: "examples", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } },
            { no: 5, name: "extensions", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "message", T: () => struct_1.Value } }
        ]);
    }
    create(value) {
        const message = { description: "", headers: {}, examples: {}, extensions: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string description */ 1:
                    message.description = reader.string();
                    break;
                case /* grpc.gateway.protoc_gen_openapiv2.options.Schema schema */ 2:
                    message.schema = exports.Schema.internalBinaryRead(reader, reader.uint32(), options, message.schema);
                    break;
                case /* map<string, grpc.gateway.protoc_gen_openapiv2.options.Header> headers */ 3:
                    this.binaryReadMap3(message.headers, reader, options);
                    break;
                case /* map<string, string> examples */ 4:
                    this.binaryReadMap4(message.examples, reader, options);
                    break;
                case /* map<string, google.protobuf.Value> extensions */ 5:
                    this.binaryReadMap5(message.extensions, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap3(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = exports.Header.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field grpc.gateway.protoc_gen_openapiv2.options.Response.headers");
            }
        }
        map[key !== null && key !== void 0 ? key : ""] = val !== null && val !== void 0 ? val : exports.Header.create();
    }
    binaryReadMap4(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = reader.string();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field grpc.gateway.protoc_gen_openapiv2.options.Response.examples");
            }
        }
        map[key !== null && key !== void 0 ? key : ""] = val !== null && val !== void 0 ? val : "";
    }
    binaryReadMap5(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = struct_1.Value.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field grpc.gateway.protoc_gen_openapiv2.options.Response.extensions");
            }
        }
        map[key !== null && key !== void 0 ? key : ""] = val !== null && val !== void 0 ? val : struct_1.Value.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* string description = 1; */
        if (message.description !== "")
            writer.tag(1, runtime_2.WireType.LengthDelimited).string(message.description);
        /* grpc.gateway.protoc_gen_openapiv2.options.Schema schema = 2; */
        if (message.schema)
            exports.Schema.internalBinaryWrite(message.schema, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* map<string, grpc.gateway.protoc_gen_openapiv2.options.Header> headers = 3; */
        for (let k of Object.keys(message.headers)) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.LengthDelimited).string(k);
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            exports.Header.internalBinaryWrite(message.headers[k], writer, options);
            writer.join().join();
        }
        /* map<string, string> examples = 4; */
        for (let k of Object.keys(message.examples))
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.LengthDelimited).string(k).tag(2, runtime_2.WireType.LengthDelimited).string(message.examples[k]).join();
        /* map<string, google.protobuf.Value> extensions = 5; */
        for (let k of Object.keys(message.extensions)) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.LengthDelimited).string(k);
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            struct_1.Value.internalBinaryWrite(message.extensions[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message grpc.gateway.protoc_gen_openapiv2.options.Response
 */
exports.Response = new Response$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Info$Type extends runtime_5.MessageType {
    constructor() {
        super("grpc.gateway.protoc_gen_openapiv2.options.Info", [
            { no: 1, name: "title", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "terms_of_service", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "contact", kind: "message", T: () => exports.Contact },
            { no: 5, name: "license", kind: "message", T: () => exports.License },
            { no: 6, name: "version", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "extensions", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "message", T: () => struct_1.Value } }
        ]);
    }
    create(value) {
        const message = { title: "", description: "", termsOfService: "", version: "", extensions: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string title */ 1:
                    message.title = reader.string();
                    break;
                case /* string description */ 2:
                    message.description = reader.string();
                    break;
                case /* string terms_of_service */ 3:
                    message.termsOfService = reader.string();
                    break;
                case /* grpc.gateway.protoc_gen_openapiv2.options.Contact contact */ 4:
                    message.contact = exports.Contact.internalBinaryRead(reader, reader.uint32(), options, message.contact);
                    break;
                case /* grpc.gateway.protoc_gen_openapiv2.options.License license */ 5:
                    message.license = exports.License.internalBinaryRead(reader, reader.uint32(), options, message.license);
                    break;
                case /* string version */ 6:
                    message.version = reader.string();
                    break;
                case /* map<string, google.protobuf.Value> extensions */ 7:
                    this.binaryReadMap7(message.extensions, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap7(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = struct_1.Value.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field grpc.gateway.protoc_gen_openapiv2.options.Info.extensions");
            }
        }
        map[key !== null && key !== void 0 ? key : ""] = val !== null && val !== void 0 ? val : struct_1.Value.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* string title = 1; */
        if (message.title !== "")
            writer.tag(1, runtime_2.WireType.LengthDelimited).string(message.title);
        /* string description = 2; */
        if (message.description !== "")
            writer.tag(2, runtime_2.WireType.LengthDelimited).string(message.description);
        /* string terms_of_service = 3; */
        if (message.termsOfService !== "")
            writer.tag(3, runtime_2.WireType.LengthDelimited).string(message.termsOfService);
        /* grpc.gateway.protoc_gen_openapiv2.options.Contact contact = 4; */
        if (message.contact)
            exports.Contact.internalBinaryWrite(message.contact, writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* grpc.gateway.protoc_gen_openapiv2.options.License license = 5; */
        if (message.license)
            exports.License.internalBinaryWrite(message.license, writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* string version = 6; */
        if (message.version !== "")
            writer.tag(6, runtime_2.WireType.LengthDelimited).string(message.version);
        /* map<string, google.protobuf.Value> extensions = 7; */
        for (let k of Object.keys(message.extensions)) {
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.LengthDelimited).string(k);
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            struct_1.Value.internalBinaryWrite(message.extensions[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message grpc.gateway.protoc_gen_openapiv2.options.Info
 */
exports.Info = new Info$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Contact$Type extends runtime_5.MessageType {
    constructor() {
        super("grpc.gateway.protoc_gen_openapiv2.options.Contact", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "email", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { name: "", url: "", email: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* string url */ 2:
                    message.url = reader.string();
                    break;
                case /* string email */ 3:
                    message.email = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, runtime_2.WireType.LengthDelimited).string(message.name);
        /* string url = 2; */
        if (message.url !== "")
            writer.tag(2, runtime_2.WireType.LengthDelimited).string(message.url);
        /* string email = 3; */
        if (message.email !== "")
            writer.tag(3, runtime_2.WireType.LengthDelimited).string(message.email);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message grpc.gateway.protoc_gen_openapiv2.options.Contact
 */
exports.Contact = new Contact$Type();
// @generated message type with reflection information, may provide speed optimized methods
class License$Type extends runtime_5.MessageType {
    constructor() {
        super("grpc.gateway.protoc_gen_openapiv2.options.License", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "url", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { name: "", url: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* string url */ 2:
                    message.url = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, runtime_2.WireType.LengthDelimited).string(message.name);
        /* string url = 2; */
        if (message.url !== "")
            writer.tag(2, runtime_2.WireType.LengthDelimited).string(message.url);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message grpc.gateway.protoc_gen_openapiv2.options.License
 */
exports.License = new License$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExternalDocumentation$Type extends runtime_5.MessageType {
    constructor() {
        super("grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation", [
            { no: 1, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "url", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { description: "", url: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string description */ 1:
                    message.description = reader.string();
                    break;
                case /* string url */ 2:
                    message.url = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string description = 1; */
        if (message.description !== "")
            writer.tag(1, runtime_2.WireType.LengthDelimited).string(message.description);
        /* string url = 2; */
        if (message.url !== "")
            writer.tag(2, runtime_2.WireType.LengthDelimited).string(message.url);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation
 */
exports.ExternalDocumentation = new ExternalDocumentation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Schema$Type extends runtime_5.MessageType {
    constructor() {
        super("grpc.gateway.protoc_gen_openapiv2.options.Schema", [
            { no: 1, name: "json_schema", kind: "message", T: () => exports.JSONSchema },
            { no: 2, name: "discriminator", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "read_only", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "external_docs", kind: "message", T: () => exports.ExternalDocumentation },
            { no: 6, name: "example", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { discriminator: "", readOnly: false, example: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* grpc.gateway.protoc_gen_openapiv2.options.JSONSchema json_schema */ 1:
                    message.jsonSchema = exports.JSONSchema.internalBinaryRead(reader, reader.uint32(), options, message.jsonSchema);
                    break;
                case /* string discriminator */ 2:
                    message.discriminator = reader.string();
                    break;
                case /* bool read_only */ 3:
                    message.readOnly = reader.bool();
                    break;
                case /* grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation external_docs */ 5:
                    message.externalDocs = exports.ExternalDocumentation.internalBinaryRead(reader, reader.uint32(), options, message.externalDocs);
                    break;
                case /* string example */ 6:
                    message.example = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* grpc.gateway.protoc_gen_openapiv2.options.JSONSchema json_schema = 1; */
        if (message.jsonSchema)
            exports.JSONSchema.internalBinaryWrite(message.jsonSchema, writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* string discriminator = 2; */
        if (message.discriminator !== "")
            writer.tag(2, runtime_2.WireType.LengthDelimited).string(message.discriminator);
        /* bool read_only = 3; */
        if (message.readOnly !== false)
            writer.tag(3, runtime_2.WireType.Varint).bool(message.readOnly);
        /* grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation external_docs = 5; */
        if (message.externalDocs)
            exports.ExternalDocumentation.internalBinaryWrite(message.externalDocs, writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* string example = 6; */
        if (message.example !== "")
            writer.tag(6, runtime_2.WireType.LengthDelimited).string(message.example);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message grpc.gateway.protoc_gen_openapiv2.options.Schema
 */
exports.Schema = new Schema$Type();
// @generated message type with reflection information, may provide speed optimized methods
class JSONSchema$Type extends runtime_5.MessageType {
    constructor() {
        super("grpc.gateway.protoc_gen_openapiv2.options.JSONSchema", [
            { no: 3, name: "ref", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "title", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "default", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "read_only", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "example", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "multiple_of", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 11, name: "maximum", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 12, name: "exclusive_maximum", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "minimum", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 14, name: "exclusive_minimum", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "max_length", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 16, name: "min_length", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 17, name: "pattern", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 20, name: "max_items", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 21, name: "min_items", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 22, name: "unique_items", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 24, name: "max_properties", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 25, name: "min_properties", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 26, name: "required", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 34, name: "array", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 35, name: "type", kind: "enum", repeat: 1 /*RepeatType.PACKED*/, T: () => ["grpc.gateway.protoc_gen_openapiv2.options.JSONSchema.JSONSchemaSimpleTypes", JSONSchema_JSONSchemaSimpleTypes] },
            { no: 36, name: "format", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 46, name: "enum", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { ref: "", title: "", description: "", default: "", readOnly: false, example: "", multipleOf: 0, maximum: 0, exclusiveMaximum: false, minimum: 0, exclusiveMinimum: false, maxLength: "0", minLength: "0", pattern: "", maxItems: "0", minItems: "0", uniqueItems: false, maxProperties: "0", minProperties: "0", required: [], array: [], type: [], format: "", enum: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string ref */ 3:
                    message.ref = reader.string();
                    break;
                case /* string title */ 5:
                    message.title = reader.string();
                    break;
                case /* string description */ 6:
                    message.description = reader.string();
                    break;
                case /* string default */ 7:
                    message.default = reader.string();
                    break;
                case /* bool read_only */ 8:
                    message.readOnly = reader.bool();
                    break;
                case /* string example */ 9:
                    message.example = reader.string();
                    break;
                case /* double multiple_of */ 10:
                    message.multipleOf = reader.double();
                    break;
                case /* double maximum */ 11:
                    message.maximum = reader.double();
                    break;
                case /* bool exclusive_maximum */ 12:
                    message.exclusiveMaximum = reader.bool();
                    break;
                case /* double minimum */ 13:
                    message.minimum = reader.double();
                    break;
                case /* bool exclusive_minimum */ 14:
                    message.exclusiveMinimum = reader.bool();
                    break;
                case /* uint64 max_length */ 15:
                    message.maxLength = reader.uint64().toString();
                    break;
                case /* uint64 min_length */ 16:
                    message.minLength = reader.uint64().toString();
                    break;
                case /* string pattern */ 17:
                    message.pattern = reader.string();
                    break;
                case /* uint64 max_items */ 20:
                    message.maxItems = reader.uint64().toString();
                    break;
                case /* uint64 min_items */ 21:
                    message.minItems = reader.uint64().toString();
                    break;
                case /* bool unique_items */ 22:
                    message.uniqueItems = reader.bool();
                    break;
                case /* uint64 max_properties */ 24:
                    message.maxProperties = reader.uint64().toString();
                    break;
                case /* uint64 min_properties */ 25:
                    message.minProperties = reader.uint64().toString();
                    break;
                case /* repeated string required */ 26:
                    message.required.push(reader.string());
                    break;
                case /* repeated string array */ 34:
                    message.array.push(reader.string());
                    break;
                case /* repeated grpc.gateway.protoc_gen_openapiv2.options.JSONSchema.JSONSchemaSimpleTypes type */ 35:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.type.push(reader.int32());
                    else
                        message.type.push(reader.int32());
                    break;
                case /* string format */ 36:
                    message.format = reader.string();
                    break;
                case /* repeated string enum */ 46:
                    message.enum.push(reader.string());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string ref = 3; */
        if (message.ref !== "")
            writer.tag(3, runtime_2.WireType.LengthDelimited).string(message.ref);
        /* string title = 5; */
        if (message.title !== "")
            writer.tag(5, runtime_2.WireType.LengthDelimited).string(message.title);
        /* string description = 6; */
        if (message.description !== "")
            writer.tag(6, runtime_2.WireType.LengthDelimited).string(message.description);
        /* string default = 7; */
        if (message.default !== "")
            writer.tag(7, runtime_2.WireType.LengthDelimited).string(message.default);
        /* bool read_only = 8; */
        if (message.readOnly !== false)
            writer.tag(8, runtime_2.WireType.Varint).bool(message.readOnly);
        /* string example = 9; */
        if (message.example !== "")
            writer.tag(9, runtime_2.WireType.LengthDelimited).string(message.example);
        /* double multiple_of = 10; */
        if (message.multipleOf !== 0)
            writer.tag(10, runtime_2.WireType.Bit64).double(message.multipleOf);
        /* double maximum = 11; */
        if (message.maximum !== 0)
            writer.tag(11, runtime_2.WireType.Bit64).double(message.maximum);
        /* bool exclusive_maximum = 12; */
        if (message.exclusiveMaximum !== false)
            writer.tag(12, runtime_2.WireType.Varint).bool(message.exclusiveMaximum);
        /* double minimum = 13; */
        if (message.minimum !== 0)
            writer.tag(13, runtime_2.WireType.Bit64).double(message.minimum);
        /* bool exclusive_minimum = 14; */
        if (message.exclusiveMinimum !== false)
            writer.tag(14, runtime_2.WireType.Varint).bool(message.exclusiveMinimum);
        /* uint64 max_length = 15; */
        if (message.maxLength !== "0")
            writer.tag(15, runtime_2.WireType.Varint).uint64(message.maxLength);
        /* uint64 min_length = 16; */
        if (message.minLength !== "0")
            writer.tag(16, runtime_2.WireType.Varint).uint64(message.minLength);
        /* string pattern = 17; */
        if (message.pattern !== "")
            writer.tag(17, runtime_2.WireType.LengthDelimited).string(message.pattern);
        /* uint64 max_items = 20; */
        if (message.maxItems !== "0")
            writer.tag(20, runtime_2.WireType.Varint).uint64(message.maxItems);
        /* uint64 min_items = 21; */
        if (message.minItems !== "0")
            writer.tag(21, runtime_2.WireType.Varint).uint64(message.minItems);
        /* bool unique_items = 22; */
        if (message.uniqueItems !== false)
            writer.tag(22, runtime_2.WireType.Varint).bool(message.uniqueItems);
        /* uint64 max_properties = 24; */
        if (message.maxProperties !== "0")
            writer.tag(24, runtime_2.WireType.Varint).uint64(message.maxProperties);
        /* uint64 min_properties = 25; */
        if (message.minProperties !== "0")
            writer.tag(25, runtime_2.WireType.Varint).uint64(message.minProperties);
        /* repeated string required = 26; */
        for (let i = 0; i < message.required.length; i++)
            writer.tag(26, runtime_2.WireType.LengthDelimited).string(message.required[i]);
        /* repeated string array = 34; */
        for (let i = 0; i < message.array.length; i++)
            writer.tag(34, runtime_2.WireType.LengthDelimited).string(message.array[i]);
        /* repeated grpc.gateway.protoc_gen_openapiv2.options.JSONSchema.JSONSchemaSimpleTypes type = 35; */
        if (message.type.length) {
            writer.tag(35, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.type.length; i++)
                writer.int32(message.type[i]);
            writer.join();
        }
        /* string format = 36; */
        if (message.format !== "")
            writer.tag(36, runtime_2.WireType.LengthDelimited).string(message.format);
        /* repeated string enum = 46; */
        for (let i = 0; i < message.enum.length; i++)
            writer.tag(46, runtime_2.WireType.LengthDelimited).string(message.enum[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message grpc.gateway.protoc_gen_openapiv2.options.JSONSchema
 */
exports.JSONSchema = new JSONSchema$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Tag$Type extends runtime_5.MessageType {
    constructor() {
        super("grpc.gateway.protoc_gen_openapiv2.options.Tag", [
            { no: 2, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "external_docs", kind: "message", T: () => exports.ExternalDocumentation }
        ]);
    }
    create(value) {
        const message = { description: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string description */ 2:
                    message.description = reader.string();
                    break;
                case /* grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation external_docs */ 3:
                    message.externalDocs = exports.ExternalDocumentation.internalBinaryRead(reader, reader.uint32(), options, message.externalDocs);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string description = 2; */
        if (message.description !== "")
            writer.tag(2, runtime_2.WireType.LengthDelimited).string(message.description);
        /* grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation external_docs = 3; */
        if (message.externalDocs)
            exports.ExternalDocumentation.internalBinaryWrite(message.externalDocs, writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message grpc.gateway.protoc_gen_openapiv2.options.Tag
 */
exports.Tag = new Tag$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SecurityDefinitions$Type extends runtime_5.MessageType {
    constructor() {
        super("grpc.gateway.protoc_gen_openapiv2.options.SecurityDefinitions", [
            { no: 1, name: "security", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "message", T: () => exports.SecurityScheme } }
        ]);
    }
    create(value) {
        const message = { security: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<string, grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme> security */ 1:
                    this.binaryReadMap1(message.security, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap1(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = exports.SecurityScheme.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field grpc.gateway.protoc_gen_openapiv2.options.SecurityDefinitions.security");
            }
        }
        map[key !== null && key !== void 0 ? key : ""] = val !== null && val !== void 0 ? val : exports.SecurityScheme.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<string, grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme> security = 1; */
        for (let k of Object.keys(message.security)) {
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.LengthDelimited).string(k);
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            exports.SecurityScheme.internalBinaryWrite(message.security[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message grpc.gateway.protoc_gen_openapiv2.options.SecurityDefinitions
 */
exports.SecurityDefinitions = new SecurityDefinitions$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SecurityScheme$Type extends runtime_5.MessageType {
    constructor() {
        super("grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme", [
            { no: 1, name: "type", kind: "enum", T: () => ["grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.Type", SecurityScheme_Type, "TYPE_"] },
            { no: 2, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "in", kind: "enum", T: () => ["grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.In", SecurityScheme_In, "IN_"] },
            { no: 5, name: "flow", kind: "enum", T: () => ["grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.Flow", SecurityScheme_Flow, "FLOW_"] },
            { no: 6, name: "authorization_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "token_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "scopes", kind: "message", T: () => exports.Scopes },
            { no: 9, name: "extensions", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "message", T: () => struct_1.Value } }
        ]);
    }
    create(value) {
        const message = { type: 0, description: "", name: "", in: 0, flow: 0, authorizationUrl: "", tokenUrl: "", extensions: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.Type type */ 1:
                    message.type = reader.int32();
                    break;
                case /* string description */ 2:
                    message.description = reader.string();
                    break;
                case /* string name */ 3:
                    message.name = reader.string();
                    break;
                case /* grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.In in */ 4:
                    message.in = reader.int32();
                    break;
                case /* grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.Flow flow */ 5:
                    message.flow = reader.int32();
                    break;
                case /* string authorization_url */ 6:
                    message.authorizationUrl = reader.string();
                    break;
                case /* string token_url */ 7:
                    message.tokenUrl = reader.string();
                    break;
                case /* grpc.gateway.protoc_gen_openapiv2.options.Scopes scopes */ 8:
                    message.scopes = exports.Scopes.internalBinaryRead(reader, reader.uint32(), options, message.scopes);
                    break;
                case /* map<string, google.protobuf.Value> extensions */ 9:
                    this.binaryReadMap9(message.extensions, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap9(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = struct_1.Value.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.extensions");
            }
        }
        map[key !== null && key !== void 0 ? key : ""] = val !== null && val !== void 0 ? val : struct_1.Value.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.Type type = 1; */
        if (message.type !== 0)
            writer.tag(1, runtime_2.WireType.Varint).int32(message.type);
        /* string description = 2; */
        if (message.description !== "")
            writer.tag(2, runtime_2.WireType.LengthDelimited).string(message.description);
        /* string name = 3; */
        if (message.name !== "")
            writer.tag(3, runtime_2.WireType.LengthDelimited).string(message.name);
        /* grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.In in = 4; */
        if (message.in !== 0)
            writer.tag(4, runtime_2.WireType.Varint).int32(message.in);
        /* grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.Flow flow = 5; */
        if (message.flow !== 0)
            writer.tag(5, runtime_2.WireType.Varint).int32(message.flow);
        /* string authorization_url = 6; */
        if (message.authorizationUrl !== "")
            writer.tag(6, runtime_2.WireType.LengthDelimited).string(message.authorizationUrl);
        /* string token_url = 7; */
        if (message.tokenUrl !== "")
            writer.tag(7, runtime_2.WireType.LengthDelimited).string(message.tokenUrl);
        /* grpc.gateway.protoc_gen_openapiv2.options.Scopes scopes = 8; */
        if (message.scopes)
            exports.Scopes.internalBinaryWrite(message.scopes, writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* map<string, google.protobuf.Value> extensions = 9; */
        for (let k of Object.keys(message.extensions)) {
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.LengthDelimited).string(k);
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            struct_1.Value.internalBinaryWrite(message.extensions[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme
 */
exports.SecurityScheme = new SecurityScheme$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SecurityRequirement$Type extends runtime_5.MessageType {
    constructor() {
        super("grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement", [
            { no: 1, name: "security_requirement", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "message", T: () => exports.SecurityRequirement_SecurityRequirementValue } }
        ]);
    }
    create(value) {
        const message = { securityRequirement: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<string, grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement.SecurityRequirementValue> security_requirement */ 1:
                    this.binaryReadMap1(message.securityRequirement, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap1(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = exports.SecurityRequirement_SecurityRequirementValue.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement.security_requirement");
            }
        }
        map[key !== null && key !== void 0 ? key : ""] = val !== null && val !== void 0 ? val : exports.SecurityRequirement_SecurityRequirementValue.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<string, grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement.SecurityRequirementValue> security_requirement = 1; */
        for (let k of Object.keys(message.securityRequirement)) {
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.LengthDelimited).string(k);
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            exports.SecurityRequirement_SecurityRequirementValue.internalBinaryWrite(message.securityRequirement[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement
 */
exports.SecurityRequirement = new SecurityRequirement$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SecurityRequirement_SecurityRequirementValue$Type extends runtime_5.MessageType {
    constructor() {
        super("grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement.SecurityRequirementValue", [
            { no: 1, name: "scope", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { scope: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string scope */ 1:
                    message.scope.push(reader.string());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated string scope = 1; */
        for (let i = 0; i < message.scope.length; i++)
            writer.tag(1, runtime_2.WireType.LengthDelimited).string(message.scope[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement.SecurityRequirementValue
 */
exports.SecurityRequirement_SecurityRequirementValue = new SecurityRequirement_SecurityRequirementValue$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Scopes$Type extends runtime_5.MessageType {
    constructor() {
        super("grpc.gateway.protoc_gen_openapiv2.options.Scopes", [
            { no: 1, name: "scope", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } }
        ]);
    }
    create(value) {
        const message = { scope: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<string, string> scope */ 1:
                    this.binaryReadMap1(message.scope, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap1(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = reader.string();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field grpc.gateway.protoc_gen_openapiv2.options.Scopes.scope");
            }
        }
        map[key !== null && key !== void 0 ? key : ""] = val !== null && val !== void 0 ? val : "";
    }
    internalBinaryWrite(message, writer, options) {
        /* map<string, string> scope = 1; */
        for (let k of Object.keys(message.scope))
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.LengthDelimited).string(k).tag(2, runtime_2.WireType.LengthDelimited).string(message.scope[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message grpc.gateway.protoc_gen_openapiv2.options.Scopes
 */
exports.Scopes = new Scopes$Type();
//# sourceMappingURL=openapiv2.js.map