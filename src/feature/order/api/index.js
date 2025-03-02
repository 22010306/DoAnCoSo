const { getOrder, getOrderById } = require('../model/order')

// /api/manage-order/
const router = require('express').Router()

router.get('/', async function (req, res) {
  try {
    const [result] = await getOrder()
    res.json({ message: "Success", data: result, success: true })
  } catch (error) {
    res.json({ message: "Failed", data: null, success: false })
  }
})


router.get('/info/:id', async function (req, res) {
  try {

    const [result] = await getOrderById({ id: req.params.id })

    res.json({ message: "Success", data: result, success: true })
  } catch (error) {
    console.log(error)
    res.json({ message: "Failed", data: null, success: false })
  }
})
module.exports = router