// api/
const router = require('express').Router()

router.use('/file', require('../uploadFile/api'))
router.use('/auth', require('../auth/api'))
router.use('/product', require('../product/api'))

// default
router.get('/', (req, res) => {
  res.send('/app/api.js')
})

router.use('/*', function (req, res) {
  res.json({ message: "Cant find route", success: false })
})

module.exports = router
