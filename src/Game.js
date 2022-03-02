class Game {
    constructor(human, computer, gameType) {
        this.human = human;
        this.computer = computer;
        this.gameType = gameType;
    }

    checkWinConditions(gameType){
        // check for draw
    }
    
    resetGame(){

    }
}

// Outline:
// Two Player instances 
// A way to keep track of the data for the game board
// A way to keep track of the selected game type
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game