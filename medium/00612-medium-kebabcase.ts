// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<KebabCase<"FooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"fooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"foo-bar">, "foo-bar">>,
  Expect<Equal<KebabCase<"foo_bar">, "foo_bar">>,
  Expect<Equal<KebabCase<"Foo-Bar">, "foo--bar">>,
  Expect<Equal<KebabCase<"ABC">, "a-b-c">>,
  Expect<Equal<KebabCase<"-">, "-">>,
  Expect<Equal<KebabCase<"">, "">>,
  Expect<Equal<KebabCase<"😎">, "😎">>
];

// ============= Your Code Here =============
// type KebabCase<S extends string> =
//   S extends `${infer First}${infer Second}${infer Rest}`
//     ? First extends Lowercase<First>
//       ? Second extends Lowercase<Second>
//         ? `${First}${KebabCase<`${Second}${Rest}`>}`
//         : `${First}-${KebabCase<`${Lowercase<Second>}${Rest}`>}`
//       : Second extends Lowercase<Second>
//       ? `${Lowercase<First>}${KebabCase<`${Second}${Rest}`>}`
//       : `${Lowercase<First>}-${KebabCase<`${Lowercase<Second>}${Rest}`>}`
//     : S;

type KebabCase<S extends string> = S extends `${infer F}${infer Rest}`
  ? Rest extends Uncapitalize<Rest>
    ? `${Lowercase<F>}${KebabCase<Rest>}`
    : `${Lowercase<F>}-${KebabCase<Rest>}`
  : S;
