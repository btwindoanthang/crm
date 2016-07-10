var pg = require("pg");

var conString = "pg://postgres:123456@localhost:5432/crm";

var client = new pg.Client(conString);
client.connect();

var exports = module.exports = {};
var result=[];
exports.users=function (name,last) {
    var query = client.query("SELECT * FROM users");
    query.on("row", function (row, result) {
        result.addRow(row);
        return row;exit;
    });
    query.on("end", function (result) {
        console.log(JSON.stringify(result.rows, null, "    "));
        client.end();
    });

    return result.rows;
}
