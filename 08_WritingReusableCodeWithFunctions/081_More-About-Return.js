// 9'02

function square(x) {
	return x * x;
	console.log('ALL DONE!'); //this NEVER runs;
}

// One way of writing this function
function isPurple(color) {
	if (color.toLowerCase() === 'purple') {
		return true;
	}
	else {
		return false;
	}
}

// We don't need the else!
function isPurple(color) {
	if (color.toLowerCase() === 'purple') {
		return true;
	}
	return false;
}

// An even shorter way!
function isPurple(color) {
	return color.toLowerCase() === 'purple';
}

let arr = ['blue', 'green', 'violet', 'magenta']

function containsPurple(arr) {
	for (let color of arr) {
		if (color === 'purple' || color === 'magenta') {
			return true;
		}
	}
	return false;
}

const boja = containsPurple(arr)

console.log(boja)


// video

// Zadnji primjer naglasava bitnost mjesta "return"-a, kad bi isti bio odmah iza if, for petlja bi se odradila samo do prvog false!!!