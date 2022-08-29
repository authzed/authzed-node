"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimestampRules = exports.DurationRules = exports.AnyRules = exports.MapRules = exports.RepeatedRules = exports.MessageRules = exports.EnumRules = exports.BytesRules = exports.StringRules = exports.BoolRules = exports.SFixed64Rules = exports.SFixed32Rules = exports.Fixed64Rules = exports.Fixed32Rules = exports.SInt64Rules = exports.SInt32Rules = exports.UInt64Rules = exports.UInt32Rules = exports.Int64Rules = exports.Int32Rules = exports.DoubleRules = exports.FloatRules = exports.FieldRules = exports.KnownRegex = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const timestamp_1 = require("../google/protobuf/timestamp");
const duration_1 = require("../google/protobuf/duration");
/**
 * WellKnownRegex contain some well-known patterns.
 *
 * @generated from protobuf enum validate.KnownRegex
 */
var KnownRegex;
(function (KnownRegex) {
    /**
     * @generated from protobuf enum value: UNKNOWN = 0;
     */
    KnownRegex[KnownRegex["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * HTTP header name as defined by RFC 7230.
     *
     * @generated from protobuf enum value: HTTP_HEADER_NAME = 1;
     */
    KnownRegex[KnownRegex["HTTP_HEADER_NAME"] = 1] = "HTTP_HEADER_NAME";
    /**
     * HTTP header value as defined by RFC 7230.
     *
     * @generated from protobuf enum value: HTTP_HEADER_VALUE = 2;
     */
    KnownRegex[KnownRegex["HTTP_HEADER_VALUE"] = 2] = "HTTP_HEADER_VALUE";
})(KnownRegex = exports.KnownRegex || (exports.KnownRegex = {}));
// @generated message type with reflection information, may provide speed optimized methods
class FieldRules$Type extends runtime_5.MessageType {
    constructor() {
        super("validate.FieldRules", [
            { no: 17, name: "message", kind: "message", T: () => exports.MessageRules },
            { no: 1, name: "float", kind: "message", oneof: "type", T: () => exports.FloatRules },
            { no: 2, name: "double", kind: "message", oneof: "type", T: () => exports.DoubleRules },
            { no: 3, name: "int32", kind: "message", oneof: "type", T: () => exports.Int32Rules },
            { no: 4, name: "int64", kind: "message", oneof: "type", T: () => exports.Int64Rules },
            { no: 5, name: "uint32", kind: "message", oneof: "type", T: () => exports.UInt32Rules },
            { no: 6, name: "uint64", kind: "message", oneof: "type", T: () => exports.UInt64Rules },
            { no: 7, name: "sint32", kind: "message", oneof: "type", T: () => exports.SInt32Rules },
            { no: 8, name: "sint64", kind: "message", oneof: "type", T: () => exports.SInt64Rules },
            { no: 9, name: "fixed32", kind: "message", oneof: "type", T: () => exports.Fixed32Rules },
            { no: 10, name: "fixed64", kind: "message", oneof: "type", T: () => exports.Fixed64Rules },
            { no: 11, name: "sfixed32", kind: "message", oneof: "type", T: () => exports.SFixed32Rules },
            { no: 12, name: "sfixed64", kind: "message", oneof: "type", T: () => exports.SFixed64Rules },
            { no: 13, name: "bool", kind: "message", oneof: "type", T: () => exports.BoolRules },
            { no: 14, name: "string", kind: "message", oneof: "type", T: () => exports.StringRules },
            { no: 15, name: "bytes", kind: "message", oneof: "type", T: () => exports.BytesRules },
            { no: 16, name: "enum", kind: "message", oneof: "type", T: () => exports.EnumRules },
            { no: 18, name: "repeated", kind: "message", oneof: "type", T: () => exports.RepeatedRules },
            { no: 19, name: "map", kind: "message", oneof: "type", T: () => exports.MapRules },
            { no: 20, name: "any", kind: "message", oneof: "type", T: () => exports.AnyRules },
            { no: 21, name: "duration", kind: "message", oneof: "type", T: () => exports.DurationRules },
            { no: 22, name: "timestamp", kind: "message", oneof: "type", T: () => exports.TimestampRules }
        ]);
    }
    create(value) {
        const message = { type: { oneofKind: undefined } };
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
                case /* optional validate.MessageRules message */ 17:
                    message.message = exports.MessageRules.internalBinaryRead(reader, reader.uint32(), options, message.message);
                    break;
                case /* validate.FloatRules float */ 1:
                    message.type = {
                        oneofKind: "float",
                        float: exports.FloatRules.internalBinaryRead(reader, reader.uint32(), options, message.type.float)
                    };
                    break;
                case /* validate.DoubleRules double */ 2:
                    message.type = {
                        oneofKind: "double",
                        double: exports.DoubleRules.internalBinaryRead(reader, reader.uint32(), options, message.type.double)
                    };
                    break;
                case /* validate.Int32Rules int32 */ 3:
                    message.type = {
                        oneofKind: "int32",
                        int32: exports.Int32Rules.internalBinaryRead(reader, reader.uint32(), options, message.type.int32)
                    };
                    break;
                case /* validate.Int64Rules int64 */ 4:
                    message.type = {
                        oneofKind: "int64",
                        int64: exports.Int64Rules.internalBinaryRead(reader, reader.uint32(), options, message.type.int64)
                    };
                    break;
                case /* validate.UInt32Rules uint32 */ 5:
                    message.type = {
                        oneofKind: "uint32",
                        uint32: exports.UInt32Rules.internalBinaryRead(reader, reader.uint32(), options, message.type.uint32)
                    };
                    break;
                case /* validate.UInt64Rules uint64 */ 6:
                    message.type = {
                        oneofKind: "uint64",
                        uint64: exports.UInt64Rules.internalBinaryRead(reader, reader.uint32(), options, message.type.uint64)
                    };
                    break;
                case /* validate.SInt32Rules sint32 */ 7:
                    message.type = {
                        oneofKind: "sint32",
                        sint32: exports.SInt32Rules.internalBinaryRead(reader, reader.uint32(), options, message.type.sint32)
                    };
                    break;
                case /* validate.SInt64Rules sint64 */ 8:
                    message.type = {
                        oneofKind: "sint64",
                        sint64: exports.SInt64Rules.internalBinaryRead(reader, reader.uint32(), options, message.type.sint64)
                    };
                    break;
                case /* validate.Fixed32Rules fixed32 */ 9:
                    message.type = {
                        oneofKind: "fixed32",
                        fixed32: exports.Fixed32Rules.internalBinaryRead(reader, reader.uint32(), options, message.type.fixed32)
                    };
                    break;
                case /* validate.Fixed64Rules fixed64 */ 10:
                    message.type = {
                        oneofKind: "fixed64",
                        fixed64: exports.Fixed64Rules.internalBinaryRead(reader, reader.uint32(), options, message.type.fixed64)
                    };
                    break;
                case /* validate.SFixed32Rules sfixed32 */ 11:
                    message.type = {
                        oneofKind: "sfixed32",
                        sfixed32: exports.SFixed32Rules.internalBinaryRead(reader, reader.uint32(), options, message.type.sfixed32)
                    };
                    break;
                case /* validate.SFixed64Rules sfixed64 */ 12:
                    message.type = {
                        oneofKind: "sfixed64",
                        sfixed64: exports.SFixed64Rules.internalBinaryRead(reader, reader.uint32(), options, message.type.sfixed64)
                    };
                    break;
                case /* validate.BoolRules bool */ 13:
                    message.type = {
                        oneofKind: "bool",
                        bool: exports.BoolRules.internalBinaryRead(reader, reader.uint32(), options, message.type.bool)
                    };
                    break;
                case /* validate.StringRules string */ 14:
                    message.type = {
                        oneofKind: "string",
                        string: exports.StringRules.internalBinaryRead(reader, reader.uint32(), options, message.type.string)
                    };
                    break;
                case /* validate.BytesRules bytes */ 15:
                    message.type = {
                        oneofKind: "bytes",
                        bytes: exports.BytesRules.internalBinaryRead(reader, reader.uint32(), options, message.type.bytes)
                    };
                    break;
                case /* validate.EnumRules enum */ 16:
                    message.type = {
                        oneofKind: "enum",
                        enum: exports.EnumRules.internalBinaryRead(reader, reader.uint32(), options, message.type.enum)
                    };
                    break;
                case /* validate.RepeatedRules repeated */ 18:
                    message.type = {
                        oneofKind: "repeated",
                        repeated: exports.RepeatedRules.internalBinaryRead(reader, reader.uint32(), options, message.type.repeated)
                    };
                    break;
                case /* validate.MapRules map */ 19:
                    message.type = {
                        oneofKind: "map",
                        map: exports.MapRules.internalBinaryRead(reader, reader.uint32(), options, message.type.map)
                    };
                    break;
                case /* validate.AnyRules any */ 20:
                    message.type = {
                        oneofKind: "any",
                        any: exports.AnyRules.internalBinaryRead(reader, reader.uint32(), options, message.type.any)
                    };
                    break;
                case /* validate.DurationRules duration */ 21:
                    message.type = {
                        oneofKind: "duration",
                        duration: exports.DurationRules.internalBinaryRead(reader, reader.uint32(), options, message.type.duration)
                    };
                    break;
                case /* validate.TimestampRules timestamp */ 22:
                    message.type = {
                        oneofKind: "timestamp",
                        timestamp: exports.TimestampRules.internalBinaryRead(reader, reader.uint32(), options, message.type.timestamp)
                    };
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
        /* optional validate.MessageRules message = 17; */
        if (message.message)
            exports.MessageRules.internalBinaryWrite(message.message, writer.tag(17, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* validate.FloatRules float = 1; */
        if (message.type.oneofKind === "float")
            exports.FloatRules.internalBinaryWrite(message.type.float, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* validate.DoubleRules double = 2; */
        if (message.type.oneofKind === "double")
            exports.DoubleRules.internalBinaryWrite(message.type.double, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* validate.Int32Rules int32 = 3; */
        if (message.type.oneofKind === "int32")
            exports.Int32Rules.internalBinaryWrite(message.type.int32, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* validate.Int64Rules int64 = 4; */
        if (message.type.oneofKind === "int64")
            exports.Int64Rules.internalBinaryWrite(message.type.int64, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* validate.UInt32Rules uint32 = 5; */
        if (message.type.oneofKind === "uint32")
            exports.UInt32Rules.internalBinaryWrite(message.type.uint32, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* validate.UInt64Rules uint64 = 6; */
        if (message.type.oneofKind === "uint64")
            exports.UInt64Rules.internalBinaryWrite(message.type.uint64, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* validate.SInt32Rules sint32 = 7; */
        if (message.type.oneofKind === "sint32")
            exports.SInt32Rules.internalBinaryWrite(message.type.sint32, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* validate.SInt64Rules sint64 = 8; */
        if (message.type.oneofKind === "sint64")
            exports.SInt64Rules.internalBinaryWrite(message.type.sint64, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* validate.Fixed32Rules fixed32 = 9; */
        if (message.type.oneofKind === "fixed32")
            exports.Fixed32Rules.internalBinaryWrite(message.type.fixed32, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* validate.Fixed64Rules fixed64 = 10; */
        if (message.type.oneofKind === "fixed64")
            exports.Fixed64Rules.internalBinaryWrite(message.type.fixed64, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* validate.SFixed32Rules sfixed32 = 11; */
        if (message.type.oneofKind === "sfixed32")
            exports.SFixed32Rules.internalBinaryWrite(message.type.sfixed32, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* validate.SFixed64Rules sfixed64 = 12; */
        if (message.type.oneofKind === "sfixed64")
            exports.SFixed64Rules.internalBinaryWrite(message.type.sfixed64, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* validate.BoolRules bool = 13; */
        if (message.type.oneofKind === "bool")
            exports.BoolRules.internalBinaryWrite(message.type.bool, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* validate.StringRules string = 14; */
        if (message.type.oneofKind === "string")
            exports.StringRules.internalBinaryWrite(message.type.string, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* validate.BytesRules bytes = 15; */
        if (message.type.oneofKind === "bytes")
            exports.BytesRules.internalBinaryWrite(message.type.bytes, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* validate.EnumRules enum = 16; */
        if (message.type.oneofKind === "enum")
            exports.EnumRules.internalBinaryWrite(message.type.enum, writer.tag(16, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* validate.RepeatedRules repeated = 18; */
        if (message.type.oneofKind === "repeated")
            exports.RepeatedRules.internalBinaryWrite(message.type.repeated, writer.tag(18, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* validate.MapRules map = 19; */
        if (message.type.oneofKind === "map")
            exports.MapRules.internalBinaryWrite(message.type.map, writer.tag(19, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* validate.AnyRules any = 20; */
        if (message.type.oneofKind === "any")
            exports.AnyRules.internalBinaryWrite(message.type.any, writer.tag(20, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* validate.DurationRules duration = 21; */
        if (message.type.oneofKind === "duration")
            exports.DurationRules.internalBinaryWrite(message.type.duration, writer.tag(21, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* validate.TimestampRules timestamp = 22; */
        if (message.type.oneofKind === "timestamp")
            exports.TimestampRules.internalBinaryWrite(message.type.timestamp, writer.tag(22, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message validate.FieldRules
 */
exports.FieldRules = new FieldRules$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FloatRules$Type extends runtime_5.MessageType {
    constructor() {
        super("validate.FloatRules", [
            { no: 1, name: "const", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 2, name: "lt", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 3, name: "lte", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 4, name: "gt", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 5, name: "gte", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 6, name: "in", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 2 /*ScalarType.FLOAT*/ },
            { no: 7, name: "not_in", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 2 /*ScalarType.FLOAT*/ },
            { no: 8, name: "ignore_empty", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { in: [], notIn: [] };
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
                case /* optional float const */ 1:
                    message.const = reader.float();
                    break;
                case /* optional float lt */ 2:
                    message.lt = reader.float();
                    break;
                case /* optional float lte */ 3:
                    message.lte = reader.float();
                    break;
                case /* optional float gt */ 4:
                    message.gt = reader.float();
                    break;
                case /* optional float gte */ 5:
                    message.gte = reader.float();
                    break;
                case /* repeated float in */ 6:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.in.push(reader.float());
                    else
                        message.in.push(reader.float());
                    break;
                case /* repeated float not_in */ 7:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.notIn.push(reader.float());
                    else
                        message.notIn.push(reader.float());
                    break;
                case /* optional bool ignore_empty */ 8:
                    message.ignoreEmpty = reader.bool();
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
        /* optional float const = 1; */
        if (message.const !== undefined)
            writer.tag(1, runtime_1.WireType.Bit32).float(message.const);
        /* optional float lt = 2; */
        if (message.lt !== undefined)
            writer.tag(2, runtime_1.WireType.Bit32).float(message.lt);
        /* optional float lte = 3; */
        if (message.lte !== undefined)
            writer.tag(3, runtime_1.WireType.Bit32).float(message.lte);
        /* optional float gt = 4; */
        if (message.gt !== undefined)
            writer.tag(4, runtime_1.WireType.Bit32).float(message.gt);
        /* optional float gte = 5; */
        if (message.gte !== undefined)
            writer.tag(5, runtime_1.WireType.Bit32).float(message.gte);
        /* repeated float in = 6; */
        for (let i = 0; i < message.in.length; i++)
            writer.tag(6, runtime_1.WireType.Bit32).float(message.in[i]);
        /* repeated float not_in = 7; */
        for (let i = 0; i < message.notIn.length; i++)
            writer.tag(7, runtime_1.WireType.Bit32).float(message.notIn[i]);
        /* optional bool ignore_empty = 8; */
        if (message.ignoreEmpty !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.ignoreEmpty);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message validate.FloatRules
 */
exports.FloatRules = new FloatRules$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DoubleRules$Type extends runtime_5.MessageType {
    constructor() {
        super("validate.DoubleRules", [
            { no: 1, name: "const", kind: "scalar", opt: true, T: 1 /*ScalarType.DOUBLE*/ },
            { no: 2, name: "lt", kind: "scalar", opt: true, T: 1 /*ScalarType.DOUBLE*/ },
            { no: 3, name: "lte", kind: "scalar", opt: true, T: 1 /*ScalarType.DOUBLE*/ },
            { no: 4, name: "gt", kind: "scalar", opt: true, T: 1 /*ScalarType.DOUBLE*/ },
            { no: 5, name: "gte", kind: "scalar", opt: true, T: 1 /*ScalarType.DOUBLE*/ },
            { no: 6, name: "in", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 1 /*ScalarType.DOUBLE*/ },
            { no: 7, name: "not_in", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 1 /*ScalarType.DOUBLE*/ },
            { no: 8, name: "ignore_empty", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { in: [], notIn: [] };
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
                case /* optional double const */ 1:
                    message.const = reader.double();
                    break;
                case /* optional double lt */ 2:
                    message.lt = reader.double();
                    break;
                case /* optional double lte */ 3:
                    message.lte = reader.double();
                    break;
                case /* optional double gt */ 4:
                    message.gt = reader.double();
                    break;
                case /* optional double gte */ 5:
                    message.gte = reader.double();
                    break;
                case /* repeated double in */ 6:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.in.push(reader.double());
                    else
                        message.in.push(reader.double());
                    break;
                case /* repeated double not_in */ 7:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.notIn.push(reader.double());
                    else
                        message.notIn.push(reader.double());
                    break;
                case /* optional bool ignore_empty */ 8:
                    message.ignoreEmpty = reader.bool();
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
        /* optional double const = 1; */
        if (message.const !== undefined)
            writer.tag(1, runtime_1.WireType.Bit64).double(message.const);
        /* optional double lt = 2; */
        if (message.lt !== undefined)
            writer.tag(2, runtime_1.WireType.Bit64).double(message.lt);
        /* optional double lte = 3; */
        if (message.lte !== undefined)
            writer.tag(3, runtime_1.WireType.Bit64).double(message.lte);
        /* optional double gt = 4; */
        if (message.gt !== undefined)
            writer.tag(4, runtime_1.WireType.Bit64).double(message.gt);
        /* optional double gte = 5; */
        if (message.gte !== undefined)
            writer.tag(5, runtime_1.WireType.Bit64).double(message.gte);
        /* repeated double in = 6; */
        for (let i = 0; i < message.in.length; i++)
            writer.tag(6, runtime_1.WireType.Bit64).double(message.in[i]);
        /* repeated double not_in = 7; */
        for (let i = 0; i < message.notIn.length; i++)
            writer.tag(7, runtime_1.WireType.Bit64).double(message.notIn[i]);
        /* optional bool ignore_empty = 8; */
        if (message.ignoreEmpty !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.ignoreEmpty);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message validate.DoubleRules
 */
exports.DoubleRules = new DoubleRules$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Int32Rules$Type extends runtime_5.MessageType {
    constructor() {
        super("validate.Int32Rules", [
            { no: 1, name: "const", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "lt", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "lte", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "gt", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "gte", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "in", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "not_in", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "ignore_empty", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { in: [], notIn: [] };
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
                case /* optional int32 const */ 1:
                    message.const = reader.int32();
                    break;
                case /* optional int32 lt */ 2:
                    message.lt = reader.int32();
                    break;
                case /* optional int32 lte */ 3:
                    message.lte = reader.int32();
                    break;
                case /* optional int32 gt */ 4:
                    message.gt = reader.int32();
                    break;
                case /* optional int32 gte */ 5:
                    message.gte = reader.int32();
                    break;
                case /* repeated int32 in */ 6:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.in.push(reader.int32());
                    else
                        message.in.push(reader.int32());
                    break;
                case /* repeated int32 not_in */ 7:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.notIn.push(reader.int32());
                    else
                        message.notIn.push(reader.int32());
                    break;
                case /* optional bool ignore_empty */ 8:
                    message.ignoreEmpty = reader.bool();
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
        /* optional int32 const = 1; */
        if (message.const !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.const);
        /* optional int32 lt = 2; */
        if (message.lt !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.lt);
        /* optional int32 lte = 3; */
        if (message.lte !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.lte);
        /* optional int32 gt = 4; */
        if (message.gt !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.gt);
        /* optional int32 gte = 5; */
        if (message.gte !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.gte);
        /* repeated int32 in = 6; */
        for (let i = 0; i < message.in.length; i++)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.in[i]);
        /* repeated int32 not_in = 7; */
        for (let i = 0; i < message.notIn.length; i++)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.notIn[i]);
        /* optional bool ignore_empty = 8; */
        if (message.ignoreEmpty !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.ignoreEmpty);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message validate.Int32Rules
 */
exports.Int32Rules = new Int32Rules$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Int64Rules$Type extends runtime_5.MessageType {
    constructor() {
        super("validate.Int64Rules", [
            { no: 1, name: "const", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/ },
            { no: 2, name: "lt", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/ },
            { no: 3, name: "lte", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/ },
            { no: 4, name: "gt", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/ },
            { no: 5, name: "gte", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/ },
            { no: 6, name: "in", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 3 /*ScalarType.INT64*/ },
            { no: 7, name: "not_in", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 3 /*ScalarType.INT64*/ },
            { no: 8, name: "ignore_empty", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { in: [], notIn: [] };
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
                case /* optional int64 const */ 1:
                    message.const = reader.int64().toString();
                    break;
                case /* optional int64 lt */ 2:
                    message.lt = reader.int64().toString();
                    break;
                case /* optional int64 lte */ 3:
                    message.lte = reader.int64().toString();
                    break;
                case /* optional int64 gt */ 4:
                    message.gt = reader.int64().toString();
                    break;
                case /* optional int64 gte */ 5:
                    message.gte = reader.int64().toString();
                    break;
                case /* repeated int64 in */ 6:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.in.push(reader.int64().toString());
                    else
                        message.in.push(reader.int64().toString());
                    break;
                case /* repeated int64 not_in */ 7:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.notIn.push(reader.int64().toString());
                    else
                        message.notIn.push(reader.int64().toString());
                    break;
                case /* optional bool ignore_empty */ 8:
                    message.ignoreEmpty = reader.bool();
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
        /* optional int64 const = 1; */
        if (message.const !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int64(message.const);
        /* optional int64 lt = 2; */
        if (message.lt !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int64(message.lt);
        /* optional int64 lte = 3; */
        if (message.lte !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).int64(message.lte);
        /* optional int64 gt = 4; */
        if (message.gt !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).int64(message.gt);
        /* optional int64 gte = 5; */
        if (message.gte !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int64(message.gte);
        /* repeated int64 in = 6; */
        for (let i = 0; i < message.in.length; i++)
            writer.tag(6, runtime_1.WireType.Varint).int64(message.in[i]);
        /* repeated int64 not_in = 7; */
        for (let i = 0; i < message.notIn.length; i++)
            writer.tag(7, runtime_1.WireType.Varint).int64(message.notIn[i]);
        /* optional bool ignore_empty = 8; */
        if (message.ignoreEmpty !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.ignoreEmpty);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message validate.Int64Rules
 */
exports.Int64Rules = new Int64Rules$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UInt32Rules$Type extends runtime_5.MessageType {
    constructor() {
        super("validate.UInt32Rules", [
            { no: 1, name: "const", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "lt", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "lte", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "gt", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "gte", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "in", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "not_in", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "ignore_empty", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { in: [], notIn: [] };
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
                case /* optional uint32 const */ 1:
                    message.const = reader.uint32();
                    break;
                case /* optional uint32 lt */ 2:
                    message.lt = reader.uint32();
                    break;
                case /* optional uint32 lte */ 3:
                    message.lte = reader.uint32();
                    break;
                case /* optional uint32 gt */ 4:
                    message.gt = reader.uint32();
                    break;
                case /* optional uint32 gte */ 5:
                    message.gte = reader.uint32();
                    break;
                case /* repeated uint32 in */ 6:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.in.push(reader.uint32());
                    else
                        message.in.push(reader.uint32());
                    break;
                case /* repeated uint32 not_in */ 7:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.notIn.push(reader.uint32());
                    else
                        message.notIn.push(reader.uint32());
                    break;
                case /* optional bool ignore_empty */ 8:
                    message.ignoreEmpty = reader.bool();
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
        /* optional uint32 const = 1; */
        if (message.const !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.const);
        /* optional uint32 lt = 2; */
        if (message.lt !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.lt);
        /* optional uint32 lte = 3; */
        if (message.lte !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.lte);
        /* optional uint32 gt = 4; */
        if (message.gt !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.gt);
        /* optional uint32 gte = 5; */
        if (message.gte !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.gte);
        /* repeated uint32 in = 6; */
        for (let i = 0; i < message.in.length; i++)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.in[i]);
        /* repeated uint32 not_in = 7; */
        for (let i = 0; i < message.notIn.length; i++)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.notIn[i]);
        /* optional bool ignore_empty = 8; */
        if (message.ignoreEmpty !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.ignoreEmpty);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message validate.UInt32Rules
 */
exports.UInt32Rules = new UInt32Rules$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UInt64Rules$Type extends runtime_5.MessageType {
    constructor() {
        super("validate.UInt64Rules", [
            { no: 1, name: "const", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "lt", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/ },
            { no: 3, name: "lte", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/ },
            { no: 4, name: "gt", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/ },
            { no: 5, name: "gte", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/ },
            { no: 6, name: "in", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 4 /*ScalarType.UINT64*/ },
            { no: 7, name: "not_in", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 4 /*ScalarType.UINT64*/ },
            { no: 8, name: "ignore_empty", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { in: [], notIn: [] };
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
                case /* optional uint64 const */ 1:
                    message.const = reader.uint64().toString();
                    break;
                case /* optional uint64 lt */ 2:
                    message.lt = reader.uint64().toString();
                    break;
                case /* optional uint64 lte */ 3:
                    message.lte = reader.uint64().toString();
                    break;
                case /* optional uint64 gt */ 4:
                    message.gt = reader.uint64().toString();
                    break;
                case /* optional uint64 gte */ 5:
                    message.gte = reader.uint64().toString();
                    break;
                case /* repeated uint64 in */ 6:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.in.push(reader.uint64().toString());
                    else
                        message.in.push(reader.uint64().toString());
                    break;
                case /* repeated uint64 not_in */ 7:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.notIn.push(reader.uint64().toString());
                    else
                        message.notIn.push(reader.uint64().toString());
                    break;
                case /* optional bool ignore_empty */ 8:
                    message.ignoreEmpty = reader.bool();
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
        /* optional uint64 const = 1; */
        if (message.const !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.const);
        /* optional uint64 lt = 2; */
        if (message.lt !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.lt);
        /* optional uint64 lte = 3; */
        if (message.lte !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.lte);
        /* optional uint64 gt = 4; */
        if (message.gt !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint64(message.gt);
        /* optional uint64 gte = 5; */
        if (message.gte !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.gte);
        /* repeated uint64 in = 6; */
        for (let i = 0; i < message.in.length; i++)
            writer.tag(6, runtime_1.WireType.Varint).uint64(message.in[i]);
        /* repeated uint64 not_in = 7; */
        for (let i = 0; i < message.notIn.length; i++)
            writer.tag(7, runtime_1.WireType.Varint).uint64(message.notIn[i]);
        /* optional bool ignore_empty = 8; */
        if (message.ignoreEmpty !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.ignoreEmpty);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message validate.UInt64Rules
 */
exports.UInt64Rules = new UInt64Rules$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SInt32Rules$Type extends runtime_5.MessageType {
    constructor() {
        super("validate.SInt32Rules", [
            { no: 1, name: "const", kind: "scalar", opt: true, T: 17 /*ScalarType.SINT32*/ },
            { no: 2, name: "lt", kind: "scalar", opt: true, T: 17 /*ScalarType.SINT32*/ },
            { no: 3, name: "lte", kind: "scalar", opt: true, T: 17 /*ScalarType.SINT32*/ },
            { no: 4, name: "gt", kind: "scalar", opt: true, T: 17 /*ScalarType.SINT32*/ },
            { no: 5, name: "gte", kind: "scalar", opt: true, T: 17 /*ScalarType.SINT32*/ },
            { no: 6, name: "in", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 17 /*ScalarType.SINT32*/ },
            { no: 7, name: "not_in", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 17 /*ScalarType.SINT32*/ },
            { no: 8, name: "ignore_empty", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { in: [], notIn: [] };
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
                case /* optional sint32 const */ 1:
                    message.const = reader.sint32();
                    break;
                case /* optional sint32 lt */ 2:
                    message.lt = reader.sint32();
                    break;
                case /* optional sint32 lte */ 3:
                    message.lte = reader.sint32();
                    break;
                case /* optional sint32 gt */ 4:
                    message.gt = reader.sint32();
                    break;
                case /* optional sint32 gte */ 5:
                    message.gte = reader.sint32();
                    break;
                case /* repeated sint32 in */ 6:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.in.push(reader.sint32());
                    else
                        message.in.push(reader.sint32());
                    break;
                case /* repeated sint32 not_in */ 7:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.notIn.push(reader.sint32());
                    else
                        message.notIn.push(reader.sint32());
                    break;
                case /* optional bool ignore_empty */ 8:
                    message.ignoreEmpty = reader.bool();
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
        /* optional sint32 const = 1; */
        if (message.const !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).sint32(message.const);
        /* optional sint32 lt = 2; */
        if (message.lt !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).sint32(message.lt);
        /* optional sint32 lte = 3; */
        if (message.lte !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).sint32(message.lte);
        /* optional sint32 gt = 4; */
        if (message.gt !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).sint32(message.gt);
        /* optional sint32 gte = 5; */
        if (message.gte !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).sint32(message.gte);
        /* repeated sint32 in = 6; */
        for (let i = 0; i < message.in.length; i++)
            writer.tag(6, runtime_1.WireType.Varint).sint32(message.in[i]);
        /* repeated sint32 not_in = 7; */
        for (let i = 0; i < message.notIn.length; i++)
            writer.tag(7, runtime_1.WireType.Varint).sint32(message.notIn[i]);
        /* optional bool ignore_empty = 8; */
        if (message.ignoreEmpty !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.ignoreEmpty);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message validate.SInt32Rules
 */
exports.SInt32Rules = new SInt32Rules$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SInt64Rules$Type extends runtime_5.MessageType {
    constructor() {
        super("validate.SInt64Rules", [
            { no: 1, name: "const", kind: "scalar", opt: true, T: 18 /*ScalarType.SINT64*/ },
            { no: 2, name: "lt", kind: "scalar", opt: true, T: 18 /*ScalarType.SINT64*/ },
            { no: 3, name: "lte", kind: "scalar", opt: true, T: 18 /*ScalarType.SINT64*/ },
            { no: 4, name: "gt", kind: "scalar", opt: true, T: 18 /*ScalarType.SINT64*/ },
            { no: 5, name: "gte", kind: "scalar", opt: true, T: 18 /*ScalarType.SINT64*/ },
            { no: 6, name: "in", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 18 /*ScalarType.SINT64*/ },
            { no: 7, name: "not_in", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 18 /*ScalarType.SINT64*/ },
            { no: 8, name: "ignore_empty", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { in: [], notIn: [] };
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
                case /* optional sint64 const */ 1:
                    message.const = reader.sint64().toString();
                    break;
                case /* optional sint64 lt */ 2:
                    message.lt = reader.sint64().toString();
                    break;
                case /* optional sint64 lte */ 3:
                    message.lte = reader.sint64().toString();
                    break;
                case /* optional sint64 gt */ 4:
                    message.gt = reader.sint64().toString();
                    break;
                case /* optional sint64 gte */ 5:
                    message.gte = reader.sint64().toString();
                    break;
                case /* repeated sint64 in */ 6:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.in.push(reader.sint64().toString());
                    else
                        message.in.push(reader.sint64().toString());
                    break;
                case /* repeated sint64 not_in */ 7:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.notIn.push(reader.sint64().toString());
                    else
                        message.notIn.push(reader.sint64().toString());
                    break;
                case /* optional bool ignore_empty */ 8:
                    message.ignoreEmpty = reader.bool();
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
        /* optional sint64 const = 1; */
        if (message.const !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).sint64(message.const);
        /* optional sint64 lt = 2; */
        if (message.lt !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).sint64(message.lt);
        /* optional sint64 lte = 3; */
        if (message.lte !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).sint64(message.lte);
        /* optional sint64 gt = 4; */
        if (message.gt !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).sint64(message.gt);
        /* optional sint64 gte = 5; */
        if (message.gte !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).sint64(message.gte);
        /* repeated sint64 in = 6; */
        for (let i = 0; i < message.in.length; i++)
            writer.tag(6, runtime_1.WireType.Varint).sint64(message.in[i]);
        /* repeated sint64 not_in = 7; */
        for (let i = 0; i < message.notIn.length; i++)
            writer.tag(7, runtime_1.WireType.Varint).sint64(message.notIn[i]);
        /* optional bool ignore_empty = 8; */
        if (message.ignoreEmpty !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.ignoreEmpty);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message validate.SInt64Rules
 */
exports.SInt64Rules = new SInt64Rules$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Fixed32Rules$Type extends runtime_5.MessageType {
    constructor() {
        super("validate.Fixed32Rules", [
            { no: 1, name: "const", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ },
            { no: 2, name: "lt", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ },
            { no: 3, name: "lte", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ },
            { no: 4, name: "gt", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ },
            { no: 5, name: "gte", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ },
            { no: 6, name: "in", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 7 /*ScalarType.FIXED32*/ },
            { no: 7, name: "not_in", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 7 /*ScalarType.FIXED32*/ },
            { no: 8, name: "ignore_empty", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { in: [], notIn: [] };
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
                case /* optional fixed32 const */ 1:
                    message.const = reader.fixed32();
                    break;
                case /* optional fixed32 lt */ 2:
                    message.lt = reader.fixed32();
                    break;
                case /* optional fixed32 lte */ 3:
                    message.lte = reader.fixed32();
                    break;
                case /* optional fixed32 gt */ 4:
                    message.gt = reader.fixed32();
                    break;
                case /* optional fixed32 gte */ 5:
                    message.gte = reader.fixed32();
                    break;
                case /* repeated fixed32 in */ 6:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.in.push(reader.fixed32());
                    else
                        message.in.push(reader.fixed32());
                    break;
                case /* repeated fixed32 not_in */ 7:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.notIn.push(reader.fixed32());
                    else
                        message.notIn.push(reader.fixed32());
                    break;
                case /* optional bool ignore_empty */ 8:
                    message.ignoreEmpty = reader.bool();
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
        /* optional fixed32 const = 1; */
        if (message.const !== undefined)
            writer.tag(1, runtime_1.WireType.Bit32).fixed32(message.const);
        /* optional fixed32 lt = 2; */
        if (message.lt !== undefined)
            writer.tag(2, runtime_1.WireType.Bit32).fixed32(message.lt);
        /* optional fixed32 lte = 3; */
        if (message.lte !== undefined)
            writer.tag(3, runtime_1.WireType.Bit32).fixed32(message.lte);
        /* optional fixed32 gt = 4; */
        if (message.gt !== undefined)
            writer.tag(4, runtime_1.WireType.Bit32).fixed32(message.gt);
        /* optional fixed32 gte = 5; */
        if (message.gte !== undefined)
            writer.tag(5, runtime_1.WireType.Bit32).fixed32(message.gte);
        /* repeated fixed32 in = 6; */
        for (let i = 0; i < message.in.length; i++)
            writer.tag(6, runtime_1.WireType.Bit32).fixed32(message.in[i]);
        /* repeated fixed32 not_in = 7; */
        for (let i = 0; i < message.notIn.length; i++)
            writer.tag(7, runtime_1.WireType.Bit32).fixed32(message.notIn[i]);
        /* optional bool ignore_empty = 8; */
        if (message.ignoreEmpty !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.ignoreEmpty);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message validate.Fixed32Rules
 */
exports.Fixed32Rules = new Fixed32Rules$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Fixed64Rules$Type extends runtime_5.MessageType {
    constructor() {
        super("validate.Fixed64Rules", [
            { no: 1, name: "const", kind: "scalar", opt: true, T: 6 /*ScalarType.FIXED64*/ },
            { no: 2, name: "lt", kind: "scalar", opt: true, T: 6 /*ScalarType.FIXED64*/ },
            { no: 3, name: "lte", kind: "scalar", opt: true, T: 6 /*ScalarType.FIXED64*/ },
            { no: 4, name: "gt", kind: "scalar", opt: true, T: 6 /*ScalarType.FIXED64*/ },
            { no: 5, name: "gte", kind: "scalar", opt: true, T: 6 /*ScalarType.FIXED64*/ },
            { no: 6, name: "in", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 6 /*ScalarType.FIXED64*/ },
            { no: 7, name: "not_in", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 6 /*ScalarType.FIXED64*/ },
            { no: 8, name: "ignore_empty", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { in: [], notIn: [] };
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
                case /* optional fixed64 const */ 1:
                    message.const = reader.fixed64().toString();
                    break;
                case /* optional fixed64 lt */ 2:
                    message.lt = reader.fixed64().toString();
                    break;
                case /* optional fixed64 lte */ 3:
                    message.lte = reader.fixed64().toString();
                    break;
                case /* optional fixed64 gt */ 4:
                    message.gt = reader.fixed64().toString();
                    break;
                case /* optional fixed64 gte */ 5:
                    message.gte = reader.fixed64().toString();
                    break;
                case /* repeated fixed64 in */ 6:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.in.push(reader.fixed64().toString());
                    else
                        message.in.push(reader.fixed64().toString());
                    break;
                case /* repeated fixed64 not_in */ 7:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.notIn.push(reader.fixed64().toString());
                    else
                        message.notIn.push(reader.fixed64().toString());
                    break;
                case /* optional bool ignore_empty */ 8:
                    message.ignoreEmpty = reader.bool();
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
        /* optional fixed64 const = 1; */
        if (message.const !== undefined)
            writer.tag(1, runtime_1.WireType.Bit64).fixed64(message.const);
        /* optional fixed64 lt = 2; */
        if (message.lt !== undefined)
            writer.tag(2, runtime_1.WireType.Bit64).fixed64(message.lt);
        /* optional fixed64 lte = 3; */
        if (message.lte !== undefined)
            writer.tag(3, runtime_1.WireType.Bit64).fixed64(message.lte);
        /* optional fixed64 gt = 4; */
        if (message.gt !== undefined)
            writer.tag(4, runtime_1.WireType.Bit64).fixed64(message.gt);
        /* optional fixed64 gte = 5; */
        if (message.gte !== undefined)
            writer.tag(5, runtime_1.WireType.Bit64).fixed64(message.gte);
        /* repeated fixed64 in = 6; */
        for (let i = 0; i < message.in.length; i++)
            writer.tag(6, runtime_1.WireType.Bit64).fixed64(message.in[i]);
        /* repeated fixed64 not_in = 7; */
        for (let i = 0; i < message.notIn.length; i++)
            writer.tag(7, runtime_1.WireType.Bit64).fixed64(message.notIn[i]);
        /* optional bool ignore_empty = 8; */
        if (message.ignoreEmpty !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.ignoreEmpty);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message validate.Fixed64Rules
 */
exports.Fixed64Rules = new Fixed64Rules$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SFixed32Rules$Type extends runtime_5.MessageType {
    constructor() {
        super("validate.SFixed32Rules", [
            { no: 1, name: "const", kind: "scalar", opt: true, T: 15 /*ScalarType.SFIXED32*/ },
            { no: 2, name: "lt", kind: "scalar", opt: true, T: 15 /*ScalarType.SFIXED32*/ },
            { no: 3, name: "lte", kind: "scalar", opt: true, T: 15 /*ScalarType.SFIXED32*/ },
            { no: 4, name: "gt", kind: "scalar", opt: true, T: 15 /*ScalarType.SFIXED32*/ },
            { no: 5, name: "gte", kind: "scalar", opt: true, T: 15 /*ScalarType.SFIXED32*/ },
            { no: 6, name: "in", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 15 /*ScalarType.SFIXED32*/ },
            { no: 7, name: "not_in", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 15 /*ScalarType.SFIXED32*/ },
            { no: 8, name: "ignore_empty", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { in: [], notIn: [] };
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
                case /* optional sfixed32 const */ 1:
                    message.const = reader.sfixed32();
                    break;
                case /* optional sfixed32 lt */ 2:
                    message.lt = reader.sfixed32();
                    break;
                case /* optional sfixed32 lte */ 3:
                    message.lte = reader.sfixed32();
                    break;
                case /* optional sfixed32 gt */ 4:
                    message.gt = reader.sfixed32();
                    break;
                case /* optional sfixed32 gte */ 5:
                    message.gte = reader.sfixed32();
                    break;
                case /* repeated sfixed32 in */ 6:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.in.push(reader.sfixed32());
                    else
                        message.in.push(reader.sfixed32());
                    break;
                case /* repeated sfixed32 not_in */ 7:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.notIn.push(reader.sfixed32());
                    else
                        message.notIn.push(reader.sfixed32());
                    break;
                case /* optional bool ignore_empty */ 8:
                    message.ignoreEmpty = reader.bool();
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
        /* optional sfixed32 const = 1; */
        if (message.const !== undefined)
            writer.tag(1, runtime_1.WireType.Bit32).sfixed32(message.const);
        /* optional sfixed32 lt = 2; */
        if (message.lt !== undefined)
            writer.tag(2, runtime_1.WireType.Bit32).sfixed32(message.lt);
        /* optional sfixed32 lte = 3; */
        if (message.lte !== undefined)
            writer.tag(3, runtime_1.WireType.Bit32).sfixed32(message.lte);
        /* optional sfixed32 gt = 4; */
        if (message.gt !== undefined)
            writer.tag(4, runtime_1.WireType.Bit32).sfixed32(message.gt);
        /* optional sfixed32 gte = 5; */
        if (message.gte !== undefined)
            writer.tag(5, runtime_1.WireType.Bit32).sfixed32(message.gte);
        /* repeated sfixed32 in = 6; */
        for (let i = 0; i < message.in.length; i++)
            writer.tag(6, runtime_1.WireType.Bit32).sfixed32(message.in[i]);
        /* repeated sfixed32 not_in = 7; */
        for (let i = 0; i < message.notIn.length; i++)
            writer.tag(7, runtime_1.WireType.Bit32).sfixed32(message.notIn[i]);
        /* optional bool ignore_empty = 8; */
        if (message.ignoreEmpty !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.ignoreEmpty);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message validate.SFixed32Rules
 */
exports.SFixed32Rules = new SFixed32Rules$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SFixed64Rules$Type extends runtime_5.MessageType {
    constructor() {
        super("validate.SFixed64Rules", [
            { no: 1, name: "const", kind: "scalar", opt: true, T: 16 /*ScalarType.SFIXED64*/ },
            { no: 2, name: "lt", kind: "scalar", opt: true, T: 16 /*ScalarType.SFIXED64*/ },
            { no: 3, name: "lte", kind: "scalar", opt: true, T: 16 /*ScalarType.SFIXED64*/ },
            { no: 4, name: "gt", kind: "scalar", opt: true, T: 16 /*ScalarType.SFIXED64*/ },
            { no: 5, name: "gte", kind: "scalar", opt: true, T: 16 /*ScalarType.SFIXED64*/ },
            { no: 6, name: "in", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 16 /*ScalarType.SFIXED64*/ },
            { no: 7, name: "not_in", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 16 /*ScalarType.SFIXED64*/ },
            { no: 8, name: "ignore_empty", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { in: [], notIn: [] };
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
                case /* optional sfixed64 const */ 1:
                    message.const = reader.sfixed64().toString();
                    break;
                case /* optional sfixed64 lt */ 2:
                    message.lt = reader.sfixed64().toString();
                    break;
                case /* optional sfixed64 lte */ 3:
                    message.lte = reader.sfixed64().toString();
                    break;
                case /* optional sfixed64 gt */ 4:
                    message.gt = reader.sfixed64().toString();
                    break;
                case /* optional sfixed64 gte */ 5:
                    message.gte = reader.sfixed64().toString();
                    break;
                case /* repeated sfixed64 in */ 6:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.in.push(reader.sfixed64().toString());
                    else
                        message.in.push(reader.sfixed64().toString());
                    break;
                case /* repeated sfixed64 not_in */ 7:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.notIn.push(reader.sfixed64().toString());
                    else
                        message.notIn.push(reader.sfixed64().toString());
                    break;
                case /* optional bool ignore_empty */ 8:
                    message.ignoreEmpty = reader.bool();
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
        /* optional sfixed64 const = 1; */
        if (message.const !== undefined)
            writer.tag(1, runtime_1.WireType.Bit64).sfixed64(message.const);
        /* optional sfixed64 lt = 2; */
        if (message.lt !== undefined)
            writer.tag(2, runtime_1.WireType.Bit64).sfixed64(message.lt);
        /* optional sfixed64 lte = 3; */
        if (message.lte !== undefined)
            writer.tag(3, runtime_1.WireType.Bit64).sfixed64(message.lte);
        /* optional sfixed64 gt = 4; */
        if (message.gt !== undefined)
            writer.tag(4, runtime_1.WireType.Bit64).sfixed64(message.gt);
        /* optional sfixed64 gte = 5; */
        if (message.gte !== undefined)
            writer.tag(5, runtime_1.WireType.Bit64).sfixed64(message.gte);
        /* repeated sfixed64 in = 6; */
        for (let i = 0; i < message.in.length; i++)
            writer.tag(6, runtime_1.WireType.Bit64).sfixed64(message.in[i]);
        /* repeated sfixed64 not_in = 7; */
        for (let i = 0; i < message.notIn.length; i++)
            writer.tag(7, runtime_1.WireType.Bit64).sfixed64(message.notIn[i]);
        /* optional bool ignore_empty = 8; */
        if (message.ignoreEmpty !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.ignoreEmpty);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message validate.SFixed64Rules
 */
exports.SFixed64Rules = new SFixed64Rules$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BoolRules$Type extends runtime_5.MessageType {
    constructor() {
        super("validate.BoolRules", [
            { no: 1, name: "const", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional bool const */ 1:
                    message.const = reader.bool();
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
        /* optional bool const = 1; */
        if (message.const !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.const);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message validate.BoolRules
 */
exports.BoolRules = new BoolRules$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StringRules$Type extends runtime_5.MessageType {
    constructor() {
        super("validate.StringRules", [
            { no: 1, name: "const", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 19, name: "len", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "min_len", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/ },
            { no: 3, name: "max_len", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/ },
            { no: 20, name: "len_bytes", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/ },
            { no: 4, name: "min_bytes", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/ },
            { no: 5, name: "max_bytes", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/ },
            { no: 6, name: "pattern", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "prefix", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "suffix", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "contains", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 23, name: "not_contains", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "in", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 11, name: "not_in", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "email", kind: "scalar", oneof: "wellKnown", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "hostname", kind: "scalar", oneof: "wellKnown", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "ip", kind: "scalar", oneof: "wellKnown", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "ipv4", kind: "scalar", oneof: "wellKnown", T: 8 /*ScalarType.BOOL*/ },
            { no: 16, name: "ipv6", kind: "scalar", oneof: "wellKnown", T: 8 /*ScalarType.BOOL*/ },
            { no: 17, name: "uri", kind: "scalar", oneof: "wellKnown", T: 8 /*ScalarType.BOOL*/ },
            { no: 18, name: "uri_ref", kind: "scalar", oneof: "wellKnown", T: 8 /*ScalarType.BOOL*/ },
            { no: 21, name: "address", kind: "scalar", oneof: "wellKnown", T: 8 /*ScalarType.BOOL*/ },
            { no: 22, name: "uuid", kind: "scalar", oneof: "wellKnown", T: 8 /*ScalarType.BOOL*/ },
            { no: 24, name: "well_known_regex", kind: "enum", oneof: "wellKnown", T: () => ["validate.KnownRegex", KnownRegex] },
            { no: 25, name: "strict", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 26, name: "ignore_empty", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { in: [], notIn: [], wellKnown: { oneofKind: undefined } };
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
                case /* optional string const */ 1:
                    message.const = reader.string();
                    break;
                case /* optional uint64 len */ 19:
                    message.len = reader.uint64().toString();
                    break;
                case /* optional uint64 min_len */ 2:
                    message.minLen = reader.uint64().toString();
                    break;
                case /* optional uint64 max_len */ 3:
                    message.maxLen = reader.uint64().toString();
                    break;
                case /* optional uint64 len_bytes */ 20:
                    message.lenBytes = reader.uint64().toString();
                    break;
                case /* optional uint64 min_bytes */ 4:
                    message.minBytes = reader.uint64().toString();
                    break;
                case /* optional uint64 max_bytes */ 5:
                    message.maxBytes = reader.uint64().toString();
                    break;
                case /* optional string pattern */ 6:
                    message.pattern = reader.string();
                    break;
                case /* optional string prefix */ 7:
                    message.prefix = reader.string();
                    break;
                case /* optional string suffix */ 8:
                    message.suffix = reader.string();
                    break;
                case /* optional string contains */ 9:
                    message.contains = reader.string();
                    break;
                case /* optional string not_contains */ 23:
                    message.notContains = reader.string();
                    break;
                case /* repeated string in */ 10:
                    message.in.push(reader.string());
                    break;
                case /* repeated string not_in */ 11:
                    message.notIn.push(reader.string());
                    break;
                case /* bool email */ 12:
                    message.wellKnown = {
                        oneofKind: "email",
                        email: reader.bool()
                    };
                    break;
                case /* bool hostname */ 13:
                    message.wellKnown = {
                        oneofKind: "hostname",
                        hostname: reader.bool()
                    };
                    break;
                case /* bool ip */ 14:
                    message.wellKnown = {
                        oneofKind: "ip",
                        ip: reader.bool()
                    };
                    break;
                case /* bool ipv4 */ 15:
                    message.wellKnown = {
                        oneofKind: "ipv4",
                        ipv4: reader.bool()
                    };
                    break;
                case /* bool ipv6 */ 16:
                    message.wellKnown = {
                        oneofKind: "ipv6",
                        ipv6: reader.bool()
                    };
                    break;
                case /* bool uri */ 17:
                    message.wellKnown = {
                        oneofKind: "uri",
                        uri: reader.bool()
                    };
                    break;
                case /* bool uri_ref */ 18:
                    message.wellKnown = {
                        oneofKind: "uriRef",
                        uriRef: reader.bool()
                    };
                    break;
                case /* bool address */ 21:
                    message.wellKnown = {
                        oneofKind: "address",
                        address: reader.bool()
                    };
                    break;
                case /* bool uuid */ 22:
                    message.wellKnown = {
                        oneofKind: "uuid",
                        uuid: reader.bool()
                    };
                    break;
                case /* validate.KnownRegex well_known_regex */ 24:
                    message.wellKnown = {
                        oneofKind: "wellKnownRegex",
                        wellKnownRegex: reader.int32()
                    };
                    break;
                case /* optional bool strict */ 25:
                    message.strict = reader.bool();
                    break;
                case /* optional bool ignore_empty */ 26:
                    message.ignoreEmpty = reader.bool();
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
        /* optional string const = 1; */
        if (message.const !== undefined)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.const);
        /* optional uint64 len = 19; */
        if (message.len !== undefined)
            writer.tag(19, runtime_1.WireType.Varint).uint64(message.len);
        /* optional uint64 min_len = 2; */
        if (message.minLen !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.minLen);
        /* optional uint64 max_len = 3; */
        if (message.maxLen !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.maxLen);
        /* optional uint64 len_bytes = 20; */
        if (message.lenBytes !== undefined)
            writer.tag(20, runtime_1.WireType.Varint).uint64(message.lenBytes);
        /* optional uint64 min_bytes = 4; */
        if (message.minBytes !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint64(message.minBytes);
        /* optional uint64 max_bytes = 5; */
        if (message.maxBytes !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.maxBytes);
        /* optional string pattern = 6; */
        if (message.pattern !== undefined)
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.pattern);
        /* optional string prefix = 7; */
        if (message.prefix !== undefined)
            writer.tag(7, runtime_1.WireType.LengthDelimited).string(message.prefix);
        /* optional string suffix = 8; */
        if (message.suffix !== undefined)
            writer.tag(8, runtime_1.WireType.LengthDelimited).string(message.suffix);
        /* optional string contains = 9; */
        if (message.contains !== undefined)
            writer.tag(9, runtime_1.WireType.LengthDelimited).string(message.contains);
        /* optional string not_contains = 23; */
        if (message.notContains !== undefined)
            writer.tag(23, runtime_1.WireType.LengthDelimited).string(message.notContains);
        /* repeated string in = 10; */
        for (let i = 0; i < message.in.length; i++)
            writer.tag(10, runtime_1.WireType.LengthDelimited).string(message.in[i]);
        /* repeated string not_in = 11; */
        for (let i = 0; i < message.notIn.length; i++)
            writer.tag(11, runtime_1.WireType.LengthDelimited).string(message.notIn[i]);
        /* bool email = 12; */
        if (message.wellKnown.oneofKind === "email")
            writer.tag(12, runtime_1.WireType.Varint).bool(message.wellKnown.email);
        /* bool hostname = 13; */
        if (message.wellKnown.oneofKind === "hostname")
            writer.tag(13, runtime_1.WireType.Varint).bool(message.wellKnown.hostname);
        /* bool ip = 14; */
        if (message.wellKnown.oneofKind === "ip")
            writer.tag(14, runtime_1.WireType.Varint).bool(message.wellKnown.ip);
        /* bool ipv4 = 15; */
        if (message.wellKnown.oneofKind === "ipv4")
            writer.tag(15, runtime_1.WireType.Varint).bool(message.wellKnown.ipv4);
        /* bool ipv6 = 16; */
        if (message.wellKnown.oneofKind === "ipv6")
            writer.tag(16, runtime_1.WireType.Varint).bool(message.wellKnown.ipv6);
        /* bool uri = 17; */
        if (message.wellKnown.oneofKind === "uri")
            writer.tag(17, runtime_1.WireType.Varint).bool(message.wellKnown.uri);
        /* bool uri_ref = 18; */
        if (message.wellKnown.oneofKind === "uriRef")
            writer.tag(18, runtime_1.WireType.Varint).bool(message.wellKnown.uriRef);
        /* bool address = 21; */
        if (message.wellKnown.oneofKind === "address")
            writer.tag(21, runtime_1.WireType.Varint).bool(message.wellKnown.address);
        /* bool uuid = 22; */
        if (message.wellKnown.oneofKind === "uuid")
            writer.tag(22, runtime_1.WireType.Varint).bool(message.wellKnown.uuid);
        /* validate.KnownRegex well_known_regex = 24; */
        if (message.wellKnown.oneofKind === "wellKnownRegex")
            writer.tag(24, runtime_1.WireType.Varint).int32(message.wellKnown.wellKnownRegex);
        /* optional bool strict = 25; */
        if (message.strict !== undefined)
            writer.tag(25, runtime_1.WireType.Varint).bool(message.strict);
        /* optional bool ignore_empty = 26; */
        if (message.ignoreEmpty !== undefined)
            writer.tag(26, runtime_1.WireType.Varint).bool(message.ignoreEmpty);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message validate.StringRules
 */
exports.StringRules = new StringRules$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BytesRules$Type extends runtime_5.MessageType {
    constructor() {
        super("validate.BytesRules", [
            { no: 1, name: "const", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 13, name: "len", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "min_len", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/ },
            { no: 3, name: "max_len", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/ },
            { no: 4, name: "pattern", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "prefix", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 6, name: "suffix", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 7, name: "contains", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 8, name: "in", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 12 /*ScalarType.BYTES*/ },
            { no: 9, name: "not_in", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 12 /*ScalarType.BYTES*/ },
            { no: 10, name: "ip", kind: "scalar", oneof: "wellKnown", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "ipv4", kind: "scalar", oneof: "wellKnown", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "ipv6", kind: "scalar", oneof: "wellKnown", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "ignore_empty", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { in: [], notIn: [], wellKnown: { oneofKind: undefined } };
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
                case /* optional bytes const */ 1:
                    message.const = reader.bytes();
                    break;
                case /* optional uint64 len */ 13:
                    message.len = reader.uint64().toString();
                    break;
                case /* optional uint64 min_len */ 2:
                    message.minLen = reader.uint64().toString();
                    break;
                case /* optional uint64 max_len */ 3:
                    message.maxLen = reader.uint64().toString();
                    break;
                case /* optional string pattern */ 4:
                    message.pattern = reader.string();
                    break;
                case /* optional bytes prefix */ 5:
                    message.prefix = reader.bytes();
                    break;
                case /* optional bytes suffix */ 6:
                    message.suffix = reader.bytes();
                    break;
                case /* optional bytes contains */ 7:
                    message.contains = reader.bytes();
                    break;
                case /* repeated bytes in */ 8:
                    message.in.push(reader.bytes());
                    break;
                case /* repeated bytes not_in */ 9:
                    message.notIn.push(reader.bytes());
                    break;
                case /* bool ip */ 10:
                    message.wellKnown = {
                        oneofKind: "ip",
                        ip: reader.bool()
                    };
                    break;
                case /* bool ipv4 */ 11:
                    message.wellKnown = {
                        oneofKind: "ipv4",
                        ipv4: reader.bool()
                    };
                    break;
                case /* bool ipv6 */ 12:
                    message.wellKnown = {
                        oneofKind: "ipv6",
                        ipv6: reader.bool()
                    };
                    break;
                case /* optional bool ignore_empty */ 14:
                    message.ignoreEmpty = reader.bool();
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
        /* optional bytes const = 1; */
        if (message.const !== undefined)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.const);
        /* optional uint64 len = 13; */
        if (message.len !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint64(message.len);
        /* optional uint64 min_len = 2; */
        if (message.minLen !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.minLen);
        /* optional uint64 max_len = 3; */
        if (message.maxLen !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.maxLen);
        /* optional string pattern = 4; */
        if (message.pattern !== undefined)
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.pattern);
        /* optional bytes prefix = 5; */
        if (message.prefix !== undefined)
            writer.tag(5, runtime_1.WireType.LengthDelimited).bytes(message.prefix);
        /* optional bytes suffix = 6; */
        if (message.suffix !== undefined)
            writer.tag(6, runtime_1.WireType.LengthDelimited).bytes(message.suffix);
        /* optional bytes contains = 7; */
        if (message.contains !== undefined)
            writer.tag(7, runtime_1.WireType.LengthDelimited).bytes(message.contains);
        /* repeated bytes in = 8; */
        for (let i = 0; i < message.in.length; i++)
            writer.tag(8, runtime_1.WireType.LengthDelimited).bytes(message.in[i]);
        /* repeated bytes not_in = 9; */
        for (let i = 0; i < message.notIn.length; i++)
            writer.tag(9, runtime_1.WireType.LengthDelimited).bytes(message.notIn[i]);
        /* bool ip = 10; */
        if (message.wellKnown.oneofKind === "ip")
            writer.tag(10, runtime_1.WireType.Varint).bool(message.wellKnown.ip);
        /* bool ipv4 = 11; */
        if (message.wellKnown.oneofKind === "ipv4")
            writer.tag(11, runtime_1.WireType.Varint).bool(message.wellKnown.ipv4);
        /* bool ipv6 = 12; */
        if (message.wellKnown.oneofKind === "ipv6")
            writer.tag(12, runtime_1.WireType.Varint).bool(message.wellKnown.ipv6);
        /* optional bool ignore_empty = 14; */
        if (message.ignoreEmpty !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.ignoreEmpty);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message validate.BytesRules
 */
exports.BytesRules = new BytesRules$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EnumRules$Type extends runtime_5.MessageType {
    constructor() {
        super("validate.EnumRules", [
            { no: 1, name: "const", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "defined_only", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "in", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "not_in", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { in: [], notIn: [] };
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
                case /* optional int32 const */ 1:
                    message.const = reader.int32();
                    break;
                case /* optional bool defined_only */ 2:
                    message.definedOnly = reader.bool();
                    break;
                case /* repeated int32 in */ 3:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.in.push(reader.int32());
                    else
                        message.in.push(reader.int32());
                    break;
                case /* repeated int32 not_in */ 4:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.notIn.push(reader.int32());
                    else
                        message.notIn.push(reader.int32());
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
        /* optional int32 const = 1; */
        if (message.const !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.const);
        /* optional bool defined_only = 2; */
        if (message.definedOnly !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.definedOnly);
        /* repeated int32 in = 3; */
        for (let i = 0; i < message.in.length; i++)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.in[i]);
        /* repeated int32 not_in = 4; */
        for (let i = 0; i < message.notIn.length; i++)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.notIn[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message validate.EnumRules
 */
exports.EnumRules = new EnumRules$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MessageRules$Type extends runtime_5.MessageType {
    constructor() {
        super("validate.MessageRules", [
            { no: 1, name: "skip", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "required", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional bool skip */ 1:
                    message.skip = reader.bool();
                    break;
                case /* optional bool required */ 2:
                    message.required = reader.bool();
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
        /* optional bool skip = 1; */
        if (message.skip !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.skip);
        /* optional bool required = 2; */
        if (message.required !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.required);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message validate.MessageRules
 */
exports.MessageRules = new MessageRules$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RepeatedRules$Type extends runtime_5.MessageType {
    constructor() {
        super("validate.RepeatedRules", [
            { no: 1, name: "min_items", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "max_items", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/ },
            { no: 3, name: "unique", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "items", kind: "message", T: () => exports.FieldRules },
            { no: 5, name: "ignore_empty", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional uint64 min_items */ 1:
                    message.minItems = reader.uint64().toString();
                    break;
                case /* optional uint64 max_items */ 2:
                    message.maxItems = reader.uint64().toString();
                    break;
                case /* optional bool unique */ 3:
                    message.unique = reader.bool();
                    break;
                case /* optional validate.FieldRules items */ 4:
                    message.items = exports.FieldRules.internalBinaryRead(reader, reader.uint32(), options, message.items);
                    break;
                case /* optional bool ignore_empty */ 5:
                    message.ignoreEmpty = reader.bool();
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
        /* optional uint64 min_items = 1; */
        if (message.minItems !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.minItems);
        /* optional uint64 max_items = 2; */
        if (message.maxItems !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.maxItems);
        /* optional bool unique = 3; */
        if (message.unique !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.unique);
        /* optional validate.FieldRules items = 4; */
        if (message.items)
            exports.FieldRules.internalBinaryWrite(message.items, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bool ignore_empty = 5; */
        if (message.ignoreEmpty !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.ignoreEmpty);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message validate.RepeatedRules
 */
exports.RepeatedRules = new RepeatedRules$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MapRules$Type extends runtime_5.MessageType {
    constructor() {
        super("validate.MapRules", [
            { no: 1, name: "min_pairs", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "max_pairs", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/ },
            { no: 3, name: "no_sparse", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "keys", kind: "message", T: () => exports.FieldRules },
            { no: 5, name: "values", kind: "message", T: () => exports.FieldRules },
            { no: 6, name: "ignore_empty", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional uint64 min_pairs */ 1:
                    message.minPairs = reader.uint64().toString();
                    break;
                case /* optional uint64 max_pairs */ 2:
                    message.maxPairs = reader.uint64().toString();
                    break;
                case /* optional bool no_sparse */ 3:
                    message.noSparse = reader.bool();
                    break;
                case /* optional validate.FieldRules keys */ 4:
                    message.keys = exports.FieldRules.internalBinaryRead(reader, reader.uint32(), options, message.keys);
                    break;
                case /* optional validate.FieldRules values */ 5:
                    message.values = exports.FieldRules.internalBinaryRead(reader, reader.uint32(), options, message.values);
                    break;
                case /* optional bool ignore_empty */ 6:
                    message.ignoreEmpty = reader.bool();
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
        /* optional uint64 min_pairs = 1; */
        if (message.minPairs !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.minPairs);
        /* optional uint64 max_pairs = 2; */
        if (message.maxPairs !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.maxPairs);
        /* optional bool no_sparse = 3; */
        if (message.noSparse !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.noSparse);
        /* optional validate.FieldRules keys = 4; */
        if (message.keys)
            exports.FieldRules.internalBinaryWrite(message.keys, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional validate.FieldRules values = 5; */
        if (message.values)
            exports.FieldRules.internalBinaryWrite(message.values, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bool ignore_empty = 6; */
        if (message.ignoreEmpty !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.ignoreEmpty);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message validate.MapRules
 */
exports.MapRules = new MapRules$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AnyRules$Type extends runtime_5.MessageType {
    constructor() {
        super("validate.AnyRules", [
            { no: 1, name: "required", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "in", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "not_in", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { in: [], notIn: [] };
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
                case /* optional bool required */ 1:
                    message.required = reader.bool();
                    break;
                case /* repeated string in */ 2:
                    message.in.push(reader.string());
                    break;
                case /* repeated string not_in */ 3:
                    message.notIn.push(reader.string());
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
        /* optional bool required = 1; */
        if (message.required !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.required);
        /* repeated string in = 2; */
        for (let i = 0; i < message.in.length; i++)
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.in[i]);
        /* repeated string not_in = 3; */
        for (let i = 0; i < message.notIn.length; i++)
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.notIn[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message validate.AnyRules
 */
exports.AnyRules = new AnyRules$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DurationRules$Type extends runtime_5.MessageType {
    constructor() {
        super("validate.DurationRules", [
            { no: 1, name: "required", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "const", kind: "message", T: () => duration_1.Duration },
            { no: 3, name: "lt", kind: "message", T: () => duration_1.Duration },
            { no: 4, name: "lte", kind: "message", T: () => duration_1.Duration },
            { no: 5, name: "gt", kind: "message", T: () => duration_1.Duration },
            { no: 6, name: "gte", kind: "message", T: () => duration_1.Duration },
            { no: 7, name: "in", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => duration_1.Duration },
            { no: 8, name: "not_in", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => duration_1.Duration }
        ]);
    }
    create(value) {
        const message = { in: [], notIn: [] };
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
                case /* optional bool required */ 1:
                    message.required = reader.bool();
                    break;
                case /* optional google.protobuf.Duration const */ 2:
                    message.const = duration_1.Duration.internalBinaryRead(reader, reader.uint32(), options, message.const);
                    break;
                case /* optional google.protobuf.Duration lt */ 3:
                    message.lt = duration_1.Duration.internalBinaryRead(reader, reader.uint32(), options, message.lt);
                    break;
                case /* optional google.protobuf.Duration lte */ 4:
                    message.lte = duration_1.Duration.internalBinaryRead(reader, reader.uint32(), options, message.lte);
                    break;
                case /* optional google.protobuf.Duration gt */ 5:
                    message.gt = duration_1.Duration.internalBinaryRead(reader, reader.uint32(), options, message.gt);
                    break;
                case /* optional google.protobuf.Duration gte */ 6:
                    message.gte = duration_1.Duration.internalBinaryRead(reader, reader.uint32(), options, message.gte);
                    break;
                case /* repeated google.protobuf.Duration in */ 7:
                    message.in.push(duration_1.Duration.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated google.protobuf.Duration not_in */ 8:
                    message.notIn.push(duration_1.Duration.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional bool required = 1; */
        if (message.required !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.required);
        /* optional google.protobuf.Duration const = 2; */
        if (message.const)
            duration_1.Duration.internalBinaryWrite(message.const, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional google.protobuf.Duration lt = 3; */
        if (message.lt)
            duration_1.Duration.internalBinaryWrite(message.lt, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional google.protobuf.Duration lte = 4; */
        if (message.lte)
            duration_1.Duration.internalBinaryWrite(message.lte, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional google.protobuf.Duration gt = 5; */
        if (message.gt)
            duration_1.Duration.internalBinaryWrite(message.gt, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional google.protobuf.Duration gte = 6; */
        if (message.gte)
            duration_1.Duration.internalBinaryWrite(message.gte, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated google.protobuf.Duration in = 7; */
        for (let i = 0; i < message.in.length; i++)
            duration_1.Duration.internalBinaryWrite(message.in[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated google.protobuf.Duration not_in = 8; */
        for (let i = 0; i < message.notIn.length; i++)
            duration_1.Duration.internalBinaryWrite(message.notIn[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message validate.DurationRules
 */
exports.DurationRules = new DurationRules$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TimestampRules$Type extends runtime_5.MessageType {
    constructor() {
        super("validate.TimestampRules", [
            { no: 1, name: "required", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "const", kind: "message", T: () => timestamp_1.Timestamp },
            { no: 3, name: "lt", kind: "message", T: () => timestamp_1.Timestamp },
            { no: 4, name: "lte", kind: "message", T: () => timestamp_1.Timestamp },
            { no: 5, name: "gt", kind: "message", T: () => timestamp_1.Timestamp },
            { no: 6, name: "gte", kind: "message", T: () => timestamp_1.Timestamp },
            { no: 7, name: "lt_now", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "gt_now", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "within", kind: "message", T: () => duration_1.Duration }
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
                case /* optional bool required */ 1:
                    message.required = reader.bool();
                    break;
                case /* optional google.protobuf.Timestamp const */ 2:
                    message.const = timestamp_1.Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.const);
                    break;
                case /* optional google.protobuf.Timestamp lt */ 3:
                    message.lt = timestamp_1.Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.lt);
                    break;
                case /* optional google.protobuf.Timestamp lte */ 4:
                    message.lte = timestamp_1.Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.lte);
                    break;
                case /* optional google.protobuf.Timestamp gt */ 5:
                    message.gt = timestamp_1.Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.gt);
                    break;
                case /* optional google.protobuf.Timestamp gte */ 6:
                    message.gte = timestamp_1.Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.gte);
                    break;
                case /* optional bool lt_now */ 7:
                    message.ltNow = reader.bool();
                    break;
                case /* optional bool gt_now */ 8:
                    message.gtNow = reader.bool();
                    break;
                case /* optional google.protobuf.Duration within */ 9:
                    message.within = duration_1.Duration.internalBinaryRead(reader, reader.uint32(), options, message.within);
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
        /* optional bool required = 1; */
        if (message.required !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.required);
        /* optional google.protobuf.Timestamp const = 2; */
        if (message.const)
            timestamp_1.Timestamp.internalBinaryWrite(message.const, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional google.protobuf.Timestamp lt = 3; */
        if (message.lt)
            timestamp_1.Timestamp.internalBinaryWrite(message.lt, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional google.protobuf.Timestamp lte = 4; */
        if (message.lte)
            timestamp_1.Timestamp.internalBinaryWrite(message.lte, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional google.protobuf.Timestamp gt = 5; */
        if (message.gt)
            timestamp_1.Timestamp.internalBinaryWrite(message.gt, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional google.protobuf.Timestamp gte = 6; */
        if (message.gte)
            timestamp_1.Timestamp.internalBinaryWrite(message.gte, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bool lt_now = 7; */
        if (message.ltNow !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.ltNow);
        /* optional bool gt_now = 8; */
        if (message.gtNow !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.gtNow);
        /* optional google.protobuf.Duration within = 9; */
        if (message.within)
            duration_1.Duration.internalBinaryWrite(message.within, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message validate.TimestampRules
 */
exports.TimestampRules = new TimestampRules$Type();
//# sourceMappingURL=validate.js.map