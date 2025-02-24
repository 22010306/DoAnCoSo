// api/auth/
const router = require('express').Router()

const LoginToken = require('../model/login_token')
const User = require('../model/user')

router.post('/register', async function (req, res) {
  try {
    const user = await User.Create(req.body)
    if (user) return res.send({
      success: true,
      message: "Register success.",
      data: null
    })
  } catch (error) {

  }
  res.json({
    success: false,
    message: "Can't create your account.",
    data: null
  })
})

router.post('/login', async function (req, res) {
  try {
    const [user] = await User.FindUserByEmail(req.body)
    if (!user) return res.json({ success: false, data: null, message: "Invalid email, password." })

    const isMatch = await LoginToken.CheckPassword(req.body.password, user.password)
    if (!isMatch) return res.json({ success: false, data: null, message: "Invalid email, password." })

    let [token] = await LoginToken.FindTokenByUserId({ id: user.id })
    if (!token) token = await LoginToken.Create(user)

    res.json({
      success: true,
      message: "Success login.",
      data: { token: token.token },
    })
  } catch (error) {
    res.json({
      success: false,
      message: "Server error.",
      data: null
    })
  }
})


module.exports = router