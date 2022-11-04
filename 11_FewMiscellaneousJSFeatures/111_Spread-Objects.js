// 7'49

const feline = {
  legs: 4,
  family: 'Felidae'
};

const canine = {
  family: 'Caninae',
  furry: true,
  legs: 4
};

const dog = {
  ...canine,
  isPet: true,
  adorable: true
}
//{family: "Caninae", furry: true, legs: 4, isPet: true, adorable: true}

const houseCat = {
  ...feline,
  isGrumpy: true,
  personality: 'unpredictable'
}
//{legs: 4, family: "Felidae", isGrumpy: true, personality: "unpredictable"}

const catDog = {
  ...canine,
  ...feline
}
//{family: "Felidae", furry: true, legs: 4}

//Order matters! Legs will be 3 here, because we set it AFTER spreading canine.
const tripod = {
  ...canine,
  legs: 3,
}
//{family: "Caninae", furry: true, legs: 3}

const catDogClone = {
  ...catDog
}

const random = [...'hello', {
  ...catDog
}]

console.log(random)
// [
//   'h',
//   'e',
//   'l',
//   'l',
//   'o',
//   { family: 'Felidae', furry: true, legs: 4 }
// ]

// video
//? ako imamo iste propse, merganje sa {...} prepisuje 1. pojavu sa 2. pojavom istog key-a.

//? kao i kod array-sa i ovdje mozemo sa {...} kreirati clone od object-a ali on dopire samo 1 level (nista od nested!)

//? spredanje object-a je moguce samo unutar {} object-literalsa. Pokusaj toga unutar npr. array-sa daje gresku!!! npr [...dog] ali ako obrnuto, probamo spredati array unutar {} nema greske i svaki element array-a postaje value kojem se automatski pridodaju key-si_brojevi. Isto je i sa string.
a = { ...[4, 5, 6] }
console.log(a) // { '0': 4, '1': 5, '2': 6 }
b = { ...'abcdefg' }
console.log(b) // {
//                  '0': 'a',
//                  '1': 'b',
//                  '2': 'c',
//                  '3': 'd',
//                  '4': 'e',
//                  '5': 'f',
//                  '6': 'g'
//                }