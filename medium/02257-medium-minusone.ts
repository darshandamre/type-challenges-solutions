// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>
];

// ============= Your Code Here =============

type MinusOne<T extends number> = MinusOneStr<`${T}`>;

type MinusOneStr<
  Num extends string,
  Tup extends readonly any[] = []
> = `${Num}` extends `${infer FirstDigit}${infer Rest}`
  ? MinusOneStr<Rest, [...TenTimesTuple<Tup>, ...TupleOfLength<FirstDigit>]>
  : Pop<Tup>["length"];

type Pop<T extends readonly unknown[]> = T extends [any, ...infer Rest]
  ? Rest
  : never;

type TenTimesTuple<T extends readonly unknown[]> = Twicetuple<
  FiveTimesTuple<T>
>;

type Twicetuple<T extends readonly unknown[]> = [...T, ...T];
type FiveTimesTuple<T extends readonly unknown[]> = [
  ...Twicetuple<T>,
  ...Twicetuple<T>,
  ...T
];

type TupleOfLength<T extends string> = T extends "0"
  ? []
  : T extends "1"
  ? [0]
  : T extends "2"
  ? [0, 0]
  : T extends "3"
  ? [0, 0, 0]
  : T extends "4"
  ? [0, 0, 0, 0]
  : T extends "5"
  ? [0, 0, 0, 0, 0]
  : T extends "6"
  ? [0, 0, 0, 0, 0, 0]
  : T extends "7"
  ? [0, 0, 0, 0, 0, 0, 0]
  : T extends "8"
  ? [0, 0, 0, 0, 0, 0, 0, 0]
  : T extends "9"
  ? [0, 0, 0, 0, 0, 0, 0, 0, 0]
  : never;
