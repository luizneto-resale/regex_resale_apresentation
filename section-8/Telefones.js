const texto = `
Lista telefônica:
    - (21) 12345-6789
    - (11) 62300-2234
    - 98861-4565
    - (84) 98827-2220
    - (1) 9762-4212
`

console.log(texto.match(/(\(\d{2}\))?\s\d+-\d+/g))

console.log(texto.match(/(\(\d{2}\)\s?)?\d{4,5}-\d{4}/g))