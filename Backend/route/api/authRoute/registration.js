const express = require('express')
const route = express.Router()
const registrationController = require('../../../controllers/registrationController')

route.post('/registration',registrationController)



module.exports =route