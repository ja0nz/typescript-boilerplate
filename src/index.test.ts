// @ts-ignore: TSC interopt
import { assertEquals } from "@testing/asserts.ts";
// @ts-ignore: TSC interopt
import { greet } from "./index.ts";

Deno.test("the data is peanut butter", () => {
  assertEquals(1, 1);
});

Deno.test("greeting", () => {
  assertEquals(greet("Foo"), "Hello Foo");
});
