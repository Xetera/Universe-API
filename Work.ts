import * as pmysql from "promise-mysql"
const config = require('./Private');
import * as mysql from "mysql"
import {World} from "./lib/Space";

export class Database {
    _host : string;
    _user : string;
    _password : string;
    _database : string;
    conn : Promise<mysql.Connection>;
    constructor() {
        this._host = config.Host;
        this._user = config.Username;
        this._password = config.Password;
        this._database = config.Database;
        this.conn = this.connect();

    }

    connect() : Promise<mysql.Connection> {
        let host = this._host;
        let user = this._user;
        let password = this._password;
        let database = this._database;
        return new Promise(function (resolve, reject){
            pmysql.createConnection({
                host: host,
                user: user,
                password: password,
                database: database
            })
                .then((resp : any) => {
                    resolve(resp);
                }).catch((err : string)=>{
                    reject(err);
                })
        });

    }

    isConnected() : Boolean{
        return typeof this.conn !== ('undefined' || null);
    }

    query(query : string) : Promise<mysql.Query> {
        return new Promise(function(resolve, reject) {

            db.conn.then(function (connection) {
                connection.query(`${query}`)
                })
                .then(function (rows : any) {
                    resolve(rows);
                })
                .catch(function(error : string){
                    reject(error);
                });
            });


    }

    savePerson(id : number, world : string, name : string, gender : string, age : number) {

        db.query(`INSERT INTO people VALUES('${id}', '${world}', '${name}', '${gender}', '${age}')`)
            .then(function(resp : Object){
                console.log(typeof resp);
                if (resp['affectedRows'] === 1){
                    return("Person saved");
                }
            })
            .catch(function(err : string){
               return err;
            });

    }

}


let db :Database = new Database();
db.conn.then(function(resp){
    //console.log(resp);
});
console.log(db.isConnected());