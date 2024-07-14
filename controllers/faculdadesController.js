const { Faculdade } = require('../models');

const FaculdadesController = {
    async index(req, res) {
        try {
            const faculdades = await Faculdade.findAll();
            console.log(faculdades, 'faculdadesss')
            res.json(faculdades);
        } catch (e) {
            res.status(500).json({ e: e.message });
        }
    },

    async show(req, res) {
        try {
            const faculdade = await Faculdade.findByPk(req.params.id);
            if (faculdade) {
                res.json(faculdade);
            } else {
                res.status(404).json({ error: 'Faculdade não encontrada' });
            }
        } catch (e) {
            res.status(500).json({ e: e.message });
        }
    },

    async create(req, res) {
        try {
            const faculdade = await Faculdade.create(req.body);
            res.json(faculdade);
        } catch (e) {
            res.status(500).json({ e: e.message });
        }
    },

    async update(req, res) {
        try {
            const [updated] = await Faculdade.update(req.body, {
                where: { ID: req.params.id }
            });
            if (updated) {
                const updatedFaculdade = await Faculdade.findByPk(req.params.id);
                res.json(updatedFaculdade);
            } else {
                res.status(404).json({ error: 'Faculdade não encontrada' });
            }
        } catch (e) {
            res.status(500).json({ error: error.message });
        }
    },

    async delete(req, res) {
        try {
            const deleted = await Faculdade.destroy({
                where: { ID: req.params.id }
            });
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ error: 'Faculdade não encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = FaculdadesController;