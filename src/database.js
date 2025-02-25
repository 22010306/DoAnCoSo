const mysql = require('mysql2/promise')

const env = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
}

class Database {
  static async getConnection() {
    return await mysql.createConnection(env)
  }
}

module.exports = Database