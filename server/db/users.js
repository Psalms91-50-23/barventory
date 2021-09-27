const database = require("./connection");

function getUserById(id, db = database) {
  return db("users").select().where("id", id).first();
}

function createUser(user, db = database) {
  
  return db("users").where("email", user.email).select().then(existingUsers => {
    if (existingUsers.length > 0) {
      throw "User with username already exists";
    }
    return db("users").insert(user);
  });
}

function getUser(username, db = database) {
  return db("users")
    .where("email", username)
    .first();
}

module.exports = {
  getUserById,
  createUser,
  getUser,
};
