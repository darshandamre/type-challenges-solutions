// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";
import { ExpectFalse, NotEqual } from "./test-utils";

interface User {
  name: string;
  age: number;
  address: string;
}

interface UserPartialName {
  name?: string;
  age: number;
  address: string;
}

interface UserPartialNameAndAge {
  name?: string;
  age?: number;
  address: string;
}

type cases = [
  Expect<Equal<PartialByKeys<User, "name">, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, "name" | "unknown">, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, "name" | "age">, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>
];

// ============= Your Code Here =============
type PartialByKeys2<T, K = keyof T> = Copy<
  {
    [key in K & keyof T]?: T[key];
  } & {
    [key in Exclude<keyof T, K & keyof T>]: T[key];
  }
>;

type PartialByKeys<T, K = keyof T> = Copy<
  Omit<T, K & keyof T> & Partial<Pick<T, K & keyof T>>
>;

type Copy<T> = Pick<T, keyof T>;

// PartialByKeys<User, "name">;

// PartialByKeys<User, "name">;
