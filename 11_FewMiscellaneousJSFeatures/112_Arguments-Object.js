// 6'48

//The arguments object is available in every function you write (except arrow functions)
//It contains all the arguments passed in.
function sumq() {
  //It is NOT an array, we have to turn it into one if we want to use array methods
  const argsArr = [...arguments]
  return argsArr.reduce((total, currVal) => {
    return total + currVal
  })
}
console.log(sumq(1, 2, 3, 4)) //10

// No arguments object inside of arrow functions :(
const multiply = () => {
  console.log(arguments);
}
multiply(3, 4)

// video
//? pocinje sa slajdom MEH gdje je upotreba arguments-a jednostavnije prikazana! Potom pokazuje primjer sum-funkcije

function sum() {
  console.log(arguments)
}

sum(2, 3) // [Arguments] { '0': 2, '1': 3 }
sum(2, 3, 4, 5, 6, 7) // [Arguments] { '0': 2, '1': 3, '2': 4, '3': 5, '4': 6, '5': 7 }

//? pokusaj koristenja key-word-a "arguments" unutar reduce daje gresku zato jer arguments nije object-array zbog cega smo ga morali spredati unutar [...arguments] array-litteralsa! 

//? uvodi nas sa funkcijom
function fullName(first, last) {
  console.log(arguments);
  console.log(first);
}
//? i njenim pozivanjem unutar kog imamo vise argumenata nego first i last u problem koji ce "rest" rjesiti a to je da gore imamo ili sve (sa console.log(arguments)) ili samo prvi (sa console.log(first)) ali ne i last jer bi ovako on bio drugi a ne i pravi last.
fullName('antun', 'III', 'mocni', 'jerko')
// [Arguments] { '0': 'antun', '1': 'III', '2': 'mocni', '3': 'jerko' }
// antun

//? za kraj pokaz da "arguments" ne radi unutar arrow-fun. Moj pokusaj unutar node daje cudo od izlaza!?!?!

multiply(4, 5)
// [Arguments] {
//   '0': {},
//   '1': [Function: require] {
//     resolve: [Function: resolve] { paths: [Function: paths] },
//     main: Module {
//       id: '.',
//       path: '/home/antun/aCod/zjsTloc/11_FewMiscellaneousJSFeatures',
//       exports: {},
//       filename: '/home/antun/aCod/zjsTloc/11_FewMiscellaneousJSFeatures/112_Arguments-Object.js',
//       loaded: false,
//       children: [],
//       paths: [Array]
//     },
//     extensions: [Object: null prototype] {
//       '.js': [Function (anonymous)],
//       '.json': [Function (anonymous)],
//       '.node': [Function (anonymous)]
//     },
//     cache: [Object: null prototype] {
//       '/home/antun/aCod/zjsTloc/11_FewMiscellaneousJSFeatures/112_Arguments-Object.js': [Module]
//     }
//   },
//   '2': Module {
//     id: '.',
//     path: '/home/antun/aCod/zjsTloc/11_FewMiscellaneousJSFeatures',
//     exports: {},
//     filename: '/home/antun/aCod/zjsTloc/11_FewMiscellaneousJSFeatures/112_Arguments-Object.js',
//     loaded: false,
//     children: [],
//     paths: [
//       '/home/antun/aCod/zjsTloc/11_FewMiscellaneousJSFeatures/node_modules',
//       '/home/antun/aCod/zjsTloc/node_modules',
//       '/home/antun/aCod/node_modules',
//       '/home/antun/node_modules',
//       '/home/node_modules',
//       '/node_modules'
//     ]
//   },
//   '3': '/home/antun/aCod/zjsTloc/11_FewMiscellaneousJSFeatures/112_Arguments-Object.js',
//   '4': '/home/antun/aCod/zjsTloc/11_FewMiscellaneousJSFeatures'
// }