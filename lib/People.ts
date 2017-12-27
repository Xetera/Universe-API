import {female_names, genders, male_names, EGenders} from "./Constants"
import {World} from "./Space";
import {Utility} from "./Utility"

import {Database} from "../Database"



export class Person {

    public ID : number;
    public world : World;
    public gender : EGenders;
    public name :string;
    public age : number;
    public growth : number;
    public owned : Array<Object>;
    public database : Database;

    constructor(world : World, born : Boolean, database : Database, age ?: number, name ?: string,  gender ?: EGenders){
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

    // this function should really be returning a gender definition in an enum
    static generateGender() : EGenders {
        let index : number = Utility.randomInt(2);
        if (index == 0){
            return EGenders.Male
        }
        return EGenders.Female
    }

    static generateName(gender : EGenders) : string {
        let name_pool : Array<string>;
        if (gender === EGenders.Male){
            name_pool = male_names;
        }
        else if (gender === EGenders.Female) {
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
            let result = this.database.savePerson(this.ID, this.world.name, this.name, this.gender.toString(), this.age);
            if (!result){
                reject(result)
            }
            resolve(result)

        });
    }

}
