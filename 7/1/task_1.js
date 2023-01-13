// Creates an array of elements split into groups the length of size. 
// If array can't be split evenly, the final chunk will be the remaining elements.
// Ex:
// chunk(['a', 'b', 'c', 'd'], 2);
// // => [['a', 'b'], ['c', 'd']]
// chunk(['a', 'b', 'c', 'd'], 3);
// // => [['a', 'b', 'c'], ['d']]


const chunks = function(array, size) {
  const  result = [];
  for(let i = 0; i <= array.length; i++) {
    if (array[i] !== 0) {
      result.push(array.splice(0, size));
    }
  }
  return result
}

console.log(chunks(['a', 'b', 'c', 'd'], 3));