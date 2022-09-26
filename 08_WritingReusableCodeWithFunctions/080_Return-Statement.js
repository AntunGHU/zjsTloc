//  5'09

// No return!
function add(x, y) {
	console.log(x + y);
}

// This version returns the sum of x & y;
function add(x, y) {
	return x + y;
}

// We can capture the return value:
const total = add(4, 9); //13


// video
// builtin funs returnaju values i mozemo ih storati po volji
const scream = 'hello'.toUpperCase();
console.log(scream)
// pokazuje u konzoli sa znakom <. return a bez njega samo izlaz konzole!
// ali, realno, ne printamo mnogo na konzolu!!! a pokusaji storea sa outputanjem konzole ne rade!!! Zato RETURN!