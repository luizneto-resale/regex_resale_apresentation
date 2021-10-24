const texto = `
123456
cod3r
QUASE123!
Bilubilu123@
#OpA1
#essaSenhaEHgrande123456677
#OpA1?2a
FOi123@!
`

console.log(texto.match(/^.{6,20}$/gm))
console.log(texto.match(/^(?=.*[A-Z]).{6,20}$/gm))
console.log(texto.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,20}$/gm))

const texto2 = '123456'

console.log(texto2.match(/\d{6}/g))