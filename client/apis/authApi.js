import request from "superagent";
const baseUrl = "/api/v1/barventory/auth";

export function register(postObj) {
  return request
    .post(baseUrl + "/register", postObj)
    .then((res) => {
      localStorage.setItem("token", res.body.token);
      localStorage.setItem("user", JSON.stringify({
        username: res.body.username,
        name: res.body.name,
      }));
    })
    .catch((err) => {
      throw err.response.text;
    });
}

export function login(postObj) {
  return request
    .post(baseUrl + "/login", postObj)
    .then((res) => {
      localStorage.setItem("token", res.body.token);
      localStorage.setItem("user", {
        username: res.body.username,
        name: res.body.name,
      });
    })
    .catch((err) => {
      throw err.response.text;
    });
}
