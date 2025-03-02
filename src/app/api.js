// api/
const router = require('express').Router()

router.use('/product-image', require('../feature/product/api/image'))
router.use('/product', require('../feature/product/api'))
router.use('/customer', require('../feature/customer/api'))

router.use('/cart', require('../feature/guess/api/shopping_cart'))
router.use('/order', require('../feature/guess/api/order'))
router.use('/manage-order', require('../feature/order/api'))
// default
router.get('/', (req, res) => {
  res.send('/app/api.js')
})

router.use('/*', function (req, res) {
  res.json({ message: "Cant find route", success: false })
})

module.exports = router
