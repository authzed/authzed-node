import {
  CallOptions,
  Client,
  ClientReadableStream,
  ClientUnaryCall,
  ClientWritableStream,
  Metadata,
  ServiceError,
} from "@grpc/grpc-js";

/**
 * Picks all function properties of a type that except for those with a specific return type
 */
export type ExcludeReturnType<T, U> = Pick<
  T,
  { [K in keyof T]: T[K] extends (_: infer _T1) => U ? never : K }[keyof T]
>;

/**
 * Picks all function properties of a type that have the specific return type
 */
export type PickReturnType<T, U> = Pick<
  T,
  { [K in keyof T]: T[K] extends (_: infer _T2) => U ? K : never }[keyof T]
>;

/**
 * Returns all properties of a type without those of the base type B
 */
export type OmitBaseMethods<C extends B, B> = {
  [prop in Exclude<keyof C, keyof B>]: C[prop];
};

/**
 * Matches a gRPC method that returns a ClientReadableStream
 */
export type StreamCall<T, U> = (
  request: T,
  metadata?: Metadata | CallOptions,
  options?: CallOptions,
) => ClientReadableStream<U>;

/**
 * Matches a gRPC method that returns a ClientWritableStream
 */
export type WritableStreamCall<T, U> = (
  metadata:
    | Metadata
    | CallOptions
    | ((err: ServiceError | null, value?: U | undefined) => void),
  options?:
    | CallOptions
    | ((err: ServiceError | null, value?: U | undefined) => void)
    | undefined,
  callback?: (
    err: ServiceError | null,
    value?: U | undefined,
  ) => void | undefined,
) => ClientWritableStream<T>;

/**
 * Matches a gRPC method that returns a ClientUnaryCall
 */
export type UnaryCall<T, U> = (
  request: T,
  metadata: Metadata | CallOptions,
  options: Partial<CallOptions>,
  callback: (err: ServiceError | null, res?: U) => void,
) => ClientUnaryCall;

/**
 * A promise-wrapped gRPC call shape.
 */
export type PromisifiedCall<T, U> = (
  request: T,
  metadata?: Metadata,
  options?: Partial<CallOptions>,
) => Promise<U>;

/**
 * Wraps all unary calls with a promisified signature.
 */
export type PromisifiedCallbackClient<C> = {
  [prop in Exclude<
    Exclude<
      keyof ExcludeReturnType<C, ClientReadableStream<unknown>>,
      keyof Client
    >,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    keyof PickReturnType<C, ClientWritableStream<any>>
  >]: C[prop] extends UnaryCall<infer T, infer U>
    ? PromisifiedCall<T, U>
    : never;
};

/**
 * Wraps all stream calls with a promisified signature.
 */
export type PromisifiedStreamClient<C> = {
  [prop in Exclude<
    keyof PickReturnType<C, ClientReadableStream<unknown>>,
    keyof Client
  >]: C[prop] extends StreamCall<infer T1, infer U1>
    ? PromisifiedCall<T1, U1[]>
    : never;
};

export type WritableStreamClient<C> = {
  [prop in Exclude<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    keyof PickReturnType<C, ClientWritableStream<any>>,
    keyof Client
  >]: C[prop] extends WritableStreamCall<infer T1, infer U1>
    ? WritableStreamCall<T1, U1>
    : never;
};

/**
 * Merges unary/stream promisified signatures into a single client.
 */
export type PromisifiedClient<C> = PromisifiedCallbackClient<C> &
  PromisifiedStreamClient<C> &
  WritableStreamClient<C>;
