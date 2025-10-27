const express = require('express')
const route= express.Router()
const Registration = require('./authRoute/registration')
const Login = require('./authRoute/login')
 
route.use('/authentication',Registration)
route.use('/authentication',Login)



module.exports =route