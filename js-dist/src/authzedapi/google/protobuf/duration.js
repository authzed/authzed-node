"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Duration = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const runtime_6 = require("@protobuf-ts/runtime");
const runtime_7 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class Duration$Type extends runtime_7.MessageType {
    constructor() {
        super("google.protobuf.Duration", [
            { no: 1, name: "seconds", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 2, name: "nanos", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    /**
     * Encode `Duration` to JSON string like "3.000001s".
     */
    internalJsonWrite(message, options) {
        let s = runtime_6.PbLong.from(message.seconds).toNumber();
        if (s > 315576000000 || s < -315576000000)
            throw new Error("Duration value out of range.");
        let text = message.seconds.toString();
        if (message.nanos !== 0) {
            let nanosStr = Math.abs(message.nanos).toString();
            nanosStr = "0".repeat(9 - nanosStr.length) + nanosStr;
            if (nanosStr.substring(3) === "000000")
                nanosStr = nanosStr.substring(0, 3);
            else if (nanosStr.substring(6) === "000")
                nanosStr = nanosStr.substring(0, 6);
            text += "." + nanosStr;
        }
        return text + "s";
    }
    /**
     * Decode `Duration` from JSON string like "3.000001s"
     */
    internalJsonRead(json, options, target) {
        if (typeof json !== "string")
            throw new Error("Unable to parse Duration from JSON " + runtime_5.typeofJsonValue(json) + ". Expected string.");
        let match = json.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
        if (match === null)
            throw new Error("Unable to parse Duration from JSON string. Invalid format.");
        if (!target)
            target = this.create();
        let longSeconds = runtime_6.PbLong.from(match[1]);
        if (longSeconds.toNumber() > 315576000000 || longSeconds.toNumber() < -315576000000)
            throw new Error("Unable to parse Duration from JSON string. Value out of range.");
        target.seconds = longSeconds.toString();
        if (typeof match[2] == "string") {
            let nanosStr = match[2] + "0".repeat(9 - match[2].length);
            target.nanos = parseInt(nanosStr);
            if (longSeconds.isNegative()) {
                target.nanos = -target.nanos;
            }
        }
        return target;
    }
    create(value) {
        const message = { seconds: "0", nanos: 0 };
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
                case /* int64 seconds */ 1:
                    message.seconds = reader.int64().toString();
                    break;
                case /* int32 nanos */ 2:
                    message.nanos = reader.int32();
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
        /* int64 seconds = 1; */
        if (message.seconds !== "0")
            writer.tag(1, runtime_1.WireType.Varint).int64(message.seconds);
        /* int32 nanos = 2; */
        if (message.nanos !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.nanos);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.Duration
 */
exports.Duration = new Duration$Type();
//# sourceMappingURL=duration.js.map