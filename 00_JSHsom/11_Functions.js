// 39:41 Functions      44:22

// 3. vrsta objekata u js i jedna od temeljnih buildings blocks of js!

function greet() {
    console.log('Hello World');
}
// kad je definiramo, na kraju ne treba ";"(kao u varijablama) (unutra iza statement-a console.log treba) ili kad se poziva treba
greet(); // Hello World

// za malo raznolikosti!
function greet2(name) {
    console.log('Hello World, hello' + ' ' + name);
}

greet2('Antun'); // Hello World, hello Antun

// za malo vise raznolikosti!
function greet3(name, lastName) {
    console.log('Hello World, hello' + ' ' + name + ' ' + lastName);
}

greet3('Antun'); // Hello World, hello Antun undefined
greet3('Antun', 'Jerkovic'); // Hello World, hello Antun Jerkovic

console.log(typeof greet)
