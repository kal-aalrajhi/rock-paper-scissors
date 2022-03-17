// Global Variables
var currentGame = new Game;

// Selectors
var backButton = document.querySelector('#backButton');
var challengeMode = document.querySelector('#challenge');
var characterOptions = document.querySelector('#characterOptions');
var classicMode = document.querySelector('#classic');
var computerScore = document.querySelector('#computerScore');
var gameModesSection = document.querySelector('#gameModes');
var humanScore = document.querySelector('#humanScore');
var humanSide = document.querySelector('#humanSide');
var resetScoresButton = document.querySelector('#resetScoresButton');
var subtitle = document.querySelector('#subtitle');

// Event Listeners
window.addEventListener('load', () => {
    currentGame.updateScores();
  });

resetScoresButton.addEventListener('click', () => {
    currentGame.resetScores();
});

backButton.addEventListener('click', loadGameTypes);
challengeMode.addEventListener('click', pickGameMode);
characterOptions.addEventListener('click', chooseCharacter);
classicMode.addEventListener('click', pickGameMode);

// Functions
function chooseCharacter(event) {
    if(event.target.id !== 'characterOptions') 
    {
        var characters = characterOption[currentGame.gameType];
        var humanChoice = currentGame.human.takeTurn(event.target.id, characters);
        var computerChoice = currentGame.computer.takeRandomTurn(characters);
        
        loadCharacters([humanChoice, computerChoice]);
        subtitle.innerText = currentGame.checkWinConditions();
        currentGame.resetBoard(characters);
    }
}

function loadCharacters(characters) {
    subtitle.innerHTML = 'choose your character';
    characterOptions.innerHTML = '';
    hideElement(gameModesSection);
    unhideElement(characterOptions);
    unhideElement(backButton);
    
    var playerTokens = [currentGame.human.token, currentGame.computer.token];
    characters.forEach((character, idx) => {
        if (characters.length > 2) {
            playerTokens[idx] = '';
        }
        characterOptions.innerHTML += `
        <section class='character'>
            <img id=${character.name} src=${character.img} alt='${character.name} character' />
            <p class='token'>${playerTokens[idx]}</p>
        </section>`
    });
}

function loadGameTypes() {
    subtitle.innerHTML = 'choose your game type';
    characterOptions.innerHTML = '';
    hideElement(characterOptions);
    hideElement(backButton);
    unhideElement(gameModesSection);
}

function pickGameMode() {
    currentGame.gameType = this.id;
    loadCharacters(characterOption[currentGame.gameType]);
}

function hideElement(elementToHide) {
    elementToHide.classList.add('hidden');
}

function unhideElement(elementToUnhide) {
    elementToUnhide.classList.remove('hidden');
}