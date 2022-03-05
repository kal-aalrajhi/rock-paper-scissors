// Global Variables
var currentGame = new Game;

// Global Selectors
var backButton = document.querySelector('#backButton');
var characterOptions = document.querySelector('#characterOptions');
var computerScore = document.querySelector('#computerScore');
var gameModesSection = document.querySelector('#gameModes');
var challengeMode = document.querySelector('#challenge');
var classicMode = document.querySelector('#classic');
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
characterOptions.addEventListener('click', chooseCharacter);
challengeMode.addEventListener('click', pickGameMode);
classicMode.addEventListener('click', pickGameMode);

// Functions
function chooseCharacter(event) {
    if(event.target.id !== 'characterOptions') 
    {
        var characters = characterOption[currentGame.gameType];
        var humanChoice = currentGame.human.takeTurn(event, characters);
        var computerChoice = currentGame.computer.takeRandomTurn(characters);
        
        loadCharacters([humanChoice, computerChoice]);
        subtitle.innerText = currentGame.checkWinConditions();
        currentGame.resetBoard(characters);
    }
}

function loadCharacters(characters) {
    subtitle.innerHTML = "choose your character";
    hideElement(gameModesSection);
    unhideElement(characterOptions);
    unhideElement(backButton);
    
    characterOptions.innerHTML = "";
    for (var i = 0; i < characters.length; i++) {
        characterOptions.innerHTML += `
        <section class='character'>
            <img id=${characters[i].name} src=${characters[i].img} />
        </section>`
    }
}

function loadGameTypes() {
    subtitle.innerHTML = "choose your game type";
    characterOptions.innerHTML = "";
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