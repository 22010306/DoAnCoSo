// /api/cart
const router = require('express').Router()

const { addItemToCart, readItemInCart, removeItemInCart, updateItemInCart, getItemByUserAndProduct } = require('../model/shopping_cart')
const parseCustomerTokenMiddleware = require('./parseTokenMiddleware')

router.use(parseCustomerTokenMiddleware)

router.post('/', async function (req, res) {
  // Add item
  const user = res.locals.user
  const data = { ...req.body, user: user?.id }

  try {
    const [olderOrder] = (await getItemByUserAndProduct(data))[0]
    console.log(olderOrder)

    if (!olderOrder) {
      await addItemToCart(data)
      res.json({ message: "Add success", success: true, data: null })
    }
    else {
      await updateItemInCart(data)
      res.json({ message: "Update success", success: true, data: null })
    }

  } catch (error) {
    res.json({ message: "Fail", success: false, data: null })
  }
})

router.get('/', async function (req, res) {
  // Add item
  const user = res.locals.user
  if (!user) return res.json({ message: "Fail!! Cant find user", success: false, data: null })
  console.log(user)
  const [items] = await readItemInCart({ user: user.id })
  res.json({ success: true, message: "Successful", data: items })
})

router.delete('/', async function (req, res) {
  const user = res.locals.user
  const { body } = req
  const result = await removeItemInCart(body)
  console.log(result)

  res.json({ result })
})
module.exports = router