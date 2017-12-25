"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Space_1 = require("./Space");
exports.universe = new Space_1.Universe("Milky");
exports.earth = exports.universe.createWorld("Earth");
setInterval(function () {
    let person = exports.earth.createPerson(false);
    console.log(`${person.name} is ${person.age} years old.`);
    console.log(`${exports.earth.name} has a population of ${exports.earth.population}`);
    console.log(exports.earth.genderDivision);
    console.log(`Earth has an average age of ${exports.earth.averageAge}`);
    console.log('\n');
}, 1000);
