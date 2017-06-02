class Counter {
  constructor(options) {
    this.game = options.game;
    this.grade = this.grade.bind(this);
  }

  incrementCounter() {
    let counter = document.getElementById('counter').value;
    counter = parseInt(counter) + 1;
    document.getElementById('counter').value = counter;
    let oldCounter = document.getElementById('counter');
    let newCounter = oldCounter.cloneNode(true);
    oldCounter.parentNode.replaceChild(newCounter, oldCounter);
    return counter;
  }

  grade() {
    document.getElementById('grade').style.zIndex = 3;
    let percentCorrect = parseInt(document.getElementById('counter').value) / this.game.notes.length;
    if (percentCorrect >= 0.9) {
      document.getElementById('grade').value = "Your Grade: A";
      return "Your Grade: A";
    } else if (percentCorrect < 0.9 && percentCorrect >= 0.8) {
      document.getElementById('grade').value = "Your Grade: B";
      return "Your Grade: B";
    } else if (percentCorrect < 0.8 && percentCorrect >= 0.6) {
      document.getElementById('grade').value = "Your Grade: C";
      return "Your Grade: C";
    } else if (percentCorrect < 0.6 && percentCorrect >= 0.4) {
      document.getElementById('grade').value = "Your Grade: D";
      return "Your Grade: D";
    } else {
      document.getElementById('grade').value = "Your Grade: F";
      return "Your Grade: F";
    }
  }
}

module.exports = Counter;
