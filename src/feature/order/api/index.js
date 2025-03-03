// /api/manage-order/
const { getOrder, getOrderHistoryByUserId, getOrderItemById, getOrderById } = require('../model/order')

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
    console.log(req.params.id)
    const [result] = await getOrderHistoryByUserId({ id: req.params.id })

    res.json({ message: "Success", data: result, success: true })
  } catch (error) {
    console.log(error)
    res.json({ message: "Failed", data: null, success: false })
  }
})

router.get('/detail/:id', async function (req, res) {
  try {
    console.log(req.params.id)
    const [result] = await getOrderById({ id: req.params.id })

    res.json({ message: "Success", data: result, success: true })
  } catch (error) {
    console.log(error)
    res.json({ message: "Failed", data: null, success: false })
  }
})



router.get('/items/:id', async function (req, res) {
  try {
    console.log(req.params.id)
    const [result] = await getOrderItemById({ id: req.params.id })

    res.json({ message: "Success", data: result, success: true })
  } catch (error) {
    console.log(error)
    res.json({ message: "Failed", data: null, success: false })
  }
})
module.exports = router