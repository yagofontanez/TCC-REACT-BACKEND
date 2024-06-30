const express = require('express');
const router = express.Router();
const VeiculoController = require('../controllers/veiculosController');

const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

router.get('/', VeiculoController.getAllVeiculos);
router.get('/:id', VeiculoController.getVeiculoById);
router.post('/', VeiculoController.postVeiculo);
router.put('/:id', VeiculoController.patchVeiculo);
router.delete('/:id', VeiculoController.deleteVeiculo);

module.exports = router;