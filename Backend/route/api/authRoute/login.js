const express = require('express')
const route = express.Router()

route.get('/login', (req, res) => {
  res.send('Hi ami login!???')
})



module.exports =route