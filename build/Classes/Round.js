"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Deck_1 = require("./Deck");
var Card_1 = require("./Card");
var Round = /** @class */ (function () {
    function Round(data) {
        this.data = data;
        this.playerTotal1 = 0;
        this.playerTotal2 = 0;
        this.playerTotals = [];
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
        //Logic for each player
        for (var i = 0; i < this.players; i++) {
            this.playerTotal1 = 0;
            this.playerTotal2 = 0;
            this.determineTotal(i + 1);
            this.playGame(i + 1);
            this.playerTotals.push(['Player ' + (i + 1), this.playerTotal1 + ":" + this.playerTotal2]);
            console.log("\t\t\t" + this.playerTotal1 + " OR " + this.playerTotal2 + " {Total}\n");
        }
        //Logic for dealer
        this.playerTotal1 = 0;
        this.playerTotal2 = 0;
        this.hand = this.dealerHand;
        this.hand.unshift(this.deck.cards[1]);
        this.deck.cards.shift();
        this.determineTotal('Dealer');
        this.playGame('Dealer');
        console.log("\t\t\t" + this.playerTotal1 + " OR " + this.playerTotal2 + " {Total}\n");
        this.playerTotals.push(['Dealer ', this.playerTotal1 + ":" + this.playerTotal2]);
        console.log("\t==================================");
        this.determineWinner();
        console.log("\t==================================");
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
    Round.prototype.playGame = function (playerNumber) {
        console.log("\t\t\tPlayer " + playerNumber + " turn started...");
        while (this.doHit()) { }
    };
    Round.prototype.doHit = function () {
        if ((this.playerTotal1 == 21) || (this.playerTotal2 == 21)) {
            console.log("\t\t\t" + this.playerTotal1 + " OR " + this.playerTotal2 + " == 21 {Stand}");
            return false;
        }
        else if ((this.playerTotal1 > 21) || (this.playerTotal2 > 21)) {
            console.log("\t\t\t" + this.playerTotal1 + " OR " + this.playerTotal2 + " > 21 {Fold}");
            return false;
        }
        else if ((this.playerTotal1 <= 11) && (this.playerTotal2 <= 11)) {
            console.log("\t\t\t" + this.playerTotal1 + " OR " + this.playerTotal2 + " <= 11 {Hit}");
            this.doHitCard();
            return true;
        }
        else if ((this.playerTotal1 <= 15) && (this.playerTotal2 <= 15)) {
            console.log("\t\t\t" + this.playerTotal1 + " OR " + this.playerTotal2 + " <= 15 {Hit}");
            this.doHitCard();
            return true;
        }
        else if ((this.playerTotal1 <= 17) && (this.playerTotal2 <= 17)) {
            console.log("\t\t\t" + this.playerTotal1 + " OR " + this.playerTotal2 + " <= 17 {Stand}");
            return false;
        }
        else
            return false;
    };
    Round.prototype.doHitCard = function () {
        this.addCardTotal(this.deck.cards[1]);
        console.log("\t\t\t\t" + this.deck.cards[1].toString());
        this.deck.cards.shift();
    };
    Round.prototype.determineTotal = function (playerNumber) {
        this.addCardTotal(this.hand[0]);
        this.hand.shift();
        this.addCardTotal(this.hand[0]);
        this.hand.shift();
        if (this.playerTotal1 === this.playerTotal2) {
            console.log("\t\tPlayer " + playerNumber + " total: " + this.playerTotal1);
        }
        else {
            console.log("\t\tPlayer " + playerNumber + " Total/s: " + this.playerTotal1 + " or " + this.playerTotal2);
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
    Round.prototype.determineWinner = function () {
        var winner = 'Nothing';
        var winnerValue = 0;
        for (var i = 0; i < this.playerTotals.length; i++) {
            var player = this.playerTotals[i][0];
            var currentTotals = this.playerTotals[i][1].split(':');
            var thisPlayerTotal = 0;
            var hitFold = 'Stand';
            //Determine highest value under 21
            if ((parseInt(currentTotals[0]) > 21) && (parseInt(currentTotals[0]) > 21)) {
                hitFold = 'Fold';
                thisPlayerTotal = 0;
            }
            if (parseInt(currentTotals[0]) > 21)
                currentTotals[0] = '0';
            if (parseInt(currentTotals[1]) > 21)
                currentTotals[1] = '0';
            if (parseInt(currentTotals[0]) > parseInt(currentTotals[1])) {
                thisPlayerTotal = parseInt(currentTotals[0]);
            }
            else {
                thisPlayerTotal = parseInt(currentTotals[1]);
            }
            console.log("\t\t" + player + " " + hitFold + " " + thisPlayerTotal);
            //Stores the winner
            if (thisPlayerTotal == winnerValue) {
                winnerValue = thisPlayerTotal;
                winner = winner + ' and ' + player;
            }
            if (thisPlayerTotal > winnerValue) {
                winnerValue = thisPlayerTotal;
                winner = player;
            }
            if (winnerValue == 0) {
                winner = 'no winner';
            }
        } //end of for loop
        console.log("\t==================================");
        console.log("\tThe winner(s) is " + winner + " with " + winnerValue);
    }; //end determineWinner
    return Round;
}());
exports.Round = Round;
//Check two aces
//npm run pretest
