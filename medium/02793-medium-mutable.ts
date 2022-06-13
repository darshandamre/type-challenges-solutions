// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";
import { ExpectFalse, NotEqual } from "./test-utils";

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

type List = [1, 2, 3];

type cases = [
  Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>,
  Expect<Equal<Mutable<Readonly<List>>, List>>
];

type errors = [
  // @ts-expect-error
  Mutable<"string">,
  // @ts-expect-error
  Mutable<0>
];

// ============= Your Code Here =============
type Mutable<T extends Readonly<object> | ReadonlyArray<unknown>> = {
  -readonly [key in keyof T]: T[key];
};

type X = Mutable<Readonly<List>>;
