// /api/customer
const router = require('express').Router()

const parseCustomerTokenMiddleware = require('../../guess/api/parseTokenMiddleware')
const { createCustomer, deleteCustomer, readCustomer, updatecustomer, generateAccessToken, getCustomerById } = require('../model/customer')

router.get('/auth', async function (req, res) {
  const customer = (await createCustomer({}))[0].insertId
  const token = generateAccessToken({ id: customer })
  console.log(customer)
  res.json({ success: true, message: "Success", data: token })
})

router.get('/', parseCustomerTokenMiddleware, async function (req, res) {
  try {
    const user = res.locals.user
    console.log(user)
    const result = (await getCustomerById(user))[0]
    // console.log(res)
    res.json({ message: 'Success', success: true, data: result })
  } catch (error) {
    // console.log(error)
    res.json({ success: false, message: "Failed", data: null })
  }
})

router.put('/', parseCustomerTokenMiddleware, async function (req, res) {
  const user = res.locals.user
  const body = req.body
  try {
    const result = await updatecustomer({ ...body, ...user })
    res.json({ success: true, message: "Success", data: null })
  } catch (error) {
    res.json({ success: false, message: "Failed", data: null })
  }
})

module.exports = router