/**
 *  Array Chunk
 * 
 *  Write a function that takes and array and a chunk size as input
 *  THe function should return a new array where the original array
 *  is spit into chunks of the specified size.
 * 
 *  chunk([1,2,3,4,5,6,7,8], 3);
 *  chunkArray([1,2,3,4,5], 2)
 * 
 */

const chunk = (array, size) => {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    const chunk = array.slice(index, index + size);
    // console.log("------------", chunk);
    chunked.push(chunk);
    index += size;
  }

  return chunked;
};

// console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));