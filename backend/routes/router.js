const producerRoute = require('./producers')
const directorRoute = require('./directors')
const express = require('express')
const router = express.Router();
router.use('/',producerRoute)
router.use('/',directorRoute)

module.exports = router;