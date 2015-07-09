var options = { enableGestures: true };
Leap.loop(options, function(frame) {  hand = frame.hands[0];
  if (hand === undefined) {
    sounds.breathing.stop();
    sounds.imperialMarch.stop();
  }
  else {
    sounds.imperialMarch.ensurePlay();
    console.log(hand.grabStrength);

    if (hand.grabStrength > 0.5) {
      sounds.breathing.ensurePlay();
    }
    else {
      sounds.breathing.stop();
    }
  }
  
});