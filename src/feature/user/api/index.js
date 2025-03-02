// api/auth/
const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { createUser, getUser, getSecretValue } = require('../model/user')



router.post('/register', async function (req, res) {
  try {
    console.log(req.body)
    const { name, email, password } = req.body
    const hashPassword = await bcrypt.hash(password, 12)

    const [result] = await createUser({ name, email, password: hashPassword })
    res.json({ message: "Success", success: true, data: result.insertId })
  } catch (error) {
    res.json({
      success: false,
      message: "Can't create your account.",
      data: null
    })
  }
})

router.post('/login', async function (req, res) {
  const [user] = await getUser({ email: req.body.email })
  if (user.length === 0) return res.json({
    success: false,
    message: "User doesnt exists.",
    data: null
  })
  console.log(user)
  const result = await bcrypt.compare(req.body.password, user[0].password)
  res.json({
    message: result ? "Success" : "Login failed!",
    success: result,
    data: jwt.sign(user[0].id, getSecretValue())
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