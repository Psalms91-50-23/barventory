import request from 'superagent'

export function getBottles () {
    const auth = "Bearer "+localStorage.getItem("token");
    return request
    .get('/api/v1/barventory/bottles')
    .set("Authorization", auth)
    .then(res => res.body)
}