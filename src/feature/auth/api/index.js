// api/auth/
const router = require('express').Router()

router.use('/authenticate', require('./authenticate'))
router.use('/authorize', require('./authorization'))
router.use('/user', require('./user'))

module.exports = router