<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController');
const {validateToken}=require('../Middlewares/tokenValidation')

router.post('/register', userController.register);
router.post('/login', userController.login); 
router.post('/logout', userController.logout);
router.get('/profile',validateToken, userController.profile);

module.exports = router;
=======
const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
})

const userModel = mongoose.model('User', userschema)
module.exports = userModel
>>>>>>> cca716ebb48a7131cb6102a666c92857ab6cd542
