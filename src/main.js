// Global Variables
var currentGame = new Game;

// Global Selectors
var backButton = document.querySelector('#backButton');
var characterOptions = document.querySelector('#characterOptions');
var computerScore = document.querySelector('#computerScore');
var gameModesSection = document.querySelector('#gameModes');
var humanScore = document.querySelector('#humanScore');
var humanSide = document.querySelector('#humanSide');
var subtitle = document.querySelector('#subtitle');

// Event Listeners
window.addEventListener('load', () => {
    currentGame.updateScores();
  });
  
backButton.addEventListener('click', loadGameTypes);
characterOptions.addEventListener('click', characterChoice);
gameModesSection.addEventListener('click', pickGameMode);

// Functions
function characterChoice(event) {
    if(event.target.id !== 'characterOptions') // avoid parent element target from running 
    {
        // Choose character
        var characters = characterOption[currentGame.gameType];
        var humanChoice = currentGame.human.takeTurn(event, characters);
        var computerChoice = currentGame.computer.takeRandomTurn(characters);
        
        // Show results to DOM
        loadCharacters([humanChoice, computerChoice]);
        subtitle.innerText = currentGame.checkWinConditions();
        
        // Reset current gameboard to current set of characters
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

function pickGameMode(event) {
    if (event.target.id === 'classic') {
        currentGame.gameType = ('classic');
    } else if (event.target.id === 'challenge'){
        currentGame.gameType = ('challenge');
    } else {
        return;
    }
    loadCharacters(characterOption[currentGame.gameType]);
}

function hideElement(elementToHide) {
    elementToHide.classList.add('hidden');
}

function unhideElement(elementToUnhide) {
    elementToUnhide.classList.remove('hidden');
}

// console.log(currentGame.computer.wins);
