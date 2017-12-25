"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pmysql = require("promise-mysql");
const config = require('./Private');
class Database {
    constructor() {
        this._host = config.Host;
        this._user = config.Username;
        this._password = config.Password;
        this._database = config.Database;
        this.conn = this.connect();
    }
    connect() {
        let host = this._host;
        let user = this._user;
        let password = this._password;
        let database = this._database;
        return new Promise(function (resolve, reject) {
            pmysql.createConnection({
                host: host,
                user: user,
                password: password,
                database: database
            })
                .then((resp) => {
                resolve(resp);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    isConnected() {
        return typeof this.conn !== ('undefined' || null);
    }
    query(query) {
        return new Promise(function (resolve, reject) {
            db.conn.then(function (connection) {
                connection.query(`${query}`);
            })
                .then(function (rows) {
                resolve(rows);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    }
    savePerson(id, world, name, gender, age) {
        db.query(`INSERT INTO people VALUES('${id}', '${world}', '${name}', '${gender}', '${age}')`)
            .then(function (resp) {
            console.log(typeof resp);
            if (resp['affectedRows'] === 1) {
                return ("Person saved");
            }
        })
            .catch(function (err) {
            return err;
        });
    }
}
exports.Database = Database;
let db = new Database();
db.conn.then(function (resp) {
    //console.log(resp);
});
console.log(db.isConnected());
