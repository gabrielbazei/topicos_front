const api=require("./api");

async function salvaCadastro(dados){
  try {
    return await api.post("/clientes/salvar",{...dados});   
  } catch (error) {
    console.log("Error: "+error)
  }     
}

async function logar(dados){
  try {
    return await api.post("/clientes/logar",{...dados});   
  } catch (error) {
    console.log("Error: "+error)
  }     
}

module.exports={
  salvaCadastro,
  logar
}
/*
async function getInfo(){
   try {
     return await api.get("/getInfo");   
   } catch (error) {
     console.log("Error: "+error)
   }     
}


async function salvaCadastro(dados){
    try {
      console.log(dados)
      return await api.post("/clientes/salvar",{...dados});   
    } catch (error) {
      console.log("Error: "+error)
    }     
 }

 async function getDados(){
  try {
    return await api.get("/clientes/listar");   
  } catch (error) {
    console.log("Error: "+error)
  }     
}

async function getDadosPorChave(key){
  try {
    return await api.get("/clientes/listar/"+key);   
  } catch (error) {
    console.log("Error: "+error)
  }     
}


module.exports={
    getInfo,
    salvaCadastro,
    getDados,
    getDadosPorChave
}
*/