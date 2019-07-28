var Letter = require("./Letter.js");

function Word(answer) {
  this.wordArray = [];
  for (const key in answer) {
    var letter = new Letter(answer[key]);
    this.wordArray.push(letter);
  }

  this.consoleString = function() {
    answerLog = "";
    for (const key in this.wordArray) {
      answerLog += this.wordArray[key] + " ";
    }
    console.log(`
    ${answerLog}`);
  };

  this.takeGuess = function(userGuess) {
    for (const key in this.wordArray) {
      this.wordArray[key].checkLetter(userGuess);
    }
  };
}

const test = new Word("Hello");

// test.consoleString();
// test.takeGuess("e");
// test.takeGuess("l");
// test.consoleString();
module.exports = Word;
