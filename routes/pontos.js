const express = require('express');
const router = express.Router();
const PontosController = require('../controllers/pontosController');

router.get('/', PontosController.index);
router.get('/:id', PontosController.show);
router.get('/', PontosController.create);
router.get('/:id', PontosController.update);
router.get('/', PontosController.delete);

module.exports = router;