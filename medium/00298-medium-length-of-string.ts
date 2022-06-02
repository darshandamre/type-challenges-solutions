// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<LengthOfString<"">, 0>>,
  Expect<Equal<LengthOfString<"kumiko">, 6>>,
  Expect<Equal<LengthOfString<"reina">, 5>>,
  Expect<Equal<LengthOfString<"Sound! Euphonium">, 16>>
];

// ============= Your Code Here =============

type StringToArray<S extends string> = S extends `${infer First}${infer Rest}`
  ? [First, ...StringToArray<Rest>]
  : [];
type LengthOfString<S extends string> = StringToArray<S>["length"];
