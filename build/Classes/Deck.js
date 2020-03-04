"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Card_1 = require("./Card");
var Deck = /** @class */ (function () {
    function Deck() {
        this.cards = [];
        this.setNewDeck();
    }
    Deck.prototype.setNewDeck = function () {
        var _this = this;
        //Refactored
        var suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
        suits.forEach(function (suit) {
            _this.cards.push(new Card_1.Card("Ace", [1, 11], suit));
            _this.cards.push(new Card_1.Card("King", [10], suit));
            _this.cards.push(new Card_1.Card("Queen", [10], suit));
            _this.cards.push(new Card_1.Card("Jack", [10], suit));
            for (var i = 10; i > 1; i--) {
                _this.cards.push(new Card_1.Card("Pip", [i], suit));
            }
        });
    }; //setNewDeck
    Deck.prototype.removeCards = function (hand) {
        for (var j = 0; j < hand.length; j++) {
            for (var i = 0; i < this.cards.length; i++) {
                if ((this.cards[i].name == hand[j].name) && (this.cards[i].suit == hand[j].suit) && (this.cards[i].value.toString() == hand[j].value.toString())) {
                    this.cards.splice(i, 1);
                }
            }
        } //end of for loop
        console.log("\tPlayer and dealer cards removed from deck");
    }; //end of removeCards
    Deck.prototype.shuffleDeck = function () {
        for (var i = 0; i < this.cards.length; i++) {
            var randomIndex = Math.floor(Math.random() * (i + 1));
            var itemAtIndex = this.cards[randomIndex];
            this.cards[randomIndex] = this.cards[i];
            this.cards[i] = itemAtIndex;
        } //end of for loop
    };
    return Deck;
}()); //end of Deck
exports.Deck = Deck;
