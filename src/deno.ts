import { dedupe } from "@thi.ng/transducers";

const ded: IterableIterator<number> = dedupe([1, 1, 2, 3]);
console.log([...ded]);
const abc = 42;
console.log(abc);
