// 7'50

// appp

// Pick a target number we are trying to guess
const target = Math.floor(Math.random() * 100);
// Make initial guess
let guess = Math.floor(Math.random() * 100);
let pokusaj = 1

// Continue looping while guess is not the target num
while (guess !== target) {
    console.log(`Target: ${target} Guess: ${guess}`);
    // IMPORTANT!!
    // Update the value of guess each time through the loop
    guess = Math.floor(Math.random() * 100);
    pokusaj++;
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!! poslije ${pokusaj}-tog pokusaja!!!`);

// video
// Govori opcenito o slucajevima primjene "while" loop-a. To su situacije kad ne znamo koliko puta ce se while zavrtiti: while (!game over; liveLeft>0)