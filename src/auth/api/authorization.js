const router = require('express').Router()

router.post('/login', function (req, res) {
  res.send('login')
})

module.exports = router