const express = require('express');
const router = express.Router();
const authMiddleware = require("../middleware");

const db = require('../db/reports.js');

router.get('/', authMiddleware, (req, res) => {
    db.getAllReports(req.user.id)
    .then(reports => {
      res.json(reports)
    }) 
  })

router.post('/addReport', authMiddleware, (req, res) => {
    db.addReport(req.body, req.user.id)
    .then(id => {
        db.getReportById(id)
        .then(report => {
          res.json(report)
        })
    })
})

router.get('/deleteReport/:id', authMiddleware, (req, res) => {
    db.deleteReportById(req.params.id)
    .then(() => {
      res.json(null)
    }) 
  })

module.exports = router