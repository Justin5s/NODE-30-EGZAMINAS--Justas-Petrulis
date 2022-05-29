const mysql = require('mysql2/promise');
const dbConfig = require('../dbConfig');

async function getAccountInDb(userId) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `
    SELECT accounts.user_id, accounts.group_id, groups.name 
    FROM accounts 
    LEFT JOIN groups 
    ON accounts.group_id = groups.id WHERE user_id = ?`;
    const [fields] = await conn.execute(sql, [userId]);
    await conn.close();
    return fields;
  } catch (error) {
    return false;
  }
}
async function createAccountInDb(newRecordData) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `
        INSERT INTO accounts (group_id, user_id) VALUES (?, ?)
        `;
    const { group_id, user_id } = newRecordData;
    const [fields] = await conn.execute(sql, [group_id, user_id]);
    await conn.close();
    return fields;
  } catch (error) {
    return false;
  }
}

module.exports = {
  getAccountInDb,
  createAccountInDb,
};
