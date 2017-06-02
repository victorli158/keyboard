class Counter {
  constructor(options) {
    this.game = options.game;
  }

  incrementCounter() {
    let counter = document.getElementById('counter').value;
    counter = parseInt(counter) + 1;
    document.getElementById('counter').value = counter;
    return counter;
  }

  grade() {
    let percentCorrect = document.getElementById('counter').value / this.game.notes.length;
    if (percentCorrect >= 0.8) {
      return "A";
    } else if (percentCorrect < 0.8 && percentCorrect >= 0.6) {
      return "B";
    } else if (percentCorrect < 0.6 && percentCorrect >= 0.4) {
      return "C";
    } else if (percentCorrect < 0.4 && percentCorrect >= 0.2) {
      return "D";
    } else {
      return "F";
    }
  }
}

module.exports = Counter;
