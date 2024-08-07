const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarioController');

const authMiddleware = require('../middlewares/authMiddleware');

router.post('/login', UsuarioController.loginAluno);
router.get('/:id', UsuarioController.show);
router.put('/:id', UsuarioController.update);

router.use(authMiddleware);


router.get('/', UsuarioController.index);
router.post('/', UsuarioController.create);
router.delete('/:id', UsuarioController.delete);

module.exports = router;
