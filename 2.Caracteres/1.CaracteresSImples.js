const texto = '1,2,3,4,5,6,a.b c!d?e'

const regexVirgula = /,/

console.log(texto.split(regexVirgula))
console.log(texto.match(regexVirgula))

// Lembrar de mostrar as diferenças com FLAG E SEM FLAGS
// Isso vai ser apenas para mostrar que podemos colocar caracteres literais para buscar uma regex.

console.log(texto.match(/,/g))
console.log(texto.match(/A/g))
console.log(texto.match(/A/gi))
console.log(texto.match(/2/g))
console.log(texto.match(/b c!d/g))
