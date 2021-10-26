const texto = 'O rafa recebeu 120 milhões apostando 6 9 21 23 45 46.'

// quantificadores -> {}

// guloso e nao guloso nesse primeiro match
console.log(texto.match(/\d{1,2}/gi)) // procura digitos que tenham 1 ou 2
console.log(texto.match(/[0-9]{2}/gi)) // digitos qe tenha necessariamente 2
console.log(texto.match(/\d{1,}/gi))

// guloso aqui tb
console.log(texto.match(/\w{7}/gi)) // milhoes nao pegou pois o õ não estava dentro do shorthand
console.log(texto.match(/[\wõ]{7,}/gi))
