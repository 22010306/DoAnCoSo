// /api/order
const router = require('express').Router()

const parseCustomerTokenMiddleware = require('./parseTokenMiddleware')
const { getPaymentType } = require('../model/order')

router.post('/', parseCustomerTokenMiddleware, async function (req, res) {
  const user = res.locals.user
  const body = req.body
  res.json({ body, user })
})

router.get('/payment-type', async function (req, res) {
  try {
    const paymentType = await getPaymentType()
    res.json({ success: true, message: "Success", data: paymentType[0] })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: "Fail", data: [] })

  }
})

module.exports = router