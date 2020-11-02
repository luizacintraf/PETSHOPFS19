const fs=require('fs');
const listaDePets = require('./listadepets');
const functions = require('./functions');

// functions.adicionarPet("Toby",10,"poodle","macho","Luiza",true,true,12333,listaDePets)
// functions.cadastrado(listaDePets,11111)

// functions.petscadastrados(listaDePets)

// const jsonString = JSON.stringify(listaDePets)

// fs.writeFileSync('./listadepets.json', jsonString)


const http = require('http');
const url = require('url');
const { servicos } = require('./functions');
const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});

    let urlCompleta =url.parse(req.url,true)
    let queryString =urlCompleta.query
    let rota =urlCompleta.pathname

    if(rota == "/"){
        let listar=servicos.listarPets(listaDePets)
        res.end(listar)
    }
    if(rota=="/pet"){
        let nome=queryString.nome
        let pet = servicos.buscarPet()
        res.end(pet)
    }

    // const parsedReq=url.parse(req.url,true)
    // const {name,rga} = parsedReq.query;
    // console.log(name);
    // res.end('Olá, ' + name)
}).listen(3000,'localhost',()=>{console.log("server on")})
