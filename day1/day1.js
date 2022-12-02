const fs = require("fs");

const input = fs
  .readFileSync("./input.txt", 'utf8')
  .toString();

const arr = input.split('\n');
let caloriesPerElve = [];
let sum = 0;

for (const val of arr) {
  if (val !== '') {
    sum += +val;
  } else {
    caloriesPerElve.push(sum);
    sum = 0;
  }
}

caloriesPerElve.sort();
console.log(caloriesPerElve.at(-1));
console.log(caloriesPerElve.slice(-3).reduce((a, b) => a + b));
