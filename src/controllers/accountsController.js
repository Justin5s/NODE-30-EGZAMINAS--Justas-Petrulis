const {
  createAccountInDb,
  getAccountInDb,
} = require('../models/accountsModel');
const { failResponse, successResponse } = require('../utilities/dbHelper');

async function getAccounts(req, res) {
  const userId = req.token.id;
  const serverResponseJS = await getAccountInDb(userId);

  return serverResponseJS === false
    ? failResponse(res)
    : successResponse(res, serverResponseJS);
}

async function createAccount(req, res) {
  const newRecordData = {
    group_id: req.body.group_id,
    user_id: req.token.id,
  };
  const serverResponseJS = await createAccountInDb(newRecordData);

  return serverResponseJS === false
    ? failResponse(res)
    : successResponse(res, serverResponseJS);
}

module.exports = {
  createAccount,
  getAccounts,
};
