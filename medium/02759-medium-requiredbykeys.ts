// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";
import { ExpectFalse, NotEqual } from "./test-utils";

interface User {
  name?: string;
  age?: number;
  address?: string;
}

interface UserRequiredName {
  name: string;
  age?: number;
  address?: string;
}

interface UserRequiredNameAndAge {
  name: string;
  age: number;
  address?: string;
}

type cases = [
  Expect<Equal<RequiredByKeys<User, "name">, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, "name" | "unknown">, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, "name" | "age">, UserRequiredNameAndAge>>,
  Expect<Equal<RequiredByKeys<User>, Required<User>>>
];

// ============= Your Code Here =============
type RequiredByKeys<T, K = keyof T> = Copy<
  Required<Pick<T, K & keyof T>> & Omit<T, K & keyof T>
>;

type Copy<T> = Pick<T, keyof T>;
