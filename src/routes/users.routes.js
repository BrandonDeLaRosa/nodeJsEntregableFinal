const { Router } = require('express');
const { createUser, updateUser, getAllUsers, deleteUser } = require('../controllers/users.controller');

const router = Router();
router.get('/api/v1/ecomm/users', getAllUsers)
router.post('/api/v1/ecomm/users', createUser),
router.put('/api/v1/ecomm/users/:id',updateUser)
router.delete('/api/v1/ecomm/users/:id', deleteUser)


module.exports = router;