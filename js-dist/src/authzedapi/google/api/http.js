"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomHttpPattern = exports.HttpRule = exports.Http = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class Http$Type extends runtime_5.MessageType {
    constructor() {
        super("google.api.Http", [
            { no: 1, name: "rules", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HttpRule },
            { no: 2, name: "fully_decode_reserved_expansion", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { rules: [], fullyDecodeReservedExpansion: false };
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
                case /* repeated google.api.HttpRule rules */ 1:
                    message.rules.push(exports.HttpRule.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool fully_decode_reserved_expansion */ 2:
                    message.fullyDecodeReservedExpansion = reader.bool();
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
        /* repeated google.api.HttpRule rules = 1; */
        for (let i = 0; i < message.rules.length; i++)
            exports.HttpRule.internalBinaryWrite(message.rules[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool fully_decode_reserved_expansion = 2; */
        if (message.fullyDecodeReservedExpansion !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.fullyDecodeReservedExpansion);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.Http
 */
exports.Http = new Http$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HttpRule$Type extends runtime_5.MessageType {
    constructor() {
        super("google.api.HttpRule", [
            { no: 1, name: "selector", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "get", kind: "scalar", oneof: "pattern", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "put", kind: "scalar", oneof: "pattern", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "post", kind: "scalar", oneof: "pattern", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "delete", kind: "scalar", oneof: "pattern", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "patch", kind: "scalar", oneof: "pattern", T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "custom", kind: "message", oneof: "pattern", T: () => exports.CustomHttpPattern },
            { no: 7, name: "body", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "response_body", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 11, name: "additional_bindings", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HttpRule }
        ]);
    }
    create(value) {
        const message = { selector: "", pattern: { oneofKind: undefined }, body: "", responseBody: "", additionalBindings: [] };
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
                case /* string selector */ 1:
                    message.selector = reader.string();
                    break;
                case /* string get */ 2:
                    message.pattern = {
                        oneofKind: "get",
                        get: reader.string()
                    };
                    break;
                case /* string put */ 3:
                    message.pattern = {
                        oneofKind: "put",
                        put: reader.string()
                    };
                    break;
                case /* string post */ 4:
                    message.pattern = {
                        oneofKind: "post",
                        post: reader.string()
                    };
                    break;
                case /* string delete */ 5:
                    message.pattern = {
                        oneofKind: "delete",
                        delete: reader.string()
                    };
                    break;
                case /* string patch */ 6:
                    message.pattern = {
                        oneofKind: "patch",
                        patch: reader.string()
                    };
                    break;
                case /* google.api.CustomHttpPattern custom */ 8:
                    message.pattern = {
                        oneofKind: "custom",
                        custom: exports.CustomHttpPattern.internalBinaryRead(reader, reader.uint32(), options, message.pattern.custom)
                    };
                    break;
                case /* string body */ 7:
                    message.body = reader.string();
                    break;
                case /* string response_body */ 12:
                    message.responseBody = reader.string();
                    break;
                case /* repeated google.api.HttpRule additional_bindings */ 11:
                    message.additionalBindings.push(exports.HttpRule.internalBinaryRead(reader, reader.uint32(), options));
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
        /* string selector = 1; */
        if (message.selector !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.selector);
        /* string get = 2; */
        if (message.pattern.oneofKind === "get")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.pattern.get);
        /* string put = 3; */
        if (message.pattern.oneofKind === "put")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.pattern.put);
        /* string post = 4; */
        if (message.pattern.oneofKind === "post")
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.pattern.post);
        /* string delete = 5; */
        if (message.pattern.oneofKind === "delete")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.pattern.delete);
        /* string patch = 6; */
        if (message.pattern.oneofKind === "patch")
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.pattern.patch);
        /* google.api.CustomHttpPattern custom = 8; */
        if (message.pattern.oneofKind === "custom")
            exports.CustomHttpPattern.internalBinaryWrite(message.pattern.custom, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* string body = 7; */
        if (message.body !== "")
            writer.tag(7, runtime_1.WireType.LengthDelimited).string(message.body);
        /* string response_body = 12; */
        if (message.responseBody !== "")
            writer.tag(12, runtime_1.WireType.LengthDelimited).string(message.responseBody);
        /* repeated google.api.HttpRule additional_bindings = 11; */
        for (let i = 0; i < message.additionalBindings.length; i++)
            exports.HttpRule.internalBinaryWrite(message.additionalBindings[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.HttpRule
 */
exports.HttpRule = new HttpRule$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CustomHttpPattern$Type extends runtime_5.MessageType {
    constructor() {
        super("google.api.CustomHttpPattern", [
            { no: 1, name: "kind", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "path", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { kind: "", path: "" };
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
                case /* string kind */ 1:
                    message.kind = reader.string();
                    break;
                case /* string path */ 2:
                    message.path = reader.string();
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
        /* string kind = 1; */
        if (message.kind !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.kind);
        /* string path = 2; */
        if (message.path !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.path);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.CustomHttpPattern
 */
exports.CustomHttpPattern = new CustomHttpPattern$Type();
//# sourceMappingURL=http.js.map