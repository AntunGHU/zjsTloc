// 5'04

//* app

// ===============
// VALUE TYPES
// ===============
//Value Types - the variable stores the actual value:

let x = 100;
let y = x;

//If we change x
x = 99;
//y is unchanged
y; //100

// ===============
// REFERENCE TYPES
// ===============

// Array variables do not hold the actual array
//Instead, they store a REFERENCE to the array

let nums = [2, 4, 6, 8];
let myNums = nums; //myNums references the same array

// If we change nums
nums.push('BOO!');
console.log(nums); //[2, 4, 6, 8, "BOO!"]

//My nums is also changed:
console.log(myNums); //[2, 4, 6, 8, "BOO!"]


//* video
// njegove reference su bile ala ram-adrese sa puno znamenki