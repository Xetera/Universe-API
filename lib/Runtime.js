"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Space_1 = require("./Space");
function gameLoop() {
    let universe = new Space_1.Universe("Milky");
    let earth = universe.createWorld("Earth");
    setInterval(function () {
        let person = earth.createPerson(false);
        console.log(`${person.name} is ${person.age} years old.`);
        console.log(`${earth.name} has a population of ${earth.population}`);
        console.log(earth.genderDivision);
        console.log(`Earth has an average age of ${earth.averageAge}`);
        console.log('\n');
    }, 1000);
}
exports.gameLoop = gameLoop;
