// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//my solution: convert strings into arrays, sort, and join back together as a string. Then, compare the sorted strings and return true. Otherwise, return false. Passes all tests but the solution nor tests are accounting for edge cases mentioned in problem description
function anagrams(stringA, stringB) {
  let arrayA = stringA.split('').sort().join('');

  let arrayB = stringB.split('').sort().join('');

  if (arrayA === arrayB) {
    return true;
  }

  return false;
}

module.exports = anagrams;

//ALTERNATIVE SOLUTIONS

// solution similar to mine but actually accounts for special characters, white space, etc. Makes use of a helper function
//--------------------------------------------------------------------
/*
function anagrams(stringA, stringB) {
  return strCleanUp(stringA) === strCleanUp(stringB)
}

//helper function
function strCleanUp(str) {
  return str.replace(/[^\w]/g).toLowerCase().split('').sort().join('')
}
*/
//--------------------------------------------------------------------

//solution using a character map w/helper function and regex to account for edge cases

/*----------------------------------------------------------------------------
function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

\\helper function for character map solution
function buildCharMap(str) {
  const charMap = {};
  
  for (let char of str.replace(/[^\w]/g).toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}
------------------------------------------------------------------------------*/
