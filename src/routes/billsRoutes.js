const express = require('express');
const billsController = require('../controllers/billsController');
const { isLoggedIn } = require('../utilities/middleware');

const billsRoutes = express.Router();

billsRoutes.get('/bills/:id', isLoggedIn, billsController.getAllBills);
billsRoutes.post('/bills', isLoggedIn, billsController.createBill);

module.exports = billsRoutes;
