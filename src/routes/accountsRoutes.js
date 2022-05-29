const express = require('express');
const {
  createAccount,
  getAccounts,
} = require('../controllers/accountsController');
const { isLoggedIn } = require('../utilities/middleware');

const router = express.Router();

router.get('/accounts', isLoggedIn, getAccounts);
router.post('/accounts/create', isLoggedIn, createAccount);

module.exports = router;
