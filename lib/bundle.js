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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const Util = {
  // Normalize the length of the vector to 1, maintaining direction.
  dir (vec) {
    const norm = Util.norm(vec);
    return Util.scale(vec, 1 / norm);
  },
  // Find distance between two points.
  dist (pos1, pos2) {
    return Math.sqrt(
      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
    );
  },
  // Find the length of the vector.
  norm (vec) {
    return Util.dist([0, 0], vec);
  },
  // Return a randomly oriented vector with the given length.
  randomVec (length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  // Scale the length of a vector by the given amount.
  scale (vec, m) {
    return [vec[0] * m, vec[1] * m];
  },

  wrap (coord, max) {
    if (coord < 0) {
      return max - (coord % max);
    } else if (coord > max) {
      return coord % max;
    } else {
      return coord;
    }
  }
};

module.exports = Util;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Note = __webpack_require__(7);
const Line = __webpack_require__(6);
const Util = __webpack_require__(0);
const Key = __webpack_require__(4);
const Counter = __webpack_require__(3);

class Game {
  constructor() {
    this.notes = [];
    this.line = [];
    this.counter = [];
    this.keys = [];
    this.playAreaWidth = window.innerWidth * 0.75;
    this.add(new Line({ game: this }));
    this.add(new Counter({ game: this }));
    this.addKeys();
    this.playMary = this.playMary.bind(this);
    this.playMia = this.playMia.bind(this);
    this.regKeyListeners = this.regKeyListeners.bind(this);
    this.removeKeyListeners = this.removeKeyListeners.bind(this);
  }

  regKeyListeners(e) {
    e.preventDefault();
    if (e.keyCode === 83) {
      document.getElementById('c4').cloneNode(true).play();
      this.notes.forEach((note) => {
        if (note.isCollidedWith() && note.key === "s") {
          this.counter[0].incrementCounter();
        }
      });
    } else if (e.keyCode === 68) {
      document.getElementById('d4').cloneNode(true).play();
      this.notes.forEach((note) => {
        if (note.isCollidedWith() && note.key === "d") {
          this.counter[0].incrementCounter();
        }
      });
    } else if (e.keyCode === 70) {
      document.getElementById('e4').cloneNode(true).play();
      this.notes.forEach((note) => {
        if (note.isCollidedWith() && note.key === "f") {
          this.counter[0].incrementCounter();
        }
      });
    } else if (e.keyCode === 71) {
      document.getElementById('f4').cloneNode(true).play();
      this.notes.forEach((note) => {
        if (note.isCollidedWith() && note.key === "g") {
          this.counter[0].incrementCounter();
        }
      });
    } else if (e.keyCode === 72) {
      document.getElementById('g4').cloneNode(true).play();
      this.notes.forEach((note) => {
        if (note.isCollidedWith() && note.key === "h") {
          this.counter[0].incrementCounter();
        }
      });
    } else if (e.keyCode === 74) {
      document.getElementById('a4').cloneNode(true).play();
      this.notes.forEach((note) => {
        if (note.isCollidedWith() && note.key === "j") {
          this.counter[0].incrementCounter();
        }
      });
    } else if (e.keyCode === 75) {
      document.getElementById('b4').cloneNode(true).play();
      this.notes.forEach((note) => {
        if (note.isCollidedWith() && note.key === "k") {
          this.counter[0].incrementCounter();
        }
      });
    } else if (e.keyCode === 76) {
      document.getElementById('c5').cloneNode(true).play();
      this.notes.forEach((note) => {
        if (note.isCollidedWith() && note.key === "l") {
          this.counter[0].incrementCounter();
        }
      });
    }
  }

  registerKeyListeners() {
    window.addEventListener('keydown', this.regKeyListeners);
  }

  removeKeyListeners() {
    window.removeEventListener('keydown', this.regKeyListeners);
  }

  registerMiaListeners() {
    this.removeKeyListeners();
    window.addEventListener('keydown', e => {
      e.preventDefault();
      if (e.keyCode === 83) {
        this.notes.forEach((note) => {
          if (note.isInRange() && note.key === "s") {
            document.getElementById(`${note.tone}`).cloneNode(true).play();
          }
          if (note.isCollidedWith() && note.key === "s") {
            this.counter[0].incrementCounter();
          }
        });
      } else if (e.keyCode === 68) {
        this.notes.forEach((note) => {
          if (note.isInRange() && note.key === "d") {
            document.getElementById(`${note.tone}`).cloneNode(true).play();
          }
          if (note.isCollidedWith() && note.key === "d") {
            this.counter[0].incrementCounter();
          }
        });
      } else if (e.keyCode === 70) {
        this.notes.forEach((note) => {
          if (note.isInRange() && note.key === "f") {
            document.getElementById(`${note.tone}`).cloneNode(true).play();
          }
          if (note.isCollidedWith() && note.key === "f") {
            this.counter[0].incrementCounter();
          }
        });
      } else if (e.keyCode === 71) {
        this.notes.forEach((note) => {
          if (note.isInRange() && note.key === "g") {
            document.getElementById(`${note.tone}`).cloneNode(true).play();
          }
          if (note.isCollidedWith() && note.key === "g") {
            this.counter[0].incrementCounter();
          }
        });
      } else if (e.keyCode === 72) {
        this.notes.forEach((note) => {
          if (note.isInRange() && note.key === "h") {
            document.getElementById(`${note.tone}`).cloneNode(true).play();
          }
          if (note.isCollidedWith() && note.key === "h") {
            this.counter[0].incrementCounter();
          }
        });
      } else if (e.keyCode === 74) {
        this.notes.forEach((note) => {
          if (note.isInRange() && note.key === "j") {
            document.getElementById(`${note.tone}`).cloneNode(true).play();
          }
          if (note.isCollidedWith() && note.key === "j") {
            this.counter[0].incrementCounter();
          }
        });
      } else if (e.keyCode === 75) {
        this.notes.forEach((note) => {
          if (note.isInRange() && note.key === "k") {
            document.getElementById(`${note.tone}`).cloneNode(true).play();
          }
          if (note.isCollidedWith() && note.key === "k") {
            this.counter[0].incrementCounter();
          }
        });
      } else if (e.keyCode === 76) {
        this.notes.forEach((note) => {
          if (note.isInRange() && note.key === "l") {
            document.getElementById(`${note.tone}`).cloneNode(true).play();
          }
          if (note.isCollidedWith() && note.key === "l") {
            this.counter[0].incrementCounter();
          }
        });
      }
    });
  }

  registerClickListeners() {
    document.getElementById("play-mary").addEventListener("click", this.playMary);
    document.getElementById("play-mia").addEventListener("click", this.playMia);
  }

  playMary() {
    const keyWidth = this.playAreaWidth / 8;
    this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -200], color: "yellow" }));
    this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -300], color: "yellow" }));
    this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 3, -400], color: "yellow"}));
    this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -500], color: "yellow"}));
    this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -600], color: "yellow"}));
    this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -700], color: "yellow"}));
    this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -800], color: "yellow"}));
    this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -1000], color: "yellow"}));
    this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -1100], color: "yellow"}));
    this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -1200], color: "yellow"}));
    this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -1400], color: "yellow"}));
    this.add(new Note({ game: this, key: "l", vel: 3, pos: [keyWidth * 7, -1500], color: "yellow"}));
    this.add(new Note({ game: this, key: "l", vel: 3, pos: [keyWidth * 7, -1600], color: "yellow"}));
    this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -1800], color: "yellow"}));
    this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -1900], color: "yellow"}));
    this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 3, -2000], color: "yellow"}));
    this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -2100], color: "yellow"}));
    this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -2200], color: "yellow"}));
    this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -2300], color: "yellow"}));
    this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -2400], color: "yellow"}));
    this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -2600], color: "yellow"}));
    this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -2700], color: "yellow"}));
    this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -2800], color: "yellow"}));
    this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -2900], color: "yellow"}));
    this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 3, -3000], color: "yellow"}));
  }

  playMia() {
    const keyWidth = this.playAreaWidth / 8;
    this.registerMiaListeners();
    this.add(new Note({ game: this, key: "s", vel: 5, pos: [0, -200], color: "orange", tone: "c4#"}));
    this.add(new Note({ game: this, key: "f", vel: 5, pos: [keyWidth * 2, -300], color: "orange", tone: "f4#"}));
    this.add(new Note({ game: this, key: "g", vel: 5, pos: [keyWidth * 3, -400], color: "orange", tone: "g4#"}));
    this.add(new Note({ game: this, key: "h", vel: 5, pos: [keyWidth * 4, -500], color: "orange", tone: "a4"}));
    this.add(new Note({ game: this, key: "g", vel: 5, pos: [keyWidth * 3, -600], color: "orange", tone: "g4#"}));
    this.add(new Note({ game: this, key: "f", vel: 5, pos: [keyWidth * 2, -700], color: "orange", tone: "f4#"}));
    this.add(new Note({ game: this, key: "d", vel: 5, pos: [keyWidth, -800], color: "orange", tone: "d4"}));
    this.add(new Note({ game: this, key: "d", vel: 5, pos: [keyWidth, -1400], color: "orange", tone: "d4"}));
    this.add(new Note({ game: this, key: "f", vel: 5, pos: [keyWidth * 2, -1500], color: "orange", tone: "f4#"}));
    this.add(new Note({ game: this, key: "g", vel: 5, pos: [keyWidth * 3, -1600], color: "orange", tone: "g4#"}));
    this.add(new Note({ game: this, key: "h", vel: 5, pos: [keyWidth * 4, -1700], color: "orange", tone: "a4"}));
    this.add(new Note({ game: this, key: "g", vel: 5, pos: [keyWidth * 3, -1800], color: "orange", tone: "g4#"}));
    this.add(new Note({ game: this, key: "f", vel: 5, pos: [keyWidth * 2, -1900], color: "orange", tone: "f4#"}));
    this.add(new Note({ game: this, key: "s", vel: 5, pos: [0, -2000], color: "orange", tone: "c4#"}));
    this.add(new Note({ game: this, key: "s", vel: 5, pos: [0, -2600], color: "orange", tone: "c4#"}));
    this.add(new Note({ game: this, key: "f", vel: 5, pos: [keyWidth * 2, -2700], color: "orange", tone: "f4#"}));
    this.add(new Note({ game: this, key: "g", vel: 5, pos: [keyWidth * 3, -2800], color: "orange", tone: "g4#"}));
    this.add(new Note({ game: this, key: "h", vel: 5, pos: [keyWidth * 4, -2900], color: "orange", tone: "a4"}));
    this.add(new Note({ game: this, key: "g", vel: 5, pos: [keyWidth * 3, -3000], color: "orange", tone: "g4#"}));
    this.add(new Note({ game: this, key: "f", vel: 5, pos: [keyWidth * 2, -3100], color: "orange", tone: "f4#"}));
    this.add(new Note({ game: this, key: "d", vel: 5, pos: [keyWidth, -3200], color: "orange", tone: "d4"}));
    this.add(new Note({ game: this, key: "j", vel: 5, pos: [keyWidth * 5, -3800], color: "orange", tone: "b4"}));
    this.add(new Note({ game: this, key: "h", vel: 5, pos: [keyWidth * 4, -3900], color: "orange", tone: "a4"}));
    this.add(new Note({ game: this, key: "g", vel: 5, pos: [keyWidth * 3, -4000], color: "orange", tone: "g4#"}));
    this.add(new Note({ game: this, key: "h", vel: 5, pos: [keyWidth * 4, -4100], color: "orange", tone: "a4"}));
    this.add(new Note({ game: this, key: "g", vel: 5, pos: [keyWidth * 3, -4200], color: "orange", tone: "g4#"}));
    this.add(new Note({ game: this, key: "f", vel: 5, pos: [keyWidth * 2, -4300], color: "orange", tone: "f4#"}));
    this.add(new Note({ game: this, key: "s", vel: 5, pos: [0, -4400], color: "orange", tone: "c4#"}));
    this.add(new Note({ game: this, key: "k", vel: 5, pos: [keyWidth * 6, -5000], color: "orange", tone: "d5"}));
    this.add(new Note({ game: this, key: "j", vel: 5, pos: [keyWidth * 5, -5100], color: "orange", tone: "c5#"}));
    this.add(new Note({ game: this, key: "h", vel: 5, pos: [keyWidth * 4, -5200], color: "orange", tone: "b4"}));
    this.add(new Note({ game: this, key: "j", vel: 5, pos: [keyWidth * 5, -5300], color: "orange", tone: "c5#"}));
    this.add(new Note({ game: this, key: "h", vel: 5, pos: [keyWidth * 4, -5400], color: "orange", tone: "b4"}));
    this.add(new Note({ game: this, key: "g", vel: 5, pos: [keyWidth * 3, -5500], color: "orange", tone: "a4"}));
    this.add(new Note({ game: this, key: "d", vel: 5, pos: [keyWidth, -5600], color: "orange", tone: "f4#"}));
    this.add(new Note({ game: this, key: "f", vel: 5, pos: [keyWidth * 2, -6000], color: "orange", tone: "g4#"}));
    this.add(new Note({ game: this, key: "j", vel: 5, pos: [keyWidth * 5, -6200], color: "orange", tone: "c5#"}));
    this.add(new Note({ game: this, key: "h", vel: 5, pos: [keyWidth * 4, -6300], color: "orange", tone: "b4"}));
    this.add(new Note({ game: this, key: "g", vel: 5, pos: [keyWidth * 3, -6400], color: "orange", tone: "a4"}));
    this.add(new Note({ game: this, key: "h", vel: 5, pos: [keyWidth * 4, -6500], color: "orange", tone: "b4"}));
    this.add(new Note({ game: this, key: "g", vel: 5, pos: [keyWidth * 3, -6600], color: "orange", tone: "a4"}));
    this.add(new Note({ game: this, key: "f", vel: 5, pos: [keyWidth * 2, -6700], color: "orange", tone: "g4#"}));
    this.add(new Note({ game: this, key: "d", vel: 5, pos: [keyWidth * 1, -6800], color: "orange", tone: "f4#"}));
    this.add(new Note({ game: this, key: "k", vel: 5, pos: [keyWidth * 6, -7400], color: "orange", tone: "d5"}));
    this.add(new Note({ game: this, key: "j", vel: 5, pos: [keyWidth * 5, -7500], color: "orange", tone: "c5#"}));
    this.add(new Note({ game: this, key: "h", vel: 5, pos: [keyWidth * 4, -7600], color: "orange", tone: "b4"}));
    this.add(new Note({ game: this, key: "j", vel: 5, pos: [keyWidth * 5, -7700], color: "orange", tone: "c5#"}));
    this.add(new Note({ game: this, key: "h", vel: 5, pos: [keyWidth * 4, -7800], color: "orange", tone: "b4"}));
    this.add(new Note({ game: this, key: "g", vel: 5, pos: [keyWidth * 3, -7900], color: "orange", tone: "a4"}));
    this.add(new Note({ game: this, key: "d", vel: 5, pos: [keyWidth, -8000], color: "orange", tone: "f4#"}));
    this.add(new Note({ game: this, key: "f", vel: 5, pos: [keyWidth * 2, -8400], color: "orange", tone: "g4#"}));
    this.add(new Note({ game: this, key: "j", vel: 5, pos: [keyWidth * 5, -8600], color: "orange", tone: "c5#"}));
    this.add(new Note({ game: this, key: "k", vel: 5, pos: [keyWidth * 6, -9200], color: "orange", tone: "f5#"}));
    this.add(new Note({ game: this, key: "j", vel: 5, pos: [keyWidth * 5, -9300], color: "orange", tone: "e5"}));
    this.add(new Note({ game: this, key: "h", vel: 5, pos: [keyWidth * 4, -9400], color: "orange", tone: "d5"}));
    this.add(new Note({ game: this, key: "j", vel: 5, pos: [keyWidth * 5, -9500], color: "orange", tone: "e5"}));
    this.add(new Note({ game: this, key: "h", vel: 5, pos: [keyWidth * 4, -9600], color: "orange", tone: "d5"}));
    this.add(new Note({ game: this, key: "g", vel: 5, pos: [keyWidth * 3, -9700], color: "orange", tone: "c5#"}));
    this.add(new Note({ game: this, key: "d", vel: 5, pos: [keyWidth, -9800], color: "orange", tone: "b4"}));
    this.add(new Note({ game: this, key: "l", vel: 5, pos: [keyWidth * 7, -10400], color: "orange", tone: "g5#"}));
    this.add(new Note({ game: this, key: "k", vel: 5, pos: [keyWidth * 6, -10500], color: "orange", tone: "f5#"}));
    this.add(new Note({ game: this, key: "j", vel: 5, pos: [keyWidth * 5, -10600], color: "orange", tone: "f5"}));
    this.add(new Note({ game: this, key: "h", vel: 5, pos: [keyWidth * 4, -10700], color: "orange", tone: "d5"}));
    this.add(new Note({ game: this, key: "g", vel: 5, pos: [keyWidth * 3, -10800], color: "orange", tone: "c5#"}));
    this.add(new Note({ game: this, key: "f", vel: 5, pos: [keyWidth * 2, -10900], color: "orange", tone: "b4"}));
    this.add(new Note({ game: this, key: "d", vel: 5, pos: [keyWidth, -11000], color: "orange", tone: "a4"}));
    this.add(new Note({ game: this, key: "s", vel: 5, pos: [0, -11600], color: "orange", tone: "f4#"}));
    this.add(new Note({ game: this, key: "d", vel: 5, pos: [keyWidth, -11700], color: "orange", tone: "g4#"}));
    this.add(new Note({ game: this, key: "s", vel: 5, pos: [0, -11800], color: "orange", tone: "f4#"}));
    this.add(new Note({ game: this, key: "d", vel: 5, pos: [keyWidth, -11900], color: "orange", tone: "g4#"}));
    this.add(new Note({ game: this, key: "f", vel: 5, pos: [keyWidth * 2, -12000], color: "orange", tone: "a4"}));
    this.add(new Note({ game: this, key: "s", vel: 5, pos: [0, -12200], color: "orange", tone: "f4#"}));
    this.add(new Note({ game: this, key: "d", vel: 5, pos: [keyWidth, -12300], color: "orange", tone: "g4#"}));
    this.add(new Note({ game: this, key: "s", vel: 5, pos: [0, -12400], color: "orange", tone: "f4#"}));
    this.add(new Note({ game: this, key: "d", vel: 5, pos: [keyWidth, -12500], color: "orange", tone: "g4#"}));
    this.add(new Note({ game: this, key: "f", vel: 5, pos: [keyWidth * 2, -12600], color: "orange", tone: "a4"}));
    this.add(new Note({ game: this, key: "s", vel: 5, pos: [0, -12800], color: "orange", tone: "f4#"}));
    this.add(new Note({ game: this, key: "d", vel: 5, pos: [keyWidth, -12900], color: "orange", tone: "g4#"}));
    this.add(new Note({ game: this, key: "s", vel: 5, pos: [0, -13000], color: "orange", tone: "f4#"}));
    this.add(new Note({ game: this, key: "d", vel: 5, pos: [keyWidth, -13100], color: "orange", tone: "g4#"}));
    this.add(new Note({ game: this, key: "f", vel: 5, pos: [keyWidth * 2, -13200], color: "orange", tone: "a4"}));
    this.add(new Note({ game: this, key: "s", vel: 5, pos: [0, -13300], color: "orange", tone: "f4#"}));
    this.add(new Note({ game: this, key: "g", vel: 5, pos: [keyWidth * 3, -13400], color: "orange", tone: "b4"}));
  }

  add(object) {
    if (object instanceof Note) {
      this.notes.push(object);
    } else if (object instanceof Line) {
      this.line.push(object);
    } else if (object instanceof Key) {
      this.keys.push(object);
    } else if (object instanceof Counter) {
      this.counter.push(object);
    }
  }

  addKeys() {
    let keys = ["S", "D", "F", "G", "H", "J", "K", "L"];
    for (let i = 0; i < 8; i++) {
      this.add(new Key({ game: this, key: keys[i], pos: [this.playAreaWidth / 8 * i, window.innerHeight * 0.7]}));
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
Game.DIM_X = window.innerWidth;
Game.DIM_Y = window.innerHeight;
Game.FPS = 32;

module.exports = Game;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.notes = this.game.notes;
  }

  start() {
    this.lastTime = 0;
    this.game.registerKeyListeners();
    this.game.registerClickListeners();
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


/***/ }),
/* 3 */
/***/ (function(module, exports) {

class Counter {
  constructor(options) {
    this.game = options.game;
  }

  incrementCounter() {
    let counter = document.getElementById('counter').value;
    counter = parseInt(counter) + 1;
    document.getElementById('counter').value = counter;
    return counter;
  }
}

module.exports = Counter;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

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
    ctx.fillStyle = "#000000";
    ctx.fillText(this.key, this.pos[0] + window.innerWidth * 0.035, (this.pos[1] + window.innerHeight * 0.175));
  }
}

module.exports = Key;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const Game = __webpack_require__(1);
const GameView = __webpack_require__(2);

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y;

  const ctx = canvasEl.getContext("2d");
  const game = new Game();
  new GameView(game, ctx).start();
});


/***/ }),
/* 6 */
/***/ (function(module, exports) {

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


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

const Util = __webpack_require__(0);

class Note {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.key = options.key;
    this.game = options.game;
    this.color = options.color;
    this.tone = options.tone;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos[0], this.pos[1], window.innerWidth * 0.75 / 8, 10);
  }

  remove() {
    this.game.remove(this);
  }

  isCollidedWith() {
    if (this.game.line[0].pos[1] - 30 < this.pos[1] &&
        this.game.line[0].pos[1] + 30 > this.pos[1]) {
      return true;
    } else {
      return false;
    }
  }

  isInRange() {
    if (this.game.line[0].pos[1] - 150 < this.pos[1] &&
        this.game.line[0].pos[1] + 150 < this.pos[1]) {
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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map