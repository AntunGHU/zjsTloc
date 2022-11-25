// 3'30

const range = document.querySelector('input[type="range"]') //undefined

range.getAttribute('max') // 500
range.getAttribute('min') // 100
range.getAttribute('type') // range
range.getAttribute('lol') // null

// setiranje 
range.setAttribute('min', '-500') // undefined
range.value // -350

range.setAttribute('type', 'radio') // undefined




