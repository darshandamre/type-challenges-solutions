// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>
];

// @ts-expect-error
type error = MyAwaited<number>;

// ============= Your Code Here =============
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer U>
  ? U extends Promise<unknown>
    ? MyAwaited<U>
    : U
  : never;
