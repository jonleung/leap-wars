var imperialMarch = new Audio('http://cprouvost.free.fr/fun/generiques/--%20Film%20--/Film%20-%20Star%20Wars%20(The%20Imperial%20March).mp3');
var breathing = new Audio('http://f.cl.ly/items/2R45021y3b3X0v2S1C1s/Darth-vader-breathing.mp3');
var musicPlaying = false;
var breathingPlaying = false;

// Main Leap Loop
var options = { enableGestures: true };
Leap.loop(options, function(frame) {  hand = frame.hands[0];
  if (hand === undefined) {

    musicPlaying = false;
    imperialMarch.pause();
    imperialMarch.currentTime = 0;

    breathingPlaying = false;
    breathing.pause();
    breathing.currentTime = 0;
  }
  else {
    if (musicPlaying === false) {
      musicPlaying = true;
      imperialMarch.play();
    }

    // dweetio.dweet_for('darth', {grabStrength: hand.grabStrength}, function(err, dweet){
    //   console.log(dweet.content); // The content of the dweet
    //   console.log("dweeted");
    // });

    // $.get({
    //   url: 'http://localhost:5000/grab',
    //   data: {
    //     grabStrength: grabStrength
    //   }
    // });


    if (hand.grabStrength > 0.5) {
      if (breathingPlaying === false) {
        breathingPlaying = true;
        breathing.play();
      }
    }
    else {
      breathingPlaying = false;
      breathing.pause();
      breathing.currentTime = 0;
    }
    // if the music has not already started
      // start the music
    console.log(hand.grabStrength);
  }
  
});