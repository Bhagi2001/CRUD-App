const express = require('express');
const router = express.Router();
const user = require('../Model/UserModel');
const userController = require('../Controlers/UserControllers');

router.get('/', userController.getAllUsers);
router.post('/', userController.addUsers);

module.exports = router;