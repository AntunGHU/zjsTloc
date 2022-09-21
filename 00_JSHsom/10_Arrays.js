// 35:22 Arrays     39:41

// liste objekata se storaju sa array-sima koji se formiraju sa [arrays litteral-sima]
let selectedColors = ['red', 'blue']
console.log(selectedColors) // [ 'red', 'blue' ]

// array-si imaju index koji koristimo za ocitanje ali i za dodavanje novih objekata
selectedColors[2] = 'green'
console.log(selectedColors[2]) // green
console.log(selectedColors) // [ 'red', 'blue', 'green' ]

// mozemo mjenjati npr green u broj 2
selectedColors[2] = 2
console.log(selectedColors[2]) // 2
console.log(selectedColors) // [ 'red', 'blue', 2 ]

console.log(typeof selectedColors) //object (! A NE ARRAY!) i kao takav ima gomilu propsa! npr
console.log(selectedColors.length) // 3
