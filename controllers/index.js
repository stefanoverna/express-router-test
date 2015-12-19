var express = require("express");
var admin = require("./admin");
var sessions = require("./sessions");

var app = express.Router();

app.use(function(req, res, next) {
  res.fail = function(message, status) {
    var error = new Error(message);
    error.status = status || 422;
    throw error;
  }
  next();
});

app.use("/admin", admin);
app.use("/sessions", sessions);

app.use(function(err, req, res, next) {
  if (err) {
    res
      .status(err.status || 500)
      .json({ message: err.message });
  }
});

module.exports = app;
