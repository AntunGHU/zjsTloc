// 5'03

// svaki karakter ima svoj indeks - zato su stringovi odered data type!

// svaki string ima property "lenght" koji racuna sve, karaktere i praznine itd
console.log("antun".length)      // 5

// nalazenje karaktera po indeksu, ako indeksa nema daje "undefined", pojedini karakteri se ne mogu mjenjati!!
console.log("antun"[2])         // t
"antun"[2] = d                  // ReferenceError: d is not defined     // ne mjenja slovo!!! jer su stringovi imutable!!!




