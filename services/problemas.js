function mostraTodos(resposta){
   var retorno = "";
   
      for (var i = 0; i < resposta.length; i++) {
         retorno += '<tr>'
         retorno+='          <td><button type="submit" name="problema" class="btn btn-sm btn-outline-secondary" value="'+resposta[i].id+'">'+resposta[i].id+'</button></td>'
         retorno += '        <td>'+resposta[i].titulo+'</td>'
         retorno += '        <td>'+resposta[i].local+'</td>'
         //3 andamento, 2 fechada, 1 aberta
         if (resposta[i].situacao==3){
            retorno += '        <td>andamento</td>'
         } else if (resposta[i].situacao==2){
            retorno += '        <td>fechado</td>'
         } else {
            retorno += '        <td>aberto</td>'
         }
         retorno += '</tr>'
      }
      return retorno
}
function mostraEspecifico(id,titulo,situacao,local,desc){
   var op1,op2,op3;
   //3 andamento, 2 fechada, 1 aberta
   if (situacao==3){
      op3 = "selected";
   } else if (situacao==2){
      op2 = "selected";
   } else {
      op1 = "selected";
   }
   var retorno = "";
   retorno+='<h5>ID: </h5>'
   retorno+='<input type="text"  id="id" disabled name="id" value="'+id+'">'
   retorno+='<input type="text"  id="id" hidden name="id" value="'+id+'">'
   retorno+='<h5>Titulo: </h5>'
   retorno+='<input type="text" id="titulo" disabled name="titulo" value="'+titulo+'">'
   retorno+='<h5>Local: </h5>'
   retorno+='<input type="text" id="local" disabled name="local" value="'+local+'">'
   retorno+='<h5>Situação: </h5>'
   retorno+='<select name="situacao" id="situacao"><option '+op1+'>aberta</option><option '+op2+'>fechada</option><option '+op3+'>em andadamento</option></select>'
   retorno+='<h5>Descrição: </h5>'
   retorno+='<textarea name="descricao" disabled id="desc">'+desc+'</textarea>'
   retorno+='<input type="submit" id="salvar" name="commit" value="Salvar">'
   return retorno
}
function novoProblema(){
   let retorno="<h1>Bem vindo</h1><h1>Criação de um novo problema</h1>";
   retorno+='<form method="post" action="/salvarProblema"><p><input type="text" name="id" value=""></p><p><input type="text" name="titulo" value=""></p><p><input type="text" name="local" value=""></p><p><select name="situacao" id="situacao" /disabled><option selected>Aberta</option><option >Fechada</option><option >Em andadamento</option></select></p><p><textarea name="descricao" id="desc"></textarea></p> <p class="submit"><input type="submit" name="commit" value="Salvar"></p><input type="text" value="'+tipo+'" name="tipo" /hidden></form>' ;
   return retorno
}
function carregaComentarios(resposta){
   var retorno = "";
   for (var i = 0; i < resposta.length; i++) {
      retorno+='<h5>'+resposta[i].nome+'</h5>'
      retorno+='<textarea name="comentario" id="comentario" disabled>'+resposta[i].desc+'</textarea>'
   }
   return retorno
}
function cadastrarProblema(){
   var retorno=""
   retorno+='<h5>Titulo: </h5>'
   retorno+='<input type="text" id="titulo" name="titulo" value="">'
   retorno+='<h5>Local: </h5>'
   retorno+='<input type="text" id="local" name="local" value="">'
   retorno+='<h5>Situação: </h5>'
   retorno+='<select name="situacao" disabled id="situacao"><option select>aberta</option><option>fechada</option><option>em andadamento</option></select>'
   retorno+='<h5>Descrição: </h5>'
   retorno+='<textarea name="descricao"  id="desc"></textarea>'
   retorno+='<input type="submit" id="salvar" name="commit" value="Salvar">'
   return retorno
}
module.exports={
    mostraTodos,
    novoProblema,
    mostraEspecifico,
    carregaComentarios,
    cadastrarProblema
  }


