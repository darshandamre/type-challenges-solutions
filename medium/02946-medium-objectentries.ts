// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";
import { ExpectFalse, NotEqual } from "./test-utils";

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries =
  | ["name", string]
  | ["age", number]
  | ["locations", string[] | null];

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ["key", undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ["key", undefined]>>
];

// ============= Your Code Here =============
type ObjectEntries<T> = {
  [key in keyof T]-?: [
    key,
    [T[key]] extends [undefined] ? T[key] : Exclude<T[key], undefined>
  ];
}[keyof T];
