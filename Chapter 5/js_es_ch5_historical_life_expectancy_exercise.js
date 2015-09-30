function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// Your code here.
centuries = {};

ancestry.forEach(function(person) {
  var century = Math.ceil(person.died / 100)
  
  if (centuries[century]) {
    centuries[century].push(person.died - person.born);
  } else {
    centuries[century] = [person.died - person.born];
  }
});

for (century in centuries) {
  console.log(century + ": " + average(centuries[century]))
};



// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94

//? Works?
function groupBy(array, func) {
	return array.map(func).reduce(function (current, item, index) {
		if (item in current) {
			current[item].push
		} else {
			current[item] = [array[index]];
		}
	}), {});
}