const { Usuario, Faculdade } = require('../models');
const { sendEmail } = require('../services/emailServices');
const { sendSMS } = require('../services/smsService');
const jwt = require('jsonwebtoken');

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

      const message = `Olá, ${req.body.NOME}, seus dados de login são: Email: ${req.body.EMAIL}, Senha: ${req.body.SENHA}`;
      sendSMS(req.body.TELEFONE, message);

      sendEmail(req.body.EMAIL, req.body.NOME, req.body.EMAIL, req.body.SENHA);
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
  },

  async loginAluno(req, res) {
    const { EMAIL, SENHA } = req.body;
    try {
      const usuario = await Usuario.findOne({ where: { EMAIL } });
      if (!usuario) {
        return res.status(404).json({ error: 'Credenciais inválidas' });
      }

      const senha = usuario.SENHA === SENHA;

      if (!senha) {
        return res.status(404).json({ error: 'Credenciais inválidas' });
      }

      const token = jwt.sign({ id: usuario.ID }, process.env.JWT_SECRET, { expiresIn: '24h' });
      return res.json({ token, id: usuario.ID, nome: usuario.NOME });
    } catch(e) {
      res.status(500).json({ error: e.message })
    }
  }
};

module.exports = UsuarioController;
