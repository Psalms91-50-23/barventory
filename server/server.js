const express = require('express')
const path = require('path')

const server = express()


const bottleRoutes = require('./routes/bottles')
const inventoryRoutes = require('./routes/inventory')
const reportRoutes = require('./routes/reports')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))


server.use('/api/v1/barventory/bottles', bottleRoutes)
server.use('/api/v1/barventory/inventory', inventoryRoutes)
server.use('/api/v1/barventory/reports', reportRoutes)

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
  })
  

module.exports = server
