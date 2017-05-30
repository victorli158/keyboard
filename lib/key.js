class Key {
  constructor(options) {
    this.key = options.key;
    this.pos = options.pos;
    this.game = options.game;
  }

  draw(ctx) {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(this.pos[0], this.pos[1], (window.innerWidth * 0.75 / 8),(window.innerHeight * 0.3));
  }
}

module.exports = Key;
