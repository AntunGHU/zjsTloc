// 3'43

// 'null' i 'undefined' su oba primitivni i mogu se upisivati u konzolu.

// 'null' je namjerno dodjeljivanje nule kad zelimo da nesto bude nula, i mora se formalizirati 

let loggedInUser = null
console.log(loggedInUser)

// kad se user prijavi npr 'Antun'

loggedInUser = 'Antun'
console.log(loggedInUser)

// 'undefined' je vrijednost varijable kojoj se jos nista formalno nije assigniralo! on se ne assignira, js ga assignira kad npr trazimo nesto sto nema

"lol"[4] // 'undefined'
console.log("lol"[4])

// ili ako dekleriramo varijablu ali joj ne assigniramo nista

let antun  // antun - undefined
console.log(antun)