"use strict";

const register = require("./datastorage.json");

console.log(register[0].id);
console.log(register[1].id);
console.log(register[0].manufacturer);
console.log(register[2].type);

console.log(register[0].software);
console.log(register[0].software[0].name);
console.log(register[0].software[0].price);
