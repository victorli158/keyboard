class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.notes = this.game.notes;
  }

  start() {
    this.lastTime = 0;
    this.game.registerKeyListeners();
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    const timeDelta = time - this.lastTime;
    this.game.notes.forEach((note) => {
      note.isCollidedWith();
    });
    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;
    requestAnimationFrame(this.animate.bind(this));
  }
}

module.exports = GameView;
