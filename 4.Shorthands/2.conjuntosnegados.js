const texto = '1,2,3,a.b c!d?e[f'

console.log(texto.match(/\D/g)) // tudo que não é numero
console.log(texto.match(/[^0-9]/g)) // mesmo conjunto de cima
console.log(texto.match(/[^\d!\?\[\s,\.]/g)) // removendo todos esses caracteres, restando as letras

const texto2 = '1: !"#$%&\'()*+,-./ 2: :,<=>?@' // string estranha 

console.log(texto2.match(/[^!-/:-@\s]/g)) // removido os caracteres utilizando um range de caracteres com o '-'