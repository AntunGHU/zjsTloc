// 11'11  koristi ga cesce od drugih!
// pravi drugi array kojeg stornamo u varijablu

const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ['asap', 'byob', 'rsvp', 'diy'];

//Map creates a new array by calling your callback function with each element in the original array.
const doubles = numbers.map(function (num) {
  return num * 2; //Need to return the value!
});
console.log(doubles) // AJ dodao!
//[40, 42, 44, 46, 48, 50, 52, 54]

const numDetail = numbers.map(function (n) {
  return {
    value: n,
    isEven: n % 2 === 0
  }
})
console.log(numDetail) // AJ dodao! bez return 8x undefined!!
// [
//   { value: 20, isEven: true },
//   { value: 21, isEven: false },
//   { value: 22, isEven: true },
//   { value: 23, isEven: false },
//   { value: 24, isEven: true },
//   { value: 25, isEven: false },
//   { value: 26, isEven: true },
//   { value: 27, isEven: false }
// ]
// Pokazuje malo u kontekstu kako se slicne akrobacije izvode sa for of loop ali obcno je s njima teze!!!

const abbrevs = words.map(function (word) {
  return word.toUpperCase().split('').join('.');
})
console.log(abbrevs) // AJ dodao!
//["A.S.A.P", "B.Y.O.B", "R.S.V.P", "D.I.Y"]


const books = [{
  title: 'Good Omens',
  authors: ['Terry Pratchett', 'Neil Gaiman'],
  rating: 4.25
},
{
  title: 'Bone: The Complete Edition',
  authors: ['Jeff Smith'],
  rating: 4.42
},
{
  title: 'American Gods',
  authors: ['Neil Gaiman'],
  rating: 4.11
},
{
  title: 'A Gentleman in Moscow',
  authors: ['Amor Towles'],
  rating: 4.36
}
]

const titles = books.map(function (b) {
  return b.title;
})
console.log(titles) // AJ dodao!  
//["Good Omens", "Bone: The Complete Edition", "American Gods", "A Gentleman in Moscow"]