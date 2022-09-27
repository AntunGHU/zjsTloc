// 7'23

// This function accepts another function as an argument
function callThreeTimes(f) {
  //And calls it 3 times:
  f();
  f();
  f();
}

function cry() {
  console.log("BOO HOO I'M SO SAD!");
}

function rage() {
  console.log("I HATE EVERYTHING!");
}

callThreeTimes(cry); // BOO HOO I'M SO SAD! 3x
callThreeTimes(rage); // I HATE EVERYTHING! 3x



function repeatNTimes(action, num) {
  // call action (a function) num number of times
  for (let i = 0; i < num; i++) {
    action();
  }
}

repeatNTimes(cry, 13);

// Accepts 2 functions as arguments
// Randomly selects 1 to execute
function pickOne(f1, f2) {
  let rand = Math.random();
  if (rand < 0.5) {
    f1();
  } else {
    f2();
  }
}

pickOne(cry, rage)

// video
// HOF su funs koje primaju druge funs kao args (vrlo cesto u JS) i/ili return-aju funs.