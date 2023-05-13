const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x-y;
};

const sum = function(array) {
  return array.reduce((total, num) => total + num, 0);
};

const multiply = function(array) {
  return array.length
  ? array.reduce((total, num) => total * num)
  : 0;
};

const power = function(x, y) {
  return Math.pow(x, y);
};

const factorial = function(num) {
  if (num<=1) return 1;
	return num * factorial(num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
