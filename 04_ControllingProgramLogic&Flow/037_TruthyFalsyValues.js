// 3'56

//* app

// FALSY:
let loggedInUser = 0;

// TRUTHY:
loggedInUser = 'Thomas123';

if (loggedInUser) {
    console.log('YOU ARE LOGGED IN!');
}
else {
    console.log('PLEASE LOG IN!');
}


//* video
// Ant: sve vrijednosti imaju "truthy" ili "falsy" boolean vrjednost
// falsy: false, 0, "", null, undefined, NaN
// truthy: sve drugo

let mystery = 5

if (mystery) {
    console.log("TRUTHY!")
}
else {
    console.log("FALSY")
}

mystery = 0

if (mystery) {
    console.log("TRUTHY!")
}
else {
    console.log("FALSY")
}

mystery = 0 / 0

if (mystery) {
    console.log("TRUTHY!")
}
else {
    console.log("FALSY")
}

mystery = ""

if (mystery) {
    console.log("TRUTHY!")
}
else {
    console.log("FALSY")
}