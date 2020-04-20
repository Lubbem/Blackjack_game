
# Black Jack Game Assignment

[![CircleCI](https://circleci.com/gh/FRossouw/Blackjack_game.svg?style=svg)](https://circleci.com/gh/FRossouw/Blackjack_game)
A simple black jack game using TypeScript.

## Introduction
Blackjack/Twenty-one is a card game between one or more players and a dealer where each player in turn competes with the dealer. The game is played with a deck of 52 cards. The goal of the game is to beat the dealer’s hand, without going over 21.

### Project Requirements
1. Read Black Jack Rounds from a textfile into the system
2. The assignment should be coded in TypeScript
3. It should follow OOP Principles
4. The project should be run through Circle CI CD pipelines (Linting)
5. The project should be console/terminal based

#### Game Requirements
1. Keep track of a list of cards that are currently in the deck
2. Shuffle the cards at the beginning of each game
3. On each player's turn, decide whether to hit or stand
4. Hit on the dealer's turn
5. Evaluate the winner of the round if any at the end of each round

#### File Format for Rounds
`King:Spades:10,Ace:Hearts:1:11,Pip:Hearts:3,Jack:Spades:10,Ace:Diamonds:1:11,King:Hearts:10,Pip:Hearts:7`

#### Black Jack Rules
For the purpose of this assignment, the rules are as follows:
1.	Face cards (King, Jack and Queen) are worth 10, cards 2 – 10 are worth their pip value, Aces can be worth 1 or 11.
2.	Each player besides the dealer starts with 2 cards.
3.	The dealer starts with one card.
4.	In each round, depending on their current hand and the dealer’s hand, each player decides to Hit or Stand.
5.	Hit – When a player opts to pick a card from a randomly shuffled deck of cards during their turn.
6.	Stand – When a player decides not to add any more cards to their hand as part of their turn.
7.	The player’s goal is to attain a hand with a value of 21 or a hand higher than the dealer’s, but lower than 21.

### Notes
[2020 04 20] Screenshots added to project

### Screenshots
![](https://raw.githubusercontent.com/FRossouw/Blackjack_game/master/screenshots/Round%2001.PNG)
![](https://raw.githubusercontent.com/FRossouw/Blackjack_game/master/screenshots/Round%2002%20and%2003.PNG)
![](https://raw.githubusercontent.com/FRossouw/Blackjack_game/master/screenshots/Round%2004%20and%20Winner.PNG)



