const mysql = require('mysql2/promise');
const dbConfig = require('../dbConfig');

async function createGroupInDb(name) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `
  INSERT INTO groups (name)
  VALUES (?)
  `;
    const [insertResult] = await conn.execute(sql, [name]);
    await conn.close();
    return insertResult;
  } catch (error) {
    console.log('create Group ===', error);
    return false;
  }
}

module.exports = {
  createGroupInDb,
};
