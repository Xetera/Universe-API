"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = require("./Constants");
const Utility_1 = require("./Utility");
const Work_1 = require("../Work");
class Person {
    constructor(world, born, age, name, gender) {
        this.ID = Utility_1.Utility.generateID();
        this.world = world;
        this.gender = gender || Person.generateGender();
        this.name = name || Person.generateName(this.gender);
        if (!born) {
            this.age = age || Person.generateAge(world.averageLifespan);
        }
        else {
            this.age = 0;
        }
        this.growth = 0;
        this.owned = [];
        this.database = new Work_1.Database();
        this.save();
    }
    progress() {
    }
    static generateAge(lifespan) {
        return Utility_1.Utility.randomInt(lifespan);
    }
    static generateGender() {
        let index = Utility_1.Utility.randomInt(2);
        return Constants_1.genders[index];
    }
    static generateName(gender) {
        let name_pool;
        if (gender === "Male") {
            name_pool = Constants_1.male_names;
        }
        else if (gender === "Female") {
            name_pool = Constants_1.female_names;
        }
        else {
            throw new Error(`${gender} is not a gender (sorry it's just easier this way)`);
        }
        let index = Utility_1.Utility.randomInt(name_pool.length);
        return name_pool[index];
    }
    save() {
        this.database.savePerson(this.ID, this.world.name, this.name, this.gender, this.age);
    }
}
exports.Person = Person;
