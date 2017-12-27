const Database = require('../Database.js');
//const Database = new db();
let express = require('express');
const mysql = require('mysql');

let app = express();


class API extends Database {

    constructor(){
        super();

        // allows us to access req.ip
        app.set('trust proxy', true);
        // we might need this later to avoid spaghetti
        this.endpoints =
            {
                general: '/',
                peopleByWorld: '/people/:world'
            }
    }

    static logResponse(type, endpoint,destination){
        let request = "";
        if (type ===  "get" || "g".toUpperCase()){
            request = "GET"
        }
        else if (type === "post" || "p".toUpperCase()){
            request = "POST"
        }
        console.log(`[Response Sent]: ${request} ${endpoint} to ${destination}`)
    }

    static logNewConnection(ip){
        console.log(`Got a connection from ${ip}`);
    }

    // app.get('/'...
    sendBaseConnection(req, res){
        API.logNewConnection(req.ip);

        res.status(200).send("Hey There!");
    }

    // app.get('/people/:word'...
    sendPeopleByWorld(req, res){
        API.logNewConnection(req.ip);

        let worldType = req.params.world;
        // SQL injection hur dur
        let prepared = mysql.format(`SELECT * FROM people WHERE world=?`, [worldType]);

        api.conn.then(function(conn){
            return conn.query(prepared)
                .then(function(rows){
                    API.logResponse("g", api.endpoints.peopleByWorld, req.ip);
                    if (rows.length === 0){
                        return res.status(404).send(`${worldType} is not a world`);
                    }
                    res.send(rows);
                })
                .catch(function(err){
                    res.status(404).send(err);
                    console.log(err)
                })
        });
    }
}

const api = new API();

app.listen(3030, () => {
    console.log("API Server started at port 3000");
});


// let runtime = require('../lib/Runtime.js');

// console.log(universe.universe);


app.get('/', api.sendBaseConnection);

app.get('/people/:world', api.sendPeopleByWorld);


//app.route('/')