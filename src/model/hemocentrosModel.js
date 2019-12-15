const mongoose = require('mongoose');
var { Point } = require('mongoose-geojson-schemas');
const Schema = mongoose.Schema;

// Schema de hemocentros
// instancia um novo schema, que representa o objeto cliente - utilizado no model
const HemocentrosSchema = new Schema({
    nome: {type: String, required: true},
    endereco: {type: String},
    cidade: {type: String},
    localizacao: {Point, isAsync: false},
    horarioAtendimento: {type: String},
    totalSangue: {type: Number}
}, 
{
    versionKey: false
});

// cria o model de hemocentros
// este método recebe uma string com o nome do model e um objeto Schema
const Hemocentros = new mongoose.model('Hemocentros', HemocentrosSchema);

module.exports = Hemocentros;