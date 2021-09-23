const express = require('express')
const path = require('path')

const server = express()


const barventoryRoutes = require('./routes/barventory')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))


server.use('/api/v1/barventory', barventoryRoutes)
module.exports = server
