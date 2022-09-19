// 7'40

// app

const palette = {
    red: '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#30336b'
};

//DOT NOTATION
palette.red; //'#eb4d4b'

//SQUARE BRACKET NOTATION
palette['yellow']; //'#f9ca24'

//With square brackets, we can also use dynamic key names:

let mysteryColor = 'blue';
palette[mysteryColor]; //'#30336b'  


// video

// ponavlja kako prolaze brojevi-keyevi  i dokazuje to da njihove vrijednosti pokusava dobiti sa [] notacijom. Isti rezultat se dobije i ako u [] stavimo samo broj kao i ako ga stavimo sa ''.
// automatsko pretvaranje u string brojeva rezultat je zelje kreatora js da se key-evi mogu unositi bez "" jer to js sam preuzima. Prednost toga u object-ima je da se za imena key-eva mogu stavljati i oni nazivi koji za samostalne varijable nebi mogli (76imekeya, dvorjecni keyevi itd)
// takvi (varijabilno gledano) "nepravilni" kljucevi se mogu potrazivati samo sa bracket notacijom!!! dot notacija javlja gresku! Unutar bracketa nemoze bez navodnih znakova!!
// prednost [] notacije je mogucnost koristenja dynamic keysa! a upis u [] moze koristiti konkatinaciju!
// pokusaj dohvata key-a koji ne postoji vraca "undefined"