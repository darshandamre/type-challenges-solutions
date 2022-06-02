// ============= Test Cases =============
import type { Alike, Expect } from "./test-utils";

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, "title" | "description">, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, "title" | "description">, Expected>>
];

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  description?: string;
  completed: boolean;
}

interface Expected {
  readonly title: string;
  readonly description?: string;
  completed: boolean;
}

// ============= Your Code Here =============
type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [U in K]: T[U];
} & {
  [U in keyof T as U extends K ? never : U]: T[U];
};

// type MyReadonly2<T, K extends keyof T = keyof T> = {
//   readonly [U in K]: T[U];
// } & {
//   [U in Exclude<keyof T, K>]: T[U];
// };

// type MyReadonly2<T, K extends keyof T = keyof T> = {
//   readonly [U in K]: T[U];
// } & Pick<T, Exclude<keyof T, K>>;

// type MyReadonly<T> = {
//   readonly [U in keyof T]: T[U];
// };
// type MyReadonly2<T, K extends keyof T = keyof T> = MyReadonly<Pick<T, K>> &
//   Pick<T, Exclude<keyof T, K>>;
