const database = require('./connection')

//get all reports
function getAllReports (db = database) {
    return db('reports')
        .select()
  }

//add a report
function addReport ( report, db = database) {
    return db('reports')
      .insert(report)
  }

//delete a report
function deleteReportById (id, db = database) {
    return db('reports')
    .select()
    .where('id', id)
    .delete()
}

module.exports = {
    getAllReports,
    addReport,
    deleteReportById
}