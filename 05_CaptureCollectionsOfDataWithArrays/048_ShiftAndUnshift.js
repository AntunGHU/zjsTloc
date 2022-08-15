// 5'42

//* app

let dishesToDo = ['large platter'];

//to add to the start:
dishesToDo.unshift('plate');  // 2

//add to the start again:
dishesToDo.unshift('cereal bowl'); // 3
dishesToDo.unshift('spoon'); // 4

//remove from the start:
dishesToDo.shift(); // spoon

//* video

// unshift() dodaje na pocetak i vraca length  
// ako unshift-amo 2+ itema odjednom dodaje ih kao cjelinu na pocetak! tj poredak ostaje isti kao i zadani! Isto je i sa "push" ako dodajemo na kraj 2+ itema.
// shift uklanja prvi item i vraca ime itema