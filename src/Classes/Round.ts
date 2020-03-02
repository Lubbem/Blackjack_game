import { Deck } from "./Deck";
import { Card } from "./Card";

export class Round {

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

        //create seperate dealer hand and remove card from hand
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


}
