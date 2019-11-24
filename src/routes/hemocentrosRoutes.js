const controller = require('../controllers/hemocentrosController');
const router = require('express').Router();

// middlewares 
router.use('/:nome', (req, res, next) => {
    req.nome = req.params.nome;
    next();
});

router.get('/', controller.getInfo);
router.get('/todos', controller.getAll);
router.post('/todos', controller.postHemocentro);
router.get('/localidade/:cidade', controller.getCidade);
router.put('/:nome', controller.updateHemocentro);
router.delete('/:nome', controller.deleteHemocentro);

module.exports = router;