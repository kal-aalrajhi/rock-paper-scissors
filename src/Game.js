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
                this.computer.wins++;
                return 'YOU LOSE!';
            } else {
                this.human.wins++;
                return 'YOU WIN!';
            }
        } else if (humanChoice === 'toilet paper') {
            if (computerChoice === 'swords') {
                this.computer.wins++;
                return 'YOU LOSE!';
            } else {
                this.human.wins++;
                return 'YOU WIN!';
            }
        } else if (humanChoice === 'swords') {
            if (computerChoice === 'guitar') {
                this.computer.wins++;
                return 'YOU LOSE!';
            } else {
                this.human.wins++;
                return 'YOU WIN!';
            }
        }
    }

    resetGame(){
        this.human.wins = 0;
        this.computer.wins = 0;
    }
}

// Simulate game in console via node
var game1 = new Game('classic');
var game2 = new Game('classic');

// Simulate tie
console.log(game1.checkWinConditions('guitar', 'guitar'));
console.log(game2.checkWinConditions('toilet paper', 'toilet paper'));
console.log(game1.checkWinConditions('swords', 'swords'));
console.log();

// Simulate human loses
console.log(game1.checkWinConditions('guitar', 'toilet paper'));
console.log(game2.checkWinConditions('toilet paper', 'swords'));
console.log(game1.checkWinConditions('swords', 'guitar'));
console.log();

// Simulate human wins
console.log(game2.checkWinConditions('guitar', 'swords'));
console.log(game2.checkWinConditions('guitar', 'swords'));
console.log(game2.checkWinConditions('guitar', 'swords'));
console.log(game1.checkWinConditions('toilet paper', 'guitar'));
console.log(game2.checkWinConditions('swords', 'toilet paper'));
console.log();

// Check wins
console.log(game1.computer.wins);
console.log(game1.human.wins);
console.log(game2.computer.wins);
console.log(game2.human.wins);

game1.resetGame();
console.log();

// Recheck wins for game1 (should be reset)
console.log(game1.computer.wins);
console.log(game1.human.wins);
console.log(game2.computer.wins);
console.log(game2.human.wins);

game2.resetGame();
console.log();

// Recheck wins for game1 and game 2 (should be reset)
console.log(game1.computer.wins);
console.log(game1.human.wins);
console.log(game2.computer.wins);
console.log(game2.human.wins);