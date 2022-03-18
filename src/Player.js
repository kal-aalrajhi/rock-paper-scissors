class Player {
    constructor(name, token) {
        this.name = name;
        this.token = token;
        this.wins = this.retrieveWinsFromStorage() || 0;
        this.characterChoice = {};
    }

    takeTurn(choice, characters) {
        for (var i = 0; i < characters.length; i++) {
            if (choice === characters[i].name) {
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

    retrieveWinsFromStorage() {
        return localStorage.getItem(`${this.name}Storage`);
    }
}