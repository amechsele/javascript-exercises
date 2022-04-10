const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
	let sum = 0;
  for (val of array){
    sum += val;
  }
  return sum;
};

const multiply = function(array) {
  let sum = 1;
  for (val of array){
    sum *= val;
  }
  return sum;
};

const power = function(num, exp) {
	return num**exp;
};

const factorial = function(n) {
  if (n === 0){
    return 1;
  } else {
    return n * factorial(n -1);
  }
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
