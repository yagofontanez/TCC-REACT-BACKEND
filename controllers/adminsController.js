const { Admin } = require('../models');
const jwt = require('jsonwebtoken');
const { verifyRegistrationToken, generateRegistrationToken } = require('../services/tokenServices');

const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
};

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
        const { NOME_USUARIO, EMAIL, SENHA, TOKEN } = req.body;

        console.log("Dados recebidos: ", { NOME_USUARIO, EMAIL, SENHA, TOKEN });

        if (!NOME_USUARIO || !EMAIL || !SENHA || !TOKEN) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        if (!validateEmail(EMAIL)) {
            return res.status(400).json({ error: 'Email inválido' });
        }

        if (SENHA.length < 8) {
            return res.status(400).json({ error: 'A senha deve conter mais de 8 caracteres' });
        }

        const isValidToken = verifyRegistrationToken(TOKEN);
        if (!isValidToken) {
            return res.status(401).json({ error: 'Token de cadastro inválido' });
        }

        try {
            const novoAdmin = await Admin.create({
                NOME_USUARIO,
                EMAIL,
                SENHA
            });
            console.log("Admin criado com sucesso: ", novoAdmin);
            res.status(201).json(novoAdmin);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar admin' });
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
            res.status(500).json({ error: e.message });
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
    },

    async generateToken(req, res) {
        try {
            const token = generateRegistrationToken();
            res.json({ token });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao gerar token' });
        }
    }
};

module.exports = AdminsController;
