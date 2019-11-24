const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema de clientes
// instancia um novo schema, que representa o objeto cliente - utilizado no model
const HemocentrosSchema = new Schema({
    nome: {type: String, required: true},
    endereco: {type: String},
    cidade: {type: String},
    horarioAtendimento: {type: String},
    totalSangue: {type: Number}
}, 
{
    versionKey: false
});

// cria o model de clientes
// este método recebe uma string com o nome do model e um objeto Schema
const Hemocentros = new mongoose.model('Hemocentros', HemocentrosSchema);

module.exports = Hemocentros;