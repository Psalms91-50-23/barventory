const express = require('express')
const router = express.Router()

const db = require('../db/bottles.js')

router.get('/', (req, res) => {
  db.getAllBottles()
  .then(bottles => {
    res.json(bottles)
  }) 
})

router.get('/:id', (req, res) => {
  db.getBottleById(req.params.id)
  .then(bottle => {
    res.json(bottle)
  }) 
})

module.exports = router