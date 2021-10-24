// . é um coringa, válido para uma posiçao

const texto = '1,2,3,4,5,6,7,8,9,0'

console.log(texto.match(/1.2/g)) // Fazer exemplo com 1X2 no texto
console.log(texto.match(/1..2/g)) // Da errado pois o ponto representa um caractere e não existe.
console.log(texto.match(/1..,3/g))
console.log(texto.match(/1.{5}4/g)) // Exemplo com Quantificador para o Desafio.

const notas = '8.3,7.1,8.8,10.0'

console.log(notas.match(/8../g)) // 8 seguido de 2 caracteres, o . substitui o proprio ponto
console.log(notas.match(/.\../g)) //Exemplo que essa não seria a regex mais adequada para notas