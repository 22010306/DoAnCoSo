const fs = require('fs')

const router = require('express').Router()
const multer = require('multer')

if (fs.existsSync('upload') === false) {
  fs.mkdirSync('upload')
}
// store
const upload = multer({
  store: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/upload')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
})


router.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
  console.log(req.file.path)
  fs.writeFileSync('upload/' + [Date.now(), '.', file.originalname.split('.')[1]].join(''), file.buffer)
  res.send(file)
})

//Uploading multiple files
router.post('/uploadmultiple', upload.array('myFiles', 12), (req, res, next) => {
  const files = req.files
  if (!files) {
    const error = new Error('Please choose files')
    error.httpStatusCode = 400
    return next(error)
  }
  res.send(files)
})

module.exports = router