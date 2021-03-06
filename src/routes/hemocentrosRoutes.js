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
   [
      {
      "_id": "5df3ddb2bdc1987f8791aa53",
      "nome": "Unimed Leste Paulista",
      "endereco": "Rua João Rabelo Junqueira, 12",
      "cidade": "São João da Boa Vista",
      "horarioAtendimento": "6h30 às 10h",
      "totalSangue": 42,
      "localizacao": {
         "type": "Point",
         "coordinates": [
         -46.79347,
         -21.98243
         ]
      }
   },
   {
      "_id": "5df6547f2ea1c1400f2cf27b",
      "nome": "Fundação Pró-Sangue Barueri",
      "endereco": "Rua Ângela Mirella, 354",
      "cidade": "Barueri",
      "localizacao": {
         "type": "Point",
         "coordinates": [
         -46.8728181,
         -23.4966131
         ]
      },
      "horarioAtendimento": "8h às 16h",
      "totalSangue": 98
      },...
   ]
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
   {
      "cuidados pós-doação de sangue": {
         "imediatamente após doar": [
            "permanecer sentado por 15 minutos para evitar fraqueza, tontura e sensação de desmaio",
            "aceitar o lanche e bebida oferecidos"
         ],
         "primeiras 4 horas": [
            "aumentar a ingestão hídrica é muito importante para repor o volume de sangue doado",
            "não retirar o curativo",
            "não fumar"
         ],
         "até 12 horas": [
            "não fazer exercício físico extenuante",
            "não ingerir bebidas alcoólicas"
         ]
      }
   }
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
 * @api {get} /hemocentros/localidade/maisproximo
 * @apiName GetNearest
 * @apiGroup Hemocentros
 * *
 * @apiSuccess {Object} hemocentro Hemocentro mais próximo do usuário
 *
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 * {
   "_id": "5df6547f2ea1c1400f2cf27b",
   "nome": "Fundação Pró-Sangue Barueri",
   "endereco": "Rua Ângela Mirella, 354",
   "cidade": "Barueri",
   "localizacao": {
      "type": "Point",
      "coordinates": [
         -46.8728181,
         -23.4966131
      ]
   },
   "horarioAtendimento": "8h às 16h",
   "totalSangue": 98
 * }
 *
 */
router.get('/localidade/maisproximo', controller.getNearest);


/**
 * @api {get} /hemocentros/localidade:cidade
 * @apiParam {String} cidade Nome da cidade desejada
 * @apiGroup Hemocentros
 * @apiName GetCidade
 * *
 * @apiSuccess {Object[]} hemocentros Lista de todos os hemocentros em determinada cidade
 *
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
   [
      {
         "_id": "5df77d6b8d0cf616077f970b",
         "nome": "Posto Dante Pazzanese",
         "endereco": "Av. Dr. Dante Pazzanese, 500",
         "cidade": "São Paulo",
         "localizacao": {
            "type": "Point",
            "coordinates": [
            -46.65228,
            -23.58551
            ]
         },
         "horarioAtendimento": "8h às 13h",
         "totalSangue": 74
      },
      {
         "_id": "5df780108d0cf616077f970c",
         "nome": "Posto Clínicas",
         "endereco": "Av. Dr. Enéas Carvalho de Aguiar, 155, 1º andar",
         "cidade": "São Paulo",
         "localizacao": {
            "type": "Point",
            "coordinates": [
            -46.6681,
            -23.55743
            ]
         },
         "horarioAtendimento": "7h às 18h",
         "totalSangue": 180
      },...
   ]

 *
 */
router.get('/localidade/:cidade', controller.getCidade);

/**
 * @api {put} /hemocentros/:nome
 * @apiParam {String} nome Nome único do posto de coleta
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
 * @apiParam {String} nome Nome único do posto de coleta
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