function Letter(value) {
  this.letter = value;
  this.guessed = false;
  this.toString = function() {
    if (this.letter === " ") {
      this.guessed = true;
      return this.letter;
    } else {
      if (!this.guessed) {
        // console.log("∞");
        return "∞";
      } else {
        // console.log(this.letter);
        return this.letter;
      }
    }
  };
  this.checkLetter = function(userGuess) {
    if (userGuess === this.letter) {
      this.guessed = true;
      console.log("Good Guess");
    }
  };
}
module.exports = Letter;
