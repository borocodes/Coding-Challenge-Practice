// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split('').every((char, idx) => {
    return char === str[str.length - idx - 1];
  });
}

//Using reverse() to reverse string and then check equality:
/*
function palindrome(str) {
  const reversed = str.split('').reverse().join('');

  return str === reversed;
}
*/

//using for...of loop to manually reverse string and then check equality:
/*
function palindrome(str) {
  let reversed = '';

  for (let char of str) {
    reversed = char + reversed;
  }
  return str === reversed;
}
*/

module.exports = palindrome;
