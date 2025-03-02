// /api/order
const router = require('express').Router()

const parseCustomerTokenMiddleware = require('./parseTokenMiddleware')
const { getPaymentType, createOrder, updateOrderItem } = require('../model/order')
const { readItemInCart, clearItemInCart } = require('../model/shopping_cart')

router.post('/', parseCustomerTokenMiddleware, async function (req, res) {
  const user = res.locals.user
  const body = req.body
  try {
    const [order] = await createOrder({ customer: user.id, payment: req.body.paymentType })
    const [orderItems] = await readItemInCart({ user: user.id })

    if (orderItems.length === 0) throw ""
    const [result] = await updateOrderItem({ items: orderItems.map(i => [i.quantity, i.product, order.insertId]) })

    await clearItemInCart({ user: user.id })
    res.json({ success: true, message: "Success", data: null })
  } catch (error) {
    res.json({ success: false, message: "Fail", data: null })
  }
})

router.get('/payment-type', async function (req, res) {
  try {
    const paymentType = await getPaymentType()
    res.json({ success: true, message: "Success", data: paymentType[0] })
  } catch (error) {
    res.json({ success: false, message: "Fail", data: [] })
  }
})

module.exports = router