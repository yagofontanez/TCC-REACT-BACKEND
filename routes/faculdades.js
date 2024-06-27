const express = require('express');
const router =  express.Router();
const FaculdadesController = require('../controllers/faculdadesController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

router.get('/', FaculdadesController.index);
router.get('/:id', FaculdadesController.show);
router.post('/', FaculdadesController.create);
router.put('/:id', FaculdadesController.update);
router.delete('/:id', FaculdadesController.delete);

module.exports = router;