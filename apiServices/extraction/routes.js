const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.post('/create', controller.createExtraction);

module.exports = router
