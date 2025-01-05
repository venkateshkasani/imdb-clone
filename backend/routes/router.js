const producerRoute = require('./producers')
const directorRoute = require('./directors')
const movieRoute = require('./movies')
const express = require('express')
const router = express.Router();
router.use('/',producerRoute)
router.use('/',directorRoute)
router.use('/',movieRoute)

module.exports = router;