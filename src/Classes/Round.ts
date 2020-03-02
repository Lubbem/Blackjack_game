import { Deck } from "./Deck";
import { Card } from "./Card";

export class Round {

    hand: Card[] = [];
    deck: Deck = new Deck();
    players: number = 0;

    matchComplete: boolean = false;
    matchContinue: boolean = true;

    constructor(public data: string[]) {
        this.playMatch();
    }

    playMatch(): void {
        this.rowToCards();
        this.getPlayers();
        this.matchComplete = true;
        if (this.players === 0) return;
    }

    rowToCards(): void {
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

    removeHandFromDeck(): void { }

    getPlayers(): number {
        const handCards = this.hand.length;
        if (((handCards + 1) % 2) || (handCards === 1)) {
            this.matchContinue = false;
            this.players = 0;
            console.log('Not enough player(s) to play round.');
        } else {
            this.players = ((handCards + 1) / 2) - 1;
            console.log(`${this.players} player(s), and 1 dealer.`);
        }

        return 0;
    }


}
