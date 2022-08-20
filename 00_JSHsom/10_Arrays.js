// 35:22 Arrays     39:41 Functions

// liste objekata se storaju sa array-sima koji se formiraju sa [arrays litteral-sima]
let selectedColors = ['red', 'blue']
console.log(selectedColors) // [ 'red', 'blue' ]

// array-si imaju index koji koristimo za ocitanje ali i za dodavanje novih objekata

selectedColors[2] = 'green'
console.log(selectedColors[2]) // green
console.log(selectedColors) // [ 'red', 'blue', 'green' ]

// treba naglasiti da je izlaz konzole i nodejs-a razlicit. Gornji izlazi su u nodejs a konzola prikazuje ala:
// Array(3)0: "red"1: "blue"2: "green"length: 3[[Prototype]]: Array(0)
// 10_Arrays.js:10 green
// 10_Arrays.js:11 Array(3)0: "red"1: "blue"2: "green"length: 3[[Prototype]]: Array(0)
// Dakle konzola koristi dvostruke navodne znakove!

// mozemo mjenjati npr green u broj 2
selectedColors[2] = 2
console.log(selectedColors[2]) // 2
console.log(selectedColors) // [ 'red', 'blue', 2 ]

typeof selectedColors //object i kao takav ima gomilu propsa! npr
console.log(selectedColors.length) // 3
