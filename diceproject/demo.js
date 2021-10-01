"use strict";

const temp = new Array(20).fill(2);

console.log(temp);

const mapped = temp.map((value) => value + 5);
console.log(mapped);

const mappedWithInc = temp.map((value, ind) => [value + ind]);
mappedWithInc.length = 19;
console.log(mappedWithInc);
//alhaalla sama paremmin

const bounds = new Array(19).fill(2).map((value, ind) => [value + ind]);
console.log(bounds);

//tai for looppi:

const ubbounds = [];
for (let i = 2; i < 21; i++) {
  ubbounds.push([i]);
}
console.log(ubbounds);
