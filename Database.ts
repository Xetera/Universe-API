const config = require('./Private');
import * as pmysql from "promise-mysql"
import * as mysql from "promise-mysql"
import {World} from "./lib/Space";

export class Database {
    public conn : Promise<mysql.Connection>;

    private _opts : Object;
    private _host : string;
    private _user : string;
    private _password : string;
    private _database : string;

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
        let db = this.conn; // Promises don't have access to this... I think
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


    savePerson(id : number, world : string, name : string, gender : string, age : number) : any {
        // for some reason setting the return type to Boolean doesn't work, so we have to go with any

        this.conn.then((connection) => {
            // no need to sanitize any sort of values since it's not input
            return connection.query(`INSERT INTO people VALUES('${id}', '${world}', '${name}', '${gender}', '${age}')`)
                })
                .then(function (resp : any ) {
                    if (resp['affectedRows'] === 1) {
                        // only one row is affected if successful
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
