import {World, Universe} from "./Space";
import {Person} from "./People";

export function gameLoop(){

    let universe : Universe = new Universe("Milky");
    let earth : World = universe.createWorld("Earth");


    setInterval(function(){

        let person : Person = earth.createPerson(false);

        console.log(`${person.name} is ${person.age} years old.`);

        console.log(`${earth.name} has a population of ${earth.population}`);
        console.log(earth.genderDivision);
        console.log(`Earth has an average age of ${earth.averageAge}`);
        console.log('\n')


    }, 1000);

}
