// copy and paste from other ACTIVITIES
var orm = require("../config/orm");

var burger = {
    all: function(cb) {
      orm.all("allburgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("allburgers", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("allburgers", objColVals, condition, function(res) {
        cb(res);
      });
    },
  };

module.exports = burger;