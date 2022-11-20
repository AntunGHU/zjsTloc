// 6'17

function sayHi() {
  console.log("HI")
  //this refers to the window (global scope object in the browser)
  console.log(this);
}
sayHi()

const greet = function () {
  //this refers to the window (global scope object in the browser)
  console.log(this);
}
greet()

// video
//? obzirom da je "this" velika novost, video donosi mnogo novog: "window" je objekt kojem se implicitno dodaju sve nase definicije (def od funkcije, alert itd) koje su na prvi pogled "in the middle of nowhere".
//? unutar node-a global scope za spomenute je nesto drugo a ne window.
//? "this" unutar funkcije se referira na na windows (osim kad se ne referira).
//? varijable deklarirane sa "var" takodjer postaju varijable od window ali one sa let i const ne!!!