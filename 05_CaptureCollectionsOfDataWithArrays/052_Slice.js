// 4'54

//* app

let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

let swimmers = animals.slice(0, 3); // (3) ['shark', 'salmon', 'whale']
console.log(swimmers)

let mammals = animals.slice(2, 4); // (2) ['whale', 'bear']
console.log(mammals)

//One option:
// let reptiles = animals.slice(4, 6);

// Another options:
let reptiles = animals.slice(4);
console.log(reptiles)   // [ 'lizard', 'tortoise' ]

let quadruped = animals.slice(-3);
console.log(quadruped)  // [ 'bear', 'lizard', 'tortoise' ]

//* video

// slice ne mjenja orginal nego od njegovih djelova pravi novi array!
// mozemo sa jednim indexom ili sa dva kad drugi nije ukljucen!
// moze i s negativnim indeksima
// ako zovemo .slice() bez indeksa pravi kopiju!!!   

let copy = animals.slice()
console.log(copy)       // [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ]
