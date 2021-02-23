const express = require("express"); //Importação
const app = express(); //Inicialização

app.get("/", function(req, res){
    res.send("Hello world!");
})

app.get("/test", function(req, res){
    res.send("Testando rota");
})

app.get("/ola/:nome?", function(req, res){
    res.send("Olá " + (req.params.nome ? req.params.nome : ""));
})

app.get("/hey", function(req, res){
    var nome = req.query["nome"];
    res.send("Olá " + (nome ? nome : ""));
})

app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro!", erro);
    } else {
        console.log("Servidor iniciado com sucesso!");
    }
});