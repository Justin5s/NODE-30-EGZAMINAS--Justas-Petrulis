const { getAllUsersFromDb } = require('../models/usersModel');
const { failResponse, successResponse } = require('../utilities/dbHelper');

async function getAllUsers(req, res) {
  const allUsers = await getAllUsersFromDb();
  return allUsers === false
    ? failResponse(res)
    : successResponse(res, allUsers);
}

module.exports = {
  getAllUsers,
};
