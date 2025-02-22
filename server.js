const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('dist'))
app.use(express.static('public'))


app.use('/api', require('./src/api'))
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})