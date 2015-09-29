// Your code here.

var arrayToList = function(array) {
  var list = null;
  for(var i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  
  return list;
}

var listToArray = function(list) {
  var array = [];
  
  while (list != null) {
    array.push(list.value);
    list = list.rest
  }
  
  return array;
}

var prepend = function(element, list) {
  temp = {value: element, rest:list};
  return temp;
}

var nth = function(list, pos) {
  for ( var node = list; node; node = node.rest ) {
  	var temp = listToArray(node);
    return temp[pos];
  }
}





console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20