const { Admin } = require('../models');
const bcrypt = require('bcrypt');

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
        const { NOME_USUARIO, EMAIL, SENHA } = req.body;

        console.log("Dados recebidos: ", { NOME_USUARIO, EMAIL, SENHA });

        if (!NOME_USUARIO || !EMAIL || !SENHA) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        if (!validateEmail(EMAIL)) {
            return res.status(400).json({ error: 'Email inválido' });
        }

        if (SENHA.length < 8) {
            return res.status(400).json({ error: 'A senha deve conter mais de 8 caracteres' });
        }

        try {
            const hashedPassword = await bcrypt.hash(SENHA, 10);
            console.log("Senha criptografada: ", hashedPassword);
            const novoAdmin = await Admin.create({
                NOME_USUARIO,
                EMAIL,
                SENHA: hashedPassword
            });
            console.log("Senha armazenada no banco de dados: ", novoAdmin.SENHA);
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
    },

    async login(req, res) {
        const { EMAIL, SENHA } = req.body;
    
        console.log("Tentativa de login com: ", { EMAIL, SENHA });
    
        try {
            const admin = await Admin.findOne({ where: { EMAIL } });
            if (!admin) {
                console.log("Admin não encontrado com o email fornecido.");
                return res.status(401).json({ error: 'Email ou senha inválidos' });
            }
    
            const isPasswordValid = bcrypt.compareSync(SENHA, admin.SENHA);
            if (!isPasswordValid) {
                console.log("Senha inválida.");
                console.log(SENHA, 'SENHA');
                console.log(admin.SENHA, 'admin.SENHA');
                return res.status(401).json({ error: 'Email ou senha inválidos' });
            }
    
            console.log("Login bem-sucedido.");
            res.status(200).json({ message: 'Login bem-sucedido' });
        } catch (error) {
            console.error("Erro ao fazer login: ", error);
            res.status(500).json({ error: 'Erro ao fazer login' });
        }
    }
};

module.exports = AdminsController;
