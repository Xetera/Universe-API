"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("Constants.ts");
var Person = /** @class */ (function () {
    function Person(name, age, gender) {
        this.gender = gender || Person.generateGender();
        this.name = name || Person.generateName(gender);
        this.age = age;
    }
    Person.generateGender = function () {
        var index = Math.random() % 2;
        return genders[index];
    };
    Person.generateName = function (gender) {
        return;
    };
    return Person;
}());
