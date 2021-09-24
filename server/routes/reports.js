const express = require('express')
const router = express.Router()

const db = require('../db/reports.js')

router.get('/', (req, res) => {
    db.getAllReports()
    .then(reports => {
      res.json(reports)
    }) 
  })

router.post('/addReport', (req, res) => {
    db.addReport(req.body)
    .then(id => {
        db.getReportById(id)
        .then(report => {
          res.json(report)
        })
    })
})

router.get('/deleteReport/:id', (req, res) => {
    db.deleteReportById(req.params.id)
    .then(() => {
      res.json(null)
    }) 
  })

module.exports = router