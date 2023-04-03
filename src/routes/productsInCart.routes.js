const { Router } = require('express');
const { addProducts, getAllProducts } = require('../controllers/productsInCart.controller');

const router = Router();

router.post('/api/v1/ecomm/cartProducts', addProducts)
router.get('/api/v1/ecomm/cartProducts', getAllProducts)

module.exports = router;