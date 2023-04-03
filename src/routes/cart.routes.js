const { Router } = require('express');
const { createCart, getAllCartProducts } = require('../controllers/cart.controller');

const router = Router();

router.post('/api/v1/ecomm/cart', createCart);
router.get('/api/v1/ecomm/cart', getAllCartProducts)

module.exports= router; 