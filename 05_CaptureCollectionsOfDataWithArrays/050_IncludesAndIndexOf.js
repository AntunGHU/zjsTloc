// 5'36

//* app

let ingredients = [
    'water',
    'corn starch',
    'flour',
    'cheese',
    'brown sugar',
    'shrimp',
    'eel',
    'butter'
];

//includes returns true or false
if (ingredients.includes('flour')) {
    console.log('I AM GLUTEN FREE, I CANNOT EAT THAT!');
}

//indexOf returns an index (or -1 if not found)
if (ingredients.indexOf('shrimp') !== -1) {
    console.log('Sorry, I hate shrimp.');
}

//* video

console.log(ingredients.includes('fish')) // false; trazi direkt match

// indexOf vraca index ili -1

// za oba mozemo navesti i drugi argument kao index od kojeg trazimo to sto trazimo

console.log(ingredients.includes('fish', 3))
console.log(ingredients.indexOf('fish', 3))
