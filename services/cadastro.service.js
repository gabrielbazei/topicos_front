const api=require("./api");

async function logar(dados){
  try {
    return await api.post("/clientes/logar",{...dados});   
  } catch (error) {
    console.log("Error: "+error)
  }     
}
async function procuraProblema(dados){
  try {
    return await api.post("/problema/procura",{...dados});   
  } catch (error) {
    console.log("Error: "+error)
  }     
}
async function mostraproblemas(dados){
  try {
    return await api.post("/problema/todos",{...dados});   
  } catch (error) {
    console.log("Error: "+error)
  }     
}
async function salvarProblema(dados){
  try {
    
    return await api.post("/problema/salvar",{...dados});   
  } catch (error) {
    console.log("Error: "+error)
  }     
}
async function atualizaProblema(dados){
  try {
    return await api.post("/problema/atualizar",{...dados});   
  } catch (error) {
    console.log("Error: "+error)
  }     
}

async function procuraComentario(dados){
  try {
    return await api.post("/comentario/procura",{...dados});   
  } catch (error) {
    console.log("Error: "+error)
  }     
}
async function novoComentario(dados){
  try {
    return await api.post("/comentario/novo",{...dados});   
  } catch (error) {
    console.log("Error: "+error)
  }     
}

module.exports={
  logar,
  procuraProblema,
  procuraComentario,
  mostraproblemas,
  salvarProblema,
  atualizaProblema,
  novoComentario
}