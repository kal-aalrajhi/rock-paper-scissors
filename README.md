# Rock, Paper, Scissors

<img width="500" alt="Rock, Paper, Scissors Project" src="">

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
Users are encouraged to visit our **ColoRandom** page for color palette inspiration for their next project. They can generate a completely random palette of five colors at a time, or save their desired colors and refresh the random colors of their choice around these saved options. All saved palettes will be shown in a sidebar for users to review as wished.

This project was assigned as a part of Turing School of Software and Design's Front-End program, students had one week to complete it.

## Technologies
  - Javascript 
    - Local storage
  - HTML
  - CSS
    - Flexbox

## Features
- When a user initially opens the page, they'll see five random colors with their associated hexcodes, an empty **Saved Palettes** section, and two buttons labeled **New Palette** and **Save Palette**.
- To generate a completely new palette, the user can click **New Palette**. Five new colors will be displayed on the main screen.
- From there, the user can click on a color that they like to *lock* that color in place. Now, when they generate a new palette, every color except those that are locked will change. Clicking on a color again will *unlock* a locked color. (This is visually demonstrated with an unlocked or locked icon below each color.)
- When a user has a collection of colors that they're happy with, clicking **Save Palette** will move this palette into the Saved Palettes section. They can choose to remove any palette from this section by clicking the trash icon next to the appropriate palette.

- Game score persists even on refresh
- Reset score (resets local storage too)

## Page Demo
![Example of button functionality](https://media.giphy.com/media/YJ4jzH6DEZWkzvHl38/giphy.gif)

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
