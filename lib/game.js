const Note = require("./note");
const Line = require("./line");
const Util = require("./util");
const Key = require("./key");
const BlackKey = require("./black_key");
const Counter = require("./counter");

class Game {
  constructor() {
    this.notes = [];
    this.line = [];
    this.counter = [];
    this.keys = [];
    this.blackKeys = [];
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
    this.regRefreshListener = this.regRefreshListener.bind(this);
  }

  regKeyListeners(e) {
    e.preventDefault();
    if (e.keyCode === 65) {
      document.getElementById('c4').cloneNode(true).play();
      this.keys[0].color = "#e6e6e6";
      this.notes.forEach((note) => {
        if (note.isCollidedWith() && note.key === "a") {
          this.counter[0].incrementCounter();
          note.remove();
          this.note.remove();
        }
      });
    } else if (e.keyCode === 83) {
      document.getElementById('d4').cloneNode(true).play();
      this.keys[1].color = "#e6e6e6";
      this.notes.forEach((note) => {
        if (note.isCollidedWith() && note.key === "s") {
          this.counter[0].incrementCounter();
          note.remove();
        }
      });
    } else if (e.keyCode === 68) {
      document.getElementById('e4').cloneNode(true).play();
      this.keys[2].color = "#e6e6e6";
      this.notes.forEach((note) => {
        if (note.isCollidedWith() && note.key === "d") {
          this.counter[0].incrementCounter();
          note.remove();
        }
      });
    } else if (e.keyCode === 70) {
      document.getElementById('f4').cloneNode(true).play();
      this.keys[3].color = "#e6e6e6";
      this.notes.forEach((note) => {
        if (note.isCollidedWith() && note.key === "f") {
          this.counter[0].incrementCounter();
          note.remove();
        }
      });
    } else if (e.keyCode === 71) {
      document.getElementById('g4').cloneNode(true).play();
      this.keys[4].color = "#e6e6e6";
      this.notes.forEach((note) => {
        if (note.isCollidedWith() && note.key === "g") {
          this.counter[0].incrementCounter();
          note.remove();
        }
      });
    } else if (e.keyCode === 72) {
      document.getElementById('a4').cloneNode(true).play();
      this.keys[5].color = "#e6e6e6";
      this.notes.forEach((note) => {
        if (note.isCollidedWith() && note.key === "h") {
          this.counter[0].incrementCounter();
          note.remove();
        }
      });
    } else if (e.keyCode === 74) {
      document.getElementById('b4').cloneNode(true).play();
      this.keys[6].color = "#e6e6e6";
      this.notes.forEach((note) => {
        if (note.isCollidedWith() && note.key === "j") {
          this.counter[0].incrementCounter();
          note.remove();
        }
      });
    } else if (e.keyCode === 75) {
      document.getElementById('c5').cloneNode(true).play();
      this.keys[7].color = "#e6e6e6";
      this.notes.forEach((note) => {
        if (note.isCollidedWith() && note.key === "k") {
          this.counter[0].incrementCounter();
          note.remove();
        }
      });
    }
  }

  regKeyUpListeners(e) {
    if (e.keyCode === 65) {
      this.keys[0].color = "white";
    } else if (e.keyCode === 83) {
      this.keys[1].color = "white";
    } else if (e.keyCode === 68) {
      this.keys[2].color = "white";
    } else if (e.keyCode === 70) {
      this.keys[3].color = "white";
    } else if (e.keyCode === 71) {
      this.keys[4].color = "white";
    } else if (e.keyCode === 72) {
      this.keys[5].color = "white";
    } else if (e.keyCode === 74) {
      this.keys[6].color = "white";
    } else if (e.keyCode === 75) {
      this.keys[7].color = "white";
    }
  }

  registerKeyListeners() {
    window.addEventListener('keydown', this.regRefreshListener);
    window.addEventListener('keydown', this.regKeyListeners);
    window.addEventListener('keyup', this.regKeyUpListeners);
  }

  regRefreshListener(e) {
    if (e.keyCode === 32) {
      location.reload();
    }
  }

  removeKeyListeners() {
    window.removeEventListener('keydown', this.regKeyListeners);
  }

