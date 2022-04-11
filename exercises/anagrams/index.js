// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//my solution: convert strings into arrays, sort, and join back together as a string. Then, compare the sorted strings and return true. Otherwise, return false.
function anagrams(stringA, stringB) {
  let arrayA = stringA.split('').sort().join('');
  let arrayB = stringB.split('').sort().join('');

  if (arrayA === arrayB) {
    return true;
  }
  return false;
}

module.exports = anagrams;
