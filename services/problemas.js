
function mostraEspecifico(tipo,id){
   let retorno='  <h1>Bem vindo</h1> <h1>Este é um problema especifico</h1>'
     if (tipo== "pop"){
      retorno+='<p><input type="text" name="id" value="'+id+'" /disabled></p><p><input type="text" name="titulo" value="Teste" /disabled></p><p><input type="text" name="local" value="Rua dos bobos" /disabled></p><p><input type="text" name="titulo" value="Teste" /disabled></p><p><input type="text" name="local" value="Rua dos bobos" /disabled></p><p><select name="situacao" id="situacao" /disabled><option selected>Aberta</option><option >Fechada</option><option >Em andadamento</option></select></p><p><textarea name="descricao" id="desc"/disabled>Acima de tudo, é fundamental ressaltar que a determinação clara de objetivos cumpre um papel essencial na formulação das direções preferenciais no sentido do progresso.</textarea></p>' ;
     } else {
      retorno+='<form method="post" action="/salvarProblema"><p><input type="text" name="id" value="'+id+'" /disabled></p><p><input type="text" name="titulo" value="Teste"></p><p><input type="text" name="local" value="Rua dos bobos"></p><p><select name="situacao" id="situacao"><option selected>Aberta</option><option >Fechada</option><option >Em andadamento</option></select></p><p><textarea name="descricao" id="desc">Acima de tudo, é fundamental ressaltar que a determinação clara de objetivos cumpre um papel essencial na formulação das direções preferenciais no sentido do progresso.</textarea></p> <p class="submit"><input type="submit" name="commit" value="Salvar"></p><input type="text" value="'+tipo+'" name="tipo" /hidden></form>' ;
     }
     return retorno
}

function mostraTodos(tipo){
      let retorno="<h1>Bem vindo</h1><h1>Está é sua lista de problemas</h1>";
      retorno += '<h1><form method="post" action="/sair"><p><input type="submit" name="commit" value="Sair"></p><input type="text" value="'+tipo+'" name="tipo" /hidden></form></h1>'
      if (tipo=="admin"){
         retorno += '<h1><form method="post" action="/listaUsuarios"><p><input type="submit" name="commit" value="Lista usuarios"></p><input type="text" value="'+tipo+'" name="tipo" /hidden></form></h1>'
      }
      if (tipo=="admin" | tipo=='colab'){
         retorno += '<h1><form method="post" action="/novoProblema"><p><input type="submit" name="commit" value="Novo problema"></p><input type="text" value="'+tipo+'" name="tipo" /hidden></form></h1>'
      }
      retorno+= '<form method="post" action="/procurar">'
      for (var i = 0; i < 2; i++) {
         retorno += '<p><input type="submit" name="problema" value="id: '+i+' | Teste '+i+'"></p>'
      }
      retorno+='<input type="text" value="'+tipo+'" name="tipo" /hidden></form>'
      return retorno
}

function novoProblema(tipo){
   let retorno="<h1>Bem vindo</h1><h1>Criação de um novo problema</h1>";
   retorno+='<form method="post" action="/salvarProblema"><p><input type="text" name="id" value=""></p><p><input type="text" name="titulo" value=""></p><p><input type="text" name="local" value=""></p><p><select name="situacao" id="situacao" /disabled><option selected>Aberta</option><option >Fechada</option><option >Em andadamento</option></select></p><p><textarea name="descricao" id="desc"></textarea></p> <p class="submit"><input type="submit" name="commit" value="Salvar"></p><input type="text" value="'+tipo+'" name="tipo" /hidden></form>' ;
   return retorno
}
function listaUsuarios(tipo){
   let retorno="<h1>Bem vindo</h1><h1>Editando usuarios</h1>";
   retorno+= '<form method="post" action="/usuarioEspecifico">'
   for (var i = 0; i < 2; i++) {
      retorno += '<p><input type="submit" name="usuario" value="id: '+i+' | Login: teste | Nome: teste"></p>'
   }
   retorno+='<input type="text" value="'+tipo+'" name="tipo" /hidden></form>'
   return retorno
}
function usuarioEspecifico(tipo,id){
   let retorno="<h1>Bem vindo</h1><h1>Editando usuario especifico</h1>";
   retorno+='<p><label>id :</label><br><input type="text" value="'+id+'" /disabled></p>'
   retorno+='<form method="post" action="/salvarUsuario">'
   retorno+='<p><label>nome :</label><input type="text" value="teste"></p>'
   retorno+='<p><label>login :</label><input type="text" value="teste"></p>'
   retorno+='<p><label>Senha :</label><input type="password" value=""></p>'
   retorno+='<p><label>Telefone :</label><input type="number" value="12345"></p>'
   retorno+='<p><label>email :</label><br><input type="email" id="email" value=""></p>'
   retorno+='<p><label>endereço :</label><input type="text" value="Rua dos bobos"></p>'
   retorno+='<p><label>Tipo :</label><br><select name="permissao" id="situacao"><option >Colaborador</option><option selected>Poplação</option></select></p>'
   retorno+='<p><input type="submit" name="commit" value="salvar"></p>'
   retorno+='<input type="text" value="'+tipo+'" name="tipo" /hidden></form>'
   return retorno
}
module.exports={
    mostraTodos,
    mostraEspecifico,
    novoProblema,
    listaUsuarios,
    usuarioEspecifico
  }


