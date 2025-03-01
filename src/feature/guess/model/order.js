const { query } = require("../../../app/database")

const createOrderQuery = `
INSERT INTO orders (paymentType, customer)
VALUES (?, ?)`
async function createOrder({ payment, customer }) {
  return await query(createOrderQuery, [payment, customer])
}

const getPaymentTypeQuery = `
SELECT * FROM payment_type`
async function getPaymentType() {
  return await query(getPaymentTypeQuery)
}


const updateOrderItemQuery = `
INSERT INTO product_order (quantity, product, orderID)
VALUES ?`
async function updateOrderItem({ items }) {
  return await query(updateOrderItemQuery, [items])
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
  getPaymentType
}