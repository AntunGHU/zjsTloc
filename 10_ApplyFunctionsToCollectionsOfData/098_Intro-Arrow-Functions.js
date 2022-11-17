// 6'14 Novost u JS: syntyctically compact alternative to a regular fun-expression

// Non-arrow function expression:
const square0 = function (x) {
  return x * x;
}

// Equivalent arrow function:
const square = (x) => {
  return x * x;
}

// parens are option when you have 1 parameter
const isEven = num => {
  return num % 2 === 0;
}

// Must include parens for multiple parameters
const multiply = (x, y) => {
  return x * y;
}

// Must include parens for zero parameters
const greet = () => {
  console.log("HI!")
}