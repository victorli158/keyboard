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
    this.toggleKeys = this.toggleKeys.bind(this);
    this.regKeyListeners = this.regKeyListeners.bind(this);
    this.regKeyUpListeners = this.regKeyUpListeners.bind(this);
    this.removeKeyListeners = this.removeKeyListeners.bind(this);
    // this.changeYellow = this.changeYellow.bind(this);
    // this.changeOrange = this.changeOrange.bind(this);
  }

  regKeyListeners(e) {
    e.preventDefault();
    if (e.keyCode === 83) {
      document.getElementById('c4').cloneNode(true).play();
      this.keys[0].color = "#e6e6e6";
      this.notes.forEach((note) => {
        if (note.isCollidedWith() && note.key === "s") {
          this.counter[0].incrementCounter();
        }
      });
    } else if (e.keyCode === 68) {
      document.getElementById('d4').cloneNode(true).play();
      this.keys[1].color = "#e6e6e6";
      this.notes.forEach((note) => {
        if (note.isCollidedWith() && note.key === "d") {
          this.counter[0].incrementCounter();
        }
      });
    } else if (e.keyCode === 70) {
      document.getElementById('e4').cloneNode(true).play();
      this.keys[2].color = "#e6e6e6";
      this.notes.forEach((note) => {
        if (note.isCollidedWith() && note.key === "f") {
          this.counter[0].incrementCounter();
        }
      });
    } else if (e.keyCode === 71) {
      document.getElementById('f4').cloneNode(true).play();
      this.keys[3].color = "#e6e6e6";
      this.notes.forEach((note) => {
        if (note.isCollidedWith() && note.key === "g") {
          this.counter[0].incrementCounter();
        }
      });
    } else if (e.keyCode === 72) {
      document.getElementById('g4').cloneNode(true).play();
      this.keys[4].color = "#e6e6e6";
      this.notes.forEach((note) => {
        if (note.isCollidedWith() && note.key === "h") {
          this.counter[0].incrementCounter();
        }
      });
    } else if (e.keyCode === 74) {
      document.getElementById('a4').cloneNode(true).play();
      this.keys[5].color = "#e6e6e6";
      this.notes.forEach((note) => {
        if (note.isCollidedWith() && note.key === "j") {
          this.counter[0].incrementCounter();
        }
      });
    } else if (e.keyCode === 75) {
      document.getElementById('b4').cloneNode(true).play();
      this.keys[6].color = "#e6e6e6";
      this.notes.forEach((note) => {
        if (note.isCollidedWith() && note.key === "k") {
          this.counter[0].incrementCounter();
        }
      });
    } else if (e.keyCode === 76) {
      document.getElementById('c5').cloneNode(true).play();
      this.keys[7].color = "#e6e6e6";
      this.notes.forEach((note) => {
        if (note.isCollidedWith() && note.key === "l") {
          this.counter[0].incrementCounter();
        }
      });
    }
  }

  regKeyUpListeners(e) {
    if (e.keyCode === 83) {
      this.keys[0].color = "white";
    } else if (e.keyCode === 68) {
      this.keys[1].color = "white";
    } else if (e.keyCode === 70) {
      this.keys[2].color = "white";
    } else if (e.keyCode === 71) {
      this.keys[3].color = "white";
    } else if (e.keyCode === 72) {
      this.keys[4].color = "white";
    } else if (e.keyCode === 74) {
      this.keys[5].color = "white";
    } else if (e.keyCode === 75) {
      this.keys[6].color = "white";
    } else if (e.keyCode === 76) {
      this.keys[7].color = "white";
    }
  }

  registerKeyListeners() {
    window.addEventListener('keydown', this.regKeyListeners);
    window.addEventListener('keyup', this.regKeyUpListeners);
  }

  removeKeyListeners() {
    window.removeEventListener('keydown', this.regKeyListeners);
  }

  registerMiaListeners() {
    this.removeKeyListeners();
    window.addEventListener('keydown', e => {
      e.preventDefault();
      if (e.keyCode === 83) {
        this.keys[0].color = "#e6e6e6";
        this.notes.forEach((note) => {
          if (note.isInRange() && note.key === "s") {
            document.getElementById(`${note.tone}`).cloneNode(true).play();
          }
          if (note.isCollidedWith() && note.key === "s") {
            this.counter[0].incrementCounter();
          }
        });
      } else if (e.keyCode === 68) {
        this.keys[1].color = "#e6e6e6";
        this.notes.forEach((note) => {
          if (note.isInRange() && note.key === "d") {
            document.getElementById(`${note.tone}`).cloneNode(true).play();
          }
          if (note.isCollidedWith() && note.key === "d") {
            this.counter[0].incrementCounter();
          }
        });
      } else if (e.keyCode === 70) {
        this.keys[2].color = "#e6e6e6";
        this.notes.forEach((note) => {
          if (note.isInRange() && note.key === "f") {
            document.getElementById(`${note.tone}`).cloneNode(true).play();
          }
          if (note.isCollidedWith() && note.key === "f") {
            this.counter[0].incrementCounter();
          }
        });
      } else if (e.keyCode === 71) {
        this.keys[3].color = "#e6e6e6";
        this.notes.forEach((note) => {
          if (note.isInRange() && note.key === "g") {
            document.getElementById(`${note.tone}`).cloneNode(true).play();
          }
          if (note.isCollidedWith() && note.key === "g") {
            this.counter[0].incrementCounter();
          }
        });
      } else if (e.keyCode === 72) {
        this.keys[4].color = "#e6e6e6";
        this.notes.forEach((note) => {
          if (note.isInRange() && note.key === "h") {
            document.getElementById(`${note.tone}`).cloneNode(true).play();
          }
          if (note.isCollidedWith() && note.key === "h") {
            this.counter[0].incrementCounter();
          }
        });
      } else if (e.keyCode === 74) {
        this.keys[5].color = "#e6e6e6";
        this.notes.forEach((note) => {
          if (note.isInRange() && note.key === "j") {
            document.getElementById(`${note.tone}`).cloneNode(true).play();
          }
          if (note.isCollidedWith() && note.key === "j") {
            this.counter[0].incrementCounter();
          }
        });
      } else if (e.keyCode === 75) {
        this.keys[6].color = "#e6e6e6";
        this.notes.forEach((note) => {
          if (note.isInRange() && note.key === "k") {
            document.getElementById(`${note.tone}`).cloneNode(true).play();
          }
          if (note.isCollidedWith() && note.key === "k") {
            this.counter[0].incrementCounter();
          }
        });
      } else if (e.keyCode === 76) {
        this.keys[7].color = "#e6e6e6";
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
    document.getElementById("toggle").addEventListener("click", this.toggleKeys);
  }

  toggleKeys() {
    this.keys.forEach((key) => {
      if (key.toggled === true) {
        key.toggled = false;
      } else {
        key.toggled = true;
      }
    });
  }

  playMary() {
    const keyWidth = this.playAreaWidth / 8;
    if (this.notes.length === 0) {
      document.getElementById("play-mary").style.color = "yellow";
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
  }

  playMia() {
    const keyWidth = this.playAreaWidth / 8;
    if (this.notes.length === 0) {
      document.getElementById("play-mia").style.color = "orange";
      document.getElementById("toggle").removeEventListener("click", this.toggleKeys);
      this.keys.forEach((key) => {
        key.toggled = true;
      });
      this.registerMiaListeners();
      this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -200], color: "orange", tone: "c4#"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 2, -275], color: "orange", tone: "f4#"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 3, -350], color: "orange", tone: "g4#"}));
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -425], color: "orange", tone: "a4"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 3, -500], color: "orange", tone: "g4#"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 2, -575], color: "orange", tone: "f4#"}));
      this.add(new Note({ game: this, key: "d", vel: 3, pos: [keyWidth, -650], color: "orange", tone: "d4"}));
      // measure
      this.add(new Note({ game: this, key: "d", vel: 3, pos: [keyWidth, -1100], color: "orange", tone: "d4"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 2, -1175], color: "orange", tone: "f4#"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 3, -1250], color: "orange", tone: "g4#"}));
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -1325], color: "orange", tone: "a4"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 3, -1400], color: "orange", tone: "g4#"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 2, -1475], color: "orange", tone: "f4#"}));
      this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -1550], color: "orange", tone: "c4#"}));
      // measure
      this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -2000], color: "orange", tone: "c4#"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 2, -2075], color: "orange", tone: "f4#"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 3, -2150], color: "orange", tone: "g4#"}));
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -2225], color: "orange", tone: "a4"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 3, -2300], color: "orange", tone: "g4#"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 2, -2375], color: "orange", tone: "f4#"}));
      this.add(new Note({ game: this, key: "d", vel: 3, pos: [keyWidth, -2450], color: "orange", tone: "d4"}));
      // measure
      this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -2900], color: "orange", tone: "b4"}));
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -2975], color: "orange", tone: "a4"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 3, -3050], color: "orange", tone: "g4#"}));
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -3125], color: "orange", tone: "a4"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 3, -3200], color: "orange", tone: "g4#"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 2, -3275], color: "orange", tone: "f4#"}));
      this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -3350], color: "orange", tone: "c4#"}));
      // measure
      this.add(new Note({ game: this, key: "k", vel: 3, pos: [keyWidth * 6, -3800], color: "orange", tone: "d5"}));
      this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -3875], color: "orange", tone: "c5#"}));
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -3950], color: "orange", tone: "b4"}));
      this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -4025], color: "orange", tone: "c5#"}));
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -4100], color: "orange", tone: "b4"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 3, -4175], color: "orange", tone: "a4"}));
      this.add(new Note({ game: this, key: "d", vel: 3, pos: [keyWidth, -4250], color: "orange", tone: "f4#"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 2, -4550], color: "orange", tone: "g4#"}));
      // measure
      this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -4700], color: "orange", tone: "c5#"}));
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -4775], color: "orange", tone: "b4"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 3, -4850], color: "orange", tone: "a4"}));
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -4925], color: "orange", tone: "b4"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 3, -5000], color: "orange", tone: "a4"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 2, -5075], color: "orange", tone: "g4#"}));
      this.add(new Note({ game: this, key: "d", vel: 3, pos: [keyWidth * 1, -5150], color: "orange", tone: "f4#"}));
      // measure
      this.add(new Note({ game: this, key: "k", vel: 3, pos: [keyWidth * 6, -5600], color: "orange", tone: "d5"}));
      this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -5675], color: "orange", tone: "c5#"}));
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -5750], color: "orange", tone: "b4"}));
      this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -5825], color: "orange", tone: "c5#"}));
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -5900], color: "orange", tone: "b4"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 3, -5975], color: "orange", tone: "a4"}));
      this.add(new Note({ game: this, key: "d", vel: 3, pos: [keyWidth, -6050], color: "orange", tone: "f4#"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 2, -6350], color: "orange", tone: "g4#"}));
      this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -6425], color: "orange", tone: "c5#"}));
      // measure
      this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -6575], color: "orange", tone: "e4"}));
      this.add(new Note({ game: this, key: "d", vel: 3, pos: [keyWidth * 1, -6725], color: "orange", tone: "f4"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 2, -6875], color: "orange", tone: "f4#"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 3, -7025], color: "orange", tone: "a4"}));
      this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -7175], color: "orange", tone: "c5#"}));
      // measure
      this.add(new Note({ game: this, key: "k", vel: 3, pos: [keyWidth * 6, -7325], color: "orange", tone: "f5#"}));
      this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -7400], color: "orange", tone: "e5"}));
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -7475], color: "orange", tone: "d5"}));
      this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -7550], color: "orange", tone: "e5"}));
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -7625], color: "orange", tone: "d5"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 3, -7700], color: "orange", tone: "c5#"}));
      this.add(new Note({ game: this, key: "d", vel: 3, pos: [keyWidth, -7775], color: "orange", tone: "b4"}));
      // measure
      this.add(new Note({ game: this, key: "l", vel: 3, pos: [keyWidth * 7, -8225], color: "orange", tone: "g5#"}));
      this.add(new Note({ game: this, key: "k", vel: 3, pos: [keyWidth * 6, -8300], color: "orange", tone: "f5#"}));
      this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 5, -8375], color: "orange", tone: "f5"}));
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 4, -8450], color: "orange", tone: "d5"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 3, -8525], color: "orange", tone: "c5#"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 2, -8600], color: "orange", tone: "b4"}));
      this.add(new Note({ game: this, key: "d", vel: 3, pos: [keyWidth, -8675], color: "orange", tone: "a4"}));
      // measure
      this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -9125], color: "orange", tone: "f4#"}));
      this.add(new Note({ game: this, key: "d", vel: 3, pos: [keyWidth, -9200], color: "orange", tone: "g4#"}));
      this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -9275], color: "orange", tone: "f4#"}));
      this.add(new Note({ game: this, key: "d", vel: 3, pos: [keyWidth, -9350], color: "orange", tone: "g4#"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 2, -9425], color: "orange", tone: "a4"}));
      this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -9575], color: "orange", tone: "f4#"}));
      this.add(new Note({ game: this, key: "d", vel: 3, pos: [keyWidth, -9650], color: "orange", tone: "g4#"}));
      this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -9725], color: "orange", tone: "f4#"}));
      this.add(new Note({ game: this, key: "d", vel: 3, pos: [keyWidth, -9800], color: "orange", tone: "g4#"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 2, -9875], color: "orange", tone: "a4"}));
      // measure
      this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -10025], color: "orange", tone: "f4#"}));
      this.add(new Note({ game: this, key: "d", vel: 3, pos: [keyWidth, -10100], color: "orange", tone: "g4#"}));
      this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -10175], color: "orange", tone: "f4#"}));
      this.add(new Note({ game: this, key: "d", vel: 3, pos: [keyWidth, -10250], color: "orange", tone: "g4#"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 2, -10325], color: "orange", tone: "a4"}));
      this.add(new Note({ game: this, key: "s", vel: 3, pos: [0, -10400], color: "orange", tone: "f4#"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 3, -10475], color: "orange", tone: "b4"}));
    }
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
    let notes = ["C", "D", "E", "F", "G", "A", "B", "C"];
    for (let i = 0; i < 8; i++) {
      this.add(new Key({ game: this, key: keys[i], toggleKey: notes[i], pos: [this.playAreaWidth / 8 * i, window.innerHeight * 0.7]}));
    }
  }

  allObjects() {
    return [].concat(this.notes, this.line, this.keys);
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
      ctx.fillText(this.key, this.pos[0] + window.innerWidth * 0.035, (this.pos[1] + window.innerHeight * 0.175));
    } else {
      ctx.fillText(this.toggleKey, this.pos[0] + window.innerWidth * 0.035, (this.pos[1] + window.innerHeight * 0.175));
    }
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
    if (this.game.line[0].pos[1] - 90 < this.pos[1] &&
        this.game.line[0].pos[1] + 90 > this.pos[1]) {
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