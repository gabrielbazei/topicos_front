var express=require("express");
//middleware - irá fazer um parser do dados do front e formatar em req.body
var bodyParser = require('body-parser')
//framework express
var app=express();
//const PORT=8000;
const port = process.env.PORT || 8000
//express-handlebars - https://github.com/ericf/express-handlebars
const { engine }   = require('express-handlebars');
// define a extensão e a instância do handlebars com o 
//modelo que será interpretado o código  . Todos arquivos html devem terminar
//com .hbs

const service=require("./services/cadastro.service");
const problemas=require("./services/problemas");


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

app.get("/cadastro", function(req,res){
    res.render('cadastro',{})
});


app.post("/procurar",async function(req,res){
    res.render('tela.ejs',{
        lista: problemas.mostraEspecifico(req.body.tipo,req.body.problema)   
    });
})
app.post("/novoProblema",async function(req,res){
    res.render('tela.ejs',{
        lista: problemas.novoProblema(req.body.tipo)   
    });
})
app.post("/listaUsuarios",async function(req,res){
    res.render('tela.ejs',{
        lista: problemas.listaUsuarios(req.body.tipo)   
    });
})
app.post("/salvarProblema",async function(req,res){
    res.render('tela.ejs',{
        lista: problemas.mostraTodos(req.body.tipo)   
    });
})
app.post("/salvarUsuario",async function(req,res){
    res.render('tela.ejs',{
        lista: problemas.mostraTodos(req.body.tipo)   
    });
})
app.post("/usuarioEspecifico",async function(req,res){
    res.render('tela.ejs',{
        lista: problemas.usuarioEspecifico(req.body.tipo,req.body.usuario)   
    });
})
app.post("/sair",async function(req,res){
    res.render('index.hbs',{});
})

app.post("/cadastrar",async function(req,res){
    let senha=req.body.senha;
    if (senha == req.body.confSenha){
        const response= await service.salvaCadastro({
            login:req.body.login,
            senha:senha});
        if (response.status == 200){
            res.render('cadastro',{})
        } else if(response.status == 201) {
            res.render('index',{})
        }
        
    } else {
        res.render('cadastro',{})
    }
    
});
app.post("/logar",async function(req,res){
    const response= await service.logar({
        login:req.body.login,
        senha:req.body.senha});
        if (response.status == 200){
            res.render('index',{})
        } else if(response.status == 201 & (response.data=="admin" | response.data=="colab")) {
            res.render('tela.ejs',{
                lista: problemas.mostraTodos(response.data)
            })
        } else {
            res.render('tela.ejs',{
                lista: problemas.mostraTodos("pop")
            })
        }
});
app.listen(PORT,function(){
    console.log("Frontend está rodando na porta:"+PORT);
})

/*app.get("/info", async function(req,res){
    const response= await service.getInfo();
    console.log(response.data.user);
    res.render('form',{codigo_usuario:12345,nome_usuario:"joao"})
    
});

app.post("/gravar", async function(req,res){
    
    const response= await service.salvaCadastro({codigo:req.body.codigo,
                                                 nome:req.body.nome,
                                                 endereco:req.body.endereco});
    console.log(response.data);
    res.render('form');
    
});

app.get("/buscarTodos", async function(req,res){
    const {data}= await service.getDados();
    console.log(data);
    res.render('form',data)
    
});

app.get("/buscar/:key", async function(req,res){
    const key=req.params.key;
    const {data}= await service.getDadosPorChave(key);
    console.log(data);
    res.render('form',{data})
    
});






*/
