// Outline:
// Two Player instances 
// A way to keep track of the data for the game board
// A way to keep track of the selected game type
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game

const Player = require('./player.js');

class Game {
    constructor(gameType) {
        this.gameType = gameType;
        this.human = new Player('Human', 'X');
        this.computer = new Player('Computer', 'Y');
    }

    checkWinConditions(humanChoice, computerChoice){
        if (humanChoice === computerChoice) {
            return 'DRAW!';
        } else if (humanChoice === 'guitar') {
            if (computerChoice === 'toilet paper') {
                return 'YOU LOSE!'
            } else {
                return 'YOU WIN!';
            }
        } else if (humanChoice === 'toilet paper') {
            if (computerChoice === 'swords') {
                return 'YOU LOSE!'
            } else {
                return 'YOU WIN!';
            }
        } else if (humanChoice === 'swords') {
            if (computerChoice === 'guitar') {
                return 'YOU LOSE!'
            } else {
                return 'YOU WIN!';
            }
        }
    }

    // resetGame(){
    // }
}

// Simulate game in console via node
var game1 = new Game('classic');
var game2 = new Game('classic');

// Simulate tie
console.log(game1.checkWinConditions('guitar', 'guitar'));
console.log(game2.checkWinConditions('toilet paper', 'toilet paper'));
console.log(game1.checkWinConditions('swords', 'swords'));
console.log();

// Simulate loses
console.log(game1.checkWinConditions('guitar', 'toilet paper'));
console.log(game2.checkWinConditions('toilet paper', 'swords'));
console.log(game1.checkWinConditions('swords', 'guitar'));
console.log();

// Simulate wins
console.log(game2.checkWinConditions('guitar', 'swords'));
console.log(game1.checkWinConditions('toilet paper', 'guitar'));
console.log(game2.checkWinConditions('swords', 'toilet paper'));


