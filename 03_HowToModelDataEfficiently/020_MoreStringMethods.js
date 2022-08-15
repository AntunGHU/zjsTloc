// 8'20

// string-metode sa argumentima koji modificiraju njihovo djelovanje "thing.method(args)"

// indexOf
let tvShow = 'catdog'
tvShow.indexOf('cat') // 0
tvShow.indexOf('dog') // 3
tvShow.indexOf('z') // -1 (not found)
"baseball".indexOf('b')     // 0  (od prvog b)
"Baseball".indexOf('b')     // 4  (case sensitive)

// slice
let str = 'ako umrem mlad posadite'
str.slice(0, 3)      // 'ako' - zadnji index ne ukljucuje se
str.slice(4)      // 'umrem mlad posadite' - pocinje sa 4 i do kraja
str.slice(40)      //* ' ' - prazan, nema errora!!!

// replace
let annoyingLaugh = 'teehee so funny! tehee'
annoyingLaugh.replace('tehee', 'haha') // 'haha so funny! tehee'
"ha ha ha".replace('ha', 'hee') // 'hee ha ha' - mjenja samo prvu pojavu mathca
"ha ha ha".replace('haa', 'hee') // 'ha ha ha' - haa nema pa sve ostaje isto //* nema errora!!!

// za kraj Ath malo ide na MDN kako bi pokazao kako ga koristiti. Nalazi "slice" i pokazuje da moramo imati pocetni index a [, endIndex] su opcijski (znacenje []).
