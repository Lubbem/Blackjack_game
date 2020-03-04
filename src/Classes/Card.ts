export class Card {

    constructor(public name: string, public value: number[], public suit: string) { }

    toString(): string {
        return ("Card: " + this.name + " of " + this.suit + " value " + this.value);
    }

}