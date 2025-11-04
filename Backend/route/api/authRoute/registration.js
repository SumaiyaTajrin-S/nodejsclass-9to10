const express = require('express')
const route = express.Router()
const registrationController = require('../../../controllers/registrationController')
const apiMiddleware = require('../../../middleware/apiMiddleware')


route.post('/registration',apiMiddleware,registrationController)



module.exports =route