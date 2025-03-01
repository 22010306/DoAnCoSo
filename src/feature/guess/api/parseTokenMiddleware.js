const jwt = require('jsonwebtoken')
const { getSecretValue } = require('../../customer/model/customer')

async function parseCustomerTokenMiddleware(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1]
    console.log(token, req.headers)
    const result = jwt.verify(token, getSecretValue())

    res.locals.user = { id: result.id }
  } catch (error) {
    console.log(error)
  }
  next()
}

module.exports = parseCustomerTokenMiddleware