/* eslint-disable no-console */
const Skylabarray = require("./Array/Skylabarray");

const array = new Skylabarray(45, 25, 26, 31, 41, 55);

array.push(67, array);

console.log(array);
