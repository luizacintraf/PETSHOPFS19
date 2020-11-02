
const adicionarPet = (nome,idade,raca,sexo,cuidador,castrado,vacinado,rga,listaDePets) =>listaDePets.push({
    nome,
    idade,
    raca,
    sexo,
    castrado,
    vacinado,
    rga
})


// const petscadastrados=(lista)=>{lista.forEach((value)=>{
//     console.log("-".repeat(12))
//     console.log("Nome do Pet: " + value.nome)
//     console.log("Idade do Pet: "+value.idade)
//     console.log("Raça do Pet: "+value.raca)
//     console.log("castrado: "+value.castrado)
//     console.log("-".repeat(12))
// })}

const listarPets =(lista)=>{
    let resultado=""
    lista.forEach((value)=>{
        resultado+=("-".repeat(12))
        resultado+=("Nome do Pet: " + value.nome)
        resultado+=("Idade do Pet: "+value.idade)
        resultado+=("Raça do Pet: "+value.raca)
        resultado+=("castrado: "+value.castrado)
        resultado+=("-".repeat(12))
    })
    return resultado

}



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

module.exports={adicionarPet,petscadastrados,castrarPet,vacinarPet,servicos,cadastrado}



