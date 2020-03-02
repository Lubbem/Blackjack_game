import { Card } from "./Card";

export class Deck {

    cards: Card[] = [];

    constructor() { 
        this.setNewDeck();
    }

    private setNewDeck() {
        //Spades
        this.cards.push(new Card('Ace', [1, 11], 'Spades'));
        this.cards.push(new Card('King', [10], 'Spades'));
        this.cards.push(new Card('Queen', [10], 'Spades'));
        this.cards.push(new Card('Jack', [10], 'Spades'));

        for (let i = 10; i > 1; i--) {
            this.cards.push(new Card('Pip', [i], 'Spades'));
        }

        //Hearts
        this.cards.push(new Card('Ace', [1, 11], 'Hearts'));
        this.cards.push(new Card('King', [10], 'Hearts'));
        this.cards.push(new Card('Queen', [10], 'Hearts'));
        this.cards.push(new Card('Jack', [10], 'Hearts'));

        for (let i = 10; i > 1; i--) {
            this.cards.push(new Card('Pip', [i], 'Hearts'));
        }

        //Clubs
        this.cards.push(new Card('Ace', [1, 11], 'Clubs'));
        this.cards.push(new Card('King', [10], 'Clubs'));
        this.cards.push(new Card('Queen', [10], 'Clubs'));
        this.cards.push(new Card('Jack', [10], 'Clubs'));

        for (let i = 10; i > 1; i--) {
            this.cards.push(new Card('Pip', [i], 'Clubs'));
        }

        //Diamonds
        this.cards.push(new Card('Ace', [1, 11], 'Diamonds'));
        this.cards.push(new Card('King', [10], 'Diamonds'));
        this.cards.push(new Card('Queen', [10], 'Diamonds'));
        this.cards.push(new Card('Jack', [10], 'Diamonds'));

        for (let i = 10; i > 1; i--) {
            this.cards.push(new Card('Pip', [i], 'Diamonds'));
        }

    } //setNewDeck

} //end of Deck