"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var People_1 = require("./People");
var Utility_1 = require("./Utility");
var Universe = /** @class */ (function () {
    function Universe(name) {
        this.name = name;
        this.worlds = [];
    }
    Universe.prototype.createWorld = function (name) {
        var world = new World(name);
        this.worlds.push(world);
        return world;
    };
    Universe.getWorldInfo = function () {
    };
    return Universe;
}());
exports.Universe = Universe;
//// ---------------------------------------------------------------------
//?/ ------------------------- World Class -------------------------------
//// ---------------------------------------------------------------------
var World = /** @class */ (function () {
    function World(name) {
        this.averageLifespan = 90;
        this.name = name;
        this.people = [];
    }
    World.prototype.createPerson = function (born, age, name, gender) {
        var person = new People_1.Person(this, born, age, name, gender);
        this.people.push(person);
        return person;
    };
    Object.defineProperty(World.prototype, "population", {
        get: function () {
            return this.people.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(World.prototype, "genderDivision", {
        get: function () {
            var genderBreakdown = {
                "Male": {
                    "Amount": 0,
                    "Percent": "%"
                },
                "Female": {
                    "Amount": 0,
                    "Percent": "%",
                }
            };
            for (var _i = 0, _a = this.people; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i.gender === "Male") {
                    genderBreakdown["Male"]["Amount"] += 1;
                }
                else if (i.gender === "Female") {
                    genderBreakdown['Female']["Amount"] += 1;
                }
            }
            genderBreakdown["Male"]["Percent"] = Utility_1.Utility.getPercentage(genderBreakdown["Male"]["Amount"], this.population).toString() + "%";
            genderBreakdown["Female"]["Percent"] = Utility_1.Utility.getPercentage(genderBreakdown["Female"]["Amount"], this.population).toString() + '%';
            return genderBreakdown;
        },
        enumerable: true,
        configurable: true
    });
    return World;
}());
exports.World = World;
