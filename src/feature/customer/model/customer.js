const jwt = require('jsonwebtoken')

const { query } = require("../../../app/database")

function getSecretValue() {
  return 'secretValue'
}

function generateAccessToken({ id }) {
  return jwt.sign({ id }, getSecretValue())
}

const createCustomerQuery = `
INSERT INTO customer () 
VALUES ()`
async function createCustomer({ }) {
  return await query(createCustomerQuery)
}

const getCustomerQuery = `
SELECT 	  c.id, 
          c.name, 
          c.phone, 
          c.mail, 
          c.address,  
          COUNT(*) AS orders
FROM orders o
INNER JOIN customer c ON c.id = o.customer
GROUP BY c.id;`
async function getCustomer() {
  return await query(getCustomerQuery)
}

const readCustomerQuery = `
SELECT * FROM customer`
async function readCustomer() {
  return await query(readCustomerQuery)
}

const getCustomerByIdQuery = `
SELECT * FROM customer WHERE id = ?`
async function getCustomerById({ id }) {
  return await query(getCustomerByIdQuery, [id])
}

const updateCustomerQuery = `
UPDATE customer
SET   name      = ?,
      mail      = ?,
      phone     = ?,
      address   = ?
WHERE id = ?`
async function updatecustomer({ name, mail, phone, address, id }) {
  return await query(updateCustomerQuery, [name, mail, phone, address, id])
}

const deleteCusomterQuery = ``
async function deleteCustomer({ name, mail, phone, address, id }) {
  return await query()
}

module.exports = {
  createCustomer,
  readCustomer,
  updatecustomer,
  deleteCustomer,
  generateAccessToken,
  getSecretValue,
  getCustomerById,
  getCustomer
}