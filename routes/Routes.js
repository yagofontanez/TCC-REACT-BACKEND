const express = require('express');

const usuariosRoutes = require('./usuarios');
const adminRoutes = require('./admins');
const faculdadeRoutes = require('./faculdades');
const pontoRoutes = require('./pontos');
const pedidosCadastroRoutes = require('./pedidosCadastro');
const motoristasRoutes = require('./motoristas');

const router = express.Router();

router.use('/admins', adminRoutes);
router.use('/usuarios', usuariosRoutes);
router.use('/faculdades', faculdadeRoutes);
router.use('/pontos', pontoRoutes);
router.use('/motoristas', motoristasRoutes);
router.use('/pedidosCadastro', pedidosCadastroRoutes);

module.exports = router;
