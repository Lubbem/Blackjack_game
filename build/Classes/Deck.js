"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Card_1 = require("./Card");
var Deck = /** @class */ (function () {
    function Deck() {
        this.cards = [];
        this.setNewDeck();
    }
    Deck.prototype.setNewDeck = function () {
        //Spades
        this.cards.push(new Card_1.Card('Ace', [1, 11], 'Spades'));
        this.cards.push(new Card_1.Card('King', [10], 'Spades'));
        this.cards.push(new Card_1.Card('Queen', [10], 'Spades'));
        this.cards.push(new Card_1.Card('Jack', [10], 'Spades'));
        for (var i = 10; i > 1; i--) {
            this.cards.push(new Card_1.Card('Pip', [i], 'Spades'));
        }
        //Hearts
        this.cards.push(new Card_1.Card('Ace', [1, 11], 'Hearts'));
        this.cards.push(new Card_1.Card('King', [10], 'Hearts'));
        this.cards.push(new Card_1.Card('Queen', [10], 'Hearts'));
        this.cards.push(new Card_1.Card('Jack', [10], 'Hearts'));
        for (var i = 10; i > 1; i--) {
            this.cards.push(new Card_1.Card('Pip', [i], 'Hearts'));
        }
        //Clubs
        this.cards.push(new Card_1.Card('Ace', [1, 11], 'Clubs'));
        this.cards.push(new Card_1.Card('King', [10], 'Clubs'));
        this.cards.push(new Card_1.Card('Queen', [10], 'Clubs'));
        this.cards.push(new Card_1.Card('Jack', [10], 'Clubs'));
        for (var i = 10; i > 1; i--) {
            this.cards.push(new Card_1.Card('Pip', [i], 'Clubs'));
        }
        //Diamonds
        this.cards.push(new Card_1.Card('Ace', [1, 11], 'Diamonds'));
        this.cards.push(new Card_1.Card('King', [10], 'Diamonds'));
        this.cards.push(new Card_1.Card('Queen', [10], 'Diamonds'));
        this.cards.push(new Card_1.Card('Jack', [10], 'Diamonds'));
        for (var i = 10; i > 1; i--) {
            this.cards.push(new Card_1.Card('Pip', [i], 'Diamonds'));
        }
    }; //setNewDeck
    Deck.prototype.removeCards = function (hand) {
        for (var j = 0; j < hand.length; j++) {
            for (var i = 0; i < this.cards.length; i++) {
                if ((this.cards[i].name == hand[j].name) && (this.cards[i].suit == hand[j].suit) && (this.cards[i].value.toString() == hand[j].value.toString())) {
                    //console.log(hand[j].name + hand[j].suit + hand[j].value + "....................................." + this.cards[i].name + this.cards[i].suit + this.cards[i].value);
                    this.cards.splice(i, 1);
                }
            }
        } //end of for loop
        console.log('\tPlayer and dealer cards removed from deck');
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
