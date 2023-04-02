const { Router } = require('express');
const { createProduct,updateProduct, getAllProducts, deleteProduct, getProducts } = require('../controllers/product.controller');

const router = Router()

router.get('/api/v1/ecomm/products', getAllProducts);
router.get('/api/v1/ecomm/products/available', getProducts)
router.post('/api/v1/ecomm/products', createProduct);
router.put('/api/v1/ecomm/products/:id', updateProduct);
router.delete('/api/v1/ecomm/products/:id', deleteProduct);

module.exports= router;