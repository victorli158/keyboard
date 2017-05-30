const Note = require("./note");
const Line = require("./line");

class Game {
  constructor() {
    this.notes = [];
    this.line = [];
    this.keys = [];

    this.add(new Note({ game: this, vel: 10, pos: [10, 10], color: "purple" }));
    this.add(new Line({ game: this }));
  }

  add(object) {
    if (object instanceof Note) {
      this.notes.push(object);
    } else if (object instanceof Line) {
    this.line.push(object);
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
Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.FPS = 32;

module.exports = Game;
