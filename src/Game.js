class Game {
    constructor(gameType) {
        this.gameType = gameType;
        this.human = new Player('Human', 'X');
        this.computer = new Player('Computer', 'Y');
    }

    checkWinConditions(human, computer) {
        // Character array - either classic or challenge
        var characters = characterOption[this.gameType];
        // Check for draw
        var humanChoice = this.human.characterChoice.name;
        var computerChoice = this.computer.characterChoice.name;
        
        if (humanChoice === computerChoice) {
            return 'draw!';
        } 
        // Determine outcome
        for (var i = 0; i < characters.length; i++) {
            if(humanChoice === characters[i].name) {
                if (characters[i].weakness.includes(computerChoice)) {
                    this.computer.wins++;
                    return 'you lose!';
                } else {
                    this.human.wins++;
                    return 'you win!';
                }
            }
        }
    }

    resetBoard(){
        //TODO
    }
}