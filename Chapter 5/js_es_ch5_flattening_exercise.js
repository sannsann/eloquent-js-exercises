// Eloquent JS Exercise - Chapter 5 - Flatten Array

var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function(prevVal, currentVal) {
  return prevVal.concat(currentVal);
}));
// → [1, 2, 3, 4, 5, 6]