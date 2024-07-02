const express = require("express");
const router = express.Router();
const { Admin } = require("../models");
const authMiddleware = require("../middlewares/authMiddleware");
const usuariosRoutes = require("./usuarios");
const adminRoutes = require("./admins");
const faculdadeRoutes = require("./faculdades");
const pontoRoutes = require("./pontos");
const pedidosCadastroRoutes = require("./pedidosCadastro");
const motoristasRoutes = require("./motoristas");
const veiculosRoutes = require("./veiculos");

router.use("/admins", adminRoutes);
router.use("/usuarios", usuariosRoutes);
router.use("/faculdades", faculdadeRoutes);
router.use("/pontos", pontoRoutes);
router.use("/motoristas", motoristasRoutes);
router.use("/pedidosCadastro", pedidosCadastroRoutes);
router.use("/veiculos", veiculosRoutes);

router.get("/api/admin/profile", authMiddleware, async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.user.id);
    if (!admin) {
      return res.status(404).send("Admin não encontrado.");
    }
    res.status(200).send(admin);
  } catch (error) {
    res.status(500).send("Erro ao buscar admin.");
  }
});

module.exports = router;
