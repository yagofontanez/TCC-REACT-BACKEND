const express = require('express');
const router = express.Router();
const PontosController = require('../controllers/pontosController');

const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);


router.get('/', PontosController.index);
router.get('/:id', PontosController.show);
router.post('/', PontosController.create);
router.put('/:id', PontosController.update);
router.delete('/:id', PontosController.delete);

module.exports = router;