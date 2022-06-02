// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

const promiseAllTest1 = PromiseAll([1, 2, 3] as const);
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const);
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]);

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>
];

// ============= Your Code Here =============
declare function PromiseAll<V extends readonly any[]>(
  values: readonly [...V]
): Promise<{
  [K in keyof V]: V[K] extends Promise<infer P> ? P : V[K];
}>;
