// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//solution using for...of loop
/*
function chunk(array, size) {
  //let chunked = []
  //for (let el of array)
  //if !chunked.length -1 || chunked.length == size
  //chunked.push(el)
  //else array.push(el)

  let chunked = [];

  for (let el of array) {
    let last = chunked[chunked.length - 1];
    if (!last || last.length == size) {
      chunked.push([el]);
    } else {
      last.push(el);
    }
  }

  return chunked;
}
*/

//using slice() method
function chunk(array, size) {
  let chunked = [];
  idx = 0;

  while (idx < array.length) {
    let sliced = array.slice(idx, idx + size);
    chunked.push(sliced);
    idx += size;
  }
  return chunked;
}

module.exports = chunk;
