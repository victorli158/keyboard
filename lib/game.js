const Note = require("./note");
const Line = require("./line");
const Util = require("./util");
const Key = require("./key");
const Counter = require("./counter");

class Game {
  constructor() {
    this.notes = [];
    this.line = [];
    this.counter = [];
    this.keys = [];
    this.playAreaWidth = window.innerWidth * 0.75;
    this.add(new Line({ game: this }));
    this.add(new Counter({ game: this }));
    this.addKeys();
    this.playMary = this.playMary.bind(this);
  }

  registerKeyListeners() {
    window.addEventListener('keydown', e => {
      e.preventDefault();
      if (e.keyCode === 83) {
        document.getElementById('c4').cloneNode(true).play();
        this.notes.forEach((note) => {
          if (note.isCollidedWith() && note.key === "s") {
            this.counter[0].incrementCounter();
          }
        });
      } else if (e.keyCode === 68) {
        document.getElementById('d4').cloneNode(true).play();
        this.notes.forEach((note) => {
          if (note.isCollidedWith() && note.key === "d") {
            this.counter[0].incrementCounter();
          }
        });
      } else if (e.keyCode === 70) {
        document.getElementById('e4').cloneNode(true).play();
        this.notes.forEach((note) => {
          if (note.isCollidedWith() && note.key === "f") {
            this.counter[0].incrementCounter();
          }
        });
      } else if (e.keyCode === 71) {
        document.getElementById('f4').cloneNode(true).play();
        this.notes.forEach((note) => {
          if (note.isCollidedWith() && note.key === "g") {
            this.counter[0].incrementCounter();
          }
        });
      } else if (e.keyCode === 72) {
        document.getElementById('g4').cloneNode(true).play();
        this.notes.forEach((note) => {
          if (note.isCollidedWith() && note.key === "h") {
            this.counter[0].incrementCounter();
          }
        });
      } else if (e.keyCode === 74) {
        document.getElementById('a4').cloneNode(true).play();
        this.notes.forEach((note) => {
          if (note.isCollidedWith() && note.key === "j") {
            this.counter[0].incrementCounter();
          }
        });
      } else if (e.keyCode === 75) {
        document.getElementById('b4').cloneNode(true).play();
        this.notes.forEach((note) => {
          if (note.isCollidedWith() && note.key === "k") {
            this.counter[0].incrementCounter();
          }
        });
      } else if (e.keyCode === 76) {
        document.getElementById('c5').cloneNode(true).play();
        this.notes.forEach((note) => {
          if (note.isCollidedWith() && note.key === "l") {
            this.counter[0].incrementCounter();
          }
        });
      }
    });
  }

  registerMiaListeners() {

  }

  registerClickListeners() {
    document.getElementById("play-mary").addEventListener("click", this.playMary);
  }

  playMary() {
    const keyWidth = this.playAreaWidth / 8;
    this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -200], color: "yellow" }));
    this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -300], color: "yellow" }));
    this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 3, -400], color: "yellow"}));
    this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -500], color: "yellow"}));
    this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -600], color: "yellow"}));
    this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -700], color: "yellow"}));
    this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -800], color: "yellow"}));
    this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -1000], color: "yellow"}));
    this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -1100], color: "yellow"}));
    this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -1200], color: "yellow"}));
    this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -1400], color: "yellow"}));
    this.add(new Note({ game: this, key: "l", vel: 3, pos: [keyWidth * 7, -1500], color: "yellow"}));
    this.add(new Note({ game: this, key: "l", vel: 3, pos: [keyWidth * 7, -1600], color: "yellow"}));
    this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -1800], color: "yellow"}));
    this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -1900], color: "yellow"}));
    this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 3, -2000], color: "yellow"}));
    this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -2100], color: "yellow"}));
    this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -2200], color: "yellow"}));
    this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -2300], color: "yellow"}));
    this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -2400], color: "yellow"}));
    this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -2600], color: "yellow"}));
    this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -2700], color: "yellow"}));
    this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -2800], color: "yellow"}));
    this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -2900], color: "yellow"}));
    this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 3, -3000], color: "yellow"}));
  }

  playMia() {
    const keyWidth = this.playAreaWidth / 8;
    this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    this.add(new Note({ game: this, key: "f", vel: 3, pos: [0, -300], color: "orange", tone: "f4#"}));
    this.add(new Note({ game: this, key: "g", vel: 3, pos: [0, -400], color: "orange", tone: "g4#"}));
    this.add(new Note({ game: this, key: "h", vel: 3, pos: [0, -500], color: "orange", tone: "a4"}));
    this.add(new Note({ game: this, key: "g", vel: 3, pos: [0, -600], color: "orange", tone: "g4#"}));
    this.add(new Note({ game: this, key: "f", vel: 3, pos: [0, -700], color: "orange", tone: "f4#"}));
    this.add(new Note({ game: this, key: "d", vel: 3, pos: [0, -800], color: "orange", tone: "d4"}));
    this.add(new Note({ game: this, key: "d", vel: 3, pos: [0, -1400], color: "orange", tone: "d4"}));
    this.add(new Note({ game: this, key: "f", vel: 3, pos: [0, -1500], color: "orange", tone: "f4#"}));
    this.add(new Note({ game: this, key: "g", vel: 3, pos: [0, -1600], color: "orange", tone: "g4#"}));
    this.add(new Note({ game: this, key: "h", vel: 3, pos: [0, -1700], color: "orange", tone: "a4"}));
    this.add(new Note({ game: this, key: "g", vel: 3, pos: [0, -1800], color: "orange", tone: "g4#"}));
    this.add(new Note({ game: this, key: "f", vel: 3, pos: [0, -1900], color: "orange", tone: "f4#"}));
    this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -2000], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "f", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "g", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "h", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "g", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "f", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "d", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
    // this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
  }

  add(object) {
    if (object instanceof Note) {
      this.notes.push(object);
    } else if (object instanceof Line) {
      this.line.push(object);
    } else if (object instanceof Key) {
      this.keys.push(object);
    } else if (object instanceof Counter) {
      this.counter.push(object);
    }
  }

  addKeys() {
    let keys = ["S", "D", "F", "G", "H", "J", "K", "L"];
    for (let i = 0; i < 8; i++) {
      this.add(new Key({ game: this, key: keys[i], pos: [this.playAreaWidth / 8 * i, window.innerHeight * 0.7]}));
    }
  }

  allObjects() {
    return [].concat(this.notes, this.line, this.keys);
  }

  checkCollisions() {

  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.allObjects().forEach((object) => {
      object.draw(ctx);
    });
  }

  moveNotes(delta) {
    this.notes.forEach((note) => {
      note.move(delta);
    });
  }

  remove(note) {
    this.notes.splice(this.notes.indexOf(note), 1);
  }

  step(delta) {
    this.moveNotes(delta);
    this.checkCollisions();
  }

}

Game.BG_COLOR = "#000000";
Game.DIM_X = window.innerWidth;
Game.DIM_Y = window.innerHeight;
Game.FPS = 32;

module.exports = Game;
