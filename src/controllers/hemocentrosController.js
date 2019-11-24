const Model = require('../model/hemocentrosModel');

exports.postHemocentro = (req, res, next) => {
    const hemocentro = new Model(req.body);
    hemocentro.save((err) => {
        if (err) return res.status(500).send(err);
        return res.status(201).send({
            status: true,
            mensagem: 'novo hemocentro incluido com sucesso'
        });
    });
};
exports.getAll = (req, res, next) => {
    Model.find((err, hemocentros) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(hemocentros);
    });
};
exports.updateHemocentro = (req, res, next) => {
    Model.update(
        //{ nome: req.nome },
        { $set: req.body },
        { upsert: true },
        (err) => {
            if (err) return res.status(500).send(err);
        });    
        res.status(200).send({ mensagem: "Posto de coleta atualizado com sucesso!" });
};