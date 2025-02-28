// api/product

const router = require('express').Router()

const { createProduct, deleteProduct, readProduct, updateProduct, getProductById } = require('../model/product')

router.post('/', async function (req, res) {
  try {
    const result = await createProduct(req.body)
    res.json({ message: "Success", success: true, data: { id: result[0].insertId } })
  } catch (error) {
    res.json({ message: "Fail", success: false, data: null })
  }
})

router.get('/', async function (req, res) {
  try {
    const result = await readProduct()
    console.log(result)
    res.json({ message: "Success", success: true, data: result[0] })
  } catch (error) {
    res.json({ message: "Fail", success: false, data: null })
  }
})

router.get('/:id', async function (req, res) {
  const id = req.params.id
  const result = await getProductById({ id })
  console.log(result)

  res.json({ success: true, message: 'Success', data: result[0] })

})

router.put('/', async function (params) {

})


router.delete('/', async function (req, res) {
  try {
    const result = await deleteProduct(req.body)
    console.log(result)
    res.json({ message: "Success", success: true, data: result[0] })
  } catch (error) {
    console.log(error)
    res.json({ message: "Fail", success: false, data: null })
  }
})

module.exports = router