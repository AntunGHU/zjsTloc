// 13'10

// accumulator je prazni objekt kao initialValue

const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];

// To tally the votes:
// const results = votes.reduce((tally, val) => {
//   if (tally[val]) {
//     tally[val]++
//   } else {
//     tally[val] = 1;
//   }
//   return tally;
// }, {})

// The shorter version:
const results = votes.reduce((tally, val) => {
  tally[val] = (tally[val] || 0) + 1;
  return tally;
}, {});

const books = [{
  title: 'Good Omens',
  authors: ['Terry Pratchett', 'Neil Gaiman'],
  rating: 4.25,
  genres: ['fiction', 'fantasy']
},
{
  title: 'Changing My Mind',
  authors: ['Zadie Smith'],
  rating: 3.83,
  genres: ['nonfiction', 'essays']
},
{
  title: 'Bone: The Complete Edition',
  authors: ['Jeff Smith'],
  rating: 4.42,
  genres: ['fiction', 'graphic novel', 'fantasy']
},
{
  title: 'American Gods',
  authors: ['Neil Gaiman'],
  rating: 4.11,
  genres: ['fiction', 'fantasy']
},
{
  title: 'A Gentleman in Moscow',
  authors: ['Amor Towles'],
  rating: 4.36,
  genres: ['fiction', 'historical fiction']
},
{
  title: 'The Name of the Wind',
  authors: ['Patrick Rothfuss'],
  rating: 4.54,
  genres: ['fiction', 'fantasy']
},
{
  title: 'The Overstory',
  authors: ['Richard Powers'],
  rating: 4.19,
  genres: ['fiction', 'short stories']
},
{
  title: 'A Truly Horrible Book',
  authors: ['Xavier Time'],
  rating: 2.18,
  genres: ['fiction', 'garbage']
},
{
  title: 'The Way of Kings',
  authors: ['Brandon Sanderson'],
  rating: 4.65,
  genres: ['fantasy', 'epic']
},
{
  title: 'Lord of the flies',
  authors: ['William Golding'],
  rating: 3.67,
  genres: ['fiction']
}
]
// To group books by rating: 
const groupedByRatings = books.reduce((groupedBooks, book) => {
  const key = Math.floor(book.rating);
  if (!groupedBooks[key]) groupedBooks[key] = [];
  groupedBooks[key].push(book)
  return groupedBooks;
}, {})

console.log(groupedByRatings)
// Izlaz:
//? {
//?   '2': [
//?     {
//?       title: 'A Truly Horrible Book',
//?       authors: [Array],
//?       rating: 2.18,
//?       genres: [Array]
//?     }
//?   ],
//?     '3': [
//?       {
//?         title: 'Changing My Mind',
//?         authors: [Array],
//?         rating: 3.83,
//?         genres: [Array]
//?       },
//?       {
//?         title: 'Lord of the flies',
//?         authors: [Array],
//?         rating: 3.67,
//?         genres: [Array]
//?       }
//?     ],
//?       '4': [
//?         {
//?           title: 'Good Omens',
//?           authors: [Array],
//?           rating: 4.25,
//?           genres: [Array]
//?         },
//?         {
//?           title: 'Bone: The Complete Edition',
//?           authors: [Array],
//?           rating: 4.42,
//?           genres: [Array]
//?         },
//?         {
//?           title: 'American Gods',
//?           authors: [Array],
//?           rating: 4.11,
//?           genres: [Array]
//?         },
//?         {
//?           title: 'A Gentleman in Moscow',
//?           authors: [Array],
//?           rating: 4.36,
//?           genres: [Array]
//?         },
//?         {
//?           title: 'The Name of the Wind',
//?           authors: [Array],
//?           rating: 4.54,
//?           genres: [Array]
//?         },
//?         {
//?           title: 'The Overstory',
//?           authors: [Array],
//?           rating: 4.19,
//?           genres: [Array]
//?         },
//?         {
//?           title: 'The Way of Kings',
//?           authors: [Array],
//?           rating: 4.65,
//?           genres: [Array]
//?         }
//?       ]
//? }