// 7'01

//These variables are SCOPED to the function lol()
function lol() {
  let person = 'Tom';
  const age = 45;
  var color = 'teal';
  console.log(age); // 45
}
// These variables are SCOPED to changeColor()
function changeColor() {
  let color = 'purple';
  const age = 19;
  console.log(age); // 19
}
lol(); // 45
changeColor(); // 19
age; //DOES NOT EXIST!
color; //DOES NOT EXIST!
person; //DOES NOT EXIST!


let bird = 'mandarin duck';

function birdWatch() {
  //this bird is scoped to birdWatch()
  let bird = 'golden pheasant';
  console.log(bird);
}
birdWatch(); //"golden pheasant"
console.log(bird); //"mandarin duck"

// video
// SCOPE - varijable "visibility": location where a variable is defined dictates where we have access to that variable