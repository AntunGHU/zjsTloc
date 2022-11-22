// 5'17

// To select all elements with the class of 'special':
document.getElementsByClassName('special');

//getElementsByClassName also returns an array-like object.
// We don't have access to array methods, but we can iterate:

const specials = document.getElementsByClassName('special');
for (let el of specials) {
  console.log(el);
}

//We can use spread to make an actual array:
const arr = [...specials];
arr.pop() //this works because it's now an array!

// video
// ako imam puno elemenata a zelim pretrazivati unutar samo nekog od njih mogu suziti pretragu tako sto cu iz dokumenta snimiti prvo u zaseban objekt a potom pretrazujem samo unutar njega, npr
const ul = document.getElementsByTagName('ul')[0] // ul
ul.getElementsByClassName('special') // i dobijem samo clasu unutar ul-a! ili 
ul.getElementsByTagName('li') // i dobijem sve li
// ovo pretrazivanje unutar drugog elementa (ul-a npr) nemozemo sa id-ima jer oni su samo po 1 pa nema smisla!!!