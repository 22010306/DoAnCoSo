const Product = require('./models/product')

const router = require('express').Router()

router.get('/', async function (req, res) {
  try {
    const result = await Product.Read({})
    console.log(result)

    return res.json({ success: true, message: 'Success', data: result[0] })
  } catch (error) {
    console.error(error)
  }

  res.json({ success: false, message: 'Cant get products', data: [] })
})

router.post('/', async function (req, res) {
  try {
    const { name, price, description } = req.body
    const result = await Product.Create({ name, price, description })
    console.log(result)

    return res.json({ success: true, message: 'Success', })
  } catch (error) {
    console.error(error)
  }
  res.json({ success: false, message: 'Cant create products', data: [] })
})

router.put('/', async function (req, res) {
  try {
    const { name, price, description, id } = req.body
    const result = await Product.Update({ id, name, price, description })
    console.log(result)

    return res.json({ success: true, message: 'Success', })
  } catch (error) {
    console.error(error)
  }

  res.json({ success: false, message: 'Cant update products', data: [] })
})

router.delete('/', async function (req, res) {
  try {
    const { id } = req.body
    const result = await Product.Delete({ id })
    console.log(result)

    return res.json({ success: true, message: 'Success', })
  } catch (error) {
    console.error(error)
  }

  res.json({ success: false, message: 'Cant delete products', data: [] })
})


module.exports = router