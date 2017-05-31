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

    this.add(new Note({ game: this, key: "s", vel: 2, pos: [0, 0], color: "purple" }));
    this.add(new Note({ game: this, key: "d", vel: 2, pos: [this.playAreaWidth / 8, -128], color: "purple" }));
    this.add(new Note({ game: this, key: "f", vel: 2, pos: [this.playAreaWidth / 8 * 2, -256], color: "purple"}));
    this.add(new Line({ game: this }));
    this.add(new Counter({ game: this }));
    this.addKeys();
    this.registerKeyListeners = this.registerKeyListeners.bind(this);
  }

  registerKeyListeners() {
    window.addEventListener('keydown', e => {
      e.preventDefault();
      if (e.keyCode === 83) {
        this.notes.forEach((note) => {
          if (note.isCollidedWith() && note.key === "s") {
            this.counter[0].incrementCounter();
          }
        });
      } else if (e.keyCode === 68) {
        this.notes.forEach((note) => {
          if (note.isCollidedWith() && note.key === "d") {
            this.counter[0].incrementCounter();
          }
        });
      } else if (e.keyCode === 70) {
        this.notes.forEach((note) => {
          if (note.isCollidedWith() && note.key === "f") {
            this.counter[0].incrementCounter();
          }
        });
      } else if (e.keyCode === 71) {
        this.notes.forEach((note) => {
          if (note.isCollidedWith() && note.key === "g") {
            this.counter[0].incrementCounter();
          }
        });
      } else if (e.keyCode === 72) {
        this.notes.forEach((note) => {
          if (note.isCollidedWith() && note.key === "h") {
            this.counter[0].incrementCounter();
          }
        });
      } else if (e.keyCode === 74) {
        this.notes.forEach((note) => {
          if (note.isCollidedWith() && note.key === "j") {
            this.counter[0].incrementCounter();
          }
        });
      } else if (e.keyCode === 75) {
        this.notes.forEach((note) => {
          if (note.isCollidedWith() && note.key === "k") {
            this.counter[0].incrementCounter();
          }
        });
      } else if (e.keyCode === 76) {
        this.notes.forEach((note) => {
          if (note.isCollidedWith() && note.key === "l") {
            this.counter[0].incrementCounter();
          }
        });
      }
    });
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
    for (let i = 0; i < 8; i++) {
      this.add(new Key({ game: this, pos: [this.playAreaWidth / 8 * i, window.innerHeight * 0.7]}));
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
