const database = require('./connection')

function getAllBottles (db = database) {
    return db('bottles')
        .select()
}

function getBottleById (id, db = database) {
    return db('bottles')
    .select()
    .where('id', id)
    .first()
}

module.exports = {
    getAllBottles,
    getBottleById
}