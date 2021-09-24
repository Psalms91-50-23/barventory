import request from 'superagent'

export function getBottles () {
    return request
    .get('/api/v1/barventory/bottles')
    .then(res => res.body)
}