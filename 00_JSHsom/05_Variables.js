// 16:11 Variables      21:49

// pocinje spominjanjem "var" oznake za varijablu ali zbog issues-a ona se vise ne koristi!
//? let name;
//? console.log(name);
// i dok god stanje ovako js-en vraca 'undefined'. Cesce se koristi single-kvote u js!!
// Nakon sto smo pridruzili ime 
let name = 'Mosh';
console.log(name);
// konzola vraca 'Mosh'
// pravila za imenovanje varijabli:
//----ne mogu biti reserved keywords (let, if, itd - ne treba ih pamtiti jer svaki pokusaj da ih se stavi rezultira greskom!!)
//----trebaju biti sa smislom i logikom u vezi onog sto nose! (ne a1, x, itd)
//----ne mogu poceti s brojevima
//----ne mogu imati space ili -
//----camelCase za vise rjeci
//----voditi racuna da je js case-sensitive!
//----ako zelim u jednoj liniji mogu deklarirati vise varijabli:
//? let firstName, lastName;
// ako hocu mogu ih odmah i odrediti
//? let firstName = 'Mosh', lastName = 'Hamedani';
// ali Best practices je da se to cini posebno u svakoj liniji
//? let firstName = 'Mosh';
//? lastName = 'Hamedani';



