// api/
const router = require('express').Router()

router.use('/file', require('../feature/uploadFile/api'))
router.use('/auth', require('../feature/auth/api'))
router.use('/product', require('../feature/product/api'))

// default
router.get('/', (req, res) => {
  res.send('/app/api.js')
})

router.use('/*', function (req, res) {
  res.json({ message: "Cant find route", success: false })
})

module.exports = router
