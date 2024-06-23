const { Admin } = require('../models');
const jwt = require('jsonwebtoken');

const AuthController = {
  async login(req, res) {
    const { EMAIL, SENHA } = req.body;
    console.log("Tentativa de login com: ", { EMAIL, SENHA });

    try {
      const admin = await Admin.findOne({ where: { EMAIL } });
      if (!admin) {
        console.log("Admin não encontrado com o email fornecido.");
        return res.status(401).json({ error: 'Email ou senha inválidos' });
      }

      if (admin.SENHA !== SENHA) {
        console.log("Senha inválida.");
        return res.status(401).json({ error: 'Email ou senha inválidos' });
      }

      const token = jwt.sign({ id: admin.ID }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    } catch (error) {
      console.error("Erro ao fazer login: ", error);
      res.status(500).json({ error: 'Erro ao fazer login' });
    }
  }
};

module.exports = AuthController;
