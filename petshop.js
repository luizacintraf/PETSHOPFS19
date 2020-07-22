//salvar o nome do petshop
const NOME_EMPRESA= "Petshop da Luh"

console.log("Bem vindo ao "+ NOME_EMPRESA)
//Nome do pet
//Idade
//Raça
//Sexo
//Cuidador
//Castrado
//Vacinado


let listaDePets =[
    {
        nome: "Darth",
        idade: 2,
        raca: "Shitzu",
        sexo: "macho",
        cuidador:{
            nome:"Luiza",
            telefone: "997999"
        }, 
        castrado: true,
        vacinado:true,
        rga: 12345
    }
];



// function NewPet(nome,idade,raca,sexo,cuidador,castrado,vacinado,listaDePets){
//     let pet = {
//         nome: nome,
//         idade: idade,
//         raca: raca,
//         sexo: sexo,
//         castrado: castrado,
//         vacinado: vacinado
//     }
//     listaDePets.push(pet)
//     return listaDePets
// }




const adicionarPet = (nome,idade,raca,sexo,cuidador,castrado,vacinado,rga,listaDePets) =>listaDePets.push({
    nome,
    idade,
    raca,
    sexo,
    castrado,
    vacinado,
    rga
})

adicionarPet("Toby",10,"poodle","macho","Luiza",true,true,12333,listaDePets)

// const petscadastrados = (listaDePets)=>{
    
//     for(let i=0; i<listaDePets.length;i++){
//         console.log("-".repeat(12))
//         console.log("Nome do Pet: " + listaDePets[i].nome)
//         console.log("Idade do Pet: "+listaDePets[i].idade)
//         console.log("Raça do Pet: "+listaDePets[i].raca)
//         console.log("castrado: "+listaDePets[i].castrado)
//         console.log("-".repeat(12))
//     }
// }

const petscadastrados=(lista)=>{lista.forEach((value)=>{
    console.log("-".repeat(12))
    console.log("Nome do Pet: " + value.nome)
    console.log("Idade do Pet: "+value.idade)
    console.log("Raça do Pet: "+value.raca)
    console.log("castrado: "+value.castrado)
    console.log("-".repeat(12))
})}



const castrarPet = (pet) =>{
    if(pet.castrado){
        console.log("O pet já está castrado")
    }else{
        pet.castrado=true
        console.log("O pet foi castrado com sucesso")
    }
}
const vacinarPet = pet => (pet) =>{
    if(pet.vacinado){
        console.log("O pet já está vacinado")
    }else{
        pet.vacinado=true
        console.log("O pet foi vacinado com sucesso")
    }
}
const servicos = (pet,servico)=>servico(pet)

const cadastrado = (lista,val)=>{lista.filter(pet=>pet.rga==val).length>0?true:false}

cadastrado(listaDePets,11111)
cadastrado(listaDePets,12345)

