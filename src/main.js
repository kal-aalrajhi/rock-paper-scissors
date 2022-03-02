// Global Variables
var gameOptions = {
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

// var centerBar = document.querySelector('.center-bar');
var gameModesSection = document.querySelector('#gameModes');
var classicMode = document.querySelector('#classic');
var challengeMode = document.querySelector('#challenge');
var playerSide = document.querySelector('#playerSide');
var itemOptions = document.querySelector('#itemOptions');
var backButton = document.querySelector('#backButton');

// Event Listeners
gameModesSection.addEventListener('click', pickGameMode);

// Functions
function pickGameMode(event) {
    if (event.target.id === 'classic') {
        playGame('classic', gameOptions.classic);
    } else if (event.target.id === 'challenge'){
        playGame('challenge', gameOptions.challenge);
    }
}

function playGame(gameMode, options) {
    // Render game type
    hideElement(gameModesSection);
    unhideElement(itemOptions);
    unhideElement(backButton);

    for (var i = 0; i < options.length; i++) {
        itemOptions.innerHTML += `
        <section class='item'>
        <h3>${options[i].name}</h3>
        <img src=${options[i].img} />
        </section>`
    }
}

function hideElement(elementToHide) {
    elementToHide.classList.add('hidden');
}

function unhideElement(elementToUnhide) {
    elementToUnhide.classList.remove('hidden');
}