const texto = '1,2,3,4,5,6,a.b c!d?e[f'

// conjunto de caracteres []

const regexPares = /[02468]/g // Vai procurar todos os pares dentro do nosso grupo
console.log(texto.match(regexPares))

// Poderia ser diferente
const numeros = '12, 14, 15, 17, 20, 22, 25, 30, 6, 7, 32'
const regexPares10 = /1[02468]/g // ou /[12][02468]/
console.log(numeros.match(regexPares10))

const texto2 = 'João não vai passear na moto.'
console.log(texto2.match(/n[aã]/g))
console.log(texto2.match(/n[aã]\w?/g)) // Exemplo de como vamos ver adiante


/* Metacaracteres - Quantitificadores:
? -> Opcional -> Zero ou Um
* -> Astericos -> Zero ou mais
+ -> Mais -> Um ou mais*/