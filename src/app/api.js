// api/
const router = require('express').Router()

router.use('/file', require('../feature/uploadFile/api'))
router.use('/product-image', require('../feature/product/api/image'))
router.use('/product', require('../feature/product/api'))

// default
router.get('/', (req, res) => {
  res.send('/app/api.js')
})

router.use('/*', function (req, res) {
  res.json({ message: "Cant find route", success: false })
})

module.exports = router
