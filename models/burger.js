// copy and paste from other ACTIVITIES
var orm = require("../config/orm");

var burger = {
    all :function(cb) {
        orm.all("allburgers",function (res) {
            cb(res);
        });
    // },
    // create: function (name,cb) {
    //     orm.create("allburgers", [
    //         "burger_name", "devoured"
    //     ], [
    //         name, false
    //     ], cb );
    // },
    // update: function(id,cb) {
    //     var condition = "id=" + id;
    //     orm.update("allburgers", {
    //         devoured: true
    //     }, condition, cb);
    // },
    // delete: function(condition, cb) {
    //     orm.delete("allburgers", condition, function(res) {
    //       cb(res);
    //     });
    }


};

module.exports = burger;