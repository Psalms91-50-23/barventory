const express = require('express')
const path = require('path')

const server = express()


const bottleRoutes = require('./routes/bottles')
const inventoryRoutes = require('./routes/inventory')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))


server.use('/api/v1/barventory/bottles', bottleRoutes)
server.use('/api/v1/barventory/inventory', inventoryRoutes)

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
  })
  

module.exports = server
