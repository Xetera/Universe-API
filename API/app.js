'use strict';
const mongoose = require('mongoose');
const database = require('../Database');
let express = require('express');

let app = require('express')();
let server = require('http').createServer(app);
let io = require('socket.io')(server);

class API extends database {
    constructor(){
        super();

    }
    connect(){

    }
}

let universe = require('../lib/Runtime.js');

console.log(universe.universe);
io.on('connection', function () {
    console.log("API Server started at port 3000");
});


app.get('/', function (req, res) {
    res.send(universe.earth.genderDivision);
    console.log("Got Request");
});

server.listen(3030);


//app.route('/')