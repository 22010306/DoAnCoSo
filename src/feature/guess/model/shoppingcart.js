const { query } = require("../../../app/database")

const addItemToCartQuery = `
INSERT INTO shopping_cart_item (quantity, user, product)
VALUES (?, ?, ?)`
async function addItemToCart({ quantity, user, product }) {
  return await query(addItemToCartQuery, [quantity, user, product])
}

const removeItemInCartQuery = ``
async function removeItemInCart() {

}

const readItemInCartQuery = `
SELECT  p.name, 
        s.quantity, 
        p.price, 
        s.quantity * p.price AS total
FROM shopping_cart_item s
INNER JOIN product p ON s.product = p.id
INNER JOIN customer c ON s.user = c.id
WHERE c.id = ?`
async function readItemInCart({ id }) {
  return await query(readItemInCartQuery, [id])
}

const getItemByUserAndProductQuery = `
SELECT id 
FROM shopping_cart_item
WHERE user = ? AND product = ?`
async function getItemByUserAndProduct({ user, product }) {
  return await query(getItemByUserAndProductQuery, [user, product])
}

const updateItemInCartQuery = `
UPDATE shopping_cart_item
SET quantity = ?
WHERE user = ? AND product = ?`
async function updateItemInCart({ quantity, user, product }) {
  return await query(updateItemInCartQuery, [quantity, user, product])
}

module.exports = {
  addItemToCart,
  readItemInCart,
  getItemByUserAndProduct,
  removeItemInCart,
  updateItemInCart
}