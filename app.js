const mongoose = require('mongoose');

let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.listen(port);
console.log("API Server started at port 3000");

mongoose.connect("mongodb://localhost/")
    .then(function(resp){
        console.log(resp);
    });

console.log(mongoose);
//app.route('/')