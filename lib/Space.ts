import {Person} from "./People";
import {Utility} from "./Utility";

export class Universe {
    worlds : Array<Object>;
    name : string;
    constructor(name : string){
        this.name = name;
        this.worlds = [];
    }

    createWorld(name :string ) : World {
        let world : World = new World(name);
        this.worlds.push(world);

        return world;
    }

    static getWorldInfo(){

    }
}

//// ---------------------------------------------------------------------
//?/ ------------------------- World Class -------------------------------
//// ---------------------------------------------------------------------

export class World {
    public name : string;
    public people : Array<Person>;
    public averageLifespan : number = 90;


    constructor(name : string){
        this.name = name;
        this.people = [];
    }

    createPerson(born : Boolean, age : number, name?: string, gender ?: string){
        let person : Person = new Person(this, born, age, name, gender);
        this.people.push(person);
        return person;
    }

    get population() : number{
        return this.people.length;
    }

    get genderDivision() : Object{
        let genderBreakdown =
            {
                "Male": {
                    "Amount": 0,
                    "Percent": "%"
                },
                "Female": {
                    "Amount": 0,
                    "Percent": "%",
                }
            };
        for (let i of this.people){
            if (i.gender === "Male") {
                genderBreakdown["Male"]["Amount"] += 1;
            }
            else if (i.gender === "Female"){
                genderBreakdown['Female']["Amount"] += 1;
            }
        }
        genderBreakdown["Male"]["Percent"] = Utility.getPercentage(genderBreakdown["Male"]["Amount"], this.population).toString() + "%";
        genderBreakdown["Female"]["Percent"] = Utility.getPercentage(genderBreakdown["Female"]["Amount"], this.population).toString() + '%';
        return genderBreakdown;
    }
}