const fs = require('fs')
const path = require('path')
const { v4 } = require('uuid')
const multer = require('multer')

const imagePath = '/upload/product'
const folderPath = 'public/upload/product'

if (fs.existsSync(folderPath, { recursive: false }) === false) {
  fs.mkdirSync(folderPath)
}

const upload = multer({
  store: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, folderPath)
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
})

function SaveProductImage(file) {
  console.log(file)
  if (!file) return ''

  const filename = [v4(), '-', Date.now(), '.', file.originalname.split('.')[1]].join('')
  fs.writeFileSync(path.join(folderPath, filename), file.buffer)

  return path.join(imagePath, filename)
}

module.exports = {
  SaveProductImage,
  upload
}