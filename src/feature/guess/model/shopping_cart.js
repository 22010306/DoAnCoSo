const { query } = require("../../../app/database")

const addItemToCartQuery = `
INSERT INTO shopping_cart_item (quantity, user, product)
VALUES (?, ?, ?)`
async function addItemToCart({ quantity, user, product }) {
  return await query(addItemToCartQuery, [quantity, user, product])
}

const removeItemInCartQuery = `
DELETE FROM shopping_cart_item
WHERE id = ? AND user = ?`
async function removeItemInCart({ id, user }) {
  return await query(removeItemInCartQuery, [id, user])
}

const readItemInCartQuery = `
SELECT  s.id,
        p.name, 
        p.id product,
        s.user user,
        s.quantity, 
        p.price, 
        (s.quantity * p.price) AS total
FROM shopping_cart_item s
INNER JOIN product p ON s.product = p.id
INNER JOIN customer c ON s.user = c.id
WHERE c.id = ?`
async function readItemInCart({ user }) {
  return await query(readItemInCartQuery, [user])
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

const clearItemInCartQuery = `
DELETE FROM shopping_cart_item
WHERE user = ?`
async function clearItemInCart({ user }) {
  return await query(clearItemInCartQuery, [user])
}

module.exports = {
  addItemToCart,
  readItemInCart,
  getItemByUserAndProduct,
  removeItemInCart,
  updateItemInCart,
  clearItemInCart
}