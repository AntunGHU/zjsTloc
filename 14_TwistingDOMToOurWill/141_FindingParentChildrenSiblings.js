// 6'27

const firstLI = document.querySelector('li')

firstLI // <li class="special">First Thing</li>

console.dir(firstLI) // li.special // sa svim atributima - puno...

// parents
firstLI.parentElement   // <ul>...</ul>
firstLI.parentElement.parentElement  //<body>...</body>
firstLI.parentElement.parentElement.parentElement //<html>...</html>
firstLI.parentElement.parentElement.parentElement.parentElement //null

// children
const ul = document.querySelector('ul')

ul  // <ul>...</ul>

ul.children // HTML Collection(3) [li.special, li, li.special]
ul.children[0] // li.special
ul.children[0].innerText // First Thing

//sibilings, oni su na istom nivou
firstLI.nextElementSibling // <li>Second Thing </li>
firstLI.nextElementSibling.nextElementSibling //li class=...
firstLI.nextElementSibling.previousElementSibling // <li>Second Thing </li>
