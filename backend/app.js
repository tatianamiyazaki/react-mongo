const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')

const routes = require('./src/api/routes/routes.js')
const mongoose = require("mongoose");

require('dotenv/config')

// instanciar o express
const app = express();

app.use(bodyParser.json())

app.use(express.json())
app.use(routes)
 
if(process.env.CNX_TIPO == "local") {
    global.db = mongoose.connect('mongodb://localhost:27017/webiii')
} else {
    global.db = mongoose.connect('mongodb+srv://webiii:webiii@cluster0.idlui.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
}

   
//configurar a porta e url para execução do aplicativo
app.set('url', 'http://localhost:')
app.set('porta', 3001);

http.createServer(app).listen(app.get('porta'), function(){
    console.log('Servidor rodando na porta: '+app.get('url') +app.get('porta'))
    console.log("Conexao: " + process.env.CNX_TIPO)
})

module.exports = app;

