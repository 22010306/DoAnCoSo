const jwt = require('jsonwebtoken')
const { getSecretValue } = require('../../customer/model/customer')

async function parseCustomerTokenMiddleware(req, res, next) {
  try {
    const result = jwt.verify(req.headers.authorization.split(" ")[1], getSecretValue())
    res.locals.user = { id: result.id }
  } catch (error) {
    console.log(error)
  }
  next()
}

module.exports = parseCustomerTokenMiddleware