class Game {
    constructor(gameType) {
        this.gameType = gameType;
        this.human = new Player('Human', 'X');
        this.computer = new Player('Computer', 'Y');
    }

    checkWinConditions(humanChoice, computerChoice){
        // Character array - either classic or challenge
        var characters = characterOption[this.gameType];
        // Check for draw
        if (humanChoice === computerChoice) {
            return 'DRAW!';
        } 
        // Determine outcome
        for (var i = 0; i < characters.length; i++) {
            if(humanChoice === characters[i].name) {
                if (characters[i].weakness.includes(computerChoice)) {
                    this.computer.wins++;
                    return 'YOU LOSE!';
                } else {
                    this.human.wins++;
                    return 'YOU WIN!';
                }
            }
        }
    }

    resetGame(){
        this.human.wins = 0;
        this.computer.wins = 0;
    }
}