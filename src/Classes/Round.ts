import { Deck } from "./Deck";
import { Card } from "./Card";

export class Round {

    playerTotal1: number = 0;
    playerTotal2: number = 0;

    dealerHand: Card[] = [];
    hand: Card[] = [];
    deck: Deck = new Deck();
    players: number = 0;

    constructor(public data: string[]) {
        this.playMatch();
    }

    private playMatch(): void {
        this.rowToCards();
        this.getPlayers();
        if (this.players === 0) return;
        this.removeHandFromDeck();
        this.removeDealerHand();
        this.shuffelCards();
        this.determineTotal(); //Player 1

        //Players should each receive their own hand


    }

    private rowToCards(): void {
        for (let i = 0; i < this.data.length; i++) {
            const splitRow = this.data[i].split(':');

            if (splitRow.length > 3) {
                var card = new Card(splitRow[0], [parseInt(splitRow[2]), parseInt(splitRow[3])], splitRow[1]);
            } else {
                var card = new Card(splitRow[0], [parseInt(splitRow[2])], splitRow[1]);
            }
            this.hand.push(card);
        }
        console.log('Players Loaded into System');

    } //end of rowToCards

    private removeHandFromDeck(): void {
        this.deck.removeCards(this.hand);
    }

    private removeDealerHand(): void {
        const lastCard = this.hand.length;
        this.dealerHand.push(this.hand[lastCard - 1]);
        this.hand.splice(lastCard - 1, 1);
    }

    private getPlayers(): void {
        const handCards = this.hand.length;
        if (((handCards + 1) % 2) || (handCards === 1)) {
            this.players = 0;
            console.log('Not enough player(s) to play round.');
        } else {
            this.players = ((handCards + 1) / 2) - 1;
            console.log(`${this.players} player(s), and 1 dealer.`);
        }
    } //end getPlayers

    private shuffelCards(): void {
        this.deck.shuffleDeck();
        console.log('Deck shuffled');
    }

    private playTurn(): void {

    }

    private hitOrStand(): boolean {

        return false;
    }

    private determineTotal(): void {
        this.addCardTotal(this.hand[0]);
        this.hand.slice(0, 1);
        this.addCardTotal(this.hand[1]);
        this.hand.slice(0, 1);
        if (this.playerTotal1 === this.playerTotal2) {
            console.log(` Values ${this.playerTotal1}`);
        } else {
            console.log(` Values ${this.playerTotal1} or ${this.playerTotal2}`);
        }
        
    }

    private addCardTotal(card: Card): void {
        if (card.name === "Ace") {
            this.playerTotal1 = this.playerTotal1 + 1;
            this.playerTotal2 = this.playerTotal2 + 11;
        } else {
            this.playerTotal1 = this.playerTotal1 + card.value[0];
            this.playerTotal2 = this.playerTotal2 + card.value[0];
        }
    }

}



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
