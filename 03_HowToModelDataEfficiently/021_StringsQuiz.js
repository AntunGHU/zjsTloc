// 7'22

// sto je value od 
const age = "5" + "4" // "54"

// sto daje
"pecan pie"[7]  // 'i'
"PUP"[3]    // 'undefined' 

// sto je value song-varijable
let song = "london calling"
song.toUpperCase // "LONDON CALLING" // nije in place!!!
song        // "london calling" 

// sto je value of cleanedInput
let userInput = "   TODD@gmail.com"
let cleanedInput = userInput.trim().toLowerCase()
console.log(cleanedInput)   // "todd@gmail.com"

// sto je value of index
let park = "Yelowwstone"
const index = park.indexOf('Stone')
console.log(index)   // -1


// sto je value of index2
let yell = "GO AWAY!!!"
const index2 = yell.indexOf('!')     // 7
console.log(index2)

// sto daje
let rage = 'GARBAGE'.slice(2).replace("B", '')
console.log(rage)    // 'RAGE'
