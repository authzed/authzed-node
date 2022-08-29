"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratedCodeInfo_Annotation = exports.GeneratedCodeInfo = exports.SourceCodeInfo_Location = exports.SourceCodeInfo = exports.UninterpretedOption_NamePart = exports.UninterpretedOption = exports.MethodOptions = exports.ServiceOptions = exports.EnumValueOptions = exports.EnumOptions = exports.OneofOptions = exports.FieldOptions = exports.MessageOptions = exports.FileOptions = exports.MethodDescriptorProto = exports.ServiceDescriptorProto = exports.EnumValueDescriptorProto = exports.EnumDescriptorProto_EnumReservedRange = exports.EnumDescriptorProto = exports.OneofDescriptorProto = exports.FieldDescriptorProto = exports.ExtensionRangeOptions = exports.DescriptorProto_ReservedRange = exports.DescriptorProto_ExtensionRange = exports.DescriptorProto = exports.FileDescriptorProto = exports.FileDescriptorSet = exports.MethodOptions_IdempotencyLevel = exports.FieldOptions_JSType = exports.FieldOptions_CType = exports.FileOptions_OptimizeMode = exports.FieldDescriptorProto_Label = exports.FieldDescriptorProto_Type = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum google.protobuf.FieldDescriptorProto.Type
 */
var FieldDescriptorProto_Type;
(function (FieldDescriptorProto_Type) {
    /**
     * @generated synthetic value - protobuf-ts requires all enums to have a 0 value
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["UNSPECIFIED$"] = 0] = "UNSPECIFIED$";
    /**
     * 0 is reserved for errors.
     * Order is weird for historical reasons.
     *
     * @generated from protobuf enum value: TYPE_DOUBLE = 1;
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["DOUBLE"] = 1] = "DOUBLE";
    /**
     * @generated from protobuf enum value: TYPE_FLOAT = 2;
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["FLOAT"] = 2] = "FLOAT";
    /**
     * Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
     * negative values are likely.
     *
     * @generated from protobuf enum value: TYPE_INT64 = 3;
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["INT64"] = 3] = "INT64";
    /**
     * @generated from protobuf enum value: TYPE_UINT64 = 4;
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["UINT64"] = 4] = "UINT64";
    /**
     * Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
     * negative values are likely.
     *
     * @generated from protobuf enum value: TYPE_INT32 = 5;
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["INT32"] = 5] = "INT32";
    /**
     * @generated from protobuf enum value: TYPE_FIXED64 = 6;
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["FIXED64"] = 6] = "FIXED64";
    /**
     * @generated from protobuf enum value: TYPE_FIXED32 = 7;
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["FIXED32"] = 7] = "FIXED32";
    /**
     * @generated from protobuf enum value: TYPE_BOOL = 8;
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["BOOL"] = 8] = "BOOL";
    /**
     * @generated from protobuf enum value: TYPE_STRING = 9;
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["STRING"] = 9] = "STRING";
    /**
     * Tag-delimited aggregate.
     * Group type is deprecated and not supported in proto3. However, Proto3
     * implementations should still be able to parse the group wire format and
     * treat group fields as unknown fields.
     *
     * @generated from protobuf enum value: TYPE_GROUP = 10;
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["GROUP"] = 10] = "GROUP";
    /**
     * Length-delimited aggregate.
     *
     * @generated from protobuf enum value: TYPE_MESSAGE = 11;
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["MESSAGE"] = 11] = "MESSAGE";
    /**
     * New in version 2.
     *
     * @generated from protobuf enum value: TYPE_BYTES = 12;
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["BYTES"] = 12] = "BYTES";
    /**
     * @generated from protobuf enum value: TYPE_UINT32 = 13;
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["UINT32"] = 13] = "UINT32";
    /**
     * @generated from protobuf enum value: TYPE_ENUM = 14;
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["ENUM"] = 14] = "ENUM";
    /**
     * @generated from protobuf enum value: TYPE_SFIXED32 = 15;
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["SFIXED32"] = 15] = "SFIXED32";
    /**
     * @generated from protobuf enum value: TYPE_SFIXED64 = 16;
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["SFIXED64"] = 16] = "SFIXED64";
    /**
     * Uses ZigZag encoding.
     *
     * @generated from protobuf enum value: TYPE_SINT32 = 17;
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["SINT32"] = 17] = "SINT32";
    /**
     * Uses ZigZag encoding.
     *
     * @generated from protobuf enum value: TYPE_SINT64 = 18;
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["SINT64"] = 18] = "SINT64";
})(FieldDescriptorProto_Type = exports.FieldDescriptorProto_Type || (exports.FieldDescriptorProto_Type = {}));
/**
 * @generated from protobuf enum google.protobuf.FieldDescriptorProto.Label
 */
var FieldDescriptorProto_Label;
(function (FieldDescriptorProto_Label) {
    /**
     * @generated synthetic value - protobuf-ts requires all enums to have a 0 value
     */
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["UNSPECIFIED$"] = 0] = "UNSPECIFIED$";
    /**
     * 0 is reserved for errors
     *
     * @generated from protobuf enum value: LABEL_OPTIONAL = 1;
     */
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["OPTIONAL"] = 1] = "OPTIONAL";
    /**
     * @generated from protobuf enum value: LABEL_REQUIRED = 2;
     */
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["REQUIRED"] = 2] = "REQUIRED";
    /**
     * @generated from protobuf enum value: LABEL_REPEATED = 3;
     */
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["REPEATED"] = 3] = "REPEATED";
})(FieldDescriptorProto_Label = exports.FieldDescriptorProto_Label || (exports.FieldDescriptorProto_Label = {}));
/**
 * Generated classes can be optimized for speed or code size.
 *
 * @generated from protobuf enum google.protobuf.FileOptions.OptimizeMode
 */
var FileOptions_OptimizeMode;
(function (FileOptions_OptimizeMode) {
    /**
     * @generated synthetic value - protobuf-ts requires all enums to have a 0 value
     */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["UNSPECIFIED$"] = 0] = "UNSPECIFIED$";
    /**
     * Generate complete code for parsing, serialization,
     *
     * @generated from protobuf enum value: SPEED = 1;
     */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["SPEED"] = 1] = "SPEED";
    /**
     * etc.
     *
     * Use ReflectionOps to implement these methods.
     *
     * @generated from protobuf enum value: CODE_SIZE = 2;
     */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["CODE_SIZE"] = 2] = "CODE_SIZE";
    /**
     * Generate code using MessageLite and the lite runtime.
     *
     * @generated from protobuf enum value: LITE_RUNTIME = 3;
     */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["LITE_RUNTIME"] = 3] = "LITE_RUNTIME";
})(FileOptions_OptimizeMode = exports.FileOptions_OptimizeMode || (exports.FileOptions_OptimizeMode = {}));
/**
 * @generated from protobuf enum google.protobuf.FieldOptions.CType
 */
