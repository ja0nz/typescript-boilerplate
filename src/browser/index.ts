/**
 * This file is the entrypoint of browser builds.
 * The code executes when loaded in a browser.
 */
// @ts-ignore
import { foo } from "../index.ts";
import { dedupe } from "@thi.ng/transducers";

const ded: IterableIterator<number> = dedupe([1, 1, 2, 3]);
console.log([...ded]);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// deno-lint-ignore no-explicit-any
(window as any).foo = foo; // instead of casting window to any, you can extend the Window interface: https://stackoverflow.com/a/43513740/5433572

console.log(
  'Method "foo" was added to the window object. You can try it yourself by just entering "await foo()"'
);
