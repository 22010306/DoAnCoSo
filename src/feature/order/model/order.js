const { query } = require("../../../app/database")

const getOrderQuery = `
SELECT 		o.id, 
			    o.createAt, 
          c.name, 
          COUNT(*) AS product, 
          SUM(po.quantity * pr.price) AS total,
          p.displayName AS payment
FROM orders o
INNER JOIN customer c ON c.id = o.customer
INNER JOIN payment_type p ON p.id = o.paymentType
INNER JOIN product_order po ON po.orderID = o.id
INNER JOIN product pr ON pr.id = po.product
GROUP BY o.id
ORDER BY createAt DESC;`
async function getOrder() {
  return await query(getOrderQuery)
}

const getOrderHistoryByUserIdQuery = `
SELECT 		o.id, 
			    o.createAt, 
          c.name, 
          COUNT(*) AS product, 
          p.displayName AS payment,
          SUM(po.quantity * pr.price) AS total
FROM orders o
INNER JOIN customer c ON c.id = o.customer
INNER JOIN payment_type p ON p.id = o.paymentType
INNER JOIN product_order po ON po.orderID = o.id
INNER JOIN product pr ON pr.id = po.product
WHERE c.id = ?
GROUP BY o.id`
async function getOrderHistoryByUserId({ id }) {
  return await query(getOrderHistoryByUserIdQuery, [id])
}


const getOrderByIdQuery = `
SELECT 		o.id, 
			    o.createAt, 
          c.name, 
          COUNT(*) AS product, 
          p.displayName AS payment,
          SUM(po.quantity * pr.price) AS total
FROM orders o
INNER JOIN customer c ON c.id = o.customer
INNER JOIN payment_type p ON p.id = o.paymentType
INNER JOIN product_order po ON po.orderID = o.id
INNER JOIN product pr ON pr.id = po.product
WHERE o.id = ?
GROUP BY o.id`
async function getOrderById({ id }) {
  return await query(getOrderByIdQuery, [id])
}

const getOrderItemByIdQuery = `
SELECT 	p.id, 
		    p.name, 
        po.quantity, 
        p.price, 
        p.price * po.quantity AS total
FROM product_order po
INNER JOIN product p ON p.id = po.product
INNER JOIN orders o ON o.id = po.orderID
WHERE o.id = ?;`
async function getOrderItemById({ id }) {
  return await query(getOrderItemByIdQuery, [id])
}

module.exports = {
  getOrder,
  getOrderHistoryByUserId,
  getOrderItemById,
  getOrderById
}

