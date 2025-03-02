// /api/customer
const router = require('express').Router()

const parseCustomerTokenMiddleware = require('../../guess/api/parseTokenMiddleware')
const { createCustomer, deleteCustomer, readCustomer, updatecustomer, generateAccessToken, getCustomerById, getCustomer } = require('../model/customer')

router.get('/auth', async function (req, res) {
  const customer = (await createCustomer({}))[0].insertId
  const token = generateAccessToken({ id: customer })
  console.log(customer)
  res.json({ success: true, message: "Success", data: token })
})


router.get('/info/:id', async function (req, res) {
  try {
    const user = req.params
    const result = await getCustomerById({ id: user.id })
    res.json({ data: result[0], message: "Success", success: true })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: "Failed", data: null })
  }
})

router.get('/order/:id', async function (req, res) {
  try {
    const user = req.params
    const result = await getCustomerById({ id: user.id })
    res.json({ data: result[0], message: "Success", success: true })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: "Failed", data: null })
  }
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

router.get('/info', async function (req, res) {
  try {
    const [result] = await getCustomer();
    res.json({ message: 'Success', success: true, data: result })
  } catch (e) {
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