import request from 'superagent'

const baseUrl = '/api/v1/barventory/reports'

export function getAllReports () {
    return request
    .get(baseUrl)
    .then(res => res.body)
}

export function addReportAPI (report) {
  return request
  .post(`${baseUrl}/addReport`)
  .send(report)
  .then(res => res.body)
}

export function deleteReportAPI (id) {
  return request
  .get(`${baseUrl}/deleteReport/${id}`)
  .then(res => res.body)
}