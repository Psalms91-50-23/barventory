const express = require('express')
const router = express.Router()

const db = require('../db/bottles.js')

router.get('/', (req, res) => {
  db.getAllBottles()
  .then(bottles => {
    console.log(bottles)
    res.json(bottles)
  }) 
})

module.exports = router