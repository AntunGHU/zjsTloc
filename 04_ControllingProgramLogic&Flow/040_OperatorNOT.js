// 7'06

//* app

// ==================
// EXAMPLE 1
// ==================
let loggedInUser;

// If there isn't a logged in user...
if (!loggedInUser) {
	console.log('GET OUT OF HERE!');
}

// ==================
// EXAMPLE 2
// ==================
// WE ONLY HAVE GRAPE AND CHERRY FLAVORS!
let flavor = 'watermelon';

//ONE WAY OF WRITING THIS:
if (flavor !== 'grape' && flavor !== 'cherry') {
	console.log('WE DONT HAVE THAT FLAVOR!');
}
// ANOTHER WAY:
if (!(flavor === 'grape' || flavor === 'cherry')) {
	console.log('WE ONLY HAVE GRAPE AND CHERRY!');
}

//* video
// HAHAHA - opet je pusti "glas" za "get out of here" i "we don't have that flavor"
// dvije if(()) male zagrade!
// jos jedan dokaz da je js-kurs poslije py-a (osim vsc-ea) je i kompletan example-kod!