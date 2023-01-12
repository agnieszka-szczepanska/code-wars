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
