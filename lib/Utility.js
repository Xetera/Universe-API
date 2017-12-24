"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
})(Utility = exports.Utility || (exports.Utility = {}));
