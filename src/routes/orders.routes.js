const { Router } = require('express');
const { createOrder, getOrders, deleteOrders } = require('../controllers/orders.controller');

const router = Router();

router.post('/api/v1/ecomm/orders', createOrder);

router.get('/api/v1/ecomm/orders', getOrders);

router.delete('/api/v1/ecomm/orders/:id', deleteOrders)

module.exports = router;