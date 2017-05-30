class Note {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.key = options.key;
    this.game = options.game;
    this.color = options.color;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(10, 10, 40, 10);
  }

  move() {
    this.pos[1] -= this.vel;
  }

  remove() {
    this.game.remove(this);
  }

  isCollidedWith(line) {
  }
}

module.exports = Note;
