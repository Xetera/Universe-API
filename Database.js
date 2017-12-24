const mongoose = require("mongoose");

class Database {
    constructor(){
        this.connect();
        this.schema = mongoose.Schema;
        this.userDataSchema = new this.schema({
            title: String,
            content: String,
            author: String
        });
    }
    connect(){
        this.conn = mongoose.connect('mongodb://localhost:3030/test');
        //this.model = this.connection.model('ModelName', schema)
    }
    save(){

    }


    get(){
        console.log(this.conn)
    }

    close(){
        this.conn.close();
    }


}

let database = new Database();
database.get();
while (true) {

    database.conn.on('disconnect', function(){
        console.log('disconnected');
    })

}