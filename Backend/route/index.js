const express = require('express') 
const route = express.Router()
const Auth = require('./api')

route.use('/api/v1',Auth)
 

module.exports = route 