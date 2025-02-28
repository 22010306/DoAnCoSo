// api/
const router = require('express').Router()

router.use('/product-image', require('../feature/product/api/image'))
router.use('/product', require('../feature/product/api'))
router.use('/customer', require('../feature/customer/api'))

// default
router.get('/', (req, res) => {
  res.send('/app/api.js')
})

router.use('/*', function (req, res) {
  res.json({ message: "Cant find route", success: false })
})

module.exports = router
