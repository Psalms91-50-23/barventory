const express = require("express");
const router = express.Router();
var AuthenticationClient = require("auth0").AuthenticationClient;

const db = require("../db/bottles.js");

router.get("/", (req, res) => {
    res.send();
//   db.getAllBottles().then((bottles) => {
//     res.json(bottles);
//   });
});


module.exports = router;
