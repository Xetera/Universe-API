import {female_names, genders, male_names} from "./Constants"
import {World} from "./Space";


export class Person {
    public name :string;
    public age : number;
    public owned : Array<Object>;
    public gender : string;

    public world : World;

    constructor(world : World, born : Boolean, age ?: number, name ?: string,  gender ?: string){
        this.world = world;
        this.gender = gender || Person.generateGender();
        this.name = name || Person.generateName(this.gender);
        if (!born){
            this.age = age || Person.generateAge(world.averageLifespan);
        }
        else {
            this.age = 0;
        }

    }

    static generateAge(lifespan: number) : number {
        return  Math.floor(Math.random() * lifespan);
    }

    static generateGender() : string {
        let index : number = Math.floor(Math.random() * 2);
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

        let index : number = Math.floor(Math.random() * name_pool.length);
        return name_pool[index];
    }

}