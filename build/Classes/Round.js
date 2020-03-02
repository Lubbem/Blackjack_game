"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Deck_1 = require("./Deck");
var Card_1 = require("./Card");
var Round = /** @class */ (function () {
    function Round(data) {
        this.data = data;
        this.hand = [];
        this.deck = new Deck_1.Deck();
        this.players = 0;
        this.matchComplete = false;
        this.matchContinue = true;
        this.playMatch();
    }
    Round.prototype.playMatch = function () {
        this.rowToCards();
        this.getPlayers();
        this.matchComplete = true;
        if (this.players === 0)
            return;
    };
    Round.prototype.rowToCards = function () {
        for (var i = 0; i < this.data.length; i++) {
            var splitRow = this.data[i].split(':');
            if (splitRow.length > 3) {
                var card = new Card_1.Card(splitRow[0], [parseInt(splitRow[2]), parseInt(splitRow[3])], splitRow[1]);
            }
            else {
                var card = new Card_1.Card(splitRow[0], [parseInt(splitRow[2])], splitRow[1]);
            }
            this.hand.push(card);
        }
        console.log('Players Loaded into System');
    }; //end of rowToCards
    Round.prototype.removeHandFromDeck = function () { };
    Round.prototype.getPlayers = function () {
        var handCards = this.hand.length;
        if (((handCards + 1) % 2) || (handCards === 1)) {
            this.matchContinue = false;
            this.players = 0;
            console.log('Not enough player(s) to play round.');
        }
        else {
            this.players = ((handCards + 1) / 2) - 1;
            console.log(this.players + " player(s), and 1 dealer.");
        }
        return 0;
    };
    return Round;
}());
exports.Round = Round;
