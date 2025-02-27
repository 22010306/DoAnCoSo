const { query } = require('../../../app/database')

const createNewProductQuery = `
INSERT INTO product (name, price, description, image)
VALUES    (?, ?, ?, ?)`
async function createProduct({ name, price, description, image }) {
  const result = await query(createNewProductQuery, [name, price, description, image])
  return result
}

const readProductQuery = `
SELECT * FROM product`
async function readProduct() {
  return await query(readProductQuery)
}

const updateProductQuery = `
UPDATE product
SET   name = ?, 
      price = ?, 
      description = ?, 
      picture = ?
WHERE id = ?`
async function updateProduct({ id, name, price, description, picture }) {
  return await query(updateProductQuery, [name, price, description, picture, id])
}

const deleteProductQuery = `
DELETE FROM product
WHERE id = ?`
async function deleteProduct({ id }) {
  return await query(deleteProductQuery, [name, price, description, picture, id])
}

module.exports = {
  createProduct,
  readProduct,
  updateProduct,
  deleteProduct
}