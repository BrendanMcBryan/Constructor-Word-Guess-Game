// needs
var inquirer = require("inquirer");
var Word = require("./Word.js");

const wordList = [
  "Rome",
  "California",
  "Georgia",
  "Texas",
  "Florida",
  "New York",
  "Paris",
  "Philadelphia",
  "Cherry Hill"
];

let lettersGuessed = [];

let randomWord = wordList[Math.floor(Math.random() * wordList.length)];

let hero = new Word(randomWord);

let guessesRemain = Math.floor(randomWord.length + 5);
// let guessesRemain = 2;

let needNewWord = false;

function askForLetter() {
  if (needNewWord) {
    randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    hero = new Word(randomWord);
    hero.isGuessed = false;
    guessesRemain = Math.floor(randomWord.length + 5);

    lettersGuessed = [];
    needNewWord = false;
  }

  if (guessesRemain > 0 && hero.isGuessed === false) {
    console.log(`
You have ${guessesRemain} guesses remianing.`);
    hero.consoleString();
    printDashes();

    inquirer
      .prompt([
        {
          type: "input",
          message: "Your Guess:",
          name: "userInput"
        }
      ])
      .then(function(answer) {
        let userguess = answer.userInput;

        if (
          lettersGuessed.includes(userguess) ||
          userguess === "" ||
          userguess.length > 1
        ) {
          console.log("You cant use that one");
          // askForLetter();
        } else {
          guessesRemain--;
          lettersGuessed.push(userguess);
          hero.takeGuess(userguess);
          hero.consoleString();
          if (hero.isGuessed) {
            console.log("Great Job! You've guessed the word!");
            guessesRemain = 0;
            playAgain();
          } else if (guessesRemain === 0) {
            console.log(
              `You've run out of guesses! the correct answer was…${randomWord}`
            );
            playAgain();
          }
        }
        askForLetter();
      });
    //   guessesRemain--;
  }
}

function playAgain() {
  inquirer
    .prompt([
      {
        type: "Confirm",
        message: "Would you like to play again?",
        name: "userPlayAgain"
      }
    ])
    .then(function(input) {
      if (input.userPlayAgain) {
        needNewWord = true;

        askForLetter();
      } else {
        console.log("Okay, Have a great day!");
      }
    });
}

function printDashes() {
  let dashes = "--------------------";

  console.log(dashes);
}

console.log(`
Welcome to the Constructor Word Guess game!
choose a letter to begin. `);
askForLetter();
