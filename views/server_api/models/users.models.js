var pg = require("pg");
var Promise =require('promise');
var conString = "pg://postgres:123456@localhost:5432/crm";

var client = new pg.Client(conString);


var exports = module.exports = {};



exports.users=function (name,last) {

    return new Promise((resolve, reject) => {

        client.connect(function (err) {
            if (err) throw err;
            client.query('SELECT * FROM users', function (err, result) {
                if (err) throw err;

                //return resolve(result);
     //////
                for(var k in result) {
   console.log(k, result[k]);
    }
                client.query('SELECT * FROM users', function (err, results) {
                if (err) throw err;
                result.logs=results;
                return resolve(result);
    
                client.end(function (err) {
                    if (err) throw err;
                });
            });

     ////
    
                client.end(function (err) {
                    if (err) throw err;
                });
            });
        });   

    
    });
   //return promise.promise();
}
