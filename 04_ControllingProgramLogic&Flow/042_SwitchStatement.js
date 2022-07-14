// 8'04

// app

let day = 7;

// USING TRADITIONAL CONDITIONAL....
if (day === 1) {
	console.log('MONDAY');
}
else if (day === 2) {
	console.log('TUESDAY');
}
else if (day === 3) {
	console.log('WEDNESDAY');
}
else if (day === 4) {
	console.log('THURSDAY');
}
else if (day === 5) {
	console.log('FRIDAY');
}
else if (day === 6) {
	console.log('SATURDAY');
}
else if (day === 7) {
	console.log('SUNDAY');
}
else {
	console.log('INVALID DAY');
}

// USING A SWITCH INSTEAD...
switch (day) {
	case 1:
		console.log('MONDAY');
		break;
	case 2:
		console.log('TUESDAY');
		break;
	case 3:
		console.log('WEDNESDAY');
		break;
	case 4:
		console.log('THURSDAY');
		break;
	case 5:
		console.log('FRIDAY');
		break;
	case 6:
		console.log('SATURDAY');
		break;
	case 7:
		console.log('SUNDAY');
		break;
	default:
		console.log('INVALID DAY');
}

// EXAMPLE 2
let emoji = 'heart';

// Switch with overlapping cases...
switch (emoji) {
	case 'sad face':
	case 'happy face':
		console.log('yellow');
		break;
	case 'eggplant':
		console.log('purple');
		break;
	case 'heart':
	case 'lips':
		console.log('red');
		break;
}

// ant
// swich nije tako cest kao if ali ponekad je vrlo koristan 
// prednost u odnosu na if ovdje je sto sa if uvijek kod ide po redu i provjerava svaku liniju dok ne nadje a kod SWICH odmah skace na case!!!
// kod swich imamo ":"
// ali swich daje i sve vrijednosti nakon pogodjene pa zato dodajemo "break" nakon svakog!
// "default" je nacin da se zamjeni else u  swich-u
// u konacnici po ath ipak je swich laksi za citati!
// ex2 dodatno argumentiranje u prilog break: bez njega bi moglo vise suprotnih emojia proizvoditi istu boju, a s njim to razdvajamo i omogucavamo grupiranje vise slicnih bez gomile if,else if tvrdnji.