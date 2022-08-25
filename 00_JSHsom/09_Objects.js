// 30:06 Objects        35:22

// Jedan od tzv ReferenceTypes of data u koje jos spadaju Array-si i Funkcije!

// Objekt je kao i u stvarnom zivotu: ime, adresa itd tako da umjesto deklariranja dvije varijable
//? let name = 'Mosh'
//? let age = 30
// mozemo imati u js objekt koji ce imati izmedju ostalog i name i age!!!
// deklariranje objekta ide sa {objects literal-sima} 
let person = {
    name: 'Mosh',
    age: 30
}
// tako deklarirani objekt cini suvisnim posebne varijable name i age!!! i do njih dolazimo preko objekta!!
console.log(person) // { name: 'Mosh', age: 30 }

// za dobijanje propsa iz objekata imamo dva nacina:
// 1. Dot.notation:
console.log(person.age) // 30
console.log(person.name) // Mosh
// mozemo s njom i mjenjati vrijednost propsa
person.age = 40
console.log(person.age) // 40
// 2. Bracket notation
console.log(person['age']) // 40
console.log(person['name']) // Mosh
// mozemo s njom i mjenjati vrijednost propsa
person['age'] = 60
console.log(person['age']) // 60
person['name'] = 'Antun'
console.log(person['name']) // Antun

// dot je kraci i jednostavniji i kao takav je def-choice ali i bracket notation ima svoje mjesto: npr ponekad ne znamo ime propsa tjekom runtimea (age, name) pa ga kao takvog treba dobiti od usera koji ga tjekom runtimea unosi!!! 
let selection = 'name' // u takvim slucajevima koristeci bracket-notation dobijamo taj unos na dinamicki nacin!!!
person[selection] // sto ce nam dati unos!