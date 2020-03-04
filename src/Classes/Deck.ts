import { Card } from "./Card";

export class Deck {

    cards: Card[] = [];

    constructor() {
        this.setNewDeck();
    }

    private setNewDeck(): void {
        //Refactored
        var suits: string[] = ["Spades", "Hearts", "Clubs", "Diamonds"];

        suits.forEach(suit => {
            this.cards.push(new Card("Ace", [1, 11], suit));
            this.cards.push(new Card("King", [10], suit));
            this.cards.push(new Card("Queen", [10], suit));
            this.cards.push(new Card("Jack", [10], suit));
            for (let i = 10; i > 1; i--) {
                this.cards.push(new Card("Pip", [i], suit));
            }
        });
    } //setNewDeck

    removeCards(hand: Card[]): void {
        for (let j = 0; j < hand.length; j++) {
            for (let i = 0; i < this.cards.length; i++) {
                if ((this.cards[i].name == hand[j].name) && (this.cards[i].suit == hand[j].suit) && (this.cards[i].value.toString() == hand[j].value.toString())) {
                    this.cards.splice(i, 1);
                }
            }
        } //end of for loop
        console.log("\tPlayer and dealer cards removed from deck");
    } //end of removeCards

    shuffleDeck(): void {
        for (let i = 0; i < this.cards.length; i++) {
            var randomIndex: number = Math.floor(Math.random() * (i + 1));
            var itemAtIndex: Card = this.cards[randomIndex];
            this.cards[randomIndex] = this.cards[i];
            this.cards[i] = itemAtIndex;
        }//end of for loop
    }

} //end of Deck