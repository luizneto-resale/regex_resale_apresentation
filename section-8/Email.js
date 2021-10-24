const emails = `
Os e-mails:
    - fulano@cod3r.com.br
    - xico@gmail.com
    - joao@empresa.info.br
    - maria_silva@registro.br
    - rafa.sampaio@yahoo.com
    - fulano+de+tal@escola.ninja.br
`

console.log(emails.match(/[\w\.\+]+@\w+\.\w+(\.\w+)?/g))

console.log(emails.match(/\S+@\w+\.\w{2,6}(\.\w+)?/g))