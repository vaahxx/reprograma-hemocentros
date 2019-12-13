const controller = require('../controllers/hemocentrosController');
const router = require('express').Router();

// middlewares 
router.use('/:nome', (req, res, next) => {
    req.nome = req.params.nome;
    next();
});

/**
 * @api {get} /hemocentros/todos 
 * @apiGroup Hemocentros
 * @apiName GetAll
 * *
 * @apiSuccess {Object[]} hemocentros Lista de todos os hemocentros
 * 
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *  [{
    "_id": "5ddb15d5aba7f004139b9f84",
    "nome": "Hospital do ABC",
    "endereco": "Avenida São João de Meriti 174",
    "cidade": "São Paulo",
    "horarioAtendimento": "9h às 17h",
    "totalSangue": 120
 *  },...]
 *
 */
router.get('/todos', controller.getAll);

/**
 * @api {get} /hemocentros/
 * @apiName GetInfo
 * @apiGroup Hemocentros
 * *
 * @apiSuccess {JSON} infos Informações sobre doação de sangue
 *
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *  [{
 *  }]
 *
 */
router.get('/', controller.getInfo);

/**
 * @api {post} /hemocentros/todos
 * @apiName postHemocentro
 * @apiGroup Hemocentros
 * *
 * @apiSuccess (Created 201) {JSON} mensagem Mensagem de sucesso
 *
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 201 Created
 *  {
    "status": true,
    "mensagem": "novo hemocentro incluido com sucesso"
 *  }  
 *
 */
router.post('/todos', controller.postHemocentro);

/**
 * @api {get} /hemocentros/localidade:cidade
 * @apiGroup Hemocentros
 * @apiName GetCidade
 * *
 * @apiSuccess {Object[]} hemocentros Lista de todos os hemocentros em determinada cidade
 *
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *  [{
    "_id": "5ddb15d5aba7f004139b9f84",
    "nome": "Hospital do ABC",
    "endereco": "Avenida São João de Meriti 174",
    "cidade": "São Paulo",
    "horarioAtendimento": "9h às 17h",
    "totalSangue": 120
 *  },...]
 *
 */
router.get('/localidade/:cidade', controller.getCidade);

/**
 * @api {put} /hemocentros/:nome
 * @apiName updateHemocentro
 * @apiGroup Hemocentros
 * *
 * @apiSuccess {JSON} mensagem Mensagem de sucesso
 *
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 Success
 *  {
    "mensagem": "Posto de coleta atualizado com sucesso!"
 *  }
 *
 */
router.put('/:nome', controller.updateHemocentro);

/**
 * @api {delete} /hemocentros/:nome
 * @apiName deleteHemocentro
 * @apiGroup Hemocentros
 * *
 * @apiSuccess {JSON} mensagem Mensagem de sucesso
 *
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 Success
 *  {
     "mensagem": "Hemocentro removido com sucesso."
 *  }
 *
 */
router.delete('/:nome', controller.deleteHemocentro);

module.exports = router;