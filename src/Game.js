class Game {
    constructor(gameType) {
        this.gameType = gameType || '';
        this.human = new Player('human', '👨🏽‍🚀');
        this.computer = new Player('computer', '🤖');
    }

    checkWinConditions() {
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
                    return `${this.computer.token} ${this.computer.name} wins this round! ${this.computer.token}`;
                } else {
                    this.human.wins++;
                    return `${this.human.token} ${this.human.name} wins this round! ${this.human.token}`;
                }
            }
        }
    }

    resetBoard(characters) {
        setTimeout(() => {loadCharacters(characters)}, 2000);
        this.updateScores();
    }

    updateScores() {
        this.human.saveWinsToStorage();
        this.computer.saveWinsToStorage();
        humanScore.innerText = this.human.wins;
        computerScore.innerText = this.computer.wins;
    }

    resetScores() {
        localStorage.clear();
        this.updateScores();
    }
}