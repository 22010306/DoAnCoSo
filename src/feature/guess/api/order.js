// /api/order
const router = require('express').Router()

const parseCustomerTokenMiddleware = require('./parseTokenMiddleware')

router.post('/', parseCustomerTokenMiddleware, async function (req, res) {
  const user = res.locals.user

})

module.exports = router