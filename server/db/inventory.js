const database = require('./connection')

//TODO getAllInventoryBottles
function getAllInventoryBottles (userId, db = database) {
  return db('bottles_inventory')
      .where("user_id", userId)
      .select('bottle_id').then(bottleIds => {
        bottleIds = bottleIds.map(i => i.bottle_id)
        return db("bottles")
          .whereIn("id", bottleIds)
          .select();
      })
}

//TODO addInventoryBottle
function addInventoryBottle ( bottleId, userId, db = database) {
  return db("bottles_inventory").insert({
    user_id: userId,
    bottle_id: bottleId,
  });
}

//TODO deleteInventoryBottle
function removeInventoryById (bottle_id, user_id, db = database) {
    return db("bottles_inventory")
      .select()
      .where("user_id", user_id)
      .where("bottle_id", bottle_id)
      .delete();
}

module.exports = {
    getAllInventoryBottles,
    addInventoryBottle,
    removeInventoryById
}