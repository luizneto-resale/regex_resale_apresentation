const texto = `1,2,3,4,5,6,a.b c!d?e\r	-
f_g`

console.log(texto.match(/\d/g)) // todos digitos numericos
// console.log(texto.match(/\D/g)) // todos digitos nao numericos
console.log(texto.match(/\w/g)) // todos caracteres [a-zA-Z0-9_]
console.log(texto.match(/\W/g)) // nao caracteres [^a-zA-Z0-9_]
console.log(texto.match(/\s/g)) // espaços em brancos
// console.log(texto.match(/\S/g)) // tudo que não é espaço em branco

