"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const People_1 = require("./People");
const Utility_1 = require("./Utility");
//// ---------------------------------------------------------------------
//?/ ------------------------- Universe Class ----------------------------
//// ---------------------------------------------------------------------
class Universe {
    constructor(name) {
        this.name = name;
        this.worlds = [];
    }
    createWorld(name) {
        let world = new World(name);
        this.worlds.push(world);
        return world;
    }
    static getWorldInfo() {
    }
}
exports.Universe = Universe;
//// ---------------------------------------------------------------------
//?/ ------------------------- World Class -------------------------------
//// ---------------------------------------------------------------------
class World {
    constructor(name) {
        this.averageLifespan = 90;
        this.name = name;
        this.people = [];
    }
    createPerson(born, age, name, gender) {
        let person = new People_1.Person(this, born, age, name, gender);
        this.people.push(person);
        return person;
    }
    get population() {
        return this.people.length;
    }
    get genderDivision() {
        let genderBreakdown = {
            "Male": {
                "Amount": 0,
                "Percent": "%"
            },
            "Female": {
                "Amount": 0,
                "Percent": "%",
            }
        };
        for (let i of this.people) {
            if (i.gender === "Male") {
                genderBreakdown["Male"]["Amount"] += 1;
            }
            else if (i.gender === "Female") {
                genderBreakdown['Female']["Amount"] += 1;
            }
        }
        genderBreakdown["Male"]["Percent"] =
            Utility_1.Utility.getPercentage(genderBreakdown["Male"]["Amount"], this.population).toString() + "%";
        genderBreakdown["Female"]["Percent"] =
            Utility_1.Utility.getPercentage(genderBreakdown["Female"]["Amount"], this.population).toString() + '%';
        return genderBreakdown;
    }
    get averageAge() {
        let average = 0;
        for (let i of this.people) {
            average += i.age;
        }
        average /= this.people.length;
        return parseInt(average.toFixed(2));
    }
}
exports.World = World;
