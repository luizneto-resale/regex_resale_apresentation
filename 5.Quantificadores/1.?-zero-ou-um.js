const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// ? -> zero ou um (conhecido como opcional)

const regex = /fogo?/gi // a letra o é opcional, o metacaractere sempre funciona para o que está a sua esquerda

console.log(texto1.match(regex))
console.log(texto2.match(regex))

// aplica apenas para letra 'o' ou tem ou não tem, opcional, zero ou um