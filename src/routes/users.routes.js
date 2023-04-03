const { Router } = require('express');
const { createUser, updateUser, getAllUsers, deleteUser, getUsersOrders, getUserProducts } = require('../controllers/users.controller');
const { createUserValidator, updateUserValidator } = require('../validators/user.validators');

const router = Router();
router.get('/api/v1/ecomm/users', getAllUsers)
router.get('/api/v1/ecomm/users/:id', getUsersOrders)
router.get('/api/v1/ecomm/users/cartProducts/:id', getUserProducts)
router.post('/api/v1/ecomm/users',createUserValidator ,createUser),
router.put('/api/v1/ecomm/users/:id',updateUser)
router.delete('/api/v1/ecomm/users/:id', deleteUser)


module.exports = router;