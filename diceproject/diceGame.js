"use strict";

const Dice = require("./dice");

const diceA = new Dice();
const diceB = new Dice();
//const diceA = new Dice(2);
//const diceB = new Dice(2);

console.log("diceA: ", diceA.toString());
console.log("diceB: " + diceB);

diceA.roll();
diceB.roll();

console.log("diceA: ", diceA.toString());
console.log("diceB: " + diceB);

if (diceA.dots === diceB.dots) {
  console.log("same dots");
} else if (diceA.dots > diceB.dots) {
  console.log("A wins");
} else {
  console.log("B wins");
}
