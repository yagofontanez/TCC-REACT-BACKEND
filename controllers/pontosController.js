const { Ponto } = require('../models');

const PontosController = {
    async index(req, res) {
        try {
            const pontos = await Ponto.findAll();
            res.json(pontos);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    },

    async show(req, res) {
        try {
            const ponto = await Ponto.findByPk(req.params.id);
            if (ponto) {
                res.json(ponto);
            } else {
                res.status(404).json({ error: 'Ponto não encontrado' });
            }
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    },

    async create(req, res) {
        try {
            const ponto = await Ponto.create(req.body);
            res.json(ponto);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    },

    async update(req, res) {
        try {
            const [updated] = await Ponto.update(req.body, {
                where: { ID: req.params.id }
            });

            if (updated) {
                const updatedPonto = await Ponto.findByPk(req.params.id);
                res.json(updatedPonto);
            } else {
                res.status(404).json({ error: 'Ponto não encontrado' });
            }
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    },

    async delete(req, res) {
        try {
            const deleted = await Ponto.destroy({
                where: { ID: req.params.id }
            });
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ error: 'Ponto não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = PontosController;
