const LoginToken = require('../model/login_token')
const User = require('../model/user')

// api/auth/authorize
const router = require('express').Router()

router.get('/permissions', async function (req, res) {
  let param, result, user
  try {
    param = req.headers.authorization
    result = LoginToken.ParseToken(param.split(' ')[1])
    user = await User.FindUserById({ id: result.userId })
  } catch (error) { }

  if (!user || user.role === 'guess') return res.json({
    success: true,
    message: 'Success.',
    permissions: {
      '/': true,
      '/auth': true,
      '/dashboard': false,
    }
  })

  res.json({
    success: true,
    message: 'Success.',
    permissions: {
      '/': true,
      '/auth': true,
      '/dashboard': true,
    }
  })
})

module.exports = router