const express = require('express');

const usuariosRoutes = require('./usuarios');
const adminRoutes = require('./admins');
const faculdadeRoutes = require('./faculdades');

const router = express.Router();

router.use('/usuarios', usuariosRoutes);
router.use('/admins', adminRoutes);
router.use('/faculdades', faculdadeRoutes);

module.exports = router;