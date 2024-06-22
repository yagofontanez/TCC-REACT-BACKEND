const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarioController');

router.get('/', UsuarioController.index);
router.get('/:id', UsuarioController.show);
router.post('/', UsuarioController.create);
router.put('/:id', UsuarioController.update);
router.delete('/:id', UsuarioController.delete);

module.exports = router;
