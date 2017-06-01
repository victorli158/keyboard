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
          if (note.isCollidedWith() && note.key === "s" && note.scored === false) {
            this.counter[0].incrementCounter();
            note.scored === true;
          }
        });
      } else if (e.keyCode === 68) {
        document.getElementById('d4').cloneNode(true).play();
        this.notes.forEach((note) => {
          if (note.isCollidedWith() && note.key === "d" && note.scored === false) {
            this.counter[0].incrementCounter();
            note.scored === true;
          }
        });
      } else if (e.keyCode === 70) {
        document.getElementById('e4').cloneNode(true).play();
        this.notes.forEach((note) => {
          if (note.isCollidedWith() && note.key === "f" && note.scored === false) {
            this.counter[0].incrementCounter();
            note.scored === true;
          }
        });
      } else if (e.keyCode === 71) {
        document.getElementById('f4').cloneNode(true).play();
        this.notes.forEach((note) => {
          if (note.isCollidedWith() && note.key === "g" && note.scored === false) {
            this.counter[0].incrementCounter();
            note.scored === true;
          }
        });
      } else if (e.keyCode === 72) {
        document.getElementById('g4').cloneNode(true).play();
        this.notes.forEach((note) => {
          if (note.isCollidedWith() && note.key === "h" && note.scored === false) {
            this.counter[0].incrementCounter();
            note.scored === true;
          }
        });
      } else if (e.keyCode === 74) {
        document.getElementById('a4').cloneNode(true).play();
        this.notes.forEach((note) => {
          if (note.isCollidedWith() && note.key === "j" && note.scored === false) {
            this.counter[0].incrementCounter();
            note.scored === true;
          }
        });
      } else if (e.keyCode === 75) {
        document.getElementById('b4').cloneNode(true).play();
        this.notes.forEach((note) => {
          if (note.isCollidedWith() && note.key === "k" && note.scored === false) {
            this.counter[0].incrementCounter();
            note.scored === true;
          }
        });
      } else if (e.keyCode === 76) {
        document.getElementById('c5').cloneNode(true).play();
        this.notes.forEach((note) => {
          if (note.isCollidedWith() && note.key === "l" && note.scored === false) {
            this.counter[0].incrementCounter();
            note.scored === true;
          }
        });
      }
    });
  }

  registerClickListeners() {
    document.getElementById("play-mary").addEventListener("click", this.playMary);
  }

  playMary() {
    const keyWidth = this.playAreaWidth / 8;
    this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, 0], color: "yellow" }));
    this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -100], color: "yellow" }));
    this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 3, -200], color: "yellow"}));
    this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -300], color: "yellow"}));
    this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -400], color: "yellow"}));
    this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -500], color: "yellow"}));
    this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -600], color: "yellow"}));
    this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -800], color: "yellow"}));
    this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -900], color: "yellow"}));
    this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -1000], color: "yellow"}));
    this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -1200], color: "yellow"}));
    this.add(new Note({ game: this, key: "l", vel: 3, pos: [keyWidth * 7, -1300], color: "yellow"}));
    this.add(new Note({ game: this, key: "l", vel: 3, pos: [keyWidth * 7, -1400], color: "yellow"}));
    this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -1600], color: "yellow"}));
    this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -1700], color: "yellow"}));
    this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 3, -1800], color: "yellow"}));
    this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -1900], color: "yellow"}));
    this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -2000], color: "yellow"}));
    this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -2100], color: "yellow"}));
    this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -2200], color: "yellow"}));
    this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -2400], color: "yellow"}));
    this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -2500], color: "yellow"}));
    this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -2600], color: "yellow"}));
    this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -2700], color: "yellow"}));
    this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 3, -2800], color: "yellow"}));
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
