"use strict";
exports.__esModule = true;
var mongodb_1 = require("mongodb");
var server = new mongodb_1["default"].Server('182.254.246.66', 27017, { auto_reconnect: true });
var db = new mongodb_1["default"].db('user', server, { w: 1 });
exports["default"] = db;
