const router = require('express').Router()

const { createCustomer, deleteCustomer, readCustomer, updatecustomer, generateAccessToken } = require('../model/customer')

router.get('/auth', async function (req, res) {
  const customer = (await createCustomer({}))[0].insertId
  const token = generateAccessToken({ id: customer })
  console.log(customer)
  res.json({ success: true, message: "Success", data: token })
})

module.exports = router