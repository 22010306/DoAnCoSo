// api/auth/
const router = require('express').Router()

router.use('/authenticate', require('./api/authenticate'))
router.use('/authorize', require('./api/authorization'))
router.use('/user', require('./api/user'))

module.exports = router