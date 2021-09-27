import request from "superagent";
const baseUrl = "/api/v1/barventory/inventory";

export function fetchAllInventory() {
  const auth = "Bearer " + localStorage.getItem("token");
  return request
    .get(baseUrl)
    .set("Authorization", auth)
    .then((response) => response.body);
}

export const deleteInventoryApi = (id) => {
  const auth = "Bearer " + localStorage.getItem("token");
  return request
    .delete(`${baseUrl}/delete/${id}`)
    .set("Authorization", auth)
    .then((response) => {
      response.body;
    });
};

export const addBottleToInventory = (id) => {
  const auth = "Bearer " + localStorage.getItem("token");
  return request
    .get(`${baseUrl}/addBottle/${id}`)
    .set("Authorization", auth)
    .then((response) => {
      response.body;
    });
};
