const controller = require('../controllers/hemocentrosController');
const router = require('express').Router();

// middlewares de consistencia de input ou para anexar algo ao obj request

router.get('/todos', controller.getAll);
router.get('/', controller.getInfo);
router.get('/localidade/:cidade', controller.getCidade);
router.post('todos', controller.postHemocentro);
router.put('/:nome', controller.updateHemocentro);
router.delete('/:nome', controller.deleteHemocentro);

module.exports = router;