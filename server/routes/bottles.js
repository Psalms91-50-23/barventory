const express = require('express')
const router = express.Router()

const db = require('../db/bottles.js')
const authMiddleware = require("../middleware");

router.get('/', authMiddleware, (req, res) => {
  db.getAllBottles()
  .then(bottles => {
    res.json(bottles)
  }) 
})

router.get('/:id', authMiddleware, (req, res) => {
  db.getBottleById(req.params.id)
  .then(bottle => {
    res.json(bottle)
  }) 
})

module.exports = router