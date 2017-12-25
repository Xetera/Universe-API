let mysql = require('promise-mysql');
const config = require('./Private');

module.exports.Database = class Database {

    constructor() {
        this._host = config.Host;
        this._user = config.Username;
        this._password = config.Password;
        this._database = config.Database;
        
        this.connect().then(function(conn) {
            if (conn){
                console.log(`Connected to ${this._database} as ${this._user}@${this._host}:${config.Port}`)
            }
            else {
                throw new Error(`Failed to connect to ${this._database}`);
            }
        });

    }

    connect(){
        let connection = mysql.createConnection({
            host: this._host,
            user: this._user,
            password: this._password,
            database: this._database
        }).bind(this);

        this.conn = connection;
        return connection;

    }

    isConnected(){
        return typeof this.conn !== ('undefined' || null);
    }

    query(query){
        return new Promise(function(resolve, reject) {

            db.conn.then(function (conn) {
                conn.query(`${query}`)
                    .then(function (rows) {
                        resolve(rows);
                    })
                    .catch(function(error){
                        reject(error);
                    });
            });
        });

    }

    savePerson(id, world, name, gender, age){
        return new Promise(function(res, rej){
            db.query(`INSERT INTO people VALUES('${id}', '${world}', '${name}', '${gender}', '${age}')`)
                .then(function(resp){
                    if (resp['affectedRows'] === 1){
                        res("Person saved");
                    }
                })
                .catch(function(err){
                    rej(err);
                });
        });
    }

}
/*

let db = new Database();
//console.log(db.isConnected());
db.query(`SELECT * from people WHERE world='Earth'`)
    .then(function(rows){
        console.log(rows);
    });
let id = 102020;
let world = "Mars";
let name = "ali";
let gender = "Male";
let age = 10;

db.savePerson(id, world, name, gender, age)
    .then(function(ok){
        console.log(ok);
    });
*/