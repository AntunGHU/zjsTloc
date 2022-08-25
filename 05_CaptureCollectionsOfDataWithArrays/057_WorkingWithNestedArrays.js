// 6'04

//* app

const animalPairs = [
    ['doe', ['buck', 'stag']],
    ['ewe', 'ram'],
    ['peahen', 'peacock']
];
console.log(animalPairs);

//To access 'ewe'
a = animalPairs[1][0];
console.log(a)

//To access 'buck'
b = animalPairs[0][1][0];
console.log(b)

//Updating a sub-array:
c = animalPairs[0][1].push('hart');
console.log(c)      // [ 'buck', 'stag', 'hart' ]

//apparently some people call male deer 'harts'.  idk.

//* video

d = animalPairs[0][1] // ['buck', 'stag', 'hart']
console.log(d)

// inside array-s mozemo staviti sto god hocemo! pa i druge array-se!