class Key {
  constructor(options) {
    this.key = options.key;
    this.pos = options.pos;
    this.game = options.game;
  }

  draw(ctx) {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(this.pos[0], this.pos[1], (window.innerWidth * 0.75 / 8),(window.innerHeight * 0.3));
    ctx.font = "48px sans-serif";
    ctx.strokeText(this.key, this.pos[0] + 50, (this.pos[1] + 100));
  }
}

module.exports = Key;
