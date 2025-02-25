const LoginToken = require('../model/login_token')
const User = require('../model/user')

// api/auth/authorize
const router = require('express').Router()

router.get('/access-page', async function (req, res) {
  let param, result, user
  try {
    param = req.headers.authorization
    result = LoginToken.ParseToken(param.split(' ')[1])
    user = (await User.FindUserById({ id: result.userId }))[0]
  } catch (error) { }
  if (user && user.role === 'admin') return res.json({
    success: true,
    message: 'Success.',
    data: { access: true }
  })
  console.log(req.query)

  if (req.query.path.includes('dashboard'))
    return res.json({
      success: true,
      message: 'Success.',
      data: { access: false }
    })
})

module.exports = router