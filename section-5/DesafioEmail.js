const texto = `Os e-mails dos convidados são:
    - fulano@cod3r.com.br
    - xico@gmail.com
    - francisco_bruto@outlook.info.com
    - argentino.alo@gmail.com.as
    - usa@yahoo.us`


console.log('Minha Solução:')
console.log(texto.match(/([\w.]+@\w+)\.(\w+(\.\w+)?)/g))

console.log('\nSolução Professor:')
// console.log(texto.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,4}/g)) // versão 1
// console.log(texto.match(/\w+@\w+\.\w{2,4}/g)) // versão 2
// console.log(texto.match(/[\w.]+@\w+\.\w{2,4}/g)) // versão 3
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,3}/g)) // versão 4