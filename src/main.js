// Global Variables
var currentGame = "";
var gameModesSection = document.querySelector('#gameModes');
var playerSide = document.querySelector('#playerSide');
var characterOptions = document.querySelector('#characterOptions');
var backButton = document.querySelector('#backButton');

// Event Listeners
gameModesSection.addEventListener('click', pickGameMode);
backButton.addEventListener('click', loadGameTypes);
characterOptions.addEventListener('click', characterChoice);

// Functions
function pickGameMode(event) {
    if (event.target.id === 'classic') {
        currentGame = new Game('classic');
        loadCharacters('classic', characterOption.classic);
    } else if (event.target.id === 'challenge'){
        currentGame = new Game('challenge');
        loadCharacters('challenge', characterOption.challenge);
    }
}

function loadCharacters(gameMode, characters) {
    // Render game type
    hideElement(gameModesSection);
    unhideElement(characterOptions);
    unhideElement(backButton);

    for (var i = 0; i < characters.length; i++) {
        characterOptions.innerHTML += `
        <section class='character'>
            <img id=${characters[i].name} src=${characters[i].img} />
        </section>`
    }
}

function hideElement(elementToHide) {
    elementToHide.classList.add('hidden');
}

function unhideElement(elementToUnhide) {
    elementToUnhide.classList.remove('hidden');
}

function loadGameTypes() {
    characterOptions.innerHTML = "";
    hideElement(characterOptions);
    hideElement(backButton);
    unhideElement(gameModesSection);
}

function characterChoice(event) {
    if(event.target.id !== 'characterOptions') // avoid parent element target from running
    {
        // Player's choice
        var humanChoice = event.target.id;

        // Computer Choice
        var randIdx = Math.floor(Math.random() * characterOption[currentGame.gameType].length);
        var computerChoice = characterOption[currentGame.gameType][randIdx].name;

        // Check who won!
        console.log(humanChoice, computerChoice);
        console.log(currentGame.checkWinConditions(humanChoice, computerChoice));
    }
}