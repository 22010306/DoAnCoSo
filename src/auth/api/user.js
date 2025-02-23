

const router = require('express').Router()

const User = require('../model/user')

// Create user
router.post('/', async function (req, res) {
  let result
  try {
    result = await User.Create({
      email: req.body.email,
      password: req.body.password,
      username: req.body.username,
      role: req.body.role
    })
  } catch (error) {
    return res.json({ error: error.message })
  }
  res.json(result)
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