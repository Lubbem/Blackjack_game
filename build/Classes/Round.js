"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Deck_1 = require("./Deck");
var Card_1 = require("./Card");
var Round = /** @class */ (function () {
    function Round(data) {
        this.data = data;
        this.playerTotal1 = 0;
        this.playerTotal2 = 0;
        this.dealerHand = [];
        this.hand = [];
        this.deck = new Deck_1.Deck();
        this.players = 0;
        this.playMatch();
    }
    Round.prototype.playMatch = function () {
        this.rowToCards();
        this.getPlayers();
        if (this.players === 0)
            return;
        this.removeHandFromDeck();
        this.removeDealerHand();
        this.shuffelCards();
        this.determineTotal(); //Player 1
        //Players should each receive their own hand
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
    Round.prototype.removeHandFromDeck = function () {
        this.deck.removeCards(this.hand);
    };
    Round.prototype.removeDealerHand = function () {
        var lastCard = this.hand.length;
        this.dealerHand.push(this.hand[lastCard - 1]);
        this.hand.splice(lastCard - 1, 1);
    };
    Round.prototype.getPlayers = function () {
        var handCards = this.hand.length;
        if (((handCards + 1) % 2) || (handCards === 1)) {
            this.players = 0;
            console.log('Not enough player(s) to play round.');
        }
        else {
            this.players = ((handCards + 1) / 2) - 1;
            console.log(this.players + " player(s), and 1 dealer.");
        }
    }; //end getPlayers
    Round.prototype.shuffelCards = function () {
        this.deck.shuffleDeck();
        console.log('Deck shuffled');
    };
    Round.prototype.playTurn = function () {
    };
    Round.prototype.hitOrStand = function () {
        return false;
    };
    Round.prototype.determineTotal = function () {
        this.addCardTotal(this.hand[0]);
        this.hand.slice(0, 1);
        this.addCardTotal(this.hand[1]);
        this.hand.slice(0, 1);
        if (this.playerTotal1 === this.playerTotal2) {
            console.log(" Values " + this.playerTotal1);
        }
        else {
            console.log(" Values " + this.playerTotal1 + " or " + this.playerTotal2);
        }
    };
    Round.prototype.addCardTotal = function (card) {
        if (card.name === "Ace") {
            this.playerTotal1 = this.playerTotal1 + 1;
            this.playerTotal2 = this.playerTotal2 + 11;
        }
        else {
            this.playerTotal1 = this.playerTotal1 + card.value[0];
            this.playerTotal2 = this.playerTotal2 + card.value[0];
        }
    };
    return Round;
}());
exports.Round = Round;
// //Not working yet
//         //An ace is counted twice
//         //console.log(this.hand);
//         var line1 = 0;
//         var line2 = 0;
//         for (let i = 0; i < this.players; i++) {
//             if (this.hand[i].name === 'Ace') {
//                 line1 = line1 + 1;
//                 line2 = line2 + 11;
//             } else {
//                 line1 = line1 + this.hand[i].value[0];
//                 line2 = line2 + this.hand[i].value[0];
//             }
//         }
//         //console.log(line1);
//         //console.log(line2);
