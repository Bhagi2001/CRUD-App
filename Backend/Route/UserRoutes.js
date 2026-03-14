const express = require('express');
const router = express.Router();
const user = require('../Model/UserModel');
const userController = require('../Controlers/UserControllers');

router.get('/', userController.getAllUsers);

module.exports = router;