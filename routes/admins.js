const express = require('express');
const router = express.Router();
const AdminsController = require('../controllers/adminsController');

router.get('/', AdminsController.index);
router.get('/:id', AdminsController.show);
router.post('/', AdminsController.create);
router.put('/:id', AdminsController.update);
router.delete('/:id', AdminsController.delete);
router.post('/login', AdminsController.login);

module.exports = router;