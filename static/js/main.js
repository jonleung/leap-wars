var darth = document.getElementsByClassName('darth')[0];

var options = { enableGestures: true };
Leap.loop(options, function(frame) {  hand = frame.hands[0];
  if (hand === undefined) {
    sounds.breathing.stop();
    sounds.imperialMarch.stop();
    darth.style.opacity = 0;
  }
  else {
    sounds.imperialMarch.ensurePlay();
    console.log(hand.grabStrength);
        
    darth.style.opacity = hand.grabStrength;


    if (hand.grabStrength > 0.5) {
      sounds.breathing.ensurePlay();
    }
    else {
      sounds.breathing.stop();
    }
  }
  
});