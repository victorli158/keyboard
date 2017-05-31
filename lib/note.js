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
    ctx.fillRect(this.pos[0], this.pos[1], window.innerWidth * 0.75 / 8, 10);
  }

  remove() {
    this.game.remove(this);
  }

  isCollidedWith() {
    if (this.game.line[0].pos[1] < this.pos[1] &&
        this.game.line[0].pos[1] + 20 > this.pos[1]) {
      return true;
    } else {
      return false;
    }
  }

  move(timeDelta) {
    const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
      offsetY = this.vel * velocityScale;

    this.pos = [this.pos[0], this.pos[1] + offsetY];
  }

}

const NORMAL_FRAME_TIME_DELTA = 1000/60;

module.exports = Note;
