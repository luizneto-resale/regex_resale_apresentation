const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'

// quantificadores são gulosos por padrão

console.log(texto.match(/<div>.+<\/div>/g))
console.log(texto.match(/<div>.*<\/div>/g))
console.log(texto.match(/<div>.{0,}<\/div>/g))

// esse padrão talvez não seja o que voce quer pois as divs nao vem separadas

console.log('-------------')

// quantificador não gulosos

console.log(texto.match(/<div>.+?<\/div>/g))
console.log(texto.match(/<div>.*?<\/div>/g))
console.log(texto.match(/<div>.{0,}?<\/div>/g))
