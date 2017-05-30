class Line {
  constructor(options) {
    this.game = options.game;
    this.pos = [0, 400];
  }

  draw(ctx) {
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 400, 1000, 10);
  }
}

module.exports = Line;
