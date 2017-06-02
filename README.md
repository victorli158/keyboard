# KEYboard

[KEYboard Live Link](https://victorli158.github.io/keyboard/)

## Background

KEYboard is a game that allows players to turn their device keyboard into a piano.
KEYboard can be played either freestyle or with included song charts which require the player to play the correct notes at the right time. Upon completing a song, players receive a letter grade based on their performance.

KEYboard was designed and built within a one-week timeframe with vanilla JavaScript, HTML5, CSS3, and Canvas.

![screenshot](http://res.cloudinary.com/nearbytes/image/upload/c_scale,q_100,w_1000/v1496424748/Screen_Shot_2017-06-02_at_10.32.06_AM_rfs35s.png)

## Gameplay and Features

When a player starts the application, they can play freestyle for as long as they like.
By default, the on-screen keys display their corresponding keyboard controls. The toggle button
in the side bar allows players to see the notes that are produced when the keys are played.

Songs can be selected, at which point a score counter is displayed and notes begin falling from the top
of the screen. The player increases their score by pressing the proper key as these notes cross
the blue line on-screen. At the end of the song, the player is assigned a grade based on their performance.

![screenshot](http://res.cloudinary.com/nearbytes/image/upload/c_scale,q_100,w_1000/v1496425494/Screen_Shot_2017-06-02_at_10.44.23_AM_ph02z7.png)

### Key Presses, Audio Tones, and Scoring

Key presses were simple to handle in freestyle mode and for the tutorial song,
"Mary Had a Little Lamb". Each key plays its own note like it would with a real piano.
However, with "Mia and Sebastian's Theme", keys had to produce multiple different tones
so that gameplay could remain manageable with only eight input keys. See below for some code snippets:

```javascript
// note.js
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
```

```javascript
// game.js
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
      // etc.
    }
  }
}
```

In the Note class, isCollidedWith sets a buffer around the line in which button presses contribute to the player score. isInRange sets a wider range in which button presses produce the relevant tone, so the game doesn't play tones that won't be used until later or worse, all the tones that key would be responsible for throughout the song.

Within registerMiaListeners, the default key listeners are removed so that the player isn't limited to one octave of tones. New key listeners are added so valid button presses (those used to play the game) can increase the player's score and play the correct tones. The cloneNode function was necessary to ensure that rapid key presses would still produce a tone, even if the previous tone hadn't finished playing yet.

## Future Improvements

### Additional songs

So far, a beginner and intermediate song are available to players. In addition, a harder song (probably "Fur Elise") can be added.

### Additional animations

So far, keys change color to indicate key presses, and the counter pulses when the player's score increases. Additional animations could:

- [ ] visually show the tempo of the song.
- [ ] indicate to the player that they missed a note.
- [ ] provide more feedback when the player increases their score.
