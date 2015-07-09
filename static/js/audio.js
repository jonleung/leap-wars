var Sound = function(mp3Url) {
  this.mp3Url = mp3Url;
  this.playing = false;

  this.audio = new Audio(mp3Url);
};

Sound.prototype.stop = function() {
  this.audio.pause();
  this.audio.currentTime = 0;
  
  this.playing = false;
}

Sound.prototype.ensurePlay = function() {
  if (this.playing === false) {
    this.playing = true;
    this.audio.play();  
  }
}

var sounds = {};
sounds.breathing = new Sound('http://f.cl.ly/items/2R45021y3b3X0v2S1C1s/Darth-vader-breathing.mp3');
sounds.imperialMarch = new Sound('http://cprouvost.free.fr/fun/generiques/--%20Film%20--/Film%20-%20Star%20Wars%20(The%20Imperial%20March).mp3');

debugger