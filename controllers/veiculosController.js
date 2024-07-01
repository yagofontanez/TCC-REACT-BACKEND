const { Veiculo, Ponto } = require("../models");

const VeiculoController = {
  async getAllVeiculos(req, res) {
    try {
      const veiculos = await Veiculo.findAll();
      res.json(veiculos);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  },

  async getVeiculoById(req, res) {
    try {
      const veiculo = await Veiculo.findByPk(req.params.id);
      if (veiculo) {
        res.json(veiculo);
      } else {
        res.status(404).json({ message: "Veiculo não encontrado" });
      }
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  },

  async postVeiculo(req, res) {
    try {
      const veiculo = await Veiculo.create(req.body);
      res.json(veiculo);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  },

  async patchVeiculo(req, res) {
    try {
      const [veiculoUpdated] = await Veiculo.update(req.body, {
        where: { ID: req.params.id },
      });
      if (veiculoUpdated) {
        const updatedVeiculo = await Veiculo.findByPk(req.params.id);
        res.json(updatedVeiculo);
      } else {
        res.status(404).json({ error: "Veículo não encontrado" });
      }
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  },

  async deleteVeiculo(req, res) {
    try {
      const veiculoDeleted = await Veiculo.destroy({
        where: { ID: req.params.id },
      });
      if (veiculoDeleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: "Veículo não encontrado" });
      }
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  },
};

module.exports = VeiculoController;