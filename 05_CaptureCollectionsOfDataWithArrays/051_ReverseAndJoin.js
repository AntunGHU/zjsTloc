// 3'24

//* app

let letters = ['T', 'C', 'E', 'P', 'S', 'E', 'R'];
console.log(letters)
//Remember that reverse() mutates the original array.
//It reverses IN PLACE rather than making a copy
let song = letters.reverse().join('.');     //"R.E.S.P.E.C.T"
console.log(song)

let song2 = letters.reverse().join('');     // 'TCEPSER'
console.log(song2)

let song3 = letters.reverse().join(' ');    // 'R E S P E C T'
console.log(song3)

let song4 = letters.reverse().join();       // 'T,C,E,P,S,E,R'
console.log(song4)

//* video
// iako pokusavamo sa deklaracijom nove varijable ipak reverse mjenja inplace.
// join joina elemente u jedan string i pri tome ima zarez za default separator (slucaj kad je prazna zagrada npr join()) a kad sami odredjujemo separator mozemo sta hocemo staviti izmedju navodnih znakova npr ('#->')
// ako primjenjujemo join na nestring on ih pretvara u string

a = [12.3, true, 8].join() // '12.3,true,8'
console.log(a)

b = [12.3, true, 8].join('#<->#') // '12.3#->true#->8'
console.log(b)
