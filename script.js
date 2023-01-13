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

// function alphabet(ns) {
//   const sortedArr = ns.sort((a, b) => {
//     return a - b;
//   });

//   if (sortedArr[2] === sortedArr[0] * sortedArr[1]) {
//     return sortedArr[7] / sortedArr[3];
//   } else {
//     return sortedArr[7] / sortedArr[2];
//   }
// }

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
