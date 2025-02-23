const { v4 } = require('uuid')
const bcrypt = require('bcrypt')
const randomstring = require('randomstring')
const Database = require('../../database')

const isExistQuery = `
SELECT 1
FROM user 
WHERE email = ? OR id = ?`

const insertQuery = `
INSERT INTO user (id, name, email, password) 
VALUES (?, ?, ?, ?)`

const selectRangeQuery = `
SELECT id, name, email, password
FROM user 
WHERE deleteAt IS NULL
LIMIT ?, ?`

const updateQuery = `
UPDATE user 
SET name = ?, email = ? WHERE id = ?`

const deleteQuery = `
UPDATE user 
SET deleteAt = ? WHERE id = ?`

class User {
  static async GenerateUser() {
    return new User(v4(), randomstring.generate(10), randomstring.generate(10), randomstring.generate(10))
  }
  static async #IsExistUser({ email, id }) {
    const conn = await Database.getConnection()

    const [result] = await conn.query(isExistQuery, [email, id])
    return result.length > 0
  }
  static async Create({ name, email, password }) {
    const id = v4()
    const hash = await bcrypt.hash(password, 10)

    const conn = await Database.getConnection()
    await conn.query(insertQuery, [id, name, email, hash])
    return new User(id, name, email, password)
  }
  static async Read(start = 0, limit = 100) {
    const conn = await Database.getConnection()
    const result = await conn.query(selectRangeQuery, [start, limit])

    return result[0];
  }
  static async Update({ id, name, email, password }) {
    if (!this.#IsExistUser({ email, id })) throw "User not exists."

    const conn = await Database.getConnection()
    await conn.query(updateQuery, [name, email, id])
  }
  static async Delete({ id }) {
    if (!this.#IsExistUser({ id })) throw "User not exists."

    const date = new Date()
    const conn = await Database.getConnection()
    await conn.query(deleteQuery, [[date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-'), id])
  }

  constructor(id, name, email, password) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
  }
}

module.exports = User