var express = require("express");
var jwt = require("jsonwebtoken");

var sessions = express.Router();

sessions.route("/")
  .post(function(req, res, next) {
    if (req.body.username === "steffoz" && req.body.password === "maglione") {
      var token = jwt.sign({ userId: "24" }, "XXX");
      res.json({ token: token });
    } else {
      res.fail("invalid credentials");
    }
  });

module.exports = sessions;

