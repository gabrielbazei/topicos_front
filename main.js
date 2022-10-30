var express=require("express");
//middleware - irá fazer um parser do dados do front e formatar em req.body
var bodyParser = require('body-parser')
//framework express
var app=express();
//const PORT=8000;
const PORT = process.env.PORT || 8000
//express-handlebars - https://github.com/ericf/express-handlebars
const { engine }   = require('express-handlebars');
// define a extensão e a instância do handlebars com o 
//modelo que será interpretado o código  . Todos arquivos html devem terminar
//com .hbs

const service=require("./services/cadastro.service");
const problemas=require("./services/problemas");
const { text } = require("body-parser");


app.engine('hbs', engine({extname: '.hbs',defaultLayout: null}));

// define qual o template a ser utilizado no express
app.set('view engine', 'hbs');
//define onde estão as views .hbs
app.set("views", "./views");
//define o uso do body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));



app.get("/", function(req,res){
    res.render('index',{})
});
//ok
app.post("/logar",async function(req,res){
    const response= await service.logar({
        login:req.body.login,
        senha:req.body.senha});

        if(response.status == 201) {
            const response2= await service.mostraproblemas({});
            res.render('dashboard.ejs',{
                lista: problemas.mostraTodos(response2.data),
            })
        } else{
            res.render('index',{})
        }
});
//ok
app.post("/procurar",async function(req,res){
    var id=req.body.problema;
    const response= await service.procuraProblema({
        problemaID:id});
    var titulo = response.data.titulo
    var situacao = response.data.situacao
    var local = response.data.local
    var desc = response.data.desc
    const response2= await service.procuraComentario({
        problemaID:id});
    res.render('problema.ejs',{
        problema: problemas.mostraEspecifico(id,titulo,situacao,local,desc),
        Comentarios: problemas.carregaComentarios(response2.data),
        novoId: id
    });
})
//ok
app.post("/novoProblema",async function(req,res){
    res.render('cadastrarproblema.ejs',{
        problema: problemas.cadastrarProblema()   
    });
})

app.post("/salvarProblema",async function(req,res){
    var situacao = req.body.situacao
    var id = req.body.id;
    var x=0;
    //3 andamento, 2 fechada, 1 aberta
    if (situacao == "em andadamento"){
        x=3;
     } else if (situacao == "fechada"){
        x=2
     } else {
        x=1;
     }
     const response= await service.atualizaProblema({
        id:id,
        situacao:x
    }); 
    res.redirect("/");

})
app.post("/salvarProblemaNovo",async function(req,res){
    var titulo = req.body.titulo
    var situacao=1;
    var local = req.body.local
    var desc = req.body.desc
    const novo ={
        titulo,
        situacao,
        local,
        desc
    }
    const response= await service.salvarProblema({
        problemaNovo:novo});
    console.log(response.status +": "+ response.data)
    res.redirect("/");
})
app.post("/sair",async function(req,res){
    res.render('index.hbs',{});
})


app.post("/novocomentario",async function(req,res){
    var nome= req.body.nome;
    var texto = req.body.novoTexto;
    const response= await service.novoComentario({
        nome:nome,
        texto:texto
    });
    res.redirect("/");
})

app.listen(PORT,function(){
    console.log("Frontend está rodando na porta:"+PORT);
})