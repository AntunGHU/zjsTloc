// 10'57

// ****************
// querySelector
// ****************
//To find the first li on the page:
document.querySelector('li');

//To find the first element with class of special:
document.querySelector('.special');

//To find the first element with id of main (there should only be one...)
document.querySelector('#main');

// To find the first li with the class of special, nested inside of a ul, nested inside a section:
document.querySelector('section ul li.special');


// ****************
// querySelectorAll
// ****************

// To find ALL li's on the page:
document.querySelectorAll('li');

// To find ALL elements with the class of special on the page:
document.querySelectorAll('.special');

//? video 
// Dodao <section> tag (novi za mene) i kroz to dio css-sintakse: 'section ul li.special' za koji je jos kao opciju dodao i body ispred svega!

// ispod jos jedna varijacija sa [] i type...
document.querySelector('input[type="password"]');

// All vraca kolekciju koja se zove NodeList takodjer array-like objec koji kao i HTML Collection ima length, values itd ali i forEach kojeg HTML Collection nema!!!