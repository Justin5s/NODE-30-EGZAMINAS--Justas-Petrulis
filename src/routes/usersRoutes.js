const express = require('express');
const usersController = require('../controllers/usersController');

const userRoutes = express.Router();

userRoutes.get('/users', usersController.getAllUsers);

module.exports = userRoutes;
