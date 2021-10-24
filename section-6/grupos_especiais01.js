const texto = 'João é calmo, mas no transito fica nervoso.'

console.log(texto.match(/[\wÀ-ú]+/gi))

// POsitive lookahead
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi))
console.log(texto.match(/[\wÀ-ú]+(?=\snervoso)/gi))

// Negative lookahead
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi))
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi))
