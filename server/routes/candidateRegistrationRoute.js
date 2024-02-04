const router = require('express').Router()
const candidateRegistrationController = require('../controllers/candidateRegistrationController')
router.post('/registration', candidateRegistrationController)


module.exports = router