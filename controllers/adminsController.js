const { Admin } = require('../models');

const AdminsController = {
    async index(req, res) {
        try {
            const admins = await Admin.findAll();
            res.json(admins);
        } catch (e) {
            res.status(500).json({ e: e.message });
        }
    },

    async show(req, res) {
        try {
            const admin = await Admin.findByPk(req.params.id);
            if (admin) {
                res.json(admin);
            } else {
                res.status(404).json({ error: 'Administrador não encontrado' });
            }
        } catch (e) {
            res.status(500).json({ e: e.message });
        }
    },

    async create(req, res) {
        try {
            const admin = await Admin.create(req.body);
            res.json(admin);
        } catch (e) {
            res.status(500).json({ e: e.message });
        }
    },

    async update(req, res) {
        try {
            const [updated] = await Admin.update(req.body, {
                where: { ID: req.params.id }
            });
            if (updated) {
                const updatedAdmin = await Admin.findByPk(req.params.id);
                res.json(updatedAdmin);
            } else {
                res.status(404).json({ error: 'Administrador não encontrado' });
            }
        } catch (e) {
            res.status(500).json({ error: error.message });
        }
    },

    async delete(req, res) {
        try {
          const deleted = await Admin.destroy({
            where: { ID: req.params.id }
          });
          if (deleted) {
            res.status(204).send();
          } else {
            res.status(404).json({ error: 'Administrador não encontrado' });
          }
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
};

module.exports = AdminsController;