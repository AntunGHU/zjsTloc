// 2'48

let eggCount = 42
console.log(eggCount + 2)   // 44 //eggCount = 42 (sumiranje nije promjenilo vrijednost eggCount-a)

const rating = 7.5
// rating = 8      //rating = 7.5  i javlja se greska //TypeError: Assignment to constant variable.

let wind_speed = 76
console.log(wind_speed += 5)    // 81
wind_speed--
console.log(wind_speed)         // wind_speed = 80