// 7'12

const form = document.querySelector('form') // undefined

form.innerHTML // vfaca sve html-elemete unutar velikog stringa! zajedno sa textovima.
// Mogu i mjenjati textove
form.innerHTML = 'kajsdlaks' // i to postaje jedini sadrzaj form-taga!
// Mogu dodati HTML-tagove ali samo kao unutar string-a!!!
form.innerHTML = '<b>I am bold tag </b>' // i b-tag sa tekstom se pojavljuje. No, ima boljih nacina!

// mogu koristiti i +=
const h1 = document.querySelector('h1');
h1.innerHTML += ' is cool' // My Webpage is cool
// ako += sa tagom, innerHTML to razumije i ne prikazuje tagove dok innerText ne razumije i prikazuje tagove kao dio text-a! Dakle, ako treba dodati tag to sa innerHTML!!!