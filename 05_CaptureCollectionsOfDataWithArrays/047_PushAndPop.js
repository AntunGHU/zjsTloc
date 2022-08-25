// 6'18

//* app

let topSongs = [
    'First Time Ever I Saw Your Face',
    'God Only Knows',
    'A Day In The Life',
    'Life On Mars'
];
console.log(topSongs)

// To add to the end of an array:
console.log(topSongs.push('Fortunate Son')); // 5 (vraca length)
console.log(topSongs)

console.log(topSongs.push('Landslide')); // 6
console.log(topSongs)

console.log(topSongs.push(12324166)); // 7
console.log(topSongs)

// To remove the last item
console.log(topSongs.pop()); //12324166 // vraca uklonjeni item 
console.log(topSongs)


//* video

/* metodi u videu + shift i unshift su grupirani kao oni koji dodaju ili oduzimaju sadrzaj array-a.
- MDN i opisi gomile metoda array-a
- za razliku od string-ova koji su nepromjenjivi, dodavanje s push je inplace! */

// jedan primjer deklariranja:
const nextSong = topSongs.pop(); // undefined (kao i kad vise nema elemenata a mi nastavljamo pop-ati)
console.log(nextSong)
console.log(topSongs)