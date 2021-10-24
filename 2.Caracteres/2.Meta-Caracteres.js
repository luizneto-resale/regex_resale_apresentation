/* 
Metacaracteres - Representantes:
. -> Ponto -> Um caractere qualquer
[] -> Conjunto -> Um conjunto de caracteres permitidos
[^] -> Conjunto Negado -> Um conjunto de caracteres proibidos

Metacaracteres - Quantitificadores:
? -> Opcional -> Zero ou Um
* -> Astericos -> Zero ou mais
+ -> Mais -> Um ou mais
{n,m} -> Chaves -> De n até m

Outros Metacaracteres
\ -> Escape -> Uso de metacaracteres como literal
| -> Ou -> Operação de Ou
() -> Grupo -> Define um Grupo
\1..\9 -> Retrovisores -> Resgata um Grupo definido
*/

// . ? * + - | [ ] { } ( ) \ :

const texto = '1,2,3,4,5,6,a.b c!d?e'

const regexPonto = /\./g //Usando o Escape para usar de forma literal

console.log(texto.split(regexPonto))

// Diferença?

console.log(texto.split(/./g))

const regexSimbolos = /,|\.|\?|!| /g // [, e !] não é metacaractere, utilizando o OU pra achar os metacaracteres

console.log(texto.split(regexSimbolos))