// 7'02

const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director'
const person2 = 'James Cameron'

// The old way: 
// Make the object
const team = {};
// Then add a property using dynamic key:
team[role] = person;
team[role2] = person2;
console.log(team)  // { host: 'Jools Holland', Director: 'James Cameron' }

// USING COMPUTED PROPERTIES!
const team2 = {
  [role]: person,
  [role2]: person2,
  [1 + 6 + 9]: 'sixteen'
}
console.log(team2) // { '16': 'sixteen', host: 'Jools Holland', Director: 'James Cameron' }


// function addProp(obj, k, v) {
//   const copy = {
//     ...obj
//   };
//   copy[k] = v;
//   return copy;
// }

// const addProp = (obj, k, v) => {
//   return {
//     ...obj,
//     [k]: v
//   }
// }

const addProp = (obj, k, v) => ({
  ...obj,
  [k]: v
})
const res = addProp(team, 'happy', ':)')
console.log(res)  // { host: 'Jools Holland', Director: 'James Cameron', happy: ':)' }