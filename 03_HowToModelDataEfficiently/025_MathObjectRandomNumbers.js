// 6'25

// properities and methods for math constants i functions
// Math object (jos jednom istice istovjetnost rjeci "object" i "class") a veliko slovo kao i u Py za klasu!!!
// Ukucavajuci samo "Math." izbacuje tonu autocomplition mogucnosti tj metoda i propsa!
// I kuriozitet koji mi je tesko objasniti: roundanje je pogresno upisao npr 3,999 i potom ispravio na 3.999 i potom izjavio da takodjer radi

Math.PI     // 3.141592
Math.round(4.9) // 5
Math.abs(-456)  // 456
Math.pow(2,5)   // 32
Math.floor(3.999)   // 3

// posebno istice random metod i njegovu blesavost
Math.random() // daje uvjek broj 0.xxxx tj slucajnu decimalu izmedju 0 i 1 ali bez granica tako da kad trebamo slucajan broj izmedju drugih granica moramo se koristiti drugim metodama js-a da bi ih dobili
Math.floor(Math.random()*10)+1  // sve ovo radi dobijanja slucajnog broja izmeju 1 i 10
console.log(Math.floor(Math.random()*6)+1) // sve ovo radi dobijanja slucajnog broja izmeju 1 i 6
console.log(Math.floor(Math.random()*6)+1) // sve ovo radi dobijanja slucajnog broja izmeju 1 i 6
console.log(Math.floor(Math.random()*6)+1) // sve ovo radi dobijanja slucajnog broja izmeju 1 i 6

console.log(Math.floor(Math.random()*100)+1) // sve ovo radi dobijanja slucajnog broja izmeju 1 i 100
console.log(Math.floor(Math.random()*100)+1) // sve ovo radi dobijanja slucajnog broja izmeju 1 i 100
console.log(Math.floor(Math.random()*100)+1) // sve ovo radi dobijanja slucajnog broja izmeju 1 i 100

