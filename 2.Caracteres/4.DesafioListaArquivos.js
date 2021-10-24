const texto = 'Lista de arquivos mp3: jazz.mp3, rock.mp3, sopa.mp3, node.mp3'
// Exemplo de Saída: [ 'jazz.mp3', 'rock.mp3', 'sopa.mp3', 'node.mp3' ]

console.log(texto.match(/....\.mp3/g))
console.log(texto.match)

// no futuro ...
console.log(texto.match(/\w+\.mp3/g))