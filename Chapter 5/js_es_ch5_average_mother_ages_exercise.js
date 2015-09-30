function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.
var motherAges = ancestry.map(function(person) {
  var mother = byName[person.mother]

  if (mother) {
	return person.born - mother.born;
  } else {
    return null;
  } 
});

console.log(average(motherAges.filter(function(age) {
  return !!age;
})));