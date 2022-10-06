// 13'10

// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

let username = 'antun'
let password = 'fjskkf18'

function isValidPassword(password, username) {
    if (password.length >= 8 && password.indexOf(' ') === -1 && password.indexOf(username) === -1) {
        return true
    }
    return false
}

console.log(isValidPassword(password, username))

// kraci nacin

function isValidPassword(password, username) {
    return (password.length >= 8 && password.indexOf(' ') === -1 && password.indexOf(username) === -1)
}

console.log(isValidPassword(password, username))


// video

// napravio sam prije gledanja videa!!! a video donosi prodore: ne voli ulancavanje (ono sto sam ja napravio) jer ono zna biti dosta dugo.
// njegov pristup je da svakom uvjetu da "if" tj "else if" ili "else" (ovisi koliko uvjeta ima) ali tako da propituje neispunjenost uvjeta!

function isValidPassword(password, username) {
    if (password.length < 8) {
        return false;
    }
    if (password.indexOf(' ') !== -1) {
        return false;
    }
    if (password.indexOf(username) !== -1) {
        return false;
    }
    return true;
}

// razlika njegovog rjesavanja je i u nedeklariranju posebnih varijabli nego u njihovom davanju tijekom pozivanja funkcije!

console.log(isValidPassword('antonijus', 'antun'))

// Varijacija sa jednim if i || unutar

function isValidPassword(password, username) {
    if (password.length < 8 ||
        password.indexOf(' ') !== -1 ||
        password.indexOf(username) !== -1) {
        return false;
    }
    return true;
}

console.log(isValidPassword('antunijus', 'antun'))

// treci pristup sa deklariranjem varijabli:

function isValidPassword(password, username) {
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const tooSimilar = password.indexOf(username) !== -1;
    if (tooShort || hasSpace || tooSimilar) return false;
    return true;
}

console.log(isValidPassword('antonijus', 'antun'))

// mala varijacija sa && umjesto ||

function isValidPassword(password, username) {
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const tooSimilar = password.indexOf(username) !== -1;
    if (!tooShort && !hasSpace && !tooSimilar) return true;
    return false;
}


console.log(isValidPassword('antunijus', 'antun'))

// jos jedna varijacija

function isValidPassword(password, username) {
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const tooSimilar = password.indexOf(username) !== -1;
    return !tooShort && !hasSpace && !tooSimilar;
}


console.log(isValidPassword('antonijus', 'antun'))

// za kraj malo price o zeljama pocetnika da odmah budu hakerski kratki u rjesenjima i utjecaju toga na readability of code!