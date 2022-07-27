const mysql = require('mysql2/promise');
const dbConfig = require('../dbConfig');

async function getAllBillsFromDb(id) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = 'SELECT * FROM bills WHERE group_id = ?';
    const [rows] = await conn.execute(sql, [id]);
    return rows;
  } catch (error) {
    console.log(' Get Bills model error', error);
    return false;
  }
}

async function createBillInDb(newBillData) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `INSERT INTO bills (group_id, amount, description) VALUES
                        (?, ?, ?)`;
    const { group_id, amount, description } = newBillData;
    const [rows] = await conn.query(sql, [group_id, amount, description]);

    return rows;
  } catch (error) {
    return false;
  }
}

module.exports = {
  getAllBillsFromDb,
  createBillInDb,
};
