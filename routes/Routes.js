const express = require('express');

const usuariosRoutes = require('./usuarios');
const adminRoutes = require('./admins');

const router = express.Router();

router.use('/usuarios', usuariosRoutes);
router.use('/admins', adminRoutes);

module.exports = router;