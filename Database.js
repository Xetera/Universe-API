"use strict";
const mongoose = require("mongoose");

class Database {
    constructor() {
        this.conn = Database.connect();
        this.schema = mongoose.Schema;
        this.peopleSchema = this.createPeopleSchema();
        this.peopleData = mongoose.model('peopleData', this.peopleSchema);
    }

    static connect() {
        return mongoose.connect('mongodb://localhost:3030/test');

    };
    createPeopleSchema() {
        return this.schema({
            world: String,
            gender: String,
            name: String,
            age: Number
        });
    };
    savePerson(data){
        let thingy = new this.peopleData(data);
        thingy.save();
        console.log("Data was saved.")
    }
    getPeople(age){
        database.peopleData.find(age)
            .then(function (doc) {
                console.log(doc);
            });
    }

    get() {
        console.log(this.conn);
    }
    close() {
        this.conn.close();
    }
}


let database = new Database();
// console.log(database.peopleData);

let toSave = {
    world: "Something",
    gender: "Female",
    name: "Ahmad",
    age: 10
};

database.savePerson(toSave);
database.getPeople(10);


