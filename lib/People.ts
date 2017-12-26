import {female_names, genders, male_names} from "./Constants"
import {World} from "./Space";
import {Utility} from "./Utility"

import {Database} from "../Database"



export class Person {

    public ID : number;
    public world : World;
    public gender : string;
    public name :string;
    public age : number;
    public growth : number;
    public owned : Array<Object>;
    public database : Database;

    constructor(world : World, born : Boolean, database : Database, age ?: number, name ?: string,  gender ?: string){
        this.ID = Utility.generateID();
        this.world = world;

        this.gender = gender || Person.generateGender();
        this.name = name || Person.generateName(this.gender);

        if (!born){
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

    progress(){

    }


    static generateAge(lifespan: number) : number {
        return Utility.randomInt(lifespan);

    }

    static generateGender() : string {
        let index : number = Utility.randomInt(2);
        return genders[index];
    }

    static generateName(gender : string) : string {
        let name_pool : Array<string>;
        if (gender === "Male"){
            name_pool = male_names;
        }
        else if (gender === "Female") {
            name_pool = female_names;
        }
        else {
            throw new Error(`${gender} is not a gender (sorry it's just easier this way)`)
        }

        let index : number = Utility.randomInt(name_pool.length);
        return name_pool[index];
    }

    save() : Promise<Boolean>{
        return new Promise((resolve, reject)  => {
            let result = this.database.savePerson(this.ID, this.world.name, this.name, this.gender, this.age);
            if (!result){
                reject(result)
            }
            resolve(result)

        });
    }

}
