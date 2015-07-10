var Sound = function(mp3Url, looping) {
  this.mp3Url = mp3Url;
  this.playing = false;

  this.audio = new Audio(mp3Url);

  var sound = this;
  
  this.audio.addEventListener('ended', function() {
    sound.playing = false;

    // if (looping === true) {
    //   if (mp3Url === 'http://soundfxcenter.com/movies/star-wars/b1a3c9_Lightsaber_Igniting_Sound_Effect.mp3') {
    //     debugger
    //   }
    //   sound.audio.currentTime = 0;
    //   sound.audio.play();  
    // }    
  }, false);


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

Sound.prototype.play = function() {
  this.stop();
  this.audio.play();
}

var sounds = {};
sounds.breathing = new Sound('http://f.cl.ly/items/2R45021y3b3X0v2S1C1s/Darth-vader-breathing.mp3', true);
sounds.choking = new Sound('http://f.cl.ly/items/3z1p2n3G0K0l311T1Y2W/choking.mp3', true);
sounds.imperialMarch = new Sound('http://cprouvost.free.fr/fun/generiques/--%20Film%20--/Film%20-%20Star%20Wars%20(The%20Imperial%20March).mp3', true);
sounds.turnOn = new Sound('http://soundfxcenter.com/movies/star-wars/b1a3c9_Lightsaber_Igniting_Sound_Effect.mp3');
sounds.turnOff = new Sound('http://soundfxcenter.com/movies/star-wars/90f151_Lightsaber_Powering_Down_Sound_Effect.mp3');
sounds.hum = new Sound('http://soundfxcenter.com/movies/star-wars/e2942b_Lightsaber_Idle_Hum_Sound_Effect.mp3', true);
