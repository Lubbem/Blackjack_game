import { Card } from "./Card";

export class Deck {

    cards: Card[] = [];

    constructor() {
        this.setNewDeck();
    }

    private setNewDeck(): void {
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

    removeCards(hand: Card[]): void {
        for (let j = 0; j < hand.length; j++) {
            for (let i = 0; i < this.cards.length; i++) {
                if ((this.cards[i].name == hand[j].name) && (this.cards[i].suit == hand[j].suit) && (this.cards[i].value.toString() == hand[j].value.toString())) {
                    //console.log(hand[j].name + hand[j].suit + hand[j].value + "....................................." + this.cards[i].name + this.cards[i].suit + this.cards[i].value);
                    this.cards.splice(i, 1);
                }
            }
        } //end of for loop
        console.log('Player and delear cards removed from deck');
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