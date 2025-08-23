const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  return arr.reduce(
    (sum, num) => sum + num, 0
  );
};

const multiply = function(arr) {
  return arr.reduce(
    (product, num) => product * num, 1
  );
};

const power = function(a, b) {
  let result = a;
	for(b = b-1; b > 0; b--){
    result *= a;
  }
  return result;
};


const factorial = function(a) {
	let result = 1;
  for(a; a > 0; a--){
    result *= a;
  }
  return result;
};

//Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
