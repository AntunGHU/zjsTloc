// 5'42

//* app

let dishesToDo = ['large platter'];
console.log(dishesToDo)


//to add to the start:
dishesToDo.unshift('plate');  // 2
console.log(dishesToDo)

//add to the start again:
dishesToDo.unshift('cereal bowl'); // 3
console.log(dishesToDo)

dishesToDo.unshift('spoon'); // 4
console.log(dishesToDo)


//remove from the start:
const antun = dishesToDo.shift(); // spoon
console.log(dishesToDo)


//* video

// unshift() dodaje na pocetak i vraca length  
// ako unshift-amo 2+ itema odjednom dodaje ih kao cjelinu na pocetak! tj poredak ostaje isti kao i zadani! Isto je i sa "push" ako dodajemo na kraj 2+ itema.
// shift uklanja prvi item i vraca ime itema