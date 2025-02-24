

const router = require('express').Router()

const { v4 } = require('uuid')
const User = require('../model/user')

// Create user
router.post('/', async function (req, res) {
  let result
  try {
    result = await User.Create({
      id: v4(),
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      role: req.body.role
    })
  } catch (error) {
    return res.json({ error: error.message })
  }
  res.json(result)
})

router.post('/admin-user', async function (req, res) {
  try {
    console.log(req.body)
    const result = await User.RegisterAdminAccount(req.body)
    res.json({
      success: true,
      message: "Create admin account.",
      data: null
    })
  } catch (error) {
    res.json({
      success: false,
      message: "Fail.",
      data: null
    })
  }
})

// Read user
router.get('/', async function (req, res) {
  const result = await User.Read()
  res.json(result)
})

// Update user
router.put('/', async function (req, res) {
  await User.Update(req.body)
  res.json({ success: true })
})

// Delete user
router.delete('/', async function (req, res) {
  await User.Delete({ ...req.body })
  res.send('delete user')
})


module.exports = router