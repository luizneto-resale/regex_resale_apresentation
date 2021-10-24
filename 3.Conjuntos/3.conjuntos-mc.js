const texto = '.$+*?-'

console.log(texto.match(/[.$+*?]/g)) // Dentro de um conjunto os elementos são tratados como literais (maioria)
console.log(texto.match(/[$-?]/g))  // isso é um intervalo range, o '-' é tratado como metadados

console.log(texto.match(/[$\-?]/g)) // isso não é intervalo pois tem o escape
console.log(texto.match(/[-?]/g)) // isso não é intervalo também, depende da ordem que voce bota
