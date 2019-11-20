const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// String de conexão com o mongodb
// porta padrão do mongo: 27017
// banco de dados utilizado: reprograma-hemocentros
mongoose.connect('mongodb://localhost:27017/reprograma-hemocentros',  { useNewUrlParser: true });

// representação da conexão com o banco de dados 
let db = mongoose.connection;
// após a conexão, caso ocorra algum erro, este será logado no console
db.on('error', console.log.bind(console, 'connection error:'));
// uma vez que a conexão esteja aberta, uma mensagem de sucesso será exibida
db.once('open', () => {
  console.log('conexão feita com sucesso.');
});

// middlewares
app.use(cors());
app.use(bodyParser.json());

// rotas
const hemocentros = require('./routes/hemocentrosRoutes');
app.use('/hemocentros', hemocentros);

module.exports = app;