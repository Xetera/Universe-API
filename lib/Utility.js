"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utility;
(function (Utility) {
    function getPercentage(amount, total) {
        return parseInt(((amount / total) * 100).toFixed(3));
    }
    Utility.getPercentage = getPercentage;
})(Utility = exports.Utility || (exports.Utility = {}));
