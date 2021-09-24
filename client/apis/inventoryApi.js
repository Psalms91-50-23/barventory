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
        console.log("response inv api ", response )
      response.body
    })
  
  }