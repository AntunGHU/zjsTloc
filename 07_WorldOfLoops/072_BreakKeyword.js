// 4'18

// appp

const target = Math.floor(Math.random() * 10);
let guess;
//ANOTHER APPROACH TO THE PREVIOUS GUESSING 'GAME'
while (true) {
    if (target === guess) break; //Break stops the loop in its tracks
    console.log(`Target: ${target} Guess: ${guess}`);
    guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!!`);

// video 

// moguce je break-ati i u for loop-u ali nije bas logicno posto u 1. koraku for-a postavljamo granice for-anja a onda kao da se odjednom predomisljamo sa break i prekidamo.

for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 5) {
        break;
    }
}

// takodjer se napominje da ako imamo nested loop i breakamo unutarnji, to ne zaustavlja nastavak vanjskog!!!

// naravno, break je izmisljen za "while" loop !!

// zamjera izrazu "while (true)" neeksplanatornost i smatra da bi sa izrazima kao sto su "while (!game over)" i sl bilo bolje!