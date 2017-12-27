"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require('./Private');
const mysql = require("promise-mysql");
class Database {
    constructor() {
        this._opts = {
            host: config.Host,
            user: config.Username,
            password: config.Password,
            database: config.Database
        };
        this.conn = mysql.createConnection(this._opts);
    }
    isConnected() {
        return typeof this.conn !== ('undefined' || null);
    }
    /*
    connect(db : Database){
        return new Promise(function(res, rej){

            db.conn.connect(function(connection){
                res(connection);
            });
        })
    }
    */
    query(query, array) {
        let db = this.conn; // Promises don't have access to this... I think
        return new Promise(function (resolve, reject) {
            db.then(function (connection) {
                return connection.query(`${query}`, array);
            })
                .then(function (rows) {
                resolve(rows);
            })
                .catch(function (error) {
                console.log(error);
                reject(error);
            });
        });
    }
    savePerson(id, world, name, gender, age) {
        // for some reason setting the return type to Boolean doesn't work, so we have to go with any
        this.conn.then((connection) => {
            // no need to sanitize any sort of values since it's not input
            return connection.query(`INSERT INTO people VALUES('${id}', '${world}', '${name}', '${gender}', '${age}')`);
        })
            .then(function (resp) {
            if (resp['affectedRows'] === 1) {
                // only one row is affected if successful
                return true;
            }
        })
            .catch(function (err) {
            console.log(err);
            return false;
        });
    }
}
exports.Database = Database;
/*
db.query(`SELECT * FROM people WHERE world='Earth'`).then((resp)=>{
    console.log(resp);
});
*/
module.exports = Database;
