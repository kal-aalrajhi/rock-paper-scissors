// Player methods must include, but are not limited to:
// constructor - properties should include: name (ex: 'Human'), token (ex: '👩🏻'), wins (ex: 0)
// takeTurn
class Player {
    constructor(name, token) {
        this.name = name;
        this.token = token;
        this.wins = 0;
        this.characterChoice = {};
    }

    takeTurn(event, characters) {
        // Human turn
        for (var i = 0; i < 5; i++) {
            if (event.target.id === characters[i].name) {
                var characterChoice = characters[i];
                return characterChoice;
            }
        }
    }

    takeRandomTurn(characters) {
        var randIdx = Math.floor(Math.random() * characters.length);
        var characterChoice = characters[randIdx];
        return characterChoice;
    }
}