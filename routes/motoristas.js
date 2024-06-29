const express = require('express');
const router = express.Router();
const MotoristaController = require('../controllers/motoristasController');

const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

router.get('/', MotoristaController.getAllMotoristas);
router.get('/:id', MotoristaController.getMotoristaById);
router.post('/', MotoristaController.createMotorista);
router.put('/:id', MotoristaController.patchMotorista);
router.delete('/:id', MotoristaController.deleteMotorista);

module.exports = router;