const express = require('express') 
const route = express.Router()
const Auth = require('./api')
const API = process.env.API_BASE_URL

route.use(API,Auth)
 

module.exports = route 