const mysql = require('mysql2/promise')

const env = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
}

const pool = mysql.createPool({
  ...env,
  connectionLimit: 20
})

async function query(query = '', params = []) {
  const conn = await pool.getConnection()
  const result = await conn.query(query, params)
  conn.release()

  return result
}

module.exports = {
  query
}