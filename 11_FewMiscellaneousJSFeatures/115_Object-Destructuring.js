// 4'16

const runner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya"
}

// const {
//   first,
//   last,
//   time
// } = runner;

const {
  country: nation,
  title: honorific
} = runner;

const {
  first,
  last,
  ...other
} = runner;

// video
//? ako trazim kljuc kojeg nema (time) nece errorati, napravit ce varijablu ali ce ona biti undefined
//? ako zelim stvoriti varijablu s drugacijim imenom od imena key-a ali njegovom vrijednosti tada: "country: nation" ili "title: honorific"
//? rest i ovdje radi - vidi "...other"