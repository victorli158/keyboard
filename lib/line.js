class Line {
  constructor(options) {
    this.game = options.game;
    this.pos = [0, 400];
  }

  draw(ctx) {
    ctx.fillStyle = "blue";
    ctx.fillRect(0, (window.innerHeight * 0.7), (window.innerWidth * 0.75), 10);
  }
}

module.exports = Line;
