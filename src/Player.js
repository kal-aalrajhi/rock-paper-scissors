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

    takeTurn(character) {
        this.characterChoice = character;
    }
}