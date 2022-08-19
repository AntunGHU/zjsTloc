// 5'28

// thing.method() -forma
// MDN i prikaz metoda sa pojedinim palac dole tj jos rade al su na odlasku!

let msg = "antisa"
msg.toUpperCase()     // "ANTISA" sto je novi string kojeg mozemo snimiti u varijablu, stari "msg" se nije promjenio!
msg = msg.toLowerCase() // sad je msg promjenjen!

// trim - metod uklanjanja praznih mjesta ispred ili iza
let ime = "   Antisa   "
ime.trim()      // "Antisa"

// ulancavanje metoda
console.log(ime.trim().toUpperCase())   // "ANTISA"