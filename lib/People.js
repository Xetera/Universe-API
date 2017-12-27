"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = require("./Constants");
const Utility_1 = require("./Utility");
class Person {
    constructor(world, born, database, age, name, gender) {
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
        this.database = database;
        this.save();
    }
    progress() {
    }
    static generateAge(lifespan) {
        return Utility_1.Utility.randomInt(lifespan);
    }
    // this function should really be returning a gender definition in an enum
    static generateGender() {
        let index = Utility_1.Utility.randomInt(2);
        if (index == 0) {
            return Constants_1.EGenders.Male;
        }
        return Constants_1.EGenders.Female;
    }
    static generateName(gender) {
        let name_pool;
        if (gender === Constants_1.EGenders.Male) {
            name_pool = Constants_1.male_names;
        }
        else if (gender === Constants_1.EGenders.Female) {
            name_pool = Constants_1.female_names;
        }
        else {
            throw new Error(`${gender} is not a gender (sorry it's just easier this way)`);
        }
        let index = Utility_1.Utility.randomInt(name_pool.length);
        return name_pool[index];
    }
    save() {
        return new Promise((resolve, reject) => {
            let result = this.database.savePerson(this.ID, this.world.name, this.name, this.gender.toString(), this.age);
            if (!result) {
                reject(result);
            }
            resolve(result);
        });
    }
}
exports.Person = Person;