var FieldOptions_CType;
(function (FieldOptions_CType) {
    /**
     * Default mode.
     *
     * @generated from protobuf enum value: STRING = 0;
     */
    FieldOptions_CType[FieldOptions_CType["STRING"] = 0] = "STRING";
    /**
     * @generated from protobuf enum value: CORD = 1;
     */
    FieldOptions_CType[FieldOptions_CType["CORD"] = 1] = "CORD";
    /**
     * @generated from protobuf enum value: STRING_PIECE = 2;
     */
    FieldOptions_CType[FieldOptions_CType["STRING_PIECE"] = 2] = "STRING_PIECE";
})(FieldOptions_CType = exports.FieldOptions_CType || (exports.FieldOptions_CType = {}));
/**
 * @generated from protobuf enum google.protobuf.FieldOptions.JSType
 */
var FieldOptions_JSType;
(function (FieldOptions_JSType) {
    /**
     * Use the default type.
     *
     * @generated from protobuf enum value: JS_NORMAL = 0;
     */
    FieldOptions_JSType[FieldOptions_JSType["JS_NORMAL"] = 0] = "JS_NORMAL";
    /**
     * Use JavaScript strings.
     *
     * @generated from protobuf enum value: JS_STRING = 1;
     */
    FieldOptions_JSType[FieldOptions_JSType["JS_STRING"] = 1] = "JS_STRING";
    /**
     * Use JavaScript numbers.
     *
     * @generated from protobuf enum value: JS_NUMBER = 2;
     */
    FieldOptions_JSType[FieldOptions_JSType["JS_NUMBER"] = 2] = "JS_NUMBER";
})(FieldOptions_JSType = exports.FieldOptions_JSType || (exports.FieldOptions_JSType = {}));
/**
 * Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
 * or neither? HTTP based RPC implementation may choose GET verb for safe
 * methods, and PUT verb for idempotent methods instead of the default POST.
 *
 * @generated from protobuf enum google.protobuf.MethodOptions.IdempotencyLevel
 */
