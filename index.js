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
// console.log(vowelsVowels(vowels));

// Task 4

function longestWord(str) {
  const words = str.split(" ");
  let longWord = "";
  for (word of words) {
    if (word.length > longWord.length) {
      longWord = word;
    }
  }
  return longWord;
}

const string3 = "I am learning Programming to become a programmer";
// console.log(longestWord(string3));

// Task 5

const random = Math.floor(Math.random() * 11) + 10;
console.log(random);
