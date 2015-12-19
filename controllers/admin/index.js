var express = require("express");
var jwt = require("jsonwebtoken");

var users = require("./users");

var admin = express.Router();

admin.use(function(req, res, next) {
  var authorization = req.get("authorization") || "";
  var token = authorization.replace("Bearer ", "");

  try {
    var decoded = jwt.verify(token, "XXX");

    if (decoded.userId !== "24") {
      res.fail("invalid authorization token", 401);
    }
  } catch(e) {
    res.fail("invalid authorization token", 401);
  }
});

admin.use("/users", users);

module.exports = admin;
