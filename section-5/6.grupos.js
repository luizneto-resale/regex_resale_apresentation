const texto1 = 'O josé simão é muito engraçado... hehehehe'

console.log(texto1.match(/(he)+/g)) //grupo faz voce pegar tudo de uma vez

const texto2 = 'https://www.site.info www.escola.ninja.br google.com.ag'

console.log(texto2.match(/(http.?:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g))

/* divide por partes
1. grupo para o http: (http.?:\/\/)?
2. grupo para o www: (www\.)?
3. grupo para o dominio: \w+\.\w{2,}]
4. grupo para o .br . ag .us: (\.\w{2})?