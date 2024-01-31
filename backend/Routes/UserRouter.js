const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController');
const {validateToken}=require('../Middlewares/tokenValidation')

router.post('/register', userController.register);
router.post('/login', userController.login); 
router.post('/logout', userController.logout);
router.get('/profile',validateToken, userController.profile);

module.exports = router;
