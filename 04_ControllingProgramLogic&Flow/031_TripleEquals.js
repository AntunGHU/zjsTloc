// 4'27

// === vodi racuna o typeof tako da 5==='5' // false i neocekivanosti su eliminirane // zato cemo se u js uglavnom njima i koristiti 99,9999%

// primjer opravdanja je ako
let antun = false
antun == false  // true

// ako sad promjenimo vrijednost na nulu
antun = 0 // i potom provjerimo sa ==
console.log(antun)
console.log(antun == false) // true je i dalje iako smo promjenili i iako false i 0 nisu isti ali za == jesu,

// zato ===
console.log(antun === false) // false
