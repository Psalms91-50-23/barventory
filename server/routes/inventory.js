const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware");

const dbInventory = require("../db/inventory.js");
const dbBottles = require("../db/bottles.js");

router.get("/", authMiddleware, (req, res) => {
  dbInventory.getAllInventoryBottles(req.user.id).then((bottles) => {
    res.json(bottles);
  });
});

router.get("/addBottle/:id", authMiddleware, (req, res) => {
  //get bottle by id from bottles table
  //add result of bottle id to inventory table
  dbBottles.getBottleById(req.params.id).then((bottle) => {
    dbInventory.addInventoryBottle(bottle.id, req.user.id).then(() => {
      res.send();
    });
  }).catch(err => {
    res.send(400);
  });
});

router.delete("/delete/:id", authMiddleware, (req, res) => {
  const bottleId = req.params.id;
  dbInventory
    .removeInventoryById(bottleId, req.user.id)
    .then(() => {
      res.json(null);
    })
    .catch((err) => {
      res.send(400);
    });;
});

module.exports = router;
