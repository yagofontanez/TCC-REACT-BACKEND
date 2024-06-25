const { PedidoCadastro, Faculdade } = require('../models');

const getPedidosCadastro = async (req, res) => {
    try {
        const pedidosCadastro = await PedidoCadastro.findAll({
            include: {
                model: Faculdade,
                as: 'faculdade',
                attributes: ['ID', 'NOME_FACULDADE'],
            },
        });
        res.status(200).json(pedidosCadastro);
    } catch (error) {
        console.error('Erro ao obter pedidos de cadastro:', error);
        res.status(500).json({ error: error.message });
    }
};

const createPedidoCadastro = async (req, res) => {
    const { NOME_PEDIDO, SOBRENOME_PEDIDO, EMAIL_PEDIDO, TELEFONE_PEDIDO, FACULDADE_PEDIDO } = req.body;

    try {
        const newPedidoCadastro = await PedidoCadastro.create({
            NOME_PEDIDO,
            SOBRENOME_PEDIDO,
            EMAIL_PEDIDO,
            TELEFONE_PEDIDO,
            FACULDADE_PEDIDO,
        });
        res.status(201).json(newPedidoCadastro);
    } catch (error) {
        console.error('Erro ao criar pedido de cadastro:', error);
        res.status(500).json({ error: error.message });
    }
};

const deletePedidoCadastro = async (req, res) => {
    const { id } = req.params;

    try {
        const numDeleted = await PedidoCadastro.destroy({ where: { ID: id } });
        if (numDeleted === 0) {
            return res.status(404).json({ error: 'Pedido de cadastro não encontrado' });
        }
        res.status(204).send();
    } catch (error) {
        console.error('Erro ao deletar pedido de cadastro:', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getPedidosCadastro,
    createPedidoCadastro,
    deletePedidoCadastro,
};
