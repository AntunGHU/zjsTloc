// 2'54

const results = [{
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
},
{
  first: 'Feyisa',
  last: 'Lilesa',
  country: 'Ethiopia'
},
{
  first: 'Galen',
  last: 'Rupp',
  country: 'United States'
}
]
// NESTED DESTRUCTURING
const [{
  first: goldWinner
}, {
  country
}] = results;
goldWinner; //"Eliud"
country; //"Ethiopia"

// video
//? moze i direktno kao gore ali i u 2 koraka kao u videu:
const [, silverMedal] = results;
const { country: zemlja } = silverMedal;

// zarezi su kljucni za precizno referenciranje! inace mozemo nestati!