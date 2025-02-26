const { v4 } = require("uuid")
const Database = require("../../../app/database")

class Product {
  static #createQuery = `
INSERT INTO product (id, name, price, description)
VALUES    (?, ?, ?, ?);`
  static async Create({ id = v4(), name, price, description }, conn) {
    conn ??= await Database.getConnection()
    console.log(id, name, price, description)
    const result = await conn.query(this.#createQuery, [id, name, price, description])
    return result
  }

  static #readQuery = `
SELECT * 
FROM product`
  static async Read({ limit, offset }, conn) {
    conn ??= await Database.getConnection()
    const result = await conn.query(this.#readQuery, [limit, offset])
    return result
  }

  static #updateQuery = `
UPDATE product
SET name = ?, price = ?, description = ?
WHERE id = ?;`
  static async Update({ id, name, price, description }, conn) {
    conn ??= await Database.getConnection()
    const result = await conn.query(this.#updateQuery, [name, price, description, id])
    return result
  }

  static #deleteQuery = `
DELETE FROM product WHERE id = ?`
  static async Delete({ id }, conn) {
    conn ??= await Database.getConnection()
    const result = await conn.query(this.#deleteQuery, [id])
    return result
  }
}

module.exports = Product