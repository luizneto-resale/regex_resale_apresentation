/*
O que é Regex?
- Bem resumido, uma expressão regular (Regex) é um método formal de se especificar um padrão de texto.
*/


// Como executar uma Regex?

const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNove = RegExp('9') // Função para montar a sua regex, no nosso caso só quero buscar o número 9, então botei 9.

console.log('Métodos da RegExp...')
console.log(regexNove.test(texto)) // Verifica se existe nossa Regex dentro do Texto.
console.log(regexNove.exec(texto)) // Mostra se encontrou, o index e o texto.

// Métodos da String

const regexLetras = /[a-f]/g // Isso não importa tanto ainda de não entenderem.
console.log('Métodos da String...') // Agora em vez de usarmos a const do RegExp, usaremos funções do próprio texto.

console.log(texto.match(regexLetras))
console.log(texto.search(regexLetras)) // Indice do primeiro elemento que bate com sua regex
console.log(texto.replace(regexLetras, 'Achei')) // Replace por todos que der match
console.log(texto.split(regexLetras)) // Vou mostrar um exemplo na proxima seção