  registerMiaListeners() {
    this.removeKeyListeners();
    window.addEventListener('keydown', e => {
      e.preventDefault();
      if (e.keyCode === 65) {
        this.keys[0].color = "#e6e6e6";
        this.notes.forEach((note) => {
          if (note.isInRange() && note.key === "a") {
            document.getElementById(`${note.tone}`).cloneNode(true).play();
          }
          if (note.isCollidedWith() && note.key === "a") {
            this.counter[0].incrementCounter();
            note.remove();
          }
        });
      } else if (e.keyCode === 83) {
        this.keys[1].color = "#e6e6e6";
        this.notes.forEach((note) => {
          if (note.isInRange() && note.key === "s") {
            document.getElementById(`${note.tone}`).cloneNode(true).play();
          }
          if (note.isCollidedWith() && note.key === "s") {
            this.counter[0].incrementCounter();
            note.remove();
          }
        });
      } else if (e.keyCode === 68) {
        this.keys[2].color = "#e6e6e6";
        this.notes.forEach((note) => {
          if (note.isInRange() && note.key === "d") {
            document.getElementById(`${note.tone}`).cloneNode(true).play();
          }
          if (note.isCollidedWith() && note.key === "d") {
            this.counter[0].incrementCounter();
            note.remove();
          }
        });
      } else if (e.keyCode === 70) {
        this.keys[3].color = "#e6e6e6";
        this.notes.forEach((note) => {
          if (note.isInRange() && note.key === "f") {
            document.getElementById(`${note.tone}`).cloneNode(true).play();
          }
          if (note.isCollidedWith() && note.key === "f") {
            this.counter[0].incrementCounter();
            note.remove();
          }
        });
      } else if (e.keyCode === 71) {
        this.keys[4].color = "#e6e6e6";
        this.notes.forEach((note) => {
          if (note.isInRange() && note.key === "g") {
            document.getElementById(`${note.tone}`).cloneNode(true).play();
          }
          if (note.isCollidedWith() && note.key === "g") {
            this.counter[0].incrementCounter();
            note.remove();
          }
        });
      } else if (e.keyCode === 72) {
        this.keys[5].color = "#e6e6e6";
        this.notes.forEach((note) => {
          if (note.isInRange() && note.key === "h") {
            document.getElementById(`${note.tone}`).cloneNode(true).play();
          }
          if (note.isCollidedWith() && note.key === "h") {
            this.counter[0].incrementCounter();
            note.remove();
          }
        });
      } else if (e.keyCode === 74) {
        this.keys[6].color = "#e6e6e6";
        this.notes.forEach((note) => {
          if (note.isInRange() && note.key === "j") {
            document.getElementById(`${note.tone}`).cloneNode(true).play();
          }
          if (note.isCollidedWith() && note.key === "j") {
            this.counter[0].incrementCounter();
            note.remove();
          }
        });
      } else if (e.keyCode === 75) {
        this.keys[7].color = "#e6e6e6";
        this.notes.forEach((note) => {
          if (note.isInRange() && note.key === "k") {
            document.getElementById(`${note.tone}`).cloneNode(true).play();
          }
          if (note.isCollidedWith() && note.key === "k") {
            this.counter[0].incrementCounter();
            note.remove();
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
    const windowHeight = window.innerHeight;
    if (windowHeight < 800) {
      var gradeTime = 18000;
    } else {
      var gradeTime = 22000;
    }
    if (this.notes.length === 0) {
      let newCounter = document.createElement("input");
      newCounter.setAttribute("id", "counter");
      newCounter.setAttribute("value", "0");
      document.body.appendChild(newCounter);
      document.getElementById("play-mary").style.color = "#FF0099";
      window.setTimeout(this.counter[0].grade, gradeTime);
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 5, -200], color: "#FF0099" }));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 4, -300], color: "#FF0099" }));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 3, -400], color: "#FF0099"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 4, -500], color: "#FF0099"}));
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 5, -600], color: "#FF0099"}));
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 5, -700], color: "#FF0099"}));
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 5, -800], color: "#FF0099"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 4, -1000], color: "#FF0099"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 4, -1100], color: "#FF0099"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 4, -1200], color: "#FF0099"}));
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 5, -1400], color: "#FF0099"}));
      this.add(new Note({ game: this, key: "k", vel: 3, pos: [keyWidth * 7, -1500], color: "#FF0099"}));
      this.add(new Note({ game: this, key: "k", vel: 3, pos: [keyWidth * 7, -1600], color: "#FF0099"}));
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 5, -1800], color: "#FF0099"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 4, -1900], color: "#FF0099"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 3, -2000], color: "#FF0099"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 4, -2100], color: "#FF0099"}));
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 5, -2200], color: "#FF0099"}));
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 5, -2300], color: "#FF0099"}));
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 5, -2400], color: "#FF0099"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 4, -2600], color: "#FF0099"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 4, -2700], color: "#FF0099"}));
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 5, -2800], color: "#FF0099"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 4, -2900], color: "#FF0099"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 3, -3000], color: "#FF0099"}));
    }
  }

  playMia() {
    const keyWidth = this.playAreaWidth / 8;
    const windowHeight = window.innerHeight;
    if (windowHeight < 800) {
      var gradeTime = 62000;
    } else {
      var gradeTime = 64000;
    }
    if (this.notes.length === 0) {
      let newCounter = document.createElement("input");
      newCounter.setAttribute("id", "counter");
      newCounter.setAttribute("value", "0");
      document.body.appendChild(newCounter);
      document.getElementById("play-mia").style.color = "#39FF14";
      window.setTimeout(this.counter[0].grade, gradeTime);
      document.getElementById("toggle").removeEventListener("click", this.toggleKeys);
      this.keys.forEach((key) => {
        key.toggled = true;
      });
      this.registerMiaListeners();
      this.add(new Note({ game: this, key: "a", vel: 3, pos: [0, -200], color: "#39FF14", tone: "c4#"}));
      this.add(new Note({ game: this, key: "d", vel: 3, pos: [keyWidth * 2, -275], color: "#39FF14", tone: "f4#"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 3, -350], color: "#39FF14", tone: "g4#"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 4, -425], color: "#39FF14", tone: "a4"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 3, -500], color: "#39FF14", tone: "g4#"}));
      this.add(new Note({ game: this, key: "d", vel: 3, pos: [keyWidth * 2, -575], color: "#39FF14", tone: "f4#"}));
      this.add(new Note({ game: this, key: "s", vel: 3, pos: [keyWidth, -650], color: "#39FF14", tone: "d4"}));
      // measure
      this.add(new Note({ game: this, key: "s", vel: 3, pos: [keyWidth, -1100], color: "#39FF14", tone: "d4"}));
      this.add(new Note({ game: this, key: "d", vel: 3, pos: [keyWidth * 2, -1175], color: "#39FF14", tone: "f4#"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 3, -1250], color: "#39FF14", tone: "g4#"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 4, -1325], color: "#39FF14", tone: "a4"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 3, -1400], color: "#39FF14", tone: "g4#"}));
      this.add(new Note({ game: this, key: "d", vel: 3, pos: [keyWidth * 2, -1475], color: "#39FF14", tone: "f4#"}));
      this.add(new Note({ game: this, key: "a", vel: 3, pos: [0, -1550], color: "#39FF14", tone: "c4#"}));
      // measure
      this.add(new Note({ game: this, key: "a", vel: 3, pos: [0, -2000], color: "#39FF14", tone: "c4#"}));
      this.add(new Note({ game: this, key: "d", vel: 3, pos: [keyWidth * 2, -2075], color: "#39FF14", tone: "f4#"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 3, -2150], color: "#39FF14", tone: "g4#"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 4, -2225], color: "#39FF14", tone: "a4"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 3, -2300], color: "#39FF14", tone: "g4#"}));
      this.add(new Note({ game: this, key: "d", vel: 3, pos: [keyWidth * 2, -2375], color: "#39FF14", tone: "f4#"}));
      this.add(new Note({ game: this, key: "s", vel: 3, pos: [keyWidth, -2450], color: "#39FF14", tone: "d4"}));
      // measure
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 5, -2900], color: "#39FF14", tone: "b4"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 4, -2975], color: "#39FF14", tone: "a4"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 3, -3050], color: "#39FF14", tone: "g4#"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 4, -3125], color: "#39FF14", tone: "a4"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 3, -3200], color: "#39FF14", tone: "g4#"}));
      this.add(new Note({ game: this, key: "d", vel: 3, pos: [keyWidth * 2, -3275], color: "#39FF14", tone: "f4#"}));
      this.add(new Note({ game: this, key: "a", vel: 3, pos: [0, -3350], color: "#39FF14", tone: "c4#"}));
      // measure
      this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 6, -3800], color: "#39FF14", tone: "d5"}));
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 5, -3875], color: "#39FF14", tone: "c5#"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 4, -3950], color: "#39FF14", tone: "b4"}));
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 5, -4025], color: "#39FF14", tone: "c5#"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 4, -4100], color: "#39FF14", tone: "b4"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 3, -4175], color: "#39FF14", tone: "a4"}));
      this.add(new Note({ game: this, key: "s", vel: 3, pos: [keyWidth, -4250], color: "#39FF14", tone: "f4#"}));
      this.add(new Note({ game: this, key: "d", vel: 3, pos: [keyWidth * 2, -4550], color: "#39FF14", tone: "g4#"}));
      // measure
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 5, -4700], color: "#39FF14", tone: "c5#"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 4, -4775], color: "#39FF14", tone: "b4"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 3, -4850], color: "#39FF14", tone: "a4"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 4, -4925], color: "#39FF14", tone: "b4"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 3, -5000], color: "#39FF14", tone: "a4"}));
      this.add(new Note({ game: this, key: "d", vel: 3, pos: [keyWidth * 2, -5075], color: "#39FF14", tone: "g4#"}));
      this.add(new Note({ game: this, key: "s", vel: 3, pos: [keyWidth * 1, -5150], color: "#39FF14", tone: "f4#"}));
      // measure
      this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 6, -5600], color: "#39FF14", tone: "d5"}));
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 5, -5675], color: "#39FF14", tone: "c5#"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 4, -5750], color: "#39FF14", tone: "b4"}));
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 5, -5825], color: "#39FF14", tone: "c5#"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 4, -5900], color: "#39FF14", tone: "b4"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 3, -5975], color: "#39FF14", tone: "a4"}));
      this.add(new Note({ game: this, key: "s", vel: 3, pos: [keyWidth, -6050], color: "#39FF14", tone: "f4#"}));
      this.add(new Note({ game: this, key: "d", vel: 3, pos: [keyWidth * 2, -6350], color: "#39FF14", tone: "g4#"}));
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 5, -6500], color: "#39FF14", tone: "c5#"}));
      // measure
      this.add(new Note({ game: this, key: "a", vel: 3, pos: [0, -6650], color: "#39FF14", tone: "e4"}));
      this.add(new Note({ game: this, key: "s", vel: 3, pos: [keyWidth * 1, -6800], color: "#39FF14", tone: "f4"}));
      this.add(new Note({ game: this, key: "d", vel: 3, pos: [keyWidth * 2, -6950], color: "#39FF14", tone: "f4#"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 3, -7100], color: "#39FF14", tone: "a4"}));
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 5, -7250], color: "#39FF14", tone: "c5#"}));
      // measure
      this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 6, -7400], color: "#39FF14", tone: "f5#"}));
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 5, -7475], color: "#39FF14", tone: "e5"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 4, -7550], color: "#39FF14", tone: "d5"}));
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 5, -7625], color: "#39FF14", tone: "e5"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 4, -7700], color: "#39FF14", tone: "d5"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 3, -7775], color: "#39FF14", tone: "c5#"}));
      this.add(new Note({ game: this, key: "s", vel: 3, pos: [keyWidth, -7850], color: "#39FF14", tone: "b4"}));
      // measure
      this.add(new Note({ game: this, key: "k", vel: 3, pos: [keyWidth * 7, -8300], color: "#39FF14", tone: "g5#"}));
      this.add(new Note({ game: this, key: "j", vel: 3, pos: [keyWidth * 6, -8375], color: "#39FF14", tone: "f5#"}));
      this.add(new Note({ game: this, key: "h", vel: 3, pos: [keyWidth * 5, -8450], color: "#39FF14", tone: "f5"}));
      this.add(new Note({ game: this, key: "g", vel: 3, pos: [keyWidth * 4, -8525], color: "#39FF14", tone: "d5"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 3, -8600], color: "#39FF14", tone: "c5#"}));
      this.add(new Note({ game: this, key: "d", vel: 3, pos: [keyWidth * 2, -8675], color: "#39FF14", tone: "b4"}));
      this.add(new Note({ game: this, key: "s", vel: 3, pos: [keyWidth, -8750], color: "#39FF14", tone: "a4"}));
      // measure
      this.add(new Note({ game: this, key: "a", vel: 3, pos: [0, -9200], color: "#39FF14", tone: "f4#"}));
      this.add(new Note({ game: this, key: "s", vel: 3, pos: [keyWidth, -9275], color: "#39FF14", tone: "g4#"}));
      this.add(new Note({ game: this, key: "a", vel: 3, pos: [0, -9350], color: "#39FF14", tone: "f4#"}));
      this.add(new Note({ game: this, key: "s", vel: 3, pos: [keyWidth, -9425], color: "#39FF14", tone: "g4#"}));
      this.add(new Note({ game: this, key: "d", vel: 3, pos: [keyWidth * 2, -9500], color: "#39FF14", tone: "a4"}));
      this.add(new Note({ game: this, key: "a", vel: 3, pos: [0, -9650], color: "#39FF14", tone: "f4#"}));
      this.add(new Note({ game: this, key: "s", vel: 3, pos: [keyWidth, -9725], color: "#39FF14", tone: "g4#"}));
      this.add(new Note({ game: this, key: "a", vel: 3, pos: [0, -9800], color: "#39FF14", tone: "f4#"}));
      this.add(new Note({ game: this, key: "s", vel: 3, pos: [keyWidth, -9875], color: "#39FF14", tone: "g4#"}));
      this.add(new Note({ game: this, key: "d", vel: 3, pos: [keyWidth * 2, -9950], color: "#39FF14", tone: "a4"}));
      // measure
      this.add(new Note({ game: this, key: "a", vel: 3, pos: [0, -10100], color: "#39FF14", tone: "f4#"}));
      this.add(new Note({ game: this, key: "s", vel: 3, pos: [keyWidth, -10175], color: "#39FF14", tone: "g4#"}));
      this.add(new Note({ game: this, key: "a", vel: 3, pos: [0, -10250], color: "#39FF14", tone: "f4#"}));
      this.add(new Note({ game: this, key: "s", vel: 3, pos: [keyWidth, -10325], color: "#39FF14", tone: "g4#"}));
      this.add(new Note({ game: this, key: "d", vel: 3, pos: [keyWidth * 2, -10400], color: "#39FF14", tone: "a4"}));
      this.add(new Note({ game: this, key: "a", vel: 3, pos: [0, -10475], color: "#39FF14", tone: "f4#"}));
      this.add(new Note({ game: this, key: "f", vel: 3, pos: [keyWidth * 3, -10550], color: "#39FF14", tone: "b4"}));
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
    } else if (object instanceof BlackKey) {
      this.blackKeys.push(object);
    }
  }

  addKeys() {
    let keys = ["A", "S", "D", "F", "G", "H", "J", "K"];
    let notes = ["C", "D", "E", "F", "G", "A", "B", "C"];
    let blackKeyPos = [[this.playAreaWidth * (4.5/48), window.innerHeight * 0.7],
                        [this.playAreaWidth * (10.5/48), window.innerHeight * 0.7],
                        [this.playAreaWidth * (22.5/48), window.innerHeight * 0.7],
                        [this.playAreaWidth * (28.5/48), window.innerHeight * 0.7],
                        [this.playAreaWidth * (34.5/48), window.innerHeight * 0.7]];
    for (let i = 0; i < 8; i++) {
      this.add(new Key({ game: this, key: keys[i], toggleKey: notes[i], pos: [this.playAreaWidth / 8 * i, window.innerHeight * 0.7]}));
    }
    for (let i = 0; i < 5; i++) {
      this.add(new BlackKey({ game: this, pos: blackKeyPos[i]}));
    }
  }

  allObjects() {
    return [].concat(this.notes, this.line, this.keys, this.blackKeys);
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
