const http = require('http')
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("meu primeiro server")
}).listen(3000,'loalhost')