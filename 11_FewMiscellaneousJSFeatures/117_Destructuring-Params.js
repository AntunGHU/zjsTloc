// 5'04

const runner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya"
}

// Rather than destructuring INSIDE the function body
//? function print(person) {
//?   const {
//?     first,
//?     last,
//?     title
//?   } = person;
//?   console.log(`${first} ${last}, ${title}`)
//? }
//? print(runner) // Eliud Kipchoge, Elder of the Order of the Golden Heart of Kenya

// We can unpack the values we want right in the parameter list:
function print({
  first,
  last,
  title
}) {
  console.log(`${first} ${last}, ${title}`)
}
print(runner) // Eliud Kipchoge, Elder of the Order of the Golden Heart of Kenya

const response = [
  'HTTP/1.1',
  '200 OK',
  'application/json',
]

// Also works with array parameters:
function parseResponse([protocol, statusCode, contentType]) {
  console.log(`Status: ${statusCode}`)
}

parseResponse(response) // Status: 200 OK

// video
