const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// String de conexão com o mongodb local:
// mongoose.connect('mongodb://localhost:27017/reprograma-hemocentros'
mongoose.connect('mongodb+srv://admin:admin@reprograma-valentina-4dsq6.mongodb.net/test', {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false 
})
  .then(() => console.log('conectado ao MongoDB Atlas!'))
  .catch((err) => console.log(`erro de conexão ${err}`));

// middlewares
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());

// rotas
const hemocentros = require('./routes/hemocentrosRoutes');
app.use('/hemocentros', hemocentros)

// apiDoc
app.get('/api-doc', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});

module.exports = app;