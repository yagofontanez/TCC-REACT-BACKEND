const express = require('express');
const router = express.Router();
const {
    getPedidosCadastro,
    createPedidoCadastro,
    deletePedidoCadastro
} = require('../controllers/pedidosCadastroController');

const authMiddleware = require('../middlewares/authMiddleware');

router.post('/pedidosCadastro', createPedidoCadastro);
router.get('/', getPedidosCadastro);

router.use(authMiddleware);


router.delete('/:id', deletePedidoCadastro);

module.exports = router;
