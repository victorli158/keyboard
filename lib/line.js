class Line {
  constructor(options) {
    this.game = options.game;
    this.pos = [0, (window.innerHeight * 0.7 - 20)];
  }

  draw(ctx) {
    ctx.fillStyle = "blue";
    ctx.fillRect(0, (window.innerHeight * 0.7 - 20), (window.innerWidth * 0.75), 20);
  }
}

module.exports = Line;
