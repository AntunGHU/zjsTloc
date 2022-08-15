// 6'18

//* app

let topSongs = [
    'First Time Ever I Saw Your Face',
    'God Only Knows',
    'A Day In The Life',
    'Life On Mars'
];

// To add to the end of an array:
topSongs.push('Fortunate Son'); // 5 (vraca length)
topSongs.push('Landslide'); // 6
topSongs.push(12324166); // 7

// To remove the last item
topSongs.pop(); //12324166

//* video

/* metodi u videu + shift i unshift su grupirani kao oni koji dodaju ili oduzimaju sadrzaj array-a.
- MDN i opisi gomile metoda array-a
- za razliku od string-ova koji su nepromjenjivi, dodavanje s push je inplace! */

// jedan primjer deklariranja:
const nextSong = topSongs.pop(); // undefined (kao i kad vise nema elemenata a mi nastavljamo pop-ati)