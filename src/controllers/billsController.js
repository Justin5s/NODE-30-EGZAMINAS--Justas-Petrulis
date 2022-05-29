const { getAllBillsFromDb, createBillInDb } = require('../models/billsModel');
const { failResponse, successResponse } = require('../utilities/dbHelper');

async function getAllBills(req, res) {
  const selectBillsData = req.params.id;
  const allBills = await getAllBillsFromDb(selectBillsData);
  return allBills === false
    ? failResponse(res)
    : successResponse(res, allBills);
}

async function createBill(req, res) {
  const newBillData = req.body;
  const billCreateResult = await createBillInDb(newBillData);
  return billCreateResult === false
    ? failResponse(res)
    : successResponse(res, billCreateResult);
}

module.exports = {
  getAllBills,
  createBill,
};
