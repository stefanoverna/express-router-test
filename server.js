var express = require("express");
var bodyParser = require("body-parser");
var app = require("./controllers");

var server = express();
server.use(bodyParser.json());
server.use(app);

server.listen(3000);
