const fs = require("fs");

const input = fs
  .readFileSync("./input.txt", 'utf8')
  .toString();

const arr = input.split('\n');
arr.pop();

let sumOfPriorities = 0;
let sumOfPriorities2 = 0;

for (const [index, line] of arr.entries()) {
  // PART 1
  const {first, second} = bisect(line);
  const duplicateChar = getDuplicate(first, second);
  sumOfPriorities += getPriority(duplicateChar);

  // PART 2
  if (index % 3 === 2) {
    const duplicateChar = getDuplicates(arr.at(index - 2), arr.at(index - 1), line);
    sumOfPriorities2 += getPriority(duplicateChar);
  }
}
console.log(sumOfPriorities);
console.log(sumOfPriorities2);

function bisect(str) {
  return {
    first: str.substr(0, str.length / 2),
    second: str.substr(str.length / 2)}
}

function getDuplicate(str1, str2) {
  return str1.split('').filter(char => str2.includes(char))[0];
}

function getPriority(str) {
  const charCode = str.charCodeAt(0);
  return str == str.toLowerCase() ? charCode - 96 : charCode - 38;
}

function getDuplicates(str1, str2, str3) {
  return str1.split('').filter(char => str2.includes(char) && str3.includes(char))[0];
}
