// Global Variables
var characterOption = {
    classic: [
        {
            name: 'guitar',
            img: 'assests/guitar.png',
            weakness: ['toilet paper']
        },
        {
            name: 'toilet paper',
            img: 'assests/toilet-paper.png',
            weakness: ['swords']
        },
        {
            name: 'swords',
            img: 'assests/swords.png',
            weakness: ['guitar']
        }
    ],
    challenge: [
        {
            name: 'guitar',
            img: 'assests/guitar.png',
            weakness: ['toilet paper', 'robot']
        },
        {
            name: 'toilet paper',
            img: 'assests/toilet-paper.png',
            weakness: ['swords', 'ninja']
        },
        {
            name: 'swords',
            img: 'assests/swords.png',
            weakness: ['guitar', 'robot']
        },
        {
            name: 'ninja',
            img: 'assests/ninja.png',
            weakness: ['swords', 'guitar']
        },
        {
            name: 'robot',
            img: 'assests/robot.png',
            weakness: ['toilet paper', 'ninja']
        }
    ]
};

var currentGame = "";
var gameModesSection = document.querySelector('#gameModes');
var playerSide = document.querySelector('#playerSide');
var characterOptions = document.querySelector('#characterOptions');
var backButton = document.querySelector('#backButton');

// Event Listeners
gameModesSection.addEventListener('click', pickGameMode);
backButton.addEventListener('click', loadGameTypes);

// Functions
function pickGameMode(event) {
    if (event.target.id === 'classic') {
        currentGame = new Game('classic');
        loadCharacters('classic', characterOption.classic);
    } else if (event.target.id === 'challenge'){
        // currentGame = new Game('challenge');
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
        <img src=${characters[i].img} />
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