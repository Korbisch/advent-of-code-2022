const fs = require("fs");

const input = fs
  .readFileSync("./input.txt", 'utf8')
  .toString();

const arr = input.split('\n');
let max = 0;
let sum = 0;

for (const val of arr) {
  if (val !== '') {
    sum += Number(val);
  } else {
    if (sum > max) max = sum;
    sum = 0;
  }
}

console.log(max);

let caloriesPerElve = [];
sum = 0;

for (const val of arr) {
  if (val !== '') {
    sum += +val;
  } else {
    caloriesPerElve.push(sum);
    sum = 0;
  }
}

caloriesPerElve.sort();
console.log(caloriesPerElve.slice(-3).reduce((a, b) => a + b));
