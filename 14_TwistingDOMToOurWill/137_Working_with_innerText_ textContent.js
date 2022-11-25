// 10'52

// Nakon selekcije sljedi maniplulacija sa selektiranim: izmjena (stila ili sadrzaja) ili jednostavno ocitanje data koristenjem propsa i metoda:
// Najcesce koristeni (9/10): classList, getAttribute(), setAttribute(), appendChild(), append(), prepend(), removeChild(), remove(), createElement, innerText, textContent, innerHTML, value, parentElement, children, nextSibling, previousSibling, style

//! dohvacanje txt-a sa innerText

const h1 = document.querySelector('h1')

h1.innerText // "My Webpage"

h1 // <h1 class="header">My Webpage</h1>

const ul = document.querySelector('ul')

ul.innerText // "First Thing, Second Thing, Third Thing" -jedno ispod drugog. Dobili smo sav text iako imamo li, zato..
document.body.innerText // vraca sav text stranice!!!
//* ako zelim promjeniti, npr:
h1.innerText = "I'm hungrry!" // promjeni se
// ali ako ucinim nesto kao
ul.innerText = "I'm a big ul!" // svi sadrzaji od sva tri li-a postaju samo jedan text (I'm a big ul!)

//! drugi metod za izmjenu text-a: textContent

h1.textContent // "My Webpage"
h1.innerText = "I'm not hungrry!" // promjeni se i po ovom su isti ali...
const p = document.querySelector('#main')
p.innerText // daje text bez formatiranja i bez <script>-taga (ili bold-taga) dok
p.textContent //daje text i formatiranje!!! i sadrzaj <script>-tag kao text!!! (ili boldanje) sto nije idealno uglavnom!

// zakljucak: textContent je brzi jer ne kalkulira sto prikazati a sto ne! Za update oba gaze stari Content