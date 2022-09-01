// 3'33

//* app

//We can nest conditionals!
let password = 'hellokitty';
console.log(password.indexOf(' '))

if (password.length >= 6) {
	if (password.indexOf(' ') === -1) {
		console.log('Valid Password!');
	}
	else {
		console.log('Password is long enough, but cannot contain spaces');
	}
}
else {
	console.log('Password must be longer!');
}

// mozemo ih gnjezditi koliko hocemo!