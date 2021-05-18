import { test } from "uvu";
import * as assert from "uvu/assert";
import { greet } from "./index";

test("the data is peanut butter", () => {
  assert.is(1, 1);
});

test("greeting", () => {
  assert.is(greet("Foo"), "Hello Foo");
});

test.run();
