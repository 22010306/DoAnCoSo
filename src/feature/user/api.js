// api/auth/
const router = require('express').Router()

router.post('/register', async function (req, res) {
  res.json({
    success: false,
    message: "Can't create your account.",
    data: null
  })
})

router.post('/login', async function (req, res) {
  res.json({
    success: false,
    message: "Server error.",
    data: null
  })
})

router.get('/perm', async function (req, res) {
  res.json({
    success: false,
    message: "Server error.",
    data: null
  })
})
module.exports = router