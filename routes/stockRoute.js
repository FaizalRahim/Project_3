const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController');
const protect = require('../utils/middleware/authMiddleware')

router.get('/createseed', stockController.seedStockShell);
router.get('/', stockController.getAllStock);
router.post('/', stockController.createStock)
router.put("/:id/updatestock",protect, stockController.updateStockById)
module.exports = router;