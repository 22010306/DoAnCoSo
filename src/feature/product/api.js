const Product = require('./models/product')

const router = require('express').Router()

router.get('/', async function (req, res) {

  res.json({ success: false, message: 'Cant get products', data: [] })
})

router.post('/', async function (req, res) {

  res.json({ success: false, message: 'Cant create products', data: [] })
})

router.put('/', async function (req, res) {

  res.json({ success: false, message: 'Cant update products', data: [] })
})

router.delete('/', async function (req, res) {

  res.json({ success: false, message: 'Cant delete products', data: [] })
})


module.exports = router