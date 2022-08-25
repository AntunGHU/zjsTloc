// 5'33

//* app

let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

//splice(startIdx, deleteCount, itemsToInsert);

// =====================
// INSERTING w/ SPLICE
// =====================
// 'at index 1, delete 0 items and insert "octopus"'
animals.splice(1, 0, 'octopus');
console.log(animals)    // ["shark", "octopus", "salmon", "whale", "bear", "lizard", "tortoise"]

// =====================
// DELETING w/ SPLICE
// =====================
//'at index 5, delete 2 items'
animals.splice(5, 2);
console.log(animals)    // ["shark", "octopus", "salmon", "whale", "bear"]

// =====================
// REPLACING w/ SPLICE
// =====================
//'at index 3, delete 2 items and replace them with "orca" and "grizzly"'
animals.splice(3, 2, 'orca', 'grizzly');
console.log(animals)    // ["shark", "octopus", "salmon", "orca", "grizzly"]

//* video
// dok su push, pop, unshift i shift metodi za ubacivanje na kraj tj pocetak, splice to cini unutar array-a na zeljeno mjesto! Sama akcija ima return obrisanih itemsa!
// iako je vrlo powerfull ipak se push, pop, unshift i shift metodi koriste puno cesce!