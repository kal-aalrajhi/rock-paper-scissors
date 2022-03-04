class Player {
    constructor(name, token) {
        this.name = name;
        this.token = token;
        this.wins = 0;
        this.characterChoice = {};
    }

    takeTurn(event, characters) {
        for (var i = 0; i < characters.length; i++) {
            if (event.target.id === characters[i].name) {
                this.characterChoice = characters[i];
                return this.characterChoice;
            }
        }
    }

    takeRandomTurn(characters) {
        var randIdx = Math.floor(Math.random() * characters.length);
        this.characterChoice = characters[randIdx];
        return this.characterChoice;
    }

    saveWinsToStorage() {
        localStorage.setItem(`${this.name}Storage`, this.wins);
    }
}