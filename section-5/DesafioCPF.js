const texto = `CPF dos aprovados:
    - 600.567.890-12
    - 703.837.754-00
    - 144.133.122-12
    - 187.231.545-92
`

// console.log(texto.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g))

console.log('Minha Solução:')
console.log(texto.match(/(\d{3}\.){2}\d{3}-\d{2}/g))

console.log('Solução Professor:')
console.log(texto.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g))