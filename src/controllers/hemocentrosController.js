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
exports.getInfo = (req, res, next) => {
    return res.status(200).send({
        mensagem: 'quem pode doar e quem nao pode doar?'
    });
};
exports.getAll = (req, res, next) => {
    Model.find((err, hemocentros) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(hemocentros);
    });
};
exports.getCidade = (req, res, next) => {
    Model.find({"cidade": req.params.cidade}, (err, hemocentros) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(hemocentros);
    });
};
exports.updateHemocentro = (req, res, next) => {
    Model.update(
        { nome: req.nome },
        { $set: req.body },
        { upsert: true },
        (err) => {
            if (err) return res.status(500).send(err);
        });    
        res.status(200).send({ mensagem: "Posto de coleta atualizado com sucesso!" });
};
exports.deleteHemocentro = (req, res, next) => {
    Model.findOne({ "nome": req.nome }, function (err, hemocentro) {
        if (err) res.status(500).send(err);

        if (!hemocentro) return res.status(200).send({ mensagem: "infelizmente não localizamos o posto de coleta para remover" });

        hemocentro.remove(function (err) {
            if (!err) {
                res.status(200).send({ message: 'Hemocentro removido com sucesso.' });
            }
        })
    })
};