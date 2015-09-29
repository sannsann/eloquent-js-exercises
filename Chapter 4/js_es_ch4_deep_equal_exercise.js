// Your code here.

var deepEqual = function(obj1, obj2) {
  for (var propertyName in obj1) {

    if (obj1[propertyName] != obj2[propertyName])
      return false;
  }
  
  return true;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true