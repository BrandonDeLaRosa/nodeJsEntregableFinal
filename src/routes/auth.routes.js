const { Router } = require ('express');
const { userLoging } = require('../controllers/auth.controller');

const router = Router();

router.post("/api/v1/ecomm/auth/login", userLoging)

module.exports = router;