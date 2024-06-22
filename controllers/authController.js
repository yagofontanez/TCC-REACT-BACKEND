const { Admin } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const AuthController = {
  async login(req, res) {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ where: { NOME_USUARIO: username } });

    if (!admin) {
      return res.status(401).json({ error: 'Usuário ou senha inválidos' });
    }

    const validPassword = await bcrypt.compare(password, admin.SENHA);
    if (!validPassword) {
      return res.status(401).json({ error: 'Usuário ou senha inválidos' });
    }

    const token = jwt.sign({ id: admin.ID }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  }
};

module.exports = AuthController;
