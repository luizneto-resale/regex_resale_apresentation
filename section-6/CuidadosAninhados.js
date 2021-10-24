const texto = 'PEdrinho (fihlo do PEdro SIlva) é doutor do ABC!'

// console.log(texto.match(/[(abc)]/gi)) // dentro de conjunto nao existe grupo
console.log(texto.match(/([abc])/gi)) 
console.log(texto.match(/(abc)/gi)) 