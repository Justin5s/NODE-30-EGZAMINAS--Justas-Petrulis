/* eslint-disable camelcase */
const mysql = require('mysql2/promise');
const dbConfig = require('../dbConfig');

async function registerUser(full_name, email, pass) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `
    INSERT INTO users (full_name, email, password) 
    VALUES (?, ?, ?)
    `;
    const [registerResult] = await conn.execute(sql, [full_name, email, pass]);
    await conn.close;
    return registerResult;
  } catch (error) {
    console.log('error ===', error);
    return false;
  }
}

async function findUserByEmail(email) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = 'SELECT * FROM users WHERE email = ?';
    const [userfound] = await conn.execute(sql, [email]);
    await conn.close();
    return userfound;
  } catch (error) {
    console.log('finduserbyemail', error);
    return false;
  }
}

module.exports = {
  registerUser,
  findUserByEmail,
};
