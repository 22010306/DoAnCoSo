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

const readCustomerQuery = ``
async function readCustomer({ }) {

}

const updateCustomerQuery = ``
async function updatecustomer(params) {

}

const deleteCusomterQuery = ``
async function deleteCustomer({ }) {

}

module.exports = {
  createCustomer,
  readCustomer,
  updatecustomer,
  deleteCustomer,
  generateAccessToken,
  getSecretValue
}