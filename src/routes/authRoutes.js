const {Router} = require('express');
const AuthController = require('../controllers/authController');
const router = Router();

router.post('/login', AuthController.login);

module.exports = router;