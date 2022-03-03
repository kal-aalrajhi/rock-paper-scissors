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
            if (computerChoice === 'toilet-paper') {
                this.computer.wins++;
                return 'YOU LOSE!';
            } else {
                this.human.wins++;
                return 'YOU WIN!';
            }
        } else if (humanChoice === 'toilet-paper') {
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