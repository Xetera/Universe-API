"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var minID = 100000000;
var maxID = 999999999;
var Utility;
(function (Utility) {
    function getPercentage(amount, total) {
        return parseInt(((amount / total) * 100).toFixed(3));
    }
    Utility.getPercentage = getPercentage;
    function randomInt(range) {
        return Math.floor(Math.random() * range);
    }
    Utility.randomInt = randomInt;
    function random(list) {
        return list[Utility.randomInt(list.length)];
    }
    Utility.random = random;
    function generateID() {
        return Math.floor(Math.random() * (maxID - minID + 1)) + minID;
    }
    Utility.generateID = generateID;
})(Utility = exports.Utility || (exports.Utility = {}));
console.log(Utility.generateID());
