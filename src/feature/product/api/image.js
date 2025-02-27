// api/product-image

const router = require('express').Router()
const { SaveProductImage, upload } = require('../model/image')

router.post('/', upload.single('image'), async function (req, res) {
  const path = SaveProductImage(req.file)
  console.log(path)
  res.json(path)
})

module.exports = router