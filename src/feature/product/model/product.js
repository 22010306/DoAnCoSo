const { query } = require('../../../app/database')

const createProductQuery = `
INSERT INTO product (name, price, description, image)
VALUES    (?, ?, ?, ?)`
async function createProduct({ name, price, description, image }) {
  const result = await query(createProductQuery, [name, price, description, image])
  return result
}

const getProductByIdQuery = `
SELECT * 
FROM product 
WHERE id = ?
LIMIT 1`
async function getProductById({ id }) {
  return await query(getProductByIdQuery, [id])
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
  return await query(deleteProductQuery, [id])
}

module.exports = {
  createProduct,
  readProduct,
  getProductById,
  updateProduct,
  deleteProduct
}