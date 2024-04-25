import { State } from '@/core/state';
import { Level } from '@/core/level';

class Metronome2Level extends Level implements State {
  counter = 0;

  onEnter() {
    // Looks the same as the first level
    // but there are 2 buttons instead.
    // Clicking one button places the bar on one side
    // and pressing the other sets the pace of the 
    // metronome, to the period define by the difference
    // in the button presses.
  }

  onLeave() {
    super.onLeave();
  }

  onUpdate(delta: number) {
    
    this.counter++;
    if (this.counter > 20) {
      this.counter = 0;
      this.calculatePower();
    }
  }

  calculatePower() {

    super.calculatePower(0);
  }
}

export const metronome2Level = new Metronome2Level();
