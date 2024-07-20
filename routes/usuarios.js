const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarioController');

const authMiddleware = require('../middlewares/authMiddleware');

router.post('/login', UsuarioController.loginAluno);
router.get('/:id', UsuarioController.show);

router.use(authMiddleware);


router.get('/', UsuarioController.index);
router.post('/', UsuarioController.create);
router.put('/:id', UsuarioController.update);
router.delete('/:id', UsuarioController.delete);

module.exports = router;
