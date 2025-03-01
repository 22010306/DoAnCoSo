const jwt = require('jsonwebtoken')
const { getSecretValue } = require('../../customer/model/customer')

async function parseCustomerTokenMiddleware(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const result = jwt.verify(token, getSecretValue())

    res.locals.user = { id: result.id }
  } catch (error) {
    return res.json({ message: "Cant find customer.", success: false, data: null })
  }
  next()
}

module.exports = parseCustomerTokenMiddleware