const database = require('./connection')

//TODO getAllInventoryBottles
function getAllInventoryBottles (db = database) {
  return db('inventory')
      .select()
}

//TODO addInventoryBottle
function addInventoryBottle ( bottle, db = database) {
  newBottle = {
    name: bottle.name,
    size: bottle.size,
    size_num: bottle.size_num,
    image:bottle.image,
    silhouette:bottle.silhouette
  }
  return db('inventory')
    .insert(newBottle)
}

//TODO deleteInventoryBottle
function removeInventoryById (id, db = database) {
    return db('inventory')
    .select()
    .where('id', id)
    .delete()
}

module.exports = {
    getAllInventoryBottles,
    addInventoryBottle,
    removeInventoryById
}