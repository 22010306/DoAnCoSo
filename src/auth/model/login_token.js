const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const randomstring = require('randomstring')
const { v4 } = require('uuid')

const Database = require('../../database')
const User = require('./user')

class LoginToken {
  static #GetSecretValue() { return "test" }
  static async CheckPassword(password, hash) {
    return await bcrypt.compare(password, hash)
  }
  static ParseToken(token) {
    return jwt.verify(token, this.#GetSecretValue())
  }

  static #findTokenByUserId = `
SELECT * 
FROM login_token
WHERE user = ?
LIMIT 1`
  static async FindTokenByUserId({ id }, conn) {
    conn ??= await Database.getConnection()
    const [result] = await conn.query(this.#findTokenByUserId, [id])
    return result
  }

  static #createQuery = `
INSERT INTO 
login_token (id, token, user)
VALUES (?, ?, ?)`
  static async Create(user = {}) {
    const conn = await Database.getConnection()

    const newToken = {
      id: v4(),
      token: jwt.sign({ userId: user.id }, this.#GetSecretValue()),
      user: user.id
    }

    await conn.query(this.#createQuery, [newToken.id, newToken.token, newToken.user])
    return newToken
  }

  static #readQuery = `SELECT * FROM login_token`
  static async Read({ id, token, refresh_token, expireAt, user }) {
    const conn = await Database.getConnection()
    const [result] = await conn.query(this.#readQuery)

    return result
  }
  static async Update({ }) {

  }
  static async Delete({ }) {

  }

  constructor(id, token, refresh_token, expireAt, user) {
    this.id = id;
    this.token = token;
    this.refresh_token = refresh_token;
    this.expireAt = expireAt;
    this.user = user;
  }
}

module.exports = LoginToken