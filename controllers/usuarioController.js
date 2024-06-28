const { Usuario, Faculdade } = require('../models');

const UsuarioController = {
  async index(req, res) {
    try {
      const usuarios = await Usuario.findAll({ include: 'faculdade', include: 'ponto' });
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async show(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.params.id, { include: 'faculdade', include: 'ponto' });
      if (usuario) {
        res.json(usuario);
      } else {
        res.status(404).json({ error: 'Usuario não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const usuario = await Usuario.create(req.body);
      res.json(usuario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const [updated] = await Usuario.update(req.body, {
        where: { ID: req.params.id }
      });
      if (updated) {
        const updatedUsuario = await Usuario.findByPk(req.params.id, { include: 'faculdade', include: 'ponto' });
        res.json(updatedUsuario);
      } else {
        res.status(404).json({ error: 'Usuario não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await Usuario.destroy({
        where: { ID: req.params.id }
      });
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'Usuario não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = UsuarioController;
