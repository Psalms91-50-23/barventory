const database = require("./connection")

//get all reports
function getAllReports(db = database) {
  return db("reports").select()
}

//add a report
function addReport(report, db = database) {
  const newReport = {
    id:report.id,
    date:report.date,
    users_id:report.users_id,
    report_data: JSON.stringify(report.report_data)
  }
  return db("reports").insert(newReport)
}

//delete a report
function deleteReportById(id, db = database) {
  return db("reports").select().where("id", id).delete()
}

function getReportById(id, db = database) {
  return db("reports").select().where("id", id).first()
}

module.exports = {
  getAllReports,
  addReport,
  deleteReportById,
  getReportById
}
