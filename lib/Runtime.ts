import {World, Universe} from "./Space";
import {Person} from "./People";

let universe : Universe = new Universe("Milky");
let earth : World = universe.createWorld("Earth");
setInterval(function(){

    let person : Person = earth.createPerson(true, 20);

    console.log(`${person.name} is ${person.age} years old.`);

    console.log(`${earth.name} has a population of ${earth.population}`);
    console.log(earth.genderDivision)


}, 1000);
