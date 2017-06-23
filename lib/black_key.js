class BlackKey {
  constructor(options) {
    this.pos = options.pos;
    this.game = options.game;
  }

  draw(ctx) {
    ctx.fillStyle = 'black';
    ctx.fillRect(this.pos[0], this.pos[1], (window.innerWidth * 0.75 / 16), (window.innerHeight * 0.165));
  }
}

module.exports = BlackKey;
