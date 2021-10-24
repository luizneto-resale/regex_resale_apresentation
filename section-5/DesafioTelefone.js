const texto = `Lista telefônica:
    - (11) 98756-1212
    -98765-4321
    - (84) 98861-4565
    -98806-6973
    - (78)98872-2332
`

// console.log(texto.match(/[\(..\)]?(\d{5}-\d{4})/g))
// console.log(texto.match(/\d{5}-\d{4}/g))
console.log('Minha Solução:')
console.log(texto.match(/(\(..\))?(\s)?(\d{5}-\d{4})/g))

console.log('Solução Professor:')
console.log(texto.match(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g))


