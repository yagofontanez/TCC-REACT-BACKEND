const { Motorista, Ponto } = require("../models");

const MotoristaController = {
  async getAllMotoristas(req, res) {
    try {
      const motoristas = await Motorista.findAll({ include: "ponto" });
      res.json(motoristas);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },

  async getMotoristaById(req, res) {
    try {
      const motorista = await Motorista.findByPk(req.params.id, {
        include: "ponto",
      });
      if (motorista) {
        res.json(motorista);
      } else {
        res.status(404).json({ error: "Motorista não encontrado" });
      }
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },

  async createMotorista(req, res) {
    try {
      const motorista = await Motorista.create(req.body);
      res.json(motorista);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },

  async patchMotorista(req, res) {
    try {
      const [updated] = await Motorista.update(req.body, {
        where: { ID: req.params.id },
      });
      if (updated) {
        const updatedMotorista = await Motorista.findByPk(req.params.id, {
          includes: "ponto",
        });
        res.json(updatedMotorista);
      } else {
        res.status(404).json({ error: "Motorista não encontrado" });
      }
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },

  async deleteMotorista(req, res) {
    try {
      const deleted = await Motorista.destroy({
        where: { ID: req.params.id },
      });
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: "Motorista não encontrado" });
      }
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
  },
};

module.exports = MotoristaController;