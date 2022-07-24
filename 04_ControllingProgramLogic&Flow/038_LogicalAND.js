// 7'16

// app

// EXAMPLE 1
let password = 'chicken Gal';

if (password.length >= 8 && password.indexOf(' ') === -1) {
	console.log('VALID PASSWORD');
}
else {
	console.log('INVALID PASSWORD');
}

// EXAMPLE 2
// Number must be between 1 and  10
let num = 11;

if (num >= 1 && num <= 10) {
	console.log('Number is between 1 and 10');
}
else {
	console.log('Please guess a number between 1 and 10');
}

// ant:
// za razliku od Py-a gdje smo imali samo slovima ovdje imamo simbolicke oznake: "and"==&&, "or"==||, "not"==!
// oni su ljek protiv previse gnjezdjenja i ath se vraca na taj primjer! I to je "pros"
// Medjutim, "contra" je da nemamo dodatni komadic infoa o tome sto nije ok ako nije ok, kao sto smo imali kod vise gnjezdjenja!
// mozemo imati vise && nego jedan
// space izmedju if i () i {} nije obavezan! Vidi Ex1 