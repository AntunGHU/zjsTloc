// 6'04

// app

const animalPairs = [
    ['doe', ['buck', 'stag']],
    ['ewe', 'ram'],
    ['peahen', 'peacock']
];

//To access 'ewe'
animalPairs[1][0];

//To access 'buck'
animalPairs[0][1][0];

//Updating a sub-array:
animalPairs[0][1].push('hart');
//apparently some people call male deer 'harts'.  idk.

//* video

animalPairs[0][1] // ['buck', 'stag', 'hart']

// inside array-s mozemo staviti sto god hocemo! pa i druge array-se!