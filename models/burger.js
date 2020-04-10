var orm = require("../config/orm.js");

var burger = {
  // The variables cols and vals are arrays.
  selectAll: function(cols, vals, cb) {
    orm.selectAll("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }

  // update: function(objColVals, condition, cb) {
  //   orm.update("cats", objColVals, condition, function(res) {
  //     cb(res);
  //   });
  // },
};

// Export the database functions for the controller (burgers_Controller.js).
module.exports = burger;