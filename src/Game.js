class Game {
    constructor(gameType) {
        this.gameType = gameType || '';
        this.human = new Player('human', '👨🏽‍🚀');
        this.computer = new Player('computer', '🤖');
    }

    checkWinConditions() {
        var characters = characterOption[this.gameType];
        var humanChoice = this.human.characterChoice.name;
        var computerChoice = this.computer.characterChoice.name;
        
        if (humanChoice === computerChoice) {
            return 'draw!!!';
        } 
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
        characterOptions.removeEventListener('click', characterChoice);
        setTimeout(() => {loadCharacters(characters)}, 2000);
        setTimeout(() => {characterOptions.addEventListener('click', characterChoice)}, 2000);
        this.updateScores();
    }

    updateScores() {
        this.human.saveWinsToStorage();
        this.computer.saveWinsToStorage();
        humanScore.innerText = this.human.wins;
        computerScore.innerText = this.computer.wins;
    }

    resetScores() {
        this.human.wins = 0;
        this.computer.wins = 0;
        localStorage.clear();
        this.updateScores();
    }
}