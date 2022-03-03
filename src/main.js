// Global Variables
var currentGame = "";
var gameModesSection = document.querySelector('#gameModes');
var humanSide = document.querySelector('#humanSide');
var characterOptions = document.querySelector('#characterOptions');
var backButton = document.querySelector('#backButton');
var subtitle = document.querySelector('#subtitle');
var humanScore = document.querySelector('#humanScore');
var computerScore = document.querySelector('#computerScore');

// Event Listeners
gameModesSection.addEventListener('click', pickGameMode);
backButton.addEventListener('click', loadGameTypes);
characterOptions.addEventListener('click', characterChoice);

// Functions
function pickGameMode(event) {
    if (event.target.id === 'classic') {
        currentGame = new Game('classic');
    } else if (event.target.id === 'challenge'){
        currentGame = new Game('challenge');
    }
    loadCharacters(characterOption[currentGame.gameType]);
}

function loadCharacters(characters) {
    // Render game type    
    hideElement(gameModesSection);
    unhideElement(characterOptions);
    unhideElement(backButton);
    
    humanScore.innerText = currentGame.human.wins;
    computerScore.innerText = currentGame.computer.wins;
    subtitle.innerHTML = currentGame.gameType;
    
    characterOptions.innerHTML = "";
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
        // Choose character
        var characters = characterOption[currentGame.gameType];
        var humanChoice = currentGame.human.takeTurn(event, characters);
        var computerChoice = currentGame.computer.takeRandomTurn(characters) 
        
        // Show results to DOM
        loadCharacters([humanChoice, computerChoice])
        subtitle.innerText = currentGame.checkWinConditions();
        
        // Reset current gameboard to current set of characters
        currentGame.resetBoard(characters);
    }
}

// function scream() {
//     console.log("WOWOWOWOWO!");
// }


// function characterChoice(event) {
//     // icon class workaround (instead of id)
//     if(event.target.id !== 'characterOptions') // avoid parent element target from running 
//     {
//         // Assign character object to human player
//         var humanChoice = event.target.id;
//         for (var i = 0; i < 5; i++) {
//             if (humanChoice === characterOption[currentGame.gameType][i].name) {
//                 humanChoice = characterOption[currentGame.gameType][i];
//                 break;
//             }
//         }
//         // Assign character object to computer player
//         var randIdx = Math.floor(Math.random() * characterOption[currentGame.gameType].length);
//         var computerChoice = characterOption[currentGame.gameType][randIdx]; // object

//         // Update respective Player objects 
//         currentGame.human.takeTurn(humanChoice);
//         currentGame.computer.takeTurn(computerChoice);
        
//         // Show results to DOM
//         loadCharacters([humanChoice, computerChoice])
//         subtitle.innerText = `${currentGame.checkWinConditions()}`;

//         // Reset game board
//         setTimeout(() => {loadCharacters(characterOption[currentGame.gameType])}, 2000);
//     }
// }
