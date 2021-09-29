const database = require("./connection")

//get all reports
function getAllReports(userID, db = database) {
  return db("reports")
    .where("users_id", userID)
    .select()
}

//add a report
function addReport(report, userId, db = database) {
  const newReport = {
    id:report.id,
    date:report.date,
    users_id: userId,
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
