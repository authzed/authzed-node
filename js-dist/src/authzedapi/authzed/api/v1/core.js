"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectSubjectSet = exports.AlgebraicSubjectSet = exports.PermissionRelationshipTree = exports.RelationshipUpdate = exports.ZedToken = exports.ObjectReference = exports.SubjectReference = exports.ContextualizedCaveat = exports.Relationship = exports.AlgebraicSubjectSet_Operation = exports.RelationshipUpdate_Operation = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const struct_1 = require("../../../google/protobuf/struct");
/**
 * @generated from protobuf enum authzed.api.v1.RelationshipUpdate.Operation
 */
var RelationshipUpdate_Operation;
(function (RelationshipUpdate_Operation) {
    /**
     * @generated from protobuf enum value: OPERATION_UNSPECIFIED = 0;
     */
    RelationshipUpdate_Operation[RelationshipUpdate_Operation["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from protobuf enum value: OPERATION_CREATE = 1;
     */
    RelationshipUpdate_Operation[RelationshipUpdate_Operation["CREATE"] = 1] = "CREATE";
    /**
     * @generated from protobuf enum value: OPERATION_TOUCH = 2;
     */
    RelationshipUpdate_Operation[RelationshipUpdate_Operation["TOUCH"] = 2] = "TOUCH";
    /**
     * @generated from protobuf enum value: OPERATION_DELETE = 3;
     */
    RelationshipUpdate_Operation[RelationshipUpdate_Operation["DELETE"] = 3] = "DELETE";
})(RelationshipUpdate_Operation = exports.RelationshipUpdate_Operation || (exports.RelationshipUpdate_Operation = {}));
/**
 * @generated from protobuf enum authzed.api.v1.AlgebraicSubjectSet.Operation
 */
var AlgebraicSubjectSet_Operation;
(function (AlgebraicSubjectSet_Operation) {
    /**
     * @generated from protobuf enum value: OPERATION_UNSPECIFIED = 0;
     */
    AlgebraicSubjectSet_Operation[AlgebraicSubjectSet_Operation["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from protobuf enum value: OPERATION_UNION = 1;
     */
    AlgebraicSubjectSet_Operation[AlgebraicSubjectSet_Operation["UNION"] = 1] = "UNION";
    /**
     * @generated from protobuf enum value: OPERATION_INTERSECTION = 2;
     */
    AlgebraicSubjectSet_Operation[AlgebraicSubjectSet_Operation["INTERSECTION"] = 2] = "INTERSECTION";
    /**
     * @generated from protobuf enum value: OPERATION_EXCLUSION = 3;
     */
    AlgebraicSubjectSet_Operation[AlgebraicSubjectSet_Operation["EXCLUSION"] = 3] = "EXCLUSION";
})(AlgebraicSubjectSet_Operation = exports.AlgebraicSubjectSet_Operation || (exports.AlgebraicSubjectSet_Operation = {}));
// @generated message type with reflection information, may provide speed optimized methods
class Relationship$Type extends runtime_5.MessageType {
    constructor() {
        super("authzed.api.v1.Relationship", [
            { no: 1, name: "resource", kind: "message", T: () => exports.ObjectReference, options: { "validate.rules": { message: { required: true } } } },
            { no: 2, name: "relation", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { maxBytes: "64", pattern: "^[a-z][a-z0-9_]{1,62}[a-z0-9]$" } } } },
            { no: 3, name: "subject", kind: "message", T: () => exports.SubjectReference, options: { "validate.rules": { message: { required: true } } } },
            { no: 4, name: "optional_caveat", kind: "message", T: () => exports.ContextualizedCaveat, options: { "validate.rules": { message: { required: false } } } }
        ]);
    }
    create(value) {
        const message = { relation: "" };
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
                    message.resource = exports.ObjectReference.internalBinaryRead(reader, reader.uint32(), options, message.resource);
                    break;
                case /* string relation */ 2:
                    message.relation = reader.string();
                    break;
                case /* authzed.api.v1.SubjectReference subject */ 3:
                    message.subject = exports.SubjectReference.internalBinaryRead(reader, reader.uint32(), options, message.subject);
                    break;
                case /* authzed.api.v1.ContextualizedCaveat optional_caveat */ 4:
                    message.optionalCaveat = exports.ContextualizedCaveat.internalBinaryRead(reader, reader.uint32(), options, message.optionalCaveat);
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
            exports.ObjectReference.internalBinaryWrite(message.resource, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* string relation = 2; */
        if (message.relation !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.relation);
        /* authzed.api.v1.SubjectReference subject = 3; */
        if (message.subject)
            exports.SubjectReference.internalBinaryWrite(message.subject, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* authzed.api.v1.ContextualizedCaveat optional_caveat = 4; */
        if (message.optionalCaveat)
            exports.ContextualizedCaveat.internalBinaryWrite(message.optionalCaveat, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.Relationship
 */
exports.Relationship = new Relationship$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ContextualizedCaveat$Type extends runtime_5.MessageType {
    constructor() {
        super("authzed.api.v1.ContextualizedCaveat", [
            { no: 1, name: "caveat_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { maxBytes: "128", pattern: "^([a-zA-Z0-9_][a-zA-Z0-9/_|-]{0,127})$" } } } },
            { no: 2, name: "context", kind: "message", T: () => struct_1.Struct, options: { "validate.rules": { message: { required: false } } } }
        ]);
    }
    create(value) {
        const message = { caveatName: "" };
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
                case /* string caveat_name */ 1:
                    message.caveatName = reader.string();
                    break;
                case /* google.protobuf.Struct context */ 2:
                    message.context = struct_1.Struct.internalBinaryRead(reader, reader.uint32(), options, message.context);
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
        /* string caveat_name = 1; */
        if (message.caveatName !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.caveatName);
        /* google.protobuf.Struct context = 2; */
        if (message.context)
            struct_1.Struct.internalBinaryWrite(message.context, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.ContextualizedCaveat
 */
exports.ContextualizedCaveat = new ContextualizedCaveat$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SubjectReference$Type extends runtime_5.MessageType {
    constructor() {
        super("authzed.api.v1.SubjectReference", [
            { no: 1, name: "object", kind: "message", T: () => exports.ObjectReference, options: { "validate.rules": { message: { required: true } } } },
            { no: 2, name: "optional_relation", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { maxBytes: "64", pattern: "^([a-z][a-z0-9_]{1,62}[a-z0-9])?$" } } } }
        ]);
    }
    create(value) {
        const message = { optionalRelation: "" };
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
                case /* authzed.api.v1.ObjectReference object */ 1:
                    message.object = exports.ObjectReference.internalBinaryRead(reader, reader.uint32(), options, message.object);
                    break;
                case /* string optional_relation */ 2:
                    message.optionalRelation = reader.string();
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
        /* authzed.api.v1.ObjectReference object = 1; */
        if (message.object)
            exports.ObjectReference.internalBinaryWrite(message.object, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* string optional_relation = 2; */
        if (message.optionalRelation !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.optionalRelation);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.SubjectReference
 */
exports.SubjectReference = new SubjectReference$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ObjectReference$Type extends runtime_5.MessageType {
    constructor() {
        super("authzed.api.v1.ObjectReference", [
            { no: 1, name: "object_type", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { maxBytes: "128", pattern: "^([a-z][a-z0-9_]{1,61}[a-z0-9]/)?[a-z][a-z0-9_]{1,62}[a-z0-9]$" } } } },
            { no: 2, name: "object_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { maxBytes: "128", pattern: "^(([a-zA-Z0-9_][a-zA-Z0-9/_|-]{0,127})|\\*)$" } } } }
        ]);
    }
    create(value) {
        const message = { objectType: "", objectId: "" };
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
                case /* string object_type */ 1:
                    message.objectType = reader.string();
                    break;
                case /* string object_id */ 2:
                    message.objectId = reader.string();
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
        /* string object_type = 1; */
        if (message.objectType !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.objectType);
        /* string object_id = 2; */
        if (message.objectId !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.objectId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.ObjectReference
 */
exports.ObjectReference = new ObjectReference$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ZedToken$Type extends runtime_5.MessageType {
    constructor() {
        super("authzed.api.v1.ZedToken", [
            { no: 1, name: "token", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minBytes: "1" } } } }
        ]);
    }
    create(value) {
        const message = { token: "" };
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
                case /* string token */ 1:
                    message.token = reader.string();
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
        /* string token = 1; */
        if (message.token !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.token);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.ZedToken
 */
exports.ZedToken = new ZedToken$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RelationshipUpdate$Type extends runtime_5.MessageType {
    constructor() {
        super("authzed.api.v1.RelationshipUpdate", [
            { no: 1, name: "operation", kind: "enum", T: () => ["authzed.api.v1.RelationshipUpdate.Operation", RelationshipUpdate_Operation, "OPERATION_"], options: { "validate.rules": { enum: { definedOnly: true } } } },
            { no: 2, name: "relationship", kind: "message", T: () => exports.Relationship, options: { "validate.rules": { message: { required: true } } } }
        ]);
    }
    create(value) {
        const message = { operation: 0 };
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
                case /* authzed.api.v1.RelationshipUpdate.Operation operation */ 1:
                    message.operation = reader.int32();
                    break;
                case /* authzed.api.v1.Relationship relationship */ 2:
                    message.relationship = exports.Relationship.internalBinaryRead(reader, reader.uint32(), options, message.relationship);
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
        /* authzed.api.v1.RelationshipUpdate.Operation operation = 1; */
        if (message.operation !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.operation);
        /* authzed.api.v1.Relationship relationship = 2; */
        if (message.relationship)
            exports.Relationship.internalBinaryWrite(message.relationship, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.RelationshipUpdate
 */
exports.RelationshipUpdate = new RelationshipUpdate$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PermissionRelationshipTree$Type extends runtime_5.MessageType {
    constructor() {
        super("authzed.api.v1.PermissionRelationshipTree", [
            { no: 1, name: "intermediate", kind: "message", oneof: "treeType", T: () => exports.AlgebraicSubjectSet },
            { no: 2, name: "leaf", kind: "message", oneof: "treeType", T: () => exports.DirectSubjectSet },
            { no: 3, name: "expanded_object", kind: "message", T: () => exports.ObjectReference },
            { no: 4, name: "expanded_relation", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { treeType: { oneofKind: undefined }, expandedRelation: "" };
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
                case /* authzed.api.v1.AlgebraicSubjectSet intermediate */ 1:
                    message.treeType = {
                        oneofKind: "intermediate",
                        intermediate: exports.AlgebraicSubjectSet.internalBinaryRead(reader, reader.uint32(), options, message.treeType.intermediate)
                    };
                    break;
                case /* authzed.api.v1.DirectSubjectSet leaf */ 2:
                    message.treeType = {
                        oneofKind: "leaf",
                        leaf: exports.DirectSubjectSet.internalBinaryRead(reader, reader.uint32(), options, message.treeType.leaf)
                    };
                    break;
                case /* authzed.api.v1.ObjectReference expanded_object */ 3:
                    message.expandedObject = exports.ObjectReference.internalBinaryRead(reader, reader.uint32(), options, message.expandedObject);
                    break;
                case /* string expanded_relation */ 4:
                    message.expandedRelation = reader.string();
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
        /* authzed.api.v1.AlgebraicSubjectSet intermediate = 1; */
        if (message.treeType.oneofKind === "intermediate")
            exports.AlgebraicSubjectSet.internalBinaryWrite(message.treeType.intermediate, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* authzed.api.v1.DirectSubjectSet leaf = 2; */
        if (message.treeType.oneofKind === "leaf")
            exports.DirectSubjectSet.internalBinaryWrite(message.treeType.leaf, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* authzed.api.v1.ObjectReference expanded_object = 3; */
        if (message.expandedObject)
            exports.ObjectReference.internalBinaryWrite(message.expandedObject, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* string expanded_relation = 4; */
        if (message.expandedRelation !== "")
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.expandedRelation);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.PermissionRelationshipTree
 */
exports.PermissionRelationshipTree = new PermissionRelationshipTree$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AlgebraicSubjectSet$Type extends runtime_5.MessageType {
    constructor() {
        super("authzed.api.v1.AlgebraicSubjectSet", [
            { no: 1, name: "operation", kind: "enum", T: () => ["authzed.api.v1.AlgebraicSubjectSet.Operation", AlgebraicSubjectSet_Operation, "OPERATION_"] },
            { no: 2, name: "children", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.PermissionRelationshipTree }
        ]);
    }
    create(value) {
        const message = { operation: 0, children: [] };
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
                case /* authzed.api.v1.AlgebraicSubjectSet.Operation operation */ 1:
                    message.operation = reader.int32();
                    break;
                case /* repeated authzed.api.v1.PermissionRelationshipTree children */ 2:
                    message.children.push(exports.PermissionRelationshipTree.internalBinaryRead(reader, reader.uint32(), options));
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
        /* authzed.api.v1.AlgebraicSubjectSet.Operation operation = 1; */
        if (message.operation !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.operation);
        /* repeated authzed.api.v1.PermissionRelationshipTree children = 2; */
        for (let i = 0; i < message.children.length; i++)
            exports.PermissionRelationshipTree.internalBinaryWrite(message.children[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.AlgebraicSubjectSet
 */
exports.AlgebraicSubjectSet = new AlgebraicSubjectSet$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DirectSubjectSet$Type extends runtime_5.MessageType {
    constructor() {
        super("authzed.api.v1.DirectSubjectSet", [
            { no: 1, name: "subjects", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.SubjectReference }
        ]);
    }
    create(value) {
        const message = { subjects: [] };
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
                case /* repeated authzed.api.v1.SubjectReference subjects */ 1:
                    message.subjects.push(exports.SubjectReference.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated authzed.api.v1.SubjectReference subjects = 1; */
        for (let i = 0; i < message.subjects.length; i++)
            exports.SubjectReference.internalBinaryWrite(message.subjects[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.DirectSubjectSet
 */
exports.DirectSubjectSet = new DirectSubjectSet$Type();
//# sourceMappingURL=core.js.map