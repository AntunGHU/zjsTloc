// Sa interneta

// for...in
// The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.

// Syntax
//for (key in object) {
// code block to be executed
//}

// Example
const person = { fname: "John", lname: "Doe", age: 25 };

let text = "";
for (let x in person) {
    text += person[x];
}
console.log(text)

// Example2
const object = { a: 1, b: 2, c: 3 };

for (property in object) {
    console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"


// Example3

const shark = {
    species: "great white",
    color: "white",
    numberOfTeeth: Infinity
}

// Print property names of object
for (attribute in shark) {
    console.log(attribute);
}

// Print property values of object
for (attribute in shark) {
    console.log(shark[attribute]);
}

// Print names and values of object properties
for (attribute in shark) {
    console.log(`${attribute}`.toUpperCase() + `: ${shark[attribute]}`);
}