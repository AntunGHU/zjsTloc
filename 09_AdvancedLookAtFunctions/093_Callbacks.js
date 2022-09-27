// 8'19

function grumpus() {
  alert("GAHHH GO AWAY!")
}

// setTimeout(callback, delay): inplace anonymous fun umjesto npr "grumpus"
setTimeout(function () { //we pass an anonymous callback function
  alert("WELCOME!");
}, 5000);


//DON'T WORRY ABOUT ANY OF THIS SYNTAX!!
const btn = document.querySelector('button');
// JUST FOCUS ON THE CALLBACK WE PASS IN!
btn.addEventListener('click', function () {
  alert("WHY DID YOU CLICK ME!!??")
})

// video 
// CALLBACK FUNCTIONS: is fun passed into another fun as an argument, which is then invoked inside the outher fun.
// To su funs as args iz 91 tj fun laugh ili cry ili rage!!!
// No, mnogo cesce umjesto standalone funs (samostalne i imenovane) koristimo anonymous funs.