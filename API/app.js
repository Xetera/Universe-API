const Database = require('../Database.js');
//const Database = new db();
let express = require('express');
const mysql = require('mysql');

let app = express();
const db = new Database();

class API extends Database {

    constructor(){
        super();
        app.set('trust proxy', true);

    }

    connect(){

    }

}

app.listen(3030, () => {
    console.log("API Server started at port 3000");
});


// let runtime = require('../lib/Runtime.js');

// console.log(universe.universe);


app.get('/', function (req, res) {
    console.log(`Got a connection from ${req.ip}`);
    res.sendStatus(200);
});

app.get('/people/:world', function(req,res){
    let worldType = req.params.world;
    console.log(worldType);
    let prepared = mysql.format(`SELECT * FROM people WHERE world=?`, [worldType]);
    console.log(prepared);

    db.conn.then(function(conn){
        return conn.query(prepared)
            .then(function(rows){
                console.log("[Response Sent]");
                if (rows.length === 0){
                    return res.sendStatus(404);
                }
                res.send(rows);
            })
            .catch(function(err){
                res.sendStatus(404);
            })
    });


});


//app.route('/')