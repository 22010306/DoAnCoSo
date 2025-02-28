const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const fs = require('fs')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true, }))
app.use(morgan('combined'))
app.use(express.static('dist'))
app.use(express.static('public'))

app.use('/api', require('./src/app/api'))
app.use('/*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html')
})

app.listen(process.env.PORT, () => {
  console.log('Server is running on http://localhost:3000')
})