// 13'21

// This function returns a function!
function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

//triple holds a function:
const triple = multiplyBy(3);
//we can call it:
console.log(triple(4)); //12
console.log(triple(10)); //30

const double = multiplyBy(2);
console.log(double(3)); //6
console.log(double(9)); //18

const halve = multiplyBy(0.5);
console.log(halve(5)); //2.5
console.log(halve(100)); //50

// This function also acts as a "function factory"
function makeBetweenFunc(x, y) {
  return function (num) {
    return num >= x && num <= y;
  };
}
// This function checks if a value is between 0 and 18
const isChild = makeBetweenFunc(0, 18);
console.log(isChild(10)); //true
console.log(isChild(56)); //false

const isInNineties = makeBetweenFunc(1990, 1999);
console.log(isInNineties(1994)); //true
console.log(isInNineties(1987)); //false

const isNiceWeather = makeBetweenFunc(60, 79);
console.log(isNiceWeather(68)); //true
console.log(isNiceWeather(98)); //false

// video
// video je bez console.log jer se kod upisuje u konzolu pa ne treba!