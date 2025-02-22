const express = require('express')

const app = express()

app.use(express.static('dist'))
app.use(express.static('public'))
app.use(express.static('upload'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/api', require('./src/app/api'))

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html')
})

app.listen(process.env.PORT, () => {
  console.log('Server is running on http://localhost:3000')
})