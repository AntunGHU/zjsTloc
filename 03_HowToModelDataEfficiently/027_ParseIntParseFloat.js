// 2'44

// parseInt  parseFloat za izvlacene broja iz stringa (ala metode int ili float kod Py-a). Da bi uspjeli broj mora biti sam ili na pocetku

console.log(parseInt('24') )     // 24
console.log(parseInt('24.984'))  // 24
console.log(parseInt('24dana kasnije'))  // 24

console.log(parseFloat('24.875'))    // 24.875
console.log(parseFloat('7'))    // 7.0
console.log(parseFloat('  7'))    // 7.0     prazna mjesta ne smetaju
console.log(parseFloat('I ate 2 apple'))    // NaN
