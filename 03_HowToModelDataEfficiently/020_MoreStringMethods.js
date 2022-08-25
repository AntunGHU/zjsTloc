// 8'20

// string-metode sa argumentima koji modificiraju njihovo djelovanje "thing.method(args)"

// indexOf
let tvShow = 'catdog'
console.log(tvShow.indexOf('cat'))                  // 0
console.log(tvShow.indexOf('dog'))                  // 3
console.log(tvShow.indexOf('z'))                    // -1 (not found)
console.log("baseball".indexOf('b'))                // 0  (od prvog b)
console.log("Baseball".indexOf('b'))                // 4  (case sensitive)

// slice        
let str = 'ako umrem mlad posadite'
console.log(str.slice(0, 3))                        // 'ako' - zadnji index ne ukljucuje se
console.log(str.slice(4))                           // 'umrem mlad posadite' - pocinje sa 4 i do kraja
console.log(str.slice(40))                          //* ' ' - prazan, nema errora!!!

// replace
let annoyingLaugh = 'teehee so funny! tehee'
console.log(annoyingLaugh.replace('tehee', 'haha')) // 'teehee so funny! haha'
console.log("ha ha ha".replace('ha', 'hee'))        // 'hee ha ha' - mjenja samo prvu pojavu mathca
console.log("ha ha ha".replace('haa', 'hee'))       // 'ha ha ha' - haa nema pa sve ostaje isto //* nema errora!!!

// za kraj Ath malo ide na MDN kako bi pokazao kako ga koristiti. Nalazi "slice" i pokazuje da moramo imati pocetni index a [, endIndex] su opcijski (znacenje []).
