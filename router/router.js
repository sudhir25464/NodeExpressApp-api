const express = require('express');

const router = express.Router();

const userController = require('../controller/userController');

router.get('/user', userController.getUser);
router.post('/user', userController.createUser);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);
router.patch('/user/:id', userController.patchUser);
module.exports = router;