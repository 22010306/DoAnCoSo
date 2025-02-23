const router = require('express').Router()

router.use('/file', require('../uploadFile/api'))
router.use('/auth', require('../auth/api'))

// default
router.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = router
