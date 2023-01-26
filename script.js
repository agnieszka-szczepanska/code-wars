// Task 1
// Take 2 strings s1 and s2 including only letters from a to z.
// Return a new sorted string, the longest possible, containing distinct letters
// - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
  const everyLetters = s1.split("").concat(s2.split(""));
  const array = [];
  for (const letter of everyLetters) {
    if (array.indexOf(letter) === -1) {
      array.push(letter);
    }
  }
  return array.sort().join("");
}

// Task 2
//Given an array of integers, remove the smallest value.
//Do not mutate the original array/list.
//If there are multiple elements with the same value, remove the one with a lower index.
//If you get an empty array/list, return an empty array/list.
//Don't change the order of the elements that are left.

function removeSmallest(numbers) {
  if (numbers === []) {
    return numbers;
  } else {
    const a = numbers.indexOf(Math.min(...numbers));
    let b = numbers.slice(0, a);
    let c = numbers.slice(a + 1, numbers.length);
    return b.concat(c);
  }
}

// console.log(removeSmallest([1, 2, 3, 4, 5]))

//Input: [1,2,3,4,5], output = [2,3,4,5]
//Input: [5,3,2,1,4], output = [5,3,2,4]
//Input: [2,2,1,2,1], output = [2,2,2,1]

//Task 3. Give me the amount of people who are in the bus after last stop.

// function busStop(people){
//  }

function busStop(people) {
  for (let i = 1; i < people.length; i++) {
    people[i][1] = people[i][1] * -1;
  }
  return people.flat().reduce((sum, value) => sum + value);
}
// console.log(busStop([[15,0],[5,1],[5,1]]))
// console.log(busStop1([[15,0],[5,1],[5,1]]))

//Task 4
//I have four positive integers, A, B, C and D, where A < B < C < D.
// The input is a list of the integers A, B, C, D, AxB, BxC, CxD, DxA in some order.
// Your task is to return the value of D.

function alphabet(ns) {
  const sortedArr = ns.sort((a, b) => {
    return a - b;
  });

  if (sortedArr[2] === sortedArr[0] * sortedArr[1]) {
    return sortedArr[7] / sortedArr[3];
  } else {
    return sortedArr[7] / sortedArr[2];
  }
}

// alphabet([2, 3, 4, 1, 12, 6, 2, 4]);
// alphabet([2, 6, 7, 3, 14, 35, 15, 5]);
// alphabet([20, 10, 6, 5, 4, 3, 2, 12]);
// alphabet([2, 6, 18, 3, 6, 7, 42, 14]);
// alphabet([7, 96, 8, 240, 12, 140, 20, 56]);
// alphabet([20, 30, 6, 7, 4, 42, 28, 5]);

// Task 5
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

function minSum(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let a = 0;
  for (let i = 0; i < sorted.length / 2; i++) {
    a += sorted[i] * sorted[sorted.length - i - 1];
  }
  return a;
}

console.log(minSum([1, 2, 3, 4]));

//Task 6
//Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list. Don't change the order of the elements that are left.

function removeSmallest(numbers) {
  if (numbers === []) {
    return numbers;
  } else {
    const a = numbers.indexOf(Math.min(...numbers));
    let b = numbers.slice(0, a);
    let c = numbers.slice(a + 1, numbers.length);
    return b.concat(c);
  }
}
// console.log(removeSmallest([5, 3, 2, 1, 4]));

//Task 7
//Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
  let b = s1 + s2;
  b = b
    .split("")
    .sort()
    .filter((element, index, array) => {
      return array.indexOf(element) === index;
    })
    .join("");

  return b;
}
// Task 7 - in other way

function longest(s1, s2) {
  const everyLetters = s1.split("").concat(s2.split(""));
  const array = [];
  for (const letter of everyLetters) {
    if (array.indexOf(letter) === -1) {
      array.push(letter);
    }
  }
  return array.sort().join("");
}

// console.log(longest("aretheyhere", "yestheyarehere"));
// console.log(longest("aabbccdd", "aabbccddeehijf"));

// Task 8
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {
  return array.map((element) => element * -1);
}

// console.log(invert([1,2,3,4,5]))

// Task 9
//  Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr(n, s) {
  return s.repeat(n);
}

// console.log(repeatStr(3, "*"));

// task 10
//Function takes a String and returns an Array/list with the length of each word added to each element.
function addLength(str) {
  return str.split(" ").map((element) => element + " " + element.length);
}

// console.log(addLength("apple ban"));

// task 11
//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers) {
  const result = [
    "(",
    numbers.slice(0, 3).join(""),
    ")",
    numbers.slice(3, 6).join(""),
    "-",
    numbers.slice(6, 10).join(""),
  ];
  return result.join("");
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => returns "(123) 456-7890"

// task 12
// Is it even?
// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats with decimal part non equal to zero are considered UNeven for this kata.

function testEven(n) {
  return n % 2 === 0;
}

testEven(1);

// task 13
// Convert a string to an array
// Write a function to split a string and convert it into an array of words.

function stringToArray(string) {
  return string.split(" ");
}

// stringToArray("I love arrays they are my favorite");
