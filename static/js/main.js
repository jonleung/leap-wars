var round = function(x) {
  return Math.round(x * 100) / 100
}

debug = false;

var darth = document.getElementsByClassName('darth')[0];

var lightSaberOn = false;

var prevRoll = 0;
var prevPitch = 0;
var runningAverageFrames = 50;
var frames = [];
for(var i=0; i<runningAverageFrames; i++) {
  frames.push(0);
}

var options = { enableGestures: true };
Leap.loop(options, function(frame) {  hand = frame.hands[0];
  
  if (hand === undefined) {
    sounds.hum.stop();
    sounds.breathing.stop();
    sounds.choking.stop();
    sounds.imperialMarch.stop();
    darth.style.opacity = 0;
  }
  else {
    sounds.imperialMarch.ensurePlay();

    var lightSaberMode = hand.roll() < -0.7;


    var roll = hand.roll();
    var pitch = hand.pitch();

    var delta = Math.sqrt(Math.pow(prevRoll - roll, 2) + Math.pow(prevPitch - pitch, 2));
    if (delta === NaN) {
      delta = 0;
    }
    frames.pop();
    frames.push(delta);

    var sum = 0;
    frames.forEach(function(delta) {
      sum += delta;
    })
    var movementRunningAverage = sum / runningAverageFrames;

    var prevRoll = roll;
    var prevPitch = pitch;

    if (debug) {
      debugger
    }

    console.log(
      {
        movementRunningAverage: movementRunningAverage,
        // frameId: frame.id,
        // lightSaberMode: lightSaberMode,
        // lightSaberOn: lightSaberOn,
        // grabStrength: round(hand.grabStrength),
        roll: round(hand.roll()),
        pitch: round(hand.pitch()),
        yall: round(hand.yaw())
      }
    )



    if (lightSaberMode) {
      sounds.breathing.stop();
      sounds.choking.stop();
      if (hand.grabStrength === 1) {
        if (!lightSaberOn) {
          $('.lightsaber').removeClass('hidden');
          sounds.turnOn.ensurePlay();  
          lightSaberOn = true; 
        }
        sounds.hum.ensurePlay();
      }
      else {
        $('.lightsaber').addClass('hidden');
        sounds.hum.stop();
        if (lightSaberOn) {
          lightSaberOn = false;
          sounds.turnOff.ensurePlay();
        }
      }
    }
    else { // force choke mode
      darth.style.opacity = hand.grabStrength;

      var chokingVolume = hand.grabStrength - 0.5;
      if (chokingVolume < 0) {
        chokingVolume = 0;
      }
      chokingVolume *= 2;
      sounds.choking.audio.volume = chokingVolume;


      if (hand.grabStrength > 0.5) {
        sounds.breathing.ensurePlay();
        sounds.choking.ensurePlay();
      }
      else {
        sounds.breathing.stop();
        sounds.choking.stop();
      }
    }

        
  }
  
});