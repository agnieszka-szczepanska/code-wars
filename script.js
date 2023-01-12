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
