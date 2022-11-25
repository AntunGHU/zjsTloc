// 9'37

// nacini direktnog pristupa atributima tagova

const inputs = document.querySelectorAll('input') // undefined

inputs[0].value // Taco
inputs[0].value = ''

inputs[2].checked   // true
inputs[2].checked   // false

inputs[1].placeholder   // password
inputs[1].placeholder = 'Please, enter password!'
inputs[1].placeholder // 'Please, enter password!'

const a = document.querySelector('a') // undefined
a.href //"http://..."
a.href = "http://www.google.com"
a.href // "http://www.google.com"

const img = document.querySelector('img') // undefined
img.src // "https://...."
img.src = "...."
img.src // "...."