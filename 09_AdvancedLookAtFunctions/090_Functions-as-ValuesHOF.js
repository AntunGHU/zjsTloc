// 7'19 HOF Video se zove "Higher Order Functions"

function add(x, y) {
  return x + y;
}

const subtract = function (x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

const divide = function (x, y) {
  return x / y;
}

//We can store functions in an array!
const operations = [add, subtract, multiply, divide];

//Loop over all the functions in operations
for (let func of operations) {
  let result = func(30, 5); //execute func!
  console.log(result);
}

// We can also store functions in objects!
const thing = {
  doSomething: multiply
}
let res = thing.doSomething(4, 5) //20
console.log(res)

// Video osim drugacijeg naziva od poglavlja donosi i dodatnu zbunjolu u obliku "funs as objects" a ne "Funs as Values" sto je naziv videa! Ok, najtocnije bi bilo "funs as values inside of an object"