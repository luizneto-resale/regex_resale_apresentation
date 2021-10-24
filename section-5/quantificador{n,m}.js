const texto = 'O joão recebeu 120 milhões apostando 6 9 21 23 45 46.'

// quantificadores -> {}

console.log(texto.match(/\d{1,2}/gi))
console.log(texto.match(/[0-9]{2}/gi))
console.log(texto.match(/\d{1,}/gi))

console.log(texto.match(/\w{7}/gi))
console.log(texto.match(/[\wõ]{7}/gi))

// no futuro

console.log(texto.match(/\b\d{1,2}\b/gi))
console.log(texto.match(/\b[\wõ]{7}\b/gi))
