const express = require('express')
const multer = require('multer')
const router = express.Router()

// upload file
router.use('/file', require('../uploadFile/api'))

// default
router.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = router