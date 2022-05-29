const { createGroupInDb } = require('../models/groupsModel');
const { failResponse, successResponse } = require('../utilities/dbHelper');

async function createGroup(req, res) {
  const { name } = req.body;
  const insertResult = await createGroupInDb(name);
  return insertResult === false
    ? failResponse(res)
    : successResponse(res, 'group created');
}

module.exports = {
  createGroup,
};
