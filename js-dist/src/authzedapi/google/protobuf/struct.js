"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListValue = exports.Value = exports.Struct = exports.NullValue = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const runtime_6 = require("@protobuf-ts/runtime");
const runtime_7 = require("@protobuf-ts/runtime");
/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 *
 *  The JSON representation for `NullValue` is JSON `null`.
 *
 * @generated from protobuf enum google.protobuf.NullValue
 */
var NullValue;
(function (NullValue) {
    /**
     * Null value.
     *
     * @generated from protobuf enum value: NULL_VALUE = 0;
     */
    NullValue[NullValue["NULL_VALUE"] = 0] = "NULL_VALUE";
})(NullValue = exports.NullValue || (exports.NullValue = {}));
// @generated message type with reflection information, may provide speed optimized methods
class Struct$Type extends runtime_7.MessageType {
    constructor() {
        super("google.protobuf.Struct", [
            { no: 1, name: "fields", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "message", T: () => exports.Value } }
        ]);
    }
    /**
     * Encode `Struct` to JSON object.
     */
    internalJsonWrite(message, options) {
        let json = {};
        for (let [k, v] of Object.entries(message.fields)) {
            json[k] = exports.Value.toJson(v);
        }
        return json;
    }
    /**
     * Decode `Struct` from JSON object.
     */
    internalJsonRead(json, options, target) {
        if (!runtime_5.isJsonObject(json))
            throw new globalThis.Error("Unable to parse message " + this.typeName + " from JSON " + runtime_6.typeofJsonValue(json) + ".");
        if (!target)
            target = this.create();
        for (let [k, v] of globalThis.Object.entries(json)) {
            target.fields[k] = exports.Value.fromJson(v);
        }
        return target;
    }
    create(value) {
        const message = { fields: {} };
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
                case /* map<string, google.protobuf.Value> fields */ 1:
                    this.binaryReadMap1(message.fields, reader, options);
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
    binaryReadMap1(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = exports.Value.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field google.protobuf.Struct.fields");
            }
        }
        map[key !== null && key !== void 0 ? key : ""] = val !== null && val !== void 0 ? val : exports.Value.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<string, google.protobuf.Value> fields = 1; */
        for (let k of Object.keys(message.fields)) {
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.LengthDelimited).string(k);
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            exports.Value.internalBinaryWrite(message.fields[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.Struct
 */
exports.Struct = new Struct$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Value$Type extends runtime_7.MessageType {
    constructor() {
        super("google.protobuf.Value", [
            { no: 1, name: "null_value", kind: "enum", oneof: "kind", T: () => ["google.protobuf.NullValue", NullValue] },
            { no: 2, name: "number_value", kind: "scalar", oneof: "kind", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 3, name: "string_value", kind: "scalar", oneof: "kind", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "bool_value", kind: "scalar", oneof: "kind", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "struct_value", kind: "message", oneof: "kind", T: () => exports.Struct },
            { no: 6, name: "list_value", kind: "message", oneof: "kind", T: () => exports.ListValue }
        ]);
    }
    /**
     * Encode `Value` to JSON value.
     */
    internalJsonWrite(message, options) {
        if (message.kind.oneofKind === undefined)
            throw new globalThis.Error();
        switch (message.kind.oneofKind) {
            case undefined: throw new globalThis.Error();
            case "boolValue": return message.kind.boolValue;
            case "nullValue": return null;
            case "numberValue": return message.kind.numberValue;
            case "stringValue": return message.kind.stringValue;
            case "listValue":
                let listValueField = this.fields.find(f => f.no === 6);
                if ((listValueField === null || listValueField === void 0 ? void 0 : listValueField.kind) !== "message")
                    throw new globalThis.Error();
                return listValueField.T().toJson(message.kind.listValue);
            case "structValue":
                let structValueField = this.fields.find(f => f.no === 5);
                if ((structValueField === null || structValueField === void 0 ? void 0 : structValueField.kind) !== "message")
                    throw new globalThis.Error();
                return structValueField.T().toJson(message.kind.structValue);
        }
    }
    /**
     * Decode `Value` from JSON value.
     */
    internalJsonRead(json, options, target) {
        if (!target)
            target = this.create();
        switch (typeof json) {
            case "number":
                target.kind = { oneofKind: "numberValue", numberValue: json };
                break;
            case "string":
                target.kind = { oneofKind: "stringValue", stringValue: json };
                break;
            case "boolean":
                target.kind = { oneofKind: "boolValue", boolValue: json };
                break;
            case "object":
                if (json === null) {
                    target.kind = { oneofKind: "nullValue", nullValue: NullValue.NULL_VALUE };
                }
                else if (globalThis.Array.isArray(json)) {
                    target.kind = { oneofKind: "listValue", listValue: exports.ListValue.fromJson(json) };
                }
                else {
                    let val = exports.Struct.fromJson(json);
                    target.kind = { oneofKind: "structValue", structValue: exports.Struct.fromJson(json) };
                }
                break;
            default: throw new globalThis.Error("Unable to parse " + this.typeName + " from JSON " + runtime_6.typeofJsonValue(json));
        }
        return target;
    }
    create(value) {
        const message = { kind: { oneofKind: undefined } };
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
                case /* google.protobuf.NullValue null_value */ 1:
                    message.kind = {
                        oneofKind: "nullValue",
                        nullValue: reader.int32()
                    };
                    break;
                case /* double number_value */ 2:
                    message.kind = {
                        oneofKind: "numberValue",
                        numberValue: reader.double()
                    };
                    break;
                case /* string string_value */ 3:
                    message.kind = {
                        oneofKind: "stringValue",
                        stringValue: reader.string()
                    };
                    break;
                case /* bool bool_value */ 4:
                    message.kind = {
                        oneofKind: "boolValue",
                        boolValue: reader.bool()
                    };
                    break;
                case /* google.protobuf.Struct struct_value */ 5:
                    message.kind = {
                        oneofKind: "structValue",
                        structValue: exports.Struct.internalBinaryRead(reader, reader.uint32(), options, message.kind.structValue)
                    };
                    break;
                case /* google.protobuf.ListValue list_value */ 6:
                    message.kind = {
                        oneofKind: "listValue",
                        listValue: exports.ListValue.internalBinaryRead(reader, reader.uint32(), options, message.kind.listValue)
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
        /* google.protobuf.NullValue null_value = 1; */
        if (message.kind.oneofKind === "nullValue")
            writer.tag(1, runtime_1.WireType.Varint).int32(message.kind.nullValue);
        /* double number_value = 2; */
        if (message.kind.oneofKind === "numberValue")
            writer.tag(2, runtime_1.WireType.Bit64).double(message.kind.numberValue);
        /* string string_value = 3; */
        if (message.kind.oneofKind === "stringValue")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.kind.stringValue);
        /* bool bool_value = 4; */
        if (message.kind.oneofKind === "boolValue")
            writer.tag(4, runtime_1.WireType.Varint).bool(message.kind.boolValue);
        /* google.protobuf.Struct struct_value = 5; */
        if (message.kind.oneofKind === "structValue")
            exports.Struct.internalBinaryWrite(message.kind.structValue, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.ListValue list_value = 6; */
        if (message.kind.oneofKind === "listValue")
            exports.ListValue.internalBinaryWrite(message.kind.listValue, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.Value
 */
exports.Value = new Value$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ListValue$Type extends runtime_7.MessageType {
    constructor() {
        super("google.protobuf.ListValue", [
            { no: 1, name: "values", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.Value }
        ]);
    }
    /**
     * Encode `ListValue` to JSON array.
     */
    internalJsonWrite(message, options) {
        return message.values.map(v => exports.Value.toJson(v));
    }
    /**
     * Decode `ListValue` from JSON array.
     */
    internalJsonRead(json, options, target) {
        if (!globalThis.Array.isArray(json))
            throw new globalThis.Error("Unable to parse " + this.typeName + " from JSON " + runtime_6.typeofJsonValue(json));
        if (!target)
            target = this.create();
        let values = json.map(v => exports.Value.fromJson(v));
        target.values.push(...values);
        return target;
    }
    create(value) {
        const message = { values: [] };
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
                case /* repeated google.protobuf.Value values */ 1:
                    message.values.push(exports.Value.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated google.protobuf.Value values = 1; */
        for (let i = 0; i < message.values.length; i++)
            exports.Value.internalBinaryWrite(message.values[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.ListValue
 */
exports.ListValue = new ListValue$Type();
//# sourceMappingURL=struct.js.map