// 11:41 Separation of Concerns     13:47 JavaScript in Node

// Posto js-scripte mogu imati tisuce ili milione linija koda, naravno da ne pisemo sav taj kod u index.html. Zato ga pisemo u posebne fajlove npr index.js i povezujemo ih sa index.html tako da sad umjesto da pisemo js-kod izmedju 
// ? <script>
//?     console.log('Hello World');
//?  </script>
// script-tagova kao prije, nego u okviru 1. script-taga napisemo link na index.js
// ? <script src="index.js"></script>
// snima i pokazuje da je u konsoli ponovo tekst upisan u index.js!!!