// 8'10

// variables declared with var are hoisted
// console.log(animal);       //? "undefined" a ne greska kao da vara neme - hoisting (dizanje, povlacenje). Izbjegavanje sa pravim redoslijedom koda: prvo inicijalizacija pa potezanje varijable!
// var animal = 'Tapir';
// console.log(animal);       //? Tapir


// variables declared with let & const are not hoisted
// const shrimp = 'Harlequin Shrimp';
// console.log(shrimp);       // Harlequin Shrimp

// function statements are hoisted
// howl();

// function howl() {
//   console.log("AWOOOOOOO");
// }

// function expressions are...kind of hoisted.
// The variable is hoisted, but has a value of undefined
hoot()
var hoot = function () {
  console.log("HOOOO HOOOOO")
}
// hoot()
// video
// HOISTING: ne sikirati se ako zbunjuje!