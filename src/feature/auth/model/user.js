const { v4 } = require('uuid')
const bcrypt = require('bcrypt')
const randomstring = require('randomstring')
const Database = require('../../../app/database')

class User {
  static async GenerateUser() {
    return new User(v4(), randomstring.generate(10), randomstring.generate(10), randomstring.generate(10))
  }
  static #isExistQuery = `
SELECT 1
FROM user 
WHERE email = ? OR id = ?`
  static async IsExistUser({ email, id }) {
    const conn = await Database.getConnection()

    const [result] = await conn.query(this.#isExistQuery, [email, id])
    return result.length > 0
  }

  static #createQuery = `
INSERT INTO user (id, name, email, password) 
VALUES (?, ?, ?, ?)`
  static async Create({ id = v4(), name, email, password }, conn) {
    const hash = await bcrypt.hash(password, 10)

    if (!conn) conn = await Database.getConnection()
    await conn.query(this.#createQuery, [id, name, email, hash])
    return { id, name, email, password }
  }
  static async RegisterAccount({ name, email, password }, conn) {
    conn ??= await Database.getConnection()
    return this.Create({ name, email, password })
  }

  static #registerAdminAccountQuery = `
INSERT INTO user (id, name, email, password, role) 
VALUES (?, ?, ?, ?, 'admin')`
  static async RegisterAdminAccount({ name, email, password }, conn) {
    const hash = await bcrypt.hash(password, 12)
    const id = v4()
    conn ??= await Database.getConnection()
    await conn.query(this.#registerAdminAccountQuery, [id, name, email, hash])
    return { id, name, email, password }
  }

  static #selectRangeQuery = `
SELECT id, name, email, password
FROM user 
WHERE deleteAt IS NULL
LIMIT ?, ?`
  static async Read(start = 0, limit = 100) {
    const conn = await Database.getConnection()
    const result = await conn.query(this.#selectRangeQuery, [start, limit])

    return result[0];
  }

  static #findUserByIdQuery = `
SELECT * 
FROM user
WHERE id = ? AND deleteAt IS NULL`
  static async FindUserById({ id }, conn) {
    conn ??= await Database.getConnection()
    const [result] = await conn.query(this.#findUserByIdQuery, [id])
    return result
  }

  static #findUserByEmailQuery = `
SELECT *
FROM user
WHERE email = ? AND deleteAt IS NULL`
  static async FindUserByEmail({ email }, conn) {
    if (conn == null || typeof conn?.query !== 'function') conn = await Database.getConnection()
    const [result] = await conn.query(this.#findUserByEmailQuery, [email])
    return result
  }

  static #updateQuery = `
UPDATE user 
SET name = ?, email = ? WHERE id = ?`
  static async Update({ id, name, email, password }) {
    if (!this.IsExistUser({ email, id })) throw "User not exists."

    const conn = await Database.getConnection()
    await conn.query(this.#updateQuery, [name, email, id])
  }

  static #deleteQuery = `
UPDATE user 
SET deleteAt = ? WHERE id = ?`
  static async Delete({ id }) {
    if (!this.IsExistUser({ id })) throw "User not exists."

    const date = new Date()
    const conn = await Database.getConnection()
    await conn.query(this.#deleteQuery, [[date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-'), id])
  }
}

module.exports = User