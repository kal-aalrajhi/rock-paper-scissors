# Rock, Paper, Scissors

<img width="500" alt="Rock, Paper, Scissors Project" src="https://i.imgur.com/sBzSSgp.png">

## Table of Contents

  - [Introduction](#introduction)
  - [Technologies](#technologies)
  - [Features](#features)
  - [Page Demo](#page-demo)
  - [Possible Future Extensions](#possible-future-extensions)
  - [Set Up](#set-up)
  - [Contributors](#contributors)
  - [Special Thanks](#special-thanks)
  - [Project Specs](#project-specs)
  - [Project GitHub Repo](#project-github-repo)

## Introduction
Users are encouraged to visit **Rock Paper Scissors** page to play the best thing since **kick the can**! The characters are a little differrent from classic **rock, paper, scissors**, but the game is essentially the same! User play the role of a 'human' playing against a computer, which randomly chooses it's character. There is a classic mode (3 characters) and a challenge mode (5 characters). Moreover, user and computer wins persist until the user chooses to clear the scores.

This project was assigned as a part of Turing School of Software and Design's Front-End program, students had about a week to complete it. 

## Technologies
  - Javascript 
    - Local storage
  - HTML
  - CSS
    - Flexbox

## Features
- When a user initially opens the page, they'll see a game screen where users are encouraged to choose **classic** or **challenge* mode. Each mode has its set of rules displayed. This bag is also book-ended by each respective player's stat bars which display their token, name, and score.
- When **classic** mode is selected, the user will be taken to another view where 3 character options are displayed. The options are guitar, toilet-paper and swords. 
    - When a character is selected, another view is displayed simulating the 'battle'. The user's choice is compared to the randomly generated computer's choice. The user is prompted to how the comparison resolves - which is either as **win**, **lose**, or **draw**.
    - From there, the user is returned to the character selection view and they can continue to play in classic mode or go back to the game mode selection view.
- When **challenge** mode is selected, the user will be taken to another view where 5 character options are displayed. The options are guitar, toilet-paper, swords, ninja, and robot. This view has the same subfeatures as the classic view.
- Game score persists, even on refresh.
- A reset button is available to reset all the scores (this resets the scores in local storage).

## Page Demo
![Example of game functionality](https://media.giphy.com/media/N2Tmsu9gAHTteBTaLN/giphy.gif)

## Possible Future Extensions
- Allow users to replace 'human' with their name and preferred token
- Two-player implementation
- Add battle animations and sounds

## Set Up
1. Fork and clone this repo.
2. Type `cd rock-paper-scissors` to move into the root directory.
3. `cd` into the project.
4. Read this README thoroughly, then make any desired changes!

## Contributors
- Kal Al-Rajhi (GitHub: kal-aalrajhi)

## Special Thanks
- Nick Nist - mentor | formal code review and moral support
- Maddie Law - rock | informal code review and styling tips

## Project Specs
- The spec for this project can be found [here](https://frontend.turing.edu/projects/module-1/rock-paper-scissors-solo.html).

## Project GitHub Repo
- The project repo can be found [here](https://github.com/kal-aalrajhi/rock-paper-scissors).
