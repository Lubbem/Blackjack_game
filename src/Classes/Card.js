"use strict";
exports.__esModule = true;
var Card = /** @class */ (function () {
    function Card(name, value, suit) {
        this.name = name;
        this.value = value;
        this.suit = suit;
    }
    Card.prototype.toString = function () {
        return ("Card: " + this.name + " of " + this.suit + " value " + this.value + " ");
    };
    return Card;
}());
exports.Card = Card;
