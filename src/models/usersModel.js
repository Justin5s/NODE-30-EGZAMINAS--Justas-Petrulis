const mysql = require('mysql2/promise');
const dbConfig = require('../dbConfig');

async function getAllUsersFromDb() {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const [result] = await conn.query('SELECT * FROM users');
    return result;
  } catch (error) {
    console.log(' Get users model error', error);
    return false;
  }
}

module.exports = {
  getAllUsersFromDb,
};
