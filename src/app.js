// Importing all functions necessary:
import getRandomThrow from './get-random-throw.js';
import checkResult from './check-result.js';

// Sets DOM elements to variables:
const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const resultOfGame = document.getElementById('result-of-game');
const numOfWinsSpan = document.getElementById('number-of-wins');
const numOfLossesSpan = document.getElementById('number-of-losses');
const numOfDrawsSpan = document.getElementById('number-of-draws');
const userChoiceSpan = document.getElementById('user-choice');
const computerChoiceSpan = document.getElementById('computer-choice');

// Page loads with number of wins, losses, and draws set at 0:
let numOfWins = 0;
let numOfLosses = 0;
let numOfDraws = 0;

const updateSpans = () => {
  numOfWinsSpan.textContent = numOfWins;
  numOfLossesSpan.textContent = numOfLosses;
  numOfDrawsSpan.textContent = numOfDraws;
};

// Function to reset game:
const hardReset = () => {
  numOfWins = 0;
  numOfLosses = 0;
  numOfDraws = 0;
  resultOfGame.textContent = '--';
  userChoiceSpan.textContent = '--';
  computerChoiceSpan.textContent = '--';
  updateSpans();
};

// Function that runs the RPS Game:
const playTheHand = () => {
  // Sets user hand from DOM element selection:
  const userHand = document.querySelector('input:checked').value;

  // Sets computer hand via getRandomThrow function:
  const computerHand = getRandomThrow();

  const result = checkResult(userHand, computerHand);
  
  // Check to see if the result is a win, loss, or draw:
  if (result === 0) {
    numOfDraws++;
    resultOfGame.textContent = 'It\'s a Draw!';
  } else if (result === -1) {
    numOfLosses++;
    resultOfGame.textContent = 'You Lose!';
  } else if (result === 1) {
    resultOfGame.textContent = 'You Win!';
    numOfWins++;
  }

  // Log the user's choice and the computers choice to the DOM
  userChoiceSpan.textContent = userHand.charAt(0).toUpperCase() + userHand.slice(1);
  computerChoiceSpan.textContent = computerHand.charAt(0).toUpperCase() + computerHand.slice(1);

  // Log the number of wins, losses, and draws to the DOM
  updateSpans();

};

// Runs playTheHand() when the button on the page is clicked.
playButton.addEventListener('click', playTheHand);
resetButton.addEventListener('click', hardReset);