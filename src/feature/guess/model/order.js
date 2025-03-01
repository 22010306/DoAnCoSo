import { query } from "../../../app/database"

const createOrderQuery = `
INSERT INTO orders (paymentType, customer)
VALUES (?, ?)`
async function createOrder({ payment, customer }) {
  return await query(createOrderQuery, [payment, customer])
}

const updateOrderItemQuery = `
INSERT INTO product_order (quantity, product, orderID)
VALUES ?`
async function updateOrderItem({ id, items }) {
  return await query(updateOrderItemQuery, [id, items])
}

const readOrderQuery = `
SELECT * 
FROM orders
WHERE customer = ?`
async function readOrder({ customer }) {
  return await query(readOrderQuery, [customer])
}


module.exports = {
  createOrder,
  readOrder,
  updateOrderItem,
}