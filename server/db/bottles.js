const database = require('./connection')

function getAllBottles (db = database) {
    return db('bottles')
        .select()
}

module.exports = {
    getAllBottles
}