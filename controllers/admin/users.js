var express = require("express");

var users = express.Router();

users.param("id", function(req, res, next, id) {
  if (id === "24") {
    req.user = "Foobar";
    next();
  } else {
    res.fail("user not found");
  }
});

users.route("/")
  .get(function(req, res, next) {
    res.json("index")
  })
  .post(function(req, res, next) {
    res.json("create")
  });

users.route("/:id")
  .get(function(req, res, next) {
    res.json(req.user)
  })
  .patch(function(req, res, next) {
    res.json("update")
  })
  .delete(function(req, res, next) {
    res.json("destroy")
  });

module.exports = users;
