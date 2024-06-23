const express = require('express');
const router = express.Router();
const AdminsController = require('../controllers/adminsController');
const AuthController = require('../controllers/authController');

router.get('/generateToken', AdminsController.generateToken);
router.get('/', AdminsController.index);
router.get('/:id', AdminsController.show);
router.post('/', AdminsController.create);
router.put('/:id', AdminsController.update);
router.delete('/:id', AdminsController.delete);
router.post('/login', AuthController.login);


module.exports = router;