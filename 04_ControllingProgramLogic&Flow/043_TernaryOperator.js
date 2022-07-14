// 4'19 

// app

let num = 8;

// Without Ternary Operator...
if (num === 7) {
	console.log('lucky!');
}
else {
	console.log('BAD!');
}

// Same thing written with Ternary Operator...
num === 7 ? console.log('lucky!') : console.log('BAD!');

// ==============
// EXAMPLE 2
// ==============

let statuss = 'offline';

// Without ternary operator
let color;
if (statuss === 'offline') {
	color = 'red';
    console.log(color)
}
else {
	color = 'green';
    console.log(color)
}

// One-liner using Ternary Operator...
let color2 = statuss === 'offline' ? 'red' : 'green';
console.log(color2);

// ant
// ternary = 3 djela, binary = 2 djela
// condition ? expIfTrue: expIfFalse
// dakle ? mjenja "if" a ":" mjenja "else"
// kod ath je "status" ali izgleda da je to postalo u medjuvremenu nesto ala key-word pa ga sad vsc sam precrta i oznaci kao "depreciated"