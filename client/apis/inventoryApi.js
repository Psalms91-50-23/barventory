import request from 'superagent'
const baseUrl = '/api/v1/barventory/inventory'


export function fetchAllInventory() {

    return request
    .get(baseUrl)
    .then(response => response.body)
}

export const deleteInventoryApi = (id) => {

    return request
    .delete(`${baseUrl}/delete/${id}`)
    .then(response => {
      response.body
    })
  
  }

  export const addBottleToInventory = (id) =>
  {
    return request
    .get(`${baseUrl}/addBottle/${id}`)
    .then(response => {
      response.body
    })
  }