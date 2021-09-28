const jwt = require("jsonwebtoken");
const db = require("./db/users");

//Middleware to get Auth header and verify the token.
function authMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.JWT_SECRET, (err, unencUser) => {
    if (err) return res.sendStatus(403);
    db.getUser(unencUser.username).then((user) => {
      if (user == null) throw "Couln't find that user";
      req.user = user;
      next();
    }).catch(err => {
      res.sendStatus(401);
    });
  });
}

module.exports = authMiddleware;