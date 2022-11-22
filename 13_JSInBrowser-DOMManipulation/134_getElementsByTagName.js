// 7'16

//To select all li's
document.getElementsByTagName('li'); // mnozina!!!

// To select all h1's (there's only one on this page):
document.getElementsByTagName('h1');

//Remember, getElementsByTagName returns an array-like object (NOT a real array)
const inputs = document.getElementsByTagName('input'); //get all inputs
inputs[0]; //this works
inputs.length; //3 //this works too
inputs.pop() //DOES NOT WORK! pop() is an array method, and this isn't an array!

//? video
// Pri pokusaju nalaska nepostojeceg tag-a dobijemo empty "HTMLCollection []". Dakle, uvijek vraca kolekciju a ne stvarni element kao prippetrazi po "id" (kojeg i u html-u moze biti samo 1!)

// "HTMLCollection []" je array-like object ali nije array! ali mozemo ciniti neke arrayish-fore!

for (let input of inputs) { console.log(input) } // this works too
//? <input type="text" placeholder="Bear Name">
//? <input type="password" placeholder="password">
//? <input type="submit">

// Posto je vec iterabilan, mozemo koristiti i spread ... i s njim ga konvertirati u array!!!

const arr = [...inputs]
arr // i u konzoli pokazuje (3) [input, input, input]
// najcesca primjena ovih iterativnih mogucnosti je mjenjanje stila ili ocitanje vrijednosti! Primjer koda za ocitanje:
for (let input of inputs) { console.log(input.value) }
//? Maximus
//? aksksjaksjkjhak