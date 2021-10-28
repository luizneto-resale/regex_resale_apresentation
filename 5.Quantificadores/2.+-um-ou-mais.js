const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// + -> um ou mais

const regex = /fogo+/gi

// o que será que ele vai selecionar
console.log(texto1.match(regex))
console.log(texto2.match(regex)) // não seleciona fog pois é um ou mais e fog não tem 'o'

const texto3 = 'Os números: 0123456789.'

console.log(texto3.match(/[0-9]/g))
console.log(texto3.match(/[0-9]+/g))
// quero que voce traga um trecho do texto que tenha um ou mais digitos de 0 a 9

// console.log(texto3.match(/\d+/g)) - mesma coisa - forma diferente e mais utilizada