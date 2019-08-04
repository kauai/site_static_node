const http = require('http')

const server = http.createServer((request, response) => {
    const { headers, method, url,body } = request;
    if(url == '/' && method == 'POST'){
        response.writeHead(200, {
            'Content-Type': 'application/json',
          });
        response.end(JSON.stringify({name:"thiago"}));
        console.log(request)
    }else if(url == '/contatos'){
        response.end('<html><body><h1>Contatos</h1></body></html>');
    }else{
       
        response.end('teste')
    }
    response.end()
})

server.listen(3000,'localhost',(e) => {
    if(e) console.log(e)
    console.log('servidor rodando nao porta 3000')
})