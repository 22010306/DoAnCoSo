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
    permissions: {
      '/': true,
      '/auth': true,
      '/dashboard': true,
    }
  })

  return res.json({
    success: true,
    message: 'Success.',
    permissions: {
      '/': true,
      '/auth': true,
      '/dashboard': false,
    }
  })


})

module.exports = router