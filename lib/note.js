const Util = require("./util");

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
    ctx.fillRect(this.pos[0], this.pos[1], 40, 10);
  }

  remove() {
    this.game.remove(this);
  }

  collideWith(line) {

  }

  isCollidedWith(line) {
    const centerDist = Util.dist(this.pos, line.pos);
  }

  move(timeDelta) {
    const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
      offsetY = this.vel * velocityScale;

    this.pos = [this.pos[0], this.pos[1] + offsetY];
  }

}

const NORMAL_FRAME_TIME_DELTA = 1000/60;

module.exports = Note;
