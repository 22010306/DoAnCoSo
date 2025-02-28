// api/product-image

const router = require('express').Router()
const { SaveProductImage, upload } = require('../model/image')

router.post('/', upload.single('image'), async function (req, res) {
  const path = SaveProductImage(req.file)
  res.json({ data: path, message: "Successfull upload image", success: true })
})

module.exports = router