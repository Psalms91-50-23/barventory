import request from "superagent";

const baseUrl = "/api/v1/barventory/reports";

export function getAllReports() {
  const auth = "Bearer " + localStorage.getItem("token");
  return request
    .get(baseUrl)
    .set("Authorization", auth)
    .then((res) => res.body);
}

export function addReportAPI(report) {
  const auth = "Bearer " + localStorage.getItem("token");
  return request
    .post(`${baseUrl}/addReport`)
    .set("Authorization", auth)
    .send(report)
    .then((res) => res.body);
}

export function deleteReportAPI(id) {
  const auth = "Bearer " + localStorage.getItem("token");
  return request
    .get(`${baseUrl}/deleteReport/${id}`)
    .set("Authorization", auth)
    .then((res) => res.body);
}
