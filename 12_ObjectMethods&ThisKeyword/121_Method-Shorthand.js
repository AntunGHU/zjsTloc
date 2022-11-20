// 2'45

const auth = {
  username: 'TommyBot',
  login() {
    console.log("LOGGED YOU IN!")
  },
  logout() {
    console.log("GOODBYE")
  }
}

console.log(auth)
//? {
//?   username: 'TommyBot',
//?   login: [Function: login],
//?   logout: [Function: logout]
//? }