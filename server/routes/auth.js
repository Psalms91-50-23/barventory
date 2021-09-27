const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const db = require("../db/users.js");
const bcrypt = require("bcrypt");

dotenv.config();
process.env.JWT_SECRET;

function generateAccessToken(username) {
  return jwt.sign(username, process.env.JWT_SECRET, { expiresIn: "365d" });
}

router.post("/register", async (req, res) => {
  const username = req.body.username;
  const name = req.body.name;
  const password = req.body.password;
  if (!username || !name || !password) {
    res.status(400).send();
  }

  //Generate Password hash
  const salt = await bcrypt.genSalt(934718249);
  const passwordHash = await bcrypt.hash(password, salt);
  db.createUser({
    email: username,
    name: name,
    password_hash: passwordHash,
  })
    .then((user) => {
      const token = generateAccessToken({ username: req.body.username });
      res.json({
        ...user,
        token: generateAccessToken({ username: req.body.username }),
      });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (!username || !password) {
    res.status(400).send();
  }
  db.getUser(username)
    .then(async (user) => {
      if (user == null) {
        return res
          .status(401)
          .send("Username or Password do not match our records");
      }
      const validPassword = await bcrypt.compare(password, user.password_hash);
      if (validPassword) {
        res.json({
          username: user.email,
          name: user.name,
          token: generateAccessToken({ username: req.body.username }),
        });
      } else {
        return res.status(401).send("Username and/or Password incorrect");
      }
    });
});

module.exports = router;
