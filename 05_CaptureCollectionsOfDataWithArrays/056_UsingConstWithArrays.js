// 5'22

//* nema appp

//* video

// za razliku od varijabli primitivnog tipa, array-si i kao const se mogu mjenjati jer je bitno da refernca ostane konstantna tj nepromjenjiva!

const myEggs = ['brown', 'brown']
myEggs.push('yellow')
myEggs[0] = "green"
myEggs // (3) ['green', 'brown', 'yellow']

// sve promjene sadrzaja smijem raditi osim pokusaja reasigniranja imena tj

const myEggs = [] // Uncaught SyntaxError: Identifier 'myEggs' has already been declared (at 056_UsingConstWithArrays.js:15:7)

// ili 
myEggs = []

// zbog ove osobine za array-se se const koristi daleko cesce nego let!!!