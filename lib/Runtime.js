"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Space_1 = require("./Space");
var universe = new Space_1.Universe("Milky");
var earth = universe.createWorld("Earth");
setInterval(function () {
    var person = earth.createPerson(true, 20);
    console.log(person.name + " is " + person.age + " years old.");
    console.log(earth.name + " has a population of " + earth.population);
    console.log(earth.genderDivision);
}, 1000);
