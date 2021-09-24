const express = require('express')
const router = express.Router()

const dbInventory = require('../db/inventory.js')
const dbBottles = require('../db/bottles.js')

router.get('/', (req, res) => {
    dbInventory.getAllInventoryBottles()
    .then(bottles => {
      res.json(bottles)
    }) 
  })

router.get('/addBottle/:id', (req, res) => {
//get bottle by id from bottles table
//add result of bottle id to inventory table
    dbBottles.getBottleById(req.params.id)
    .then(bottle  => {
      //console.log("bottle what is it ", bottle)
        dbInventory.addInventoryBottle(bottle)
        .then(() => {
          res.send()
        })
    })
})

router.delete('/delete/:id', (req, res) => {
    dbInventory.removeInventoryById(req.params.id)
    .then(() => {
      res.json(null)
    }) 
  })

module.exports = router