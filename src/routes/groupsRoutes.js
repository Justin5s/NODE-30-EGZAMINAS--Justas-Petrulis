const express = require('express');
const groupsController = require('../controllers/groupsController');
const { isLoggedIn } = require('../utilities/middleware');

const groupsRoutes = express.Router();

groupsRoutes.post('/groups', isLoggedIn, groupsController.createGroup);

module.exports = groupsRoutes;
