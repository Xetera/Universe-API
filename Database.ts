import * as pmysql from "promise-mysql"
const config = require('./Private');
import * as mysql from "promise-mysql"

import {World} from "./lib/Space";

export class Database {
    _opts : Object;

    _host : string;
    _user : string;
    _password : string;
    _database : string;
    conn : Promise<mysql.Connection>;

    constructor() {

        this._opts = {
            host : config.Host,
            user : config.Username,
            password : config.Password,
            database : config.Database
        };
        this.conn =  mysql.createConnection(this._opts);

    }


    isConnected() : Boolean{
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
    query(query : string, array ?: Array<any> | Object) : Promise<Object> {
        let db = this.conn;
        return new Promise(function (resolve, reject) {

            db.then(function (connection) {
                    return connection.query(`${query}`, array)
                })
                .then(function (rows: any) {
                    resolve(rows);
                })
                .catch(function (error: string) {
                    console.log(error);
                    reject(error);
                });
        });


    }


    savePerson(id : number, world : string, name : string, gender : string, age : number) : Boolean {
        this.conn.then((connection) => {
            return connection.query(`INSERT INTO people VALUES('${id}', '${world}', '${name}', '${gender}', '${age}')`)
                })
                .then(function (resp : any ) {
                    console.log(typeof resp);
                    if (resp['affectedRows'] === 1) {
                        return true;
                    }
                })
                .catch(function (err: string) {
                    console.log(err);
                    return false;
                });

    }

}


/*
db.query(`SELECT * FROM people WHERE world='Earth'`).then((resp)=>{
    console.log(resp);
});
*/

module.exports  = Database;