var MethodOptions_IdempotencyLevel;
(function (MethodOptions_IdempotencyLevel) {
    /**
     * @generated from protobuf enum value: IDEMPOTENCY_UNKNOWN = 0;
     */
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENCY_UNKNOWN"] = 0] = "IDEMPOTENCY_UNKNOWN";
    /**
     * implies idempotent
     *
     * @generated from protobuf enum value: NO_SIDE_EFFECTS = 1;
     */
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["NO_SIDE_EFFECTS"] = 1] = "NO_SIDE_EFFECTS";
    /**
     * idempotent, but may have side effects
     *
     * @generated from protobuf enum value: IDEMPOTENT = 2;
     */
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENT"] = 2] = "IDEMPOTENT";
})(MethodOptions_IdempotencyLevel = exports.MethodOptions_IdempotencyLevel || (exports.MethodOptions_IdempotencyLevel = {}));
// @generated message type with reflection information, may provide speed optimized methods
class FileDescriptorSet$Type extends runtime_5.MessageType {
    constructor() {
        super("google.protobuf.FileDescriptorSet", [
            { no: 1, name: "file", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.FileDescriptorProto }
        ]);
    }
    create(value) {
        const message = { file: [] };
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
                case /* repeated google.protobuf.FileDescriptorProto file */ 1:
                    message.file.push(exports.FileDescriptorProto.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated google.protobuf.FileDescriptorProto file = 1; */
        for (let i = 0; i < message.file.length; i++)
            exports.FileDescriptorProto.internalBinaryWrite(message.file[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.FileDescriptorSet
 */
exports.FileDescriptorSet = new FileDescriptorSet$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FileDescriptorProto$Type extends runtime_5.MessageType {
    constructor() {
        super("google.protobuf.FileDescriptorProto", [
            { no: 1, name: "name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "package", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "dependency", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "public_dependency", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "weak_dependency", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "message_type", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.DescriptorProto },
            { no: 5, name: "enum_type", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.EnumDescriptorProto },
            { no: 6, name: "service", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.ServiceDescriptorProto },
            { no: 7, name: "extension", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.FieldDescriptorProto },
            { no: 8, name: "options", kind: "message", T: () => exports.FileOptions },
            { no: 9, name: "source_code_info", kind: "message", T: () => exports.SourceCodeInfo },
            { no: 12, name: "syntax", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { dependency: [], publicDependency: [], weakDependency: [], messageType: [], enumType: [], service: [], extension: [] };
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
                case /* optional string name */ 1:
                    message.name = reader.string();
                    break;
                case /* optional string package */ 2:
                    message.package = reader.string();
                    break;
                case /* repeated string dependency */ 3:
                    message.dependency.push(reader.string());
                    break;
                case /* repeated int32 public_dependency */ 10:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.publicDependency.push(reader.int32());
                    else
                        message.publicDependency.push(reader.int32());
                    break;
                case /* repeated int32 weak_dependency */ 11:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.weakDependency.push(reader.int32());
                    else
                        message.weakDependency.push(reader.int32());
                    break;
                case /* repeated google.protobuf.DescriptorProto message_type */ 4:
                    message.messageType.push(exports.DescriptorProto.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated google.protobuf.EnumDescriptorProto enum_type */ 5:
                    message.enumType.push(exports.EnumDescriptorProto.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated google.protobuf.ServiceDescriptorProto service */ 6:
                    message.service.push(exports.ServiceDescriptorProto.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated google.protobuf.FieldDescriptorProto extension */ 7:
                    message.extension.push(exports.FieldDescriptorProto.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional google.protobuf.FileOptions options */ 8:
                    message.options = exports.FileOptions.internalBinaryRead(reader, reader.uint32(), options, message.options);
                    break;
                case /* optional google.protobuf.SourceCodeInfo source_code_info */ 9:
                    message.sourceCodeInfo = exports.SourceCodeInfo.internalBinaryRead(reader, reader.uint32(), options, message.sourceCodeInfo);
                    break;
                case /* optional string syntax */ 12:
                    message.syntax = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional string name = 1; */
        if (message.name !== undefined)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.name);
        /* optional string package = 2; */
        if (message.package !== undefined)
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.package);
        /* repeated string dependency = 3; */
        for (let i = 0; i < message.dependency.length; i++)
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.dependency[i]);
        /* repeated int32 public_dependency = 10; */
        for (let i = 0; i < message.publicDependency.length; i++)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.publicDependency[i]);
        /* repeated int32 weak_dependency = 11; */
        for (let i = 0; i < message.weakDependency.length; i++)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.weakDependency[i]);
        /* repeated google.protobuf.DescriptorProto message_type = 4; */
        for (let i = 0; i < message.messageType.length; i++)
            exports.DescriptorProto.internalBinaryWrite(message.messageType[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated google.protobuf.EnumDescriptorProto enum_type = 5; */
        for (let i = 0; i < message.enumType.length; i++)
            exports.EnumDescriptorProto.internalBinaryWrite(message.enumType[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated google.protobuf.ServiceDescriptorProto service = 6; */
        for (let i = 0; i < message.service.length; i++)
            exports.ServiceDescriptorProto.internalBinaryWrite(message.service[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated google.protobuf.FieldDescriptorProto extension = 7; */
        for (let i = 0; i < message.extension.length; i++)
            exports.FieldDescriptorProto.internalBinaryWrite(message.extension[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional google.protobuf.FileOptions options = 8; */
        if (message.options)
            exports.FileOptions.internalBinaryWrite(message.options, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional google.protobuf.SourceCodeInfo source_code_info = 9; */
        if (message.sourceCodeInfo)
            exports.SourceCodeInfo.internalBinaryWrite(message.sourceCodeInfo, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional string syntax = 12; */
        if (message.syntax !== undefined)
            writer.tag(12, runtime_1.WireType.LengthDelimited).string(message.syntax);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.FileDescriptorProto
 */
exports.FileDescriptorProto = new FileDescriptorProto$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DescriptorProto$Type extends runtime_5.MessageType {
    constructor() {
        super("google.protobuf.DescriptorProto", [
            { no: 1, name: "name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "field", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.FieldDescriptorProto },
            { no: 6, name: "extension", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.FieldDescriptorProto },
            { no: 3, name: "nested_type", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.DescriptorProto },
            { no: 4, name: "enum_type", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.EnumDescriptorProto },
            { no: 5, name: "extension_range", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.DescriptorProto_ExtensionRange },
            { no: 8, name: "oneof_decl", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.OneofDescriptorProto },
            { no: 7, name: "options", kind: "message", T: () => exports.MessageOptions },
            { no: 9, name: "reserved_range", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.DescriptorProto_ReservedRange },
            { no: 10, name: "reserved_name", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { field: [], extension: [], nestedType: [], enumType: [], extensionRange: [], oneofDecl: [], reservedRange: [], reservedName: [] };
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
                case /* optional string name */ 1:
                    message.name = reader.string();
                    break;
                case /* repeated google.protobuf.FieldDescriptorProto field */ 2:
                    message.field.push(exports.FieldDescriptorProto.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated google.protobuf.FieldDescriptorProto extension */ 6:
                    message.extension.push(exports.FieldDescriptorProto.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated google.protobuf.DescriptorProto nested_type */ 3:
                    message.nestedType.push(exports.DescriptorProto.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated google.protobuf.EnumDescriptorProto enum_type */ 4:
                    message.enumType.push(exports.EnumDescriptorProto.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated google.protobuf.DescriptorProto.ExtensionRange extension_range */ 5:
                    message.extensionRange.push(exports.DescriptorProto_ExtensionRange.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated google.protobuf.OneofDescriptorProto oneof_decl */ 8:
                    message.oneofDecl.push(exports.OneofDescriptorProto.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional google.protobuf.MessageOptions options */ 7:
                    message.options = exports.MessageOptions.internalBinaryRead(reader, reader.uint32(), options, message.options);
                    break;
                case /* repeated google.protobuf.DescriptorProto.ReservedRange reserved_range */ 9:
                    message.reservedRange.push(exports.DescriptorProto_ReservedRange.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated string reserved_name */ 10:
                    message.reservedName.push(reader.string());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional string name = 1; */
        if (message.name !== undefined)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.name);
        /* repeated google.protobuf.FieldDescriptorProto field = 2; */
        for (let i = 0; i < message.field.length; i++)
            exports.FieldDescriptorProto.internalBinaryWrite(message.field[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated google.protobuf.FieldDescriptorProto extension = 6; */
        for (let i = 0; i < message.extension.length; i++)
            exports.FieldDescriptorProto.internalBinaryWrite(message.extension[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated google.protobuf.DescriptorProto nested_type = 3; */
        for (let i = 0; i < message.nestedType.length; i++)
            exports.DescriptorProto.internalBinaryWrite(message.nestedType[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated google.protobuf.EnumDescriptorProto enum_type = 4; */
        for (let i = 0; i < message.enumType.length; i++)
            exports.EnumDescriptorProto.internalBinaryWrite(message.enumType[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated google.protobuf.DescriptorProto.ExtensionRange extension_range = 5; */
        for (let i = 0; i < message.extensionRange.length; i++)
            exports.DescriptorProto_ExtensionRange.internalBinaryWrite(message.extensionRange[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated google.protobuf.OneofDescriptorProto oneof_decl = 8; */
        for (let i = 0; i < message.oneofDecl.length; i++)
            exports.OneofDescriptorProto.internalBinaryWrite(message.oneofDecl[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional google.protobuf.MessageOptions options = 7; */
        if (message.options)
            exports.MessageOptions.internalBinaryWrite(message.options, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated google.protobuf.DescriptorProto.ReservedRange reserved_range = 9; */
        for (let i = 0; i < message.reservedRange.length; i++)
            exports.DescriptorProto_ReservedRange.internalBinaryWrite(message.reservedRange[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated string reserved_name = 10; */
        for (let i = 0; i < message.reservedName.length; i++)
            writer.tag(10, runtime_1.WireType.LengthDelimited).string(message.reservedName[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.DescriptorProto
 */
exports.DescriptorProto = new DescriptorProto$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DescriptorProto_ExtensionRange$Type extends runtime_5.MessageType {
    constructor() {
        super("google.protobuf.DescriptorProto.ExtensionRange", [
            { no: 1, name: "start", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "end", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "options", kind: "message", T: () => exports.ExtensionRangeOptions }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional int32 start */ 1:
                    message.start = reader.int32();
                    break;
                case /* optional int32 end */ 2:
                    message.end = reader.int32();
                    break;
                case /* optional google.protobuf.ExtensionRangeOptions options */ 3:
                    message.options = exports.ExtensionRangeOptions.internalBinaryRead(reader, reader.uint32(), options, message.options);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 start = 1; */
        if (message.start !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.start);
        /* optional int32 end = 2; */
        if (message.end !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.end);
        /* optional google.protobuf.ExtensionRangeOptions options = 3; */
        if (message.options)
            exports.ExtensionRangeOptions.internalBinaryWrite(message.options, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.DescriptorProto.ExtensionRange
 */
exports.DescriptorProto_ExtensionRange = new DescriptorProto_ExtensionRange$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DescriptorProto_ReservedRange$Type extends runtime_5.MessageType {
    constructor() {
        super("google.protobuf.DescriptorProto.ReservedRange", [
            { no: 1, name: "start", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "end", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional int32 start */ 1:
                    message.start = reader.int32();
                    break;
                case /* optional int32 end */ 2:
                    message.end = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 start = 1; */
        if (message.start !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.start);
        /* optional int32 end = 2; */
        if (message.end !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.end);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.DescriptorProto.ReservedRange
 */
exports.DescriptorProto_ReservedRange = new DescriptorProto_ReservedRange$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExtensionRangeOptions$Type extends runtime_5.MessageType {
    constructor() {
        super("google.protobuf.ExtensionRangeOptions", [
            { no: 999, name: "uninterpreted_option", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.UninterpretedOption }
        ]);
    }
    create(value) {
        const message = { uninterpretedOption: [] };
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
                case /* repeated google.protobuf.UninterpretedOption uninterpreted_option */ 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated google.protobuf.UninterpretedOption uninterpreted_option = 999; */
        for (let i = 0; i < message.uninterpretedOption.length; i++)
            exports.UninterpretedOption.internalBinaryWrite(message.uninterpretedOption[i], writer.tag(999, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.ExtensionRangeOptions
 */
exports.ExtensionRangeOptions = new ExtensionRangeOptions$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FieldDescriptorProto$Type extends runtime_5.MessageType {
    constructor() {
        super("google.protobuf.FieldDescriptorProto", [
            { no: 1, name: "name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "number", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "label", kind: "enum", opt: true, T: () => ["google.protobuf.FieldDescriptorProto.Label", FieldDescriptorProto_Label, "LABEL_"] },
            { no: 5, name: "type", kind: "enum", opt: true, T: () => ["google.protobuf.FieldDescriptorProto.Type", FieldDescriptorProto_Type, "TYPE_"] },
            { no: 6, name: "type_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "extendee", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "default_value", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "oneof_index", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "json_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "options", kind: "message", T: () => exports.FieldOptions },
            { no: 17, name: "proto3_optional", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional string name */ 1:
                    message.name = reader.string();
                    break;
                case /* optional int32 number */ 3:
                    message.number = reader.int32();
                    break;
                case /* optional google.protobuf.FieldDescriptorProto.Label label */ 4:
                    message.label = reader.int32();
                    break;
                case /* optional google.protobuf.FieldDescriptorProto.Type type */ 5:
                    message.type = reader.int32();
                    break;
                case /* optional string type_name */ 6:
                    message.typeName = reader.string();
                    break;
                case /* optional string extendee */ 2:
                    message.extendee = reader.string();
                    break;
                case /* optional string default_value */ 7:
                    message.defaultValue = reader.string();
                    break;
                case /* optional int32 oneof_index */ 9:
                    message.oneofIndex = reader.int32();
                    break;
                case /* optional string json_name */ 10:
                    message.jsonName = reader.string();
                    break;
                case /* optional google.protobuf.FieldOptions options */ 8:
                    message.options = exports.FieldOptions.internalBinaryRead(reader, reader.uint32(), options, message.options);
                    break;
                case /* optional bool proto3_optional */ 17:
                    message.proto3Optional = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional string name = 1; */
        if (message.name !== undefined)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.name);
        /* optional int32 number = 3; */
        if (message.number !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.number);
        /* optional google.protobuf.FieldDescriptorProto.Label label = 4; */
        if (message.label !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.label);
        /* optional google.protobuf.FieldDescriptorProto.Type type = 5; */
        if (message.type !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.type);
        /* optional string type_name = 6; */
        if (message.typeName !== undefined)
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.typeName);
        /* optional string extendee = 2; */
        if (message.extendee !== undefined)
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.extendee);
        /* optional string default_value = 7; */
        if (message.defaultValue !== undefined)
            writer.tag(7, runtime_1.WireType.LengthDelimited).string(message.defaultValue);
        /* optional int32 oneof_index = 9; */
        if (message.oneofIndex !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.oneofIndex);
        /* optional string json_name = 10; */
        if (message.jsonName !== undefined)
            writer.tag(10, runtime_1.WireType.LengthDelimited).string(message.jsonName);
        /* optional google.protobuf.FieldOptions options = 8; */
        if (message.options)
            exports.FieldOptions.internalBinaryWrite(message.options, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bool proto3_optional = 17; */
        if (message.proto3Optional !== undefined)
            writer.tag(17, runtime_1.WireType.Varint).bool(message.proto3Optional);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.FieldDescriptorProto
 */
exports.FieldDescriptorProto = new FieldDescriptorProto$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OneofDescriptorProto$Type extends runtime_5.MessageType {
    constructor() {
        super("google.protobuf.OneofDescriptorProto", [
            { no: 1, name: "name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "options", kind: "message", T: () => exports.OneofOptions }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional string name */ 1:
                    message.name = reader.string();
                    break;
                case /* optional google.protobuf.OneofOptions options */ 2:
                    message.options = exports.OneofOptions.internalBinaryRead(reader, reader.uint32(), options, message.options);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional string name = 1; */
        if (message.name !== undefined)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.name);
        /* optional google.protobuf.OneofOptions options = 2; */
        if (message.options)
            exports.OneofOptions.internalBinaryWrite(message.options, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.OneofDescriptorProto
 */
exports.OneofDescriptorProto = new OneofDescriptorProto$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EnumDescriptorProto$Type extends runtime_5.MessageType {
    constructor() {
        super("google.protobuf.EnumDescriptorProto", [
            { no: 1, name: "name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "value", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.EnumValueDescriptorProto },
            { no: 3, name: "options", kind: "message", T: () => exports.EnumOptions },
            { no: 4, name: "reserved_range", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.EnumDescriptorProto_EnumReservedRange },
            { no: 5, name: "reserved_name", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { value: [], reservedRange: [], reservedName: [] };
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
                case /* optional string name */ 1:
                    message.name = reader.string();
                    break;
                case /* repeated google.protobuf.EnumValueDescriptorProto value */ 2:
                    message.value.push(exports.EnumValueDescriptorProto.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional google.protobuf.EnumOptions options */ 3:
                    message.options = exports.EnumOptions.internalBinaryRead(reader, reader.uint32(), options, message.options);
                    break;
                case /* repeated google.protobuf.EnumDescriptorProto.EnumReservedRange reserved_range */ 4:
                    message.reservedRange.push(exports.EnumDescriptorProto_EnumReservedRange.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated string reserved_name */ 5:
                    message.reservedName.push(reader.string());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional string name = 1; */
        if (message.name !== undefined)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.name);
        /* repeated google.protobuf.EnumValueDescriptorProto value = 2; */
        for (let i = 0; i < message.value.length; i++)
            exports.EnumValueDescriptorProto.internalBinaryWrite(message.value[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional google.protobuf.EnumOptions options = 3; */
        if (message.options)
            exports.EnumOptions.internalBinaryWrite(message.options, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated google.protobuf.EnumDescriptorProto.EnumReservedRange reserved_range = 4; */
        for (let i = 0; i < message.reservedRange.length; i++)
            exports.EnumDescriptorProto_EnumReservedRange.internalBinaryWrite(message.reservedRange[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated string reserved_name = 5; */
        for (let i = 0; i < message.reservedName.length; i++)
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.reservedName[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.EnumDescriptorProto
 */
exports.EnumDescriptorProto = new EnumDescriptorProto$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EnumDescriptorProto_EnumReservedRange$Type extends runtime_5.MessageType {
    constructor() {
        super("google.protobuf.EnumDescriptorProto.EnumReservedRange", [
            { no: 1, name: "start", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "end", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional int32 start */ 1:
                    message.start = reader.int32();
                    break;
                case /* optional int32 end */ 2:
                    message.end = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 start = 1; */
        if (message.start !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.start);
        /* optional int32 end = 2; */
        if (message.end !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.end);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.EnumDescriptorProto.EnumReservedRange
 */
exports.EnumDescriptorProto_EnumReservedRange = new EnumDescriptorProto_EnumReservedRange$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EnumValueDescriptorProto$Type extends runtime_5.MessageType {
    constructor() {
        super("google.protobuf.EnumValueDescriptorProto", [
            { no: 1, name: "name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "number", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "options", kind: "message", T: () => exports.EnumValueOptions }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional string name */ 1:
                    message.name = reader.string();
                    break;
                case /* optional int32 number */ 2:
                    message.number = reader.int32();
                    break;
                case /* optional google.protobuf.EnumValueOptions options */ 3:
                    message.options = exports.EnumValueOptions.internalBinaryRead(reader, reader.uint32(), options, message.options);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional string name = 1; */
        if (message.name !== undefined)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.name);
        /* optional int32 number = 2; */
        if (message.number !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.number);
        /* optional google.protobuf.EnumValueOptions options = 3; */
        if (message.options)
            exports.EnumValueOptions.internalBinaryWrite(message.options, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.EnumValueDescriptorProto
 */
exports.EnumValueDescriptorProto = new EnumValueDescriptorProto$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ServiceDescriptorProto$Type extends runtime_5.MessageType {
    constructor() {
        super("google.protobuf.ServiceDescriptorProto", [
            { no: 1, name: "name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "method", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.MethodDescriptorProto },
            { no: 3, name: "options", kind: "message", T: () => exports.ServiceOptions }
        ]);
    }
    create(value) {
        const message = { method: [] };
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
                case /* optional string name */ 1:
                    message.name = reader.string();
                    break;
                case /* repeated google.protobuf.MethodDescriptorProto method */ 2:
                    message.method.push(exports.MethodDescriptorProto.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional google.protobuf.ServiceOptions options */ 3:
                    message.options = exports.ServiceOptions.internalBinaryRead(reader, reader.uint32(), options, message.options);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional string name = 1; */
        if (message.name !== undefined)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.name);
        /* repeated google.protobuf.MethodDescriptorProto method = 2; */
        for (let i = 0; i < message.method.length; i++)
            exports.MethodDescriptorProto.internalBinaryWrite(message.method[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional google.protobuf.ServiceOptions options = 3; */
        if (message.options)
            exports.ServiceOptions.internalBinaryWrite(message.options, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.ServiceDescriptorProto
 */
exports.ServiceDescriptorProto = new ServiceDescriptorProto$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MethodDescriptorProto$Type extends runtime_5.MessageType {
    constructor() {
        super("google.protobuf.MethodDescriptorProto", [
            { no: 1, name: "name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "input_type", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "output_type", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "options", kind: "message", T: () => exports.MethodOptions },
            { no: 5, name: "client_streaming", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "server_streaming", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional string name */ 1:
                    message.name = reader.string();
                    break;
                case /* optional string input_type */ 2:
                    message.inputType = reader.string();
                    break;
                case /* optional string output_type */ 3:
                    message.outputType = reader.string();
                    break;
                case /* optional google.protobuf.MethodOptions options */ 4:
                    message.options = exports.MethodOptions.internalBinaryRead(reader, reader.uint32(), options, message.options);
                    break;
                case /* optional bool client_streaming */ 5:
                    message.clientStreaming = reader.bool();
                    break;
                case /* optional bool server_streaming */ 6:
                    message.serverStreaming = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional string name = 1; */
        if (message.name !== undefined)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.name);
        /* optional string input_type = 2; */
        if (message.inputType !== undefined)
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.inputType);
        /* optional string output_type = 3; */
        if (message.outputType !== undefined)
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.outputType);
        /* optional google.protobuf.MethodOptions options = 4; */
        if (message.options)
            exports.MethodOptions.internalBinaryWrite(message.options, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bool client_streaming = 5; */
        if (message.clientStreaming !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.clientStreaming);
        /* optional bool server_streaming = 6; */
        if (message.serverStreaming !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.serverStreaming);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.MethodDescriptorProto
 */
exports.MethodDescriptorProto = new MethodDescriptorProto$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FileOptions$Type extends runtime_5.MessageType {
    constructor() {
        super("google.protobuf.FileOptions", [
            { no: 1, name: "java_package", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "java_outer_classname", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "java_multiple_files", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 20, name: "java_generate_equals_and_hash", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 27, name: "java_string_check_utf8", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "optimize_for", kind: "enum", opt: true, T: () => ["google.protobuf.FileOptions.OptimizeMode", FileOptions_OptimizeMode] },
            { no: 11, name: "go_package", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 16, name: "cc_generic_services", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 17, name: "java_generic_services", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 18, name: "py_generic_services", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 42, name: "php_generic_services", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 23, name: "deprecated", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 31, name: "cc_enable_arenas", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 36, name: "objc_class_prefix", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 37, name: "csharp_namespace", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 39, name: "swift_prefix", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 40, name: "php_class_prefix", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 41, name: "php_namespace", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 44, name: "php_metadata_namespace", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 45, name: "ruby_package", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 999, name: "uninterpreted_option", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.UninterpretedOption }
        ]);
    }
    create(value) {
        const message = { uninterpretedOption: [] };
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
                case /* optional string java_package */ 1:
                    message.javaPackage = reader.string();
                    break;
                case /* optional string java_outer_classname */ 8:
                    message.javaOuterClassname = reader.string();
                    break;
                case /* optional bool java_multiple_files */ 10:
                    message.javaMultipleFiles = reader.bool();
                    break;
                case /* optional bool java_generate_equals_and_hash = 20 [deprecated = true];*/ 20:
                    message.javaGenerateEqualsAndHash = reader.bool();
                    break;
                case /* optional bool java_string_check_utf8 */ 27:
                    message.javaStringCheckUtf8 = reader.bool();
                    break;
                case /* optional google.protobuf.FileOptions.OptimizeMode optimize_for */ 9:
                    message.optimizeFor = reader.int32();
                    break;
                case /* optional string go_package */ 11:
                    message.goPackage = reader.string();
                    break;
                case /* optional bool cc_generic_services */ 16:
                    message.ccGenericServices = reader.bool();
                    break;
                case /* optional bool java_generic_services */ 17:
                    message.javaGenericServices = reader.bool();
                    break;
                case /* optional bool py_generic_services */ 18:
                    message.pyGenericServices = reader.bool();
                    break;
                case /* optional bool php_generic_services */ 42:
                    message.phpGenericServices = reader.bool();
                    break;
                case /* optional bool deprecated */ 23:
                    message.deprecated = reader.bool();
                    break;
                case /* optional bool cc_enable_arenas */ 31:
                    message.ccEnableArenas = reader.bool();
                    break;
                case /* optional string objc_class_prefix */ 36:
                    message.objcClassPrefix = reader.string();
                    break;
                case /* optional string csharp_namespace */ 37:
                    message.csharpNamespace = reader.string();
                    break;
                case /* optional string swift_prefix */ 39:
                    message.swiftPrefix = reader.string();
                    break;
                case /* optional string php_class_prefix */ 40:
                    message.phpClassPrefix = reader.string();
                    break;
                case /* optional string php_namespace */ 41:
                    message.phpNamespace = reader.string();
                    break;
                case /* optional string php_metadata_namespace */ 44:
                    message.phpMetadataNamespace = reader.string();
                    break;
                case /* optional string ruby_package */ 45:
                    message.rubyPackage = reader.string();
                    break;
                case /* repeated google.protobuf.UninterpretedOption uninterpreted_option */ 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional string java_package = 1; */
        if (message.javaPackage !== undefined)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.javaPackage);
        /* optional string java_outer_classname = 8; */
        if (message.javaOuterClassname !== undefined)
            writer.tag(8, runtime_1.WireType.LengthDelimited).string(message.javaOuterClassname);
        /* optional bool java_multiple_files = 10; */
        if (message.javaMultipleFiles !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.javaMultipleFiles);
        /* optional bool java_generate_equals_and_hash = 20 [deprecated = true]; */
        if (message.javaGenerateEqualsAndHash !== undefined)
            writer.tag(20, runtime_1.WireType.Varint).bool(message.javaGenerateEqualsAndHash);
        /* optional bool java_string_check_utf8 = 27; */
        if (message.javaStringCheckUtf8 !== undefined)
            writer.tag(27, runtime_1.WireType.Varint).bool(message.javaStringCheckUtf8);
        /* optional google.protobuf.FileOptions.OptimizeMode optimize_for = 9; */
        if (message.optimizeFor !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.optimizeFor);
        /* optional string go_package = 11; */
        if (message.goPackage !== undefined)
            writer.tag(11, runtime_1.WireType.LengthDelimited).string(message.goPackage);
        /* optional bool cc_generic_services = 16; */
        if (message.ccGenericServices !== undefined)
            writer.tag(16, runtime_1.WireType.Varint).bool(message.ccGenericServices);
        /* optional bool java_generic_services = 17; */
        if (message.javaGenericServices !== undefined)
            writer.tag(17, runtime_1.WireType.Varint).bool(message.javaGenericServices);
        /* optional bool py_generic_services = 18; */
        if (message.pyGenericServices !== undefined)
            writer.tag(18, runtime_1.WireType.Varint).bool(message.pyGenericServices);
        /* optional bool php_generic_services = 42; */
        if (message.phpGenericServices !== undefined)
            writer.tag(42, runtime_1.WireType.Varint).bool(message.phpGenericServices);
        /* optional bool deprecated = 23; */
        if (message.deprecated !== undefined)
            writer.tag(23, runtime_1.WireType.Varint).bool(message.deprecated);
        /* optional bool cc_enable_arenas = 31; */
        if (message.ccEnableArenas !== undefined)
            writer.tag(31, runtime_1.WireType.Varint).bool(message.ccEnableArenas);
        /* optional string objc_class_prefix = 36; */
        if (message.objcClassPrefix !== undefined)
            writer.tag(36, runtime_1.WireType.LengthDelimited).string(message.objcClassPrefix);
        /* optional string csharp_namespace = 37; */
        if (message.csharpNamespace !== undefined)
            writer.tag(37, runtime_1.WireType.LengthDelimited).string(message.csharpNamespace);
        /* optional string swift_prefix = 39; */
        if (message.swiftPrefix !== undefined)
            writer.tag(39, runtime_1.WireType.LengthDelimited).string(message.swiftPrefix);
        /* optional string php_class_prefix = 40; */
        if (message.phpClassPrefix !== undefined)
            writer.tag(40, runtime_1.WireType.LengthDelimited).string(message.phpClassPrefix);
        /* optional string php_namespace = 41; */
        if (message.phpNamespace !== undefined)
            writer.tag(41, runtime_1.WireType.LengthDelimited).string(message.phpNamespace);
        /* optional string php_metadata_namespace = 44; */
        if (message.phpMetadataNamespace !== undefined)
            writer.tag(44, runtime_1.WireType.LengthDelimited).string(message.phpMetadataNamespace);
        /* optional string ruby_package = 45; */
        if (message.rubyPackage !== undefined)
            writer.tag(45, runtime_1.WireType.LengthDelimited).string(message.rubyPackage);
        /* repeated google.protobuf.UninterpretedOption uninterpreted_option = 999; */
        for (let i = 0; i < message.uninterpretedOption.length; i++)
            exports.UninterpretedOption.internalBinaryWrite(message.uninterpretedOption[i], writer.tag(999, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.FileOptions
 */
exports.FileOptions = new FileOptions$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MessageOptions$Type extends runtime_5.MessageType {
    constructor() {
        super("google.protobuf.MessageOptions", [
            { no: 1, name: "message_set_wire_format", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "no_standard_descriptor_accessor", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "deprecated", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "map_entry", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 999, name: "uninterpreted_option", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.UninterpretedOption }
        ]);
    }
    create(value) {
        const message = { uninterpretedOption: [] };
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
                case /* optional bool message_set_wire_format */ 1:
                    message.messageSetWireFormat = reader.bool();
                    break;
                case /* optional bool no_standard_descriptor_accessor */ 2:
                    message.noStandardDescriptorAccessor = reader.bool();
                    break;
                case /* optional bool deprecated */ 3:
                    message.deprecated = reader.bool();
                    break;
                case /* optional bool map_entry */ 7:
                    message.mapEntry = reader.bool();
                    break;
                case /* repeated google.protobuf.UninterpretedOption uninterpreted_option */ 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool message_set_wire_format = 1; */
        if (message.messageSetWireFormat !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.messageSetWireFormat);
        /* optional bool no_standard_descriptor_accessor = 2; */
        if (message.noStandardDescriptorAccessor !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.noStandardDescriptorAccessor);
        /* optional bool deprecated = 3; */
        if (message.deprecated !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.deprecated);
        /* optional bool map_entry = 7; */
        if (message.mapEntry !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.mapEntry);
        /* repeated google.protobuf.UninterpretedOption uninterpreted_option = 999; */
        for (let i = 0; i < message.uninterpretedOption.length; i++)
            exports.UninterpretedOption.internalBinaryWrite(message.uninterpretedOption[i], writer.tag(999, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.MessageOptions
 */
exports.MessageOptions = new MessageOptions$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FieldOptions$Type extends runtime_5.MessageType {
    constructor() {
        super("google.protobuf.FieldOptions", [
            { no: 1, name: "ctype", kind: "enum", opt: true, T: () => ["google.protobuf.FieldOptions.CType", FieldOptions_CType] },
            { no: 2, name: "packed", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "jstype", kind: "enum", opt: true, T: () => ["google.protobuf.FieldOptions.JSType", FieldOptions_JSType] },
            { no: 5, name: "lazy", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "deprecated", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "weak", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 999, name: "uninterpreted_option", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.UninterpretedOption }
        ]);
    }
    create(value) {
        const message = { uninterpretedOption: [] };
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
                case /* optional google.protobuf.FieldOptions.CType ctype */ 1:
                    message.ctype = reader.int32();
                    break;
                case /* optional bool packed */ 2:
                    message.packed = reader.bool();
                    break;
                case /* optional google.protobuf.FieldOptions.JSType jstype */ 6:
                    message.jstype = reader.int32();
                    break;
                case /* optional bool lazy */ 5:
                    message.lazy = reader.bool();
                    break;
                case /* optional bool deprecated */ 3:
                    message.deprecated = reader.bool();
                    break;
                case /* optional bool weak */ 10:
                    message.weak = reader.bool();
                    break;
                case /* repeated google.protobuf.UninterpretedOption uninterpreted_option */ 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional google.protobuf.FieldOptions.CType ctype = 1; */
        if (message.ctype !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.ctype);
        /* optional bool packed = 2; */
        if (message.packed !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.packed);
        /* optional google.protobuf.FieldOptions.JSType jstype = 6; */
        if (message.jstype !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.jstype);
        /* optional bool lazy = 5; */
        if (message.lazy !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.lazy);
        /* optional bool deprecated = 3; */
        if (message.deprecated !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.deprecated);
        /* optional bool weak = 10; */
        if (message.weak !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.weak);
        /* repeated google.protobuf.UninterpretedOption uninterpreted_option = 999; */
        for (let i = 0; i < message.uninterpretedOption.length; i++)
            exports.UninterpretedOption.internalBinaryWrite(message.uninterpretedOption[i], writer.tag(999, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.FieldOptions
 */
exports.FieldOptions = new FieldOptions$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OneofOptions$Type extends runtime_5.MessageType {
    constructor() {
        super("google.protobuf.OneofOptions", [
            { no: 999, name: "uninterpreted_option", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.UninterpretedOption }
        ]);
    }
    create(value) {
        const message = { uninterpretedOption: [] };
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
                case /* repeated google.protobuf.UninterpretedOption uninterpreted_option */ 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated google.protobuf.UninterpretedOption uninterpreted_option = 999; */
        for (let i = 0; i < message.uninterpretedOption.length; i++)
            exports.UninterpretedOption.internalBinaryWrite(message.uninterpretedOption[i], writer.tag(999, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.OneofOptions
 */
exports.OneofOptions = new OneofOptions$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EnumOptions$Type extends runtime_5.MessageType {
    constructor() {
        super("google.protobuf.EnumOptions", [
            { no: 2, name: "allow_alias", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "deprecated", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 999, name: "uninterpreted_option", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.UninterpretedOption }
        ]);
    }
    create(value) {
        const message = { uninterpretedOption: [] };
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
                case /* optional bool allow_alias */ 2:
                    message.allowAlias = reader.bool();
                    break;
                case /* optional bool deprecated */ 3:
                    message.deprecated = reader.bool();
                    break;
                case /* repeated google.protobuf.UninterpretedOption uninterpreted_option */ 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool allow_alias = 2; */
        if (message.allowAlias !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.allowAlias);
        /* optional bool deprecated = 3; */
        if (message.deprecated !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.deprecated);
        /* repeated google.protobuf.UninterpretedOption uninterpreted_option = 999; */
        for (let i = 0; i < message.uninterpretedOption.length; i++)
            exports.UninterpretedOption.internalBinaryWrite(message.uninterpretedOption[i], writer.tag(999, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.EnumOptions
 */
exports.EnumOptions = new EnumOptions$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EnumValueOptions$Type extends runtime_5.MessageType {
    constructor() {
        super("google.protobuf.EnumValueOptions", [
            { no: 1, name: "deprecated", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 999, name: "uninterpreted_option", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.UninterpretedOption }
        ]);
    }
    create(value) {
        const message = { uninterpretedOption: [] };
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
                case /* optional bool deprecated */ 1:
                    message.deprecated = reader.bool();
                    break;
                case /* repeated google.protobuf.UninterpretedOption uninterpreted_option */ 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool deprecated = 1; */
        if (message.deprecated !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.deprecated);
        /* repeated google.protobuf.UninterpretedOption uninterpreted_option = 999; */
        for (let i = 0; i < message.uninterpretedOption.length; i++)
            exports.UninterpretedOption.internalBinaryWrite(message.uninterpretedOption[i], writer.tag(999, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.EnumValueOptions
 */
exports.EnumValueOptions = new EnumValueOptions$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ServiceOptions$Type extends runtime_5.MessageType {
    constructor() {
        super("google.protobuf.ServiceOptions", [
            { no: 33, name: "deprecated", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 999, name: "uninterpreted_option", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.UninterpretedOption }
        ]);
    }
    create(value) {
        const message = { uninterpretedOption: [] };
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
                case /* optional bool deprecated */ 33:
                    message.deprecated = reader.bool();
                    break;
                case /* repeated google.protobuf.UninterpretedOption uninterpreted_option */ 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool deprecated = 33; */
        if (message.deprecated !== undefined)
            writer.tag(33, runtime_1.WireType.Varint).bool(message.deprecated);
        /* repeated google.protobuf.UninterpretedOption uninterpreted_option = 999; */
        for (let i = 0; i < message.uninterpretedOption.length; i++)
            exports.UninterpretedOption.internalBinaryWrite(message.uninterpretedOption[i], writer.tag(999, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.ServiceOptions
 */
exports.ServiceOptions = new ServiceOptions$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MethodOptions$Type extends runtime_5.MessageType {
    constructor() {
        super("google.protobuf.MethodOptions", [
            { no: 33, name: "deprecated", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 34, name: "idempotency_level", kind: "enum", opt: true, T: () => ["google.protobuf.MethodOptions.IdempotencyLevel", MethodOptions_IdempotencyLevel] },
            { no: 999, name: "uninterpreted_option", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.UninterpretedOption }
        ]);
    }
    create(value) {
        const message = { uninterpretedOption: [] };
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
                case /* optional bool deprecated */ 33:
                    message.deprecated = reader.bool();
                    break;
                case /* optional google.protobuf.MethodOptions.IdempotencyLevel idempotency_level */ 34:
                    message.idempotencyLevel = reader.int32();
                    break;
                case /* repeated google.protobuf.UninterpretedOption uninterpreted_option */ 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool deprecated = 33; */
        if (message.deprecated !== undefined)
            writer.tag(33, runtime_1.WireType.Varint).bool(message.deprecated);
        /* optional google.protobuf.MethodOptions.IdempotencyLevel idempotency_level = 34; */
        if (message.idempotencyLevel !== undefined)
            writer.tag(34, runtime_1.WireType.Varint).int32(message.idempotencyLevel);
        /* repeated google.protobuf.UninterpretedOption uninterpreted_option = 999; */
        for (let i = 0; i < message.uninterpretedOption.length; i++)
            exports.UninterpretedOption.internalBinaryWrite(message.uninterpretedOption[i], writer.tag(999, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.MethodOptions
 */
exports.MethodOptions = new MethodOptions$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UninterpretedOption$Type extends runtime_5.MessageType {
    constructor() {
        super("google.protobuf.UninterpretedOption", [
            { no: 2, name: "name", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.UninterpretedOption_NamePart },
            { no: 3, name: "identifier_value", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "positive_int_value", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/ },
            { no: 5, name: "negative_int_value", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/ },
            { no: 6, name: "double_value", kind: "scalar", opt: true, T: 1 /*ScalarType.DOUBLE*/ },
            { no: 7, name: "string_value", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 8, name: "aggregate_value", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { name: [] };
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
                case /* repeated google.protobuf.UninterpretedOption.NamePart name */ 2:
                    message.name.push(exports.UninterpretedOption_NamePart.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional string identifier_value */ 3:
                    message.identifierValue = reader.string();
                    break;
                case /* optional uint64 positive_int_value */ 4:
                    message.positiveIntValue = reader.uint64().toString();
                    break;
                case /* optional int64 negative_int_value */ 5:
                    message.negativeIntValue = reader.int64().toString();
                    break;
                case /* optional double double_value */ 6:
                    message.doubleValue = reader.double();
                    break;
                case /* optional bytes string_value */ 7:
                    message.stringValue = reader.bytes();
                    break;
                case /* optional string aggregate_value */ 8:
                    message.aggregateValue = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated google.protobuf.UninterpretedOption.NamePart name = 2; */
        for (let i = 0; i < message.name.length; i++)
            exports.UninterpretedOption_NamePart.internalBinaryWrite(message.name[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional string identifier_value = 3; */
        if (message.identifierValue !== undefined)
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.identifierValue);
        /* optional uint64 positive_int_value = 4; */
        if (message.positiveIntValue !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint64(message.positiveIntValue);
        /* optional int64 negative_int_value = 5; */
        if (message.negativeIntValue !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int64(message.negativeIntValue);
        /* optional double double_value = 6; */
        if (message.doubleValue !== undefined)
            writer.tag(6, runtime_1.WireType.Bit64).double(message.doubleValue);
        /* optional bytes string_value = 7; */
        if (message.stringValue !== undefined)
            writer.tag(7, runtime_1.WireType.LengthDelimited).bytes(message.stringValue);
        /* optional string aggregate_value = 8; */
        if (message.aggregateValue !== undefined)
            writer.tag(8, runtime_1.WireType.LengthDelimited).string(message.aggregateValue);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.UninterpretedOption
 */
exports.UninterpretedOption = new UninterpretedOption$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UninterpretedOption_NamePart$Type extends runtime_5.MessageType {
    constructor() {
        super("google.protobuf.UninterpretedOption.NamePart", [
            { no: 1, name: "name_part", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "is_extension", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { namePart: "", isExtension: false };
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
                case /* string name_part */ 1:
                    message.namePart = reader.string();
                    break;
                case /* bool is_extension */ 2:
                    message.isExtension = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string name_part = 1; */
        if (message.namePart !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.namePart);
        /* bool is_extension = 2; */
        if (message.isExtension !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isExtension);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.UninterpretedOption.NamePart
 */
exports.UninterpretedOption_NamePart = new UninterpretedOption_NamePart$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SourceCodeInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("google.protobuf.SourceCodeInfo", [
            { no: 1, name: "location", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.SourceCodeInfo_Location }
        ]);
    }
    create(value) {
        const message = { location: [] };
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
                case /* repeated google.protobuf.SourceCodeInfo.Location location */ 1:
                    message.location.push(exports.SourceCodeInfo_Location.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated google.protobuf.SourceCodeInfo.Location location = 1; */
        for (let i = 0; i < message.location.length; i++)
            exports.SourceCodeInfo_Location.internalBinaryWrite(message.location[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.SourceCodeInfo
 */
exports.SourceCodeInfo = new SourceCodeInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SourceCodeInfo_Location$Type extends runtime_5.MessageType {
    constructor() {
        super("google.protobuf.SourceCodeInfo.Location", [
            { no: 1, name: "path", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "span", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "leading_comments", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "trailing_comments", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "leading_detached_comments", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { path: [], span: [], leadingDetachedComments: [] };
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
                case /* repeated int32 path = 1 [packed = true];*/ 1:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.path.push(reader.int32());
                    else
                        message.path.push(reader.int32());
                    break;
                case /* repeated int32 span = 2 [packed = true];*/ 2:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.span.push(reader.int32());
                    else
                        message.span.push(reader.int32());
                    break;
                case /* optional string leading_comments */ 3:
                    message.leadingComments = reader.string();
                    break;
                case /* optional string trailing_comments */ 4:
                    message.trailingComments = reader.string();
                    break;
                case /* repeated string leading_detached_comments */ 6:
                    message.leadingDetachedComments.push(reader.string());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated int32 path = 1 [packed = true]; */
        if (message.path.length) {
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.path.length; i++)
                writer.int32(message.path[i]);
            writer.join();
        }
        /* repeated int32 span = 2 [packed = true]; */
        if (message.span.length) {
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.span.length; i++)
                writer.int32(message.span[i]);
            writer.join();
        }
        /* optional string leading_comments = 3; */
        if (message.leadingComments !== undefined)
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.leadingComments);
        /* optional string trailing_comments = 4; */
        if (message.trailingComments !== undefined)
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.trailingComments);
        /* repeated string leading_detached_comments = 6; */
        for (let i = 0; i < message.leadingDetachedComments.length; i++)
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.leadingDetachedComments[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.SourceCodeInfo.Location
 */
exports.SourceCodeInfo_Location = new SourceCodeInfo_Location$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GeneratedCodeInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("google.protobuf.GeneratedCodeInfo", [
            { no: 1, name: "annotation", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.GeneratedCodeInfo_Annotation }
        ]);
    }
    create(value) {
        const message = { annotation: [] };
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
                case /* repeated google.protobuf.GeneratedCodeInfo.Annotation annotation */ 1:
                    message.annotation.push(exports.GeneratedCodeInfo_Annotation.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated google.protobuf.GeneratedCodeInfo.Annotation annotation = 1; */
        for (let i = 0; i < message.annotation.length; i++)
            exports.GeneratedCodeInfo_Annotation.internalBinaryWrite(message.annotation[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.GeneratedCodeInfo
 */
exports.GeneratedCodeInfo = new GeneratedCodeInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GeneratedCodeInfo_Annotation$Type extends runtime_5.MessageType {
    constructor() {
        super("google.protobuf.GeneratedCodeInfo.Annotation", [
            { no: 1, name: "path", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "source_file", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "begin", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "end", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { path: [] };
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
                case /* repeated int32 path = 1 [packed = true];*/ 1:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.path.push(reader.int32());
                    else
                        message.path.push(reader.int32());
                    break;
                case /* optional string source_file */ 2:
                    message.sourceFile = reader.string();
                    break;
                case /* optional int32 begin */ 3:
                    message.begin = reader.int32();
                    break;
                case /* optional int32 end */ 4:
                    message.end = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated int32 path = 1 [packed = true]; */
        if (message.path.length) {
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.path.length; i++)
                writer.int32(message.path[i]);
            writer.join();
        }
        /* optional string source_file = 2; */
        if (message.sourceFile !== undefined)
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.sourceFile);
        /* optional int32 begin = 3; */
        if (message.begin !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.begin);
        /* optional int32 end = 4; */
        if (message.end !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.end);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.GeneratedCodeInfo.Annotation
 */
exports.GeneratedCodeInfo_Annotation = new GeneratedCodeInfo_Annotation$Type();
//# sourceMappingURL=descriptor.js.map