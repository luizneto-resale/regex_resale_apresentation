const texto1 = '<b>Destaque</b><strong>Forte</strong><div>COnteudo</div>'

console.log(texto1.match(/<(\w+)>.*<\/\1>/gi))

const texto2 = 'Lentamente é mente muito lenta'
console.log(texto2.match(/(lenta)(mente).*\2.*\1/gi))

// não salvar o valor do grupo - ?:
console.log(texto2.match(/(?:lenta)(mente).*\1/gi))

console.log(texto2.match(/(lenta)(mente)/gi))
console.log(texto2.match(/(lenta)(mente)?/gi))
console.log(texto2.replace(/(lenta)(mente)/gi, '$2')) // referenciado o segundo retrovisor
console.log(texto2.replace(/(lenta)(mente)/gi, 'ABC$2DEF')) // referenciado o segundo retrovisor