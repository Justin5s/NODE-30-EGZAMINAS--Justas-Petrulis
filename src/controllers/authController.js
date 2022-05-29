const { registerUser, findUserByEmail } = require('../models/authModel');
const { hashPass, verifyHash, generateJwtToken } = require('../utilities/auth');
const { failResponse, successResponse } = require('../utilities/dbHelper');

async function userRegister(req, res) {
  // eslint-disable-next-line camelcase
  const { full_name, email, password } = req.body;

  const hashedPass = hashPass(password);

  const insertResult = await registerUser(full_name, email, hashedPass);

  return insertResult === false
    ? failResponse(res)
    : successResponse(res, 'user created');
}

// eslint-disable-next-line consistent-return
async function userLogin(req, res) {
  const { email, password } = req.body;

  const userFindResult = await findUserByEmail(email);

  if (userFindResult === false) return failResponse(res);
  if (!userFindResult.length) {
    return failResponse(res, 'email or password not match');
  }
  const foundUSerObj = userFindResult[0];

  if (!verifyHash(password, foundUSerObj)) {
    return failResponse(res, 'email or pass not match');
  }
  const token = generateJwtToken(foundUSerObj);
  // console.log('pass match');
  successResponse(res, token);
}

module.exports = {
  userRegister,
  userLogin,
};
