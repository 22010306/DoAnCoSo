const LoginToken = require('../model/login_token')
const User = require('../model/user')
const router = require('express').Router()

router.post('/register', function (req, res) {
  res.send(req.body)
})

router.post('/login', async function (req, res) {
  const [user] = await User.FindUserByEmail(req.body)
  if (!user) return res.json({ success: false, data: null, message: "Invalid email, password." })

  const isMatch = await LoginToken.CheckPassword(req.body.password, user.password)
  if (!isMatch) return res.json({ success: false, data: null, message: "Invalid email, password." })

  const token = await LoginToken.Create(user)
  res.json({
    success: true,
    message: "Success login.",
    data: { token: token.token, refresh_token: token.refresh_token },
  })
})


module.exports = router