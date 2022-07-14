// 4'18

// app

let x = 7;

// THIS VERSION RETURNS TRUE
//&& runs before ||
console.log(x == 7 || x === 3 && x > 10);

let y = 7

// THIS VERSION RETURNS FALSE
// Use parens to change order
console.log((y == 7 || y === 3) && y > 10);

// ant
// mjenjam u y u 2 pr i odkomavam prvi te dodajem console.log() i dobijam odgovor na konzoli!!
// konacni poredak bosova: !,&&,||. Za promjenu hijerarhije koristimo ()
// na MDN pokazuje tabelu i hijerarhiju svakog operatora: (), pa dole po tabeli nailazimo na !, pa na && i odmah ispod ||. 
// Uocavam operatore kao:**=, %=
// Komparison-operatori dolaze prije logickih operatora!
// za kraj, ako imamo sumnji u order zagrade!!! jer zaboravi se!!