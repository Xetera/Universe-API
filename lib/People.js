"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = require("./Constants");
var Utility_1 = require("./Utility");
var Person = /** @class */ (function () {
    function Person(world, born, age, name, gender) {
        this.world = world;
        this.gender = gender || Person.generateGender();
        this.name = name || Person.generateName(this.gender);
        if (!born) {
            this.age = age || Person.generateAge(world.averageLifespan);
        }
        else {
            this.age = 0;
        }
    }
    Person.generateAge = function (lifespan) {
        return Utility_1.Utility.randomInt(lifespan);
    };
    Person.generateGender = function () {
        var index = Utility_1.Utility.randomInt(2);
        return Constants_1.genders[index];
    };
    Person.generateName = function (gender) {
        var name_pool;
        if (gender === "Male") {
            name_pool = Constants_1.male_names;
        }
        else if (gender === "Female") {
            name_pool = Constants_1.female_names;
        }
        else {
            throw new Error(gender + " is not a gender (sorry it's just easier this way)");
        }
        var index = Utility_1.Utility.randomInt(name_pool.length);
        return name_pool[index];
    };
    return Person;
}());
exports.Person = Person;
