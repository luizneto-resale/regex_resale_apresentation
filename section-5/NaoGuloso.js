const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'

console.log(texto.match(/<div>.+<\/div>/g))
console.log(texto.match(/<div>.*<\/div>/g))
console.log(texto.match(/<div>.{0,}<\/div>/g))

// quantificador não gulosos

console.log(texto.match(/<div>.+?<\/div>/g))
console.log(texto.match(/<div>.*?<\/div>/g))
console.log(texto.match(/<div>.{0,}?<\/div>/g))


console.log('Testando:')
// testando por fora

const texto2 = '<div>Conteudo 01<div>Conteudo 02</div></div><div>Conteudo 03</div>'
console.log(texto2.match(/<div>.+<\/div>/g))
console.log(texto2.match(/<div>.+?<\/div>/g))
console.log(texto2.match(/<div>.+?Conteudo 03<\/div>/g))
console.log(texto2.match(/<div>.+<div>/g))

