"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckDebugTrace_SubProblems = exports.CheckDebugTrace = exports.DebugInformation = exports.CheckDebugTrace_Permissionship = exports.CheckDebugTrace_PermissionType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const core_1 = require("./core");
const core_2 = require("./core");
/**
 * @generated from protobuf enum authzed.api.v1.CheckDebugTrace.PermissionType
 */
var CheckDebugTrace_PermissionType;
(function (CheckDebugTrace_PermissionType) {
    /**
     * @generated from protobuf enum value: PERMISSION_TYPE_UNSPECIFIED = 0;
     */
    CheckDebugTrace_PermissionType[CheckDebugTrace_PermissionType["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from protobuf enum value: PERMISSION_TYPE_RELATION = 1;
     */
    CheckDebugTrace_PermissionType[CheckDebugTrace_PermissionType["RELATION"] = 1] = "RELATION";
    /**
     * @generated from protobuf enum value: PERMISSION_TYPE_PERMISSION = 2;
     */
    CheckDebugTrace_PermissionType[CheckDebugTrace_PermissionType["PERMISSION"] = 2] = "PERMISSION";
})(CheckDebugTrace_PermissionType = exports.CheckDebugTrace_PermissionType || (exports.CheckDebugTrace_PermissionType = {}));
/**
 * @generated from protobuf enum authzed.api.v1.CheckDebugTrace.Permissionship
 */
var CheckDebugTrace_Permissionship;
(function (CheckDebugTrace_Permissionship) {
    /**
     * @generated from protobuf enum value: PERMISSIONSHIP_UNSPECIFIED = 0;
     */
    CheckDebugTrace_Permissionship[CheckDebugTrace_Permissionship["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from protobuf enum value: PERMISSIONSHIP_NO_PERMISSION = 1;
     */
    CheckDebugTrace_Permissionship[CheckDebugTrace_Permissionship["NO_PERMISSION"] = 1] = "NO_PERMISSION";
    /**
     * @generated from protobuf enum value: PERMISSIONSHIP_HAS_PERMISSION = 2;
     */
    CheckDebugTrace_Permissionship[CheckDebugTrace_Permissionship["HAS_PERMISSION"] = 2] = "HAS_PERMISSION";
})(CheckDebugTrace_Permissionship = exports.CheckDebugTrace_Permissionship || (exports.CheckDebugTrace_Permissionship = {}));
// @generated message type with reflection information, may provide speed optimized methods
class DebugInformation$Type extends runtime_5.MessageType {
    constructor() {
        super("authzed.api.v1.DebugInformation", [
            { no: 1, name: "check", kind: "message", T: () => exports.CheckDebugTrace },
            { no: 2, name: "schema_used", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { schemaUsed: "" };
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
                case /* authzed.api.v1.CheckDebugTrace check */ 1:
                    message.check = exports.CheckDebugTrace.internalBinaryRead(reader, reader.uint32(), options, message.check);
                    break;
                case /* string schema_used */ 2:
                    message.schemaUsed = reader.string();
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
        /* authzed.api.v1.CheckDebugTrace check = 1; */
        if (message.check)
            exports.CheckDebugTrace.internalBinaryWrite(message.check, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* string schema_used = 2; */
        if (message.schemaUsed !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.schemaUsed);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.DebugInformation
 */
exports.DebugInformation = new DebugInformation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckDebugTrace$Type extends runtime_5.MessageType {
    constructor() {
        super("authzed.api.v1.CheckDebugTrace", [
            { no: 1, name: "resource", kind: "message", T: () => core_2.ObjectReference, options: { "validate.rules": { message: { required: true } } } },
            { no: 2, name: "permission", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "permission_type", kind: "enum", T: () => ["authzed.api.v1.CheckDebugTrace.PermissionType", CheckDebugTrace_PermissionType, "PERMISSION_TYPE_"] },
            { no: 4, name: "subject", kind: "message", T: () => core_1.SubjectReference, options: { "validate.rules": { message: { required: true } } } },
            { no: 5, name: "result", kind: "enum", T: () => ["authzed.api.v1.CheckDebugTrace.Permissionship", CheckDebugTrace_Permissionship, "PERMISSIONSHIP_"] },
            { no: 6, name: "was_cached_result", kind: "scalar", oneof: "resolution", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "sub_problems", kind: "message", oneof: "resolution", T: () => exports.CheckDebugTrace_SubProblems }
        ]);
    }
    create(value) {
        const message = { permission: "", permissionType: 0, result: 0, resolution: { oneofKind: undefined } };
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
                case /* authzed.api.v1.ObjectReference resource */ 1:
                    message.resource = core_2.ObjectReference.internalBinaryRead(reader, reader.uint32(), options, message.resource);
                    break;
                case /* string permission */ 2:
                    message.permission = reader.string();
                    break;
                case /* authzed.api.v1.CheckDebugTrace.PermissionType permission_type */ 3:
                    message.permissionType = reader.int32();
                    break;
                case /* authzed.api.v1.SubjectReference subject */ 4:
                    message.subject = core_1.SubjectReference.internalBinaryRead(reader, reader.uint32(), options, message.subject);
                    break;
                case /* authzed.api.v1.CheckDebugTrace.Permissionship result */ 5:
                    message.result = reader.int32();
                    break;
                case /* bool was_cached_result */ 6:
                    message.resolution = {
                        oneofKind: "wasCachedResult",
                        wasCachedResult: reader.bool()
                    };
                    break;
                case /* authzed.api.v1.CheckDebugTrace.SubProblems sub_problems */ 7:
                    message.resolution = {
                        oneofKind: "subProblems",
                        subProblems: exports.CheckDebugTrace_SubProblems.internalBinaryRead(reader, reader.uint32(), options, message.resolution.subProblems)
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
        /* authzed.api.v1.ObjectReference resource = 1; */
        if (message.resource)
            core_2.ObjectReference.internalBinaryWrite(message.resource, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* string permission = 2; */
        if (message.permission !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.permission);
        /* authzed.api.v1.CheckDebugTrace.PermissionType permission_type = 3; */
        if (message.permissionType !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.permissionType);
        /* authzed.api.v1.SubjectReference subject = 4; */
        if (message.subject)
            core_1.SubjectReference.internalBinaryWrite(message.subject, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* authzed.api.v1.CheckDebugTrace.Permissionship result = 5; */
        if (message.result !== 0)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.result);
        /* bool was_cached_result = 6; */
        if (message.resolution.oneofKind === "wasCachedResult")
            writer.tag(6, runtime_1.WireType.Varint).bool(message.resolution.wasCachedResult);
        /* authzed.api.v1.CheckDebugTrace.SubProblems sub_problems = 7; */
        if (message.resolution.oneofKind === "subProblems")
            exports.CheckDebugTrace_SubProblems.internalBinaryWrite(message.resolution.subProblems, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.CheckDebugTrace
 */
exports.CheckDebugTrace = new CheckDebugTrace$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckDebugTrace_SubProblems$Type extends runtime_5.MessageType {
    constructor() {
        super("authzed.api.v1.CheckDebugTrace.SubProblems", [
            { no: 1, name: "traces", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.CheckDebugTrace }
        ]);
    }
    create(value) {
        const message = { traces: [] };
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
                case /* repeated authzed.api.v1.CheckDebugTrace traces */ 1:
                    message.traces.push(exports.CheckDebugTrace.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated authzed.api.v1.CheckDebugTrace traces = 1; */
        for (let i = 0; i < message.traces.length; i++)
            exports.CheckDebugTrace.internalBinaryWrite(message.traces[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.CheckDebugTrace.SubProblems
 */
exports.CheckDebugTrace_SubProblems = new CheckDebugTrace_SubProblems$Type();
//# sourceMappingURL=debug.js.map