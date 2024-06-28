const { Admin } = require('../models');
const jwt = require('jsonwebtoken');

const AuthController = {
  async login(req, res) {
    const { EMAIL, SENHA } = req.body;

    try {
      const admin = await Admin.findOne({ where: { EMAIL } });
      if (!admin || admin.SENHA !== SENHA) {
        return res.status(401).json({ error: 'Email ou senha inválidos' });
      }

      const token = jwt.sign({ id: admin.ID }, process.env.JWT_SECRET, { expiresIn: '24h' });
      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao fazer login' });
    }
  }
};

module.exports = AuthController;
