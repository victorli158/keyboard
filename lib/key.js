class Key {
  constructor(options) {
    this.key = options.key;
    this.pos = options.pos;
    this.game = options.game;
    this.toggleKey = options.toggleKey;
    this.toggled = true;
    this.color = "white";
  }

  draw(ctx) {
    ctx.fillStyle = `${this.color}`;
    ctx.fillRect(this.pos[0], this.pos[1], (window.innerWidth * 0.75 / 8),(window.innerHeight * 0.3));
    ctx.font = "48px sans-serif";
    ctx.fillStyle = "#000000";
    if (this.toggled === true) {
      ctx.fillText(this.key, this.pos[0] + window.innerWidth * 0.035, (this.pos[1] + window.innerHeight * 0.25));
    } else {
      ctx.fillText(this.toggleKey, this.pos[0] + window.innerWidth * 0.035, (this.pos[1] + window.innerHeight * 0.25));
    }
  }
}

module.exports = Key;
