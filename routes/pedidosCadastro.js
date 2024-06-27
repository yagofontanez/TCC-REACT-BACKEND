const express = require('express');
const router = express.Router();
const {
    getPedidosCadastro,
    createPedidoCadastro,
    deletePedidoCadastro
} = require('../controllers/pedidosCadastroController');

const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);


router.get('/', getPedidosCadastro);
router.post('/pedidosCadastro', createPedidoCadastro);
router.delete('/pedidosCadastro/:id', deletePedidoCadastro);

module.exports = router;
