/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Note = __webpack_require__(2);
const Line = __webpack_require__(4);

class Game {
  constructor() {
    this.notes = [];
    this.line = [];
    this.keys = [];

    this.add(new Note({ game: this, vel: 10, pos: [10, 10], color: "purple" }));
    this.add(new Line({ game: this }));
  }

  add(object) {
    if (object instanceof Note) {
      this.notes.push(object);
    } else if (object instanceof Line) {
    this.line.push(object);
    }
  }

  allObjects() {
    return [].concat(this.notes, this.line, this.keys);
  }

  checkCollisions() {

  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.allObjects().forEach((object) => {
      object.draw(ctx);
    });
  }

  moveNotes(delta) {
    this.notes.forEach((note) => {
      note.move(delta);
    });
  }

  remove(note) {
    this.notes.splice(this.notes.indexOf(note), 1);
  }

  step(delta) {
    this.moveNotes(delta);
    this.checkCollisions();
  }

}

Game.BG_COLOR = "#000000";
Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.FPS = 32;

module.exports = Game;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Game = __webpack_require__(0);
const GameView = __webpack_require__(3);

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y;

  const ctx = canvasEl.getContext("2d");
  const game = new Game();
  new GameView(game, ctx).start();
});


/***/ }),
/* 2 */
/***/ (function(module, exports) {

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
    ctx.fillRect(10, 10, 40, 10);
  }

  move() {
    this.pos[1] -= this.vel;
  }

  remove() {
    this.game.remove(this);
  }

  isCollidedWith(line) {
  }
}

module.exports = Note;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
  }

  bindKeyHandlers() {

  }

  start() {
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;
    requestAnimationFrame(this.animate.bind(this));
  }
}

module.exports = GameView;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

class Line {
  constructor(options) {
    this.game = options.game;
    this.pos = [0, 400];
  }

  draw(ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(0, 400, 1000, 10);
  }
}

module.exports = Line;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map