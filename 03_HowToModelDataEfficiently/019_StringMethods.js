// 5'28

// thing.method() -forma
// MDN i prikaz metoda sa pojedinim palac dole tj jos rade al su na odlasku!
let msg = "antisa"
msg.toLocaleUpperCase()     // "ANTISA" sto je novi string kojeg mozemo snimiti u varijablu, stari "msg" se nije promjenio!
msg = msg.toLocaleLowerCase() // sad je msg promjenjen!

// trim - metod uklanjanja praznih mjesta ispred ili iza
let ime = "   Antisa   "
ime.trim()      // "Antisa"

// ulancavanje metoda
ime.trim.toLocaleUpperCase()    // "ANTISA"