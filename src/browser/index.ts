/**
 * This file is the entrypoint of browser builds.
 * The code executes when loaded in a browser.
 */
// @ts-ignore: TSC interopt
import { foo } from "../index.ts";

window.foo = foo;

console.log(
  'Method "foo" was added to the window object. You can try it yourself by just entering "await foo()"'
);
