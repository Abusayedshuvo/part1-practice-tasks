// Task-1:
function celToFah(cel) {
  const far = (cel * 9) / 5 + 32;
  return far;
}
const celsius = 29;
// console.log(celToFah(celsius));

// Task-2:
function find(nums) {
  let arr = [];
  for (let num of nums) {
    if (num === 5) {
      arr.push(num);
    }
  }
  return arr.length;
}
const numbers = [5, 6, 11, 12, 98, 5];
// console.log(find(numbers));

// Task 2.2

function findTwo(numbers) {
  let count = 0;
  for (number of numbers) {
    if (number === 5) {
      count++;
    }
  }
  return count;
}
const numbers2 = [5, 6, 11, 12, 98, 5];
// console.log(findTwo(numbers2));

// Task 3
function vowelsVowels(str) {
  const strArr = str.split("");
  let count = 0;
  for (let i of strArr) {
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
      count++;
    }
  }
  return count;
}
const vowels =
  "You are given an array of numbers. Count how many times the a number is repeated in the array.";
console.log(vowelsVowels(vowels));
