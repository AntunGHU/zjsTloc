// 8'8

const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];


const mollusca = [...cephalopods, ...gastropods]
//["dumbo octopus", "humboldt squid", "flamboyant cuttlefish", "giant african snail", "banana slug", "variable neon slug"]

const inverts = [...cnidaria, ...gastropods, ...cephalopods]
//["fire coral", "moon jelly", "giant african snail", "banana slug", "variable neon slug", "dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]

const cephCopy = [...cephalopods];
//["dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]

// video
//? spominje "concat" kojim smo to sve mogli i prije dobiti ali novi (...) nacin je lakse razumjeti i brzi za izvesti!

//? kopije sa (...) tj (const cephCopy = [...cephalopods]) stvaraju novi array dok bi jednostavno izjednacavanje (const copy = cephalopods) i dalje pointiralo na isti referenc-link. Dokaz sa ===. ALI, to se ne odnosi na nested arrays ili objects unutar arrays, oni ce ostati orginalni!!! Dakle, spreada u okviru samo 1 levela! 

//? mogu unutar arrays-literalsa spredati i druge vrste podataka, npr string: Prije smo npr to radili sa split:
splitano = "abcdefg".split('')
console.log(splitano) // 
//  [
//      'a', 'b', 'c',
//      'd', 'e', 'f',
//      'g'
//  ]
//? sada to jednostavno ide sa:
spredano = [..."abcdefg"]
console.log(spredano)
//  [
//      'a', 'b', 'c',
//      'd', 'e', 'f',
//      'g'
//  ]
//? na kraju malo videa sa njegovim omiljenim zivotinjama!!!