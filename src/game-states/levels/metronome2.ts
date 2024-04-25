import { State } from '@/core/state';
import { Level } from '@/core/level';
import W from '@/lib/w';
import { colorDark, colorWhite } from '@/core/draw-engine';

// Looks the same as the first level
// but there are 2 buttons instead.
// Clicking one button places the bar on one side
// and pressing the other sets the pace of the 
// metronome, to the period define by the difference
// in the button presses.
class Metronome2Level extends Level implements State {
  time = 0;
  interval = 1 * 1000;

  buttonTime1 = 0;
  buttonTime2 = 0;
  time2 = 0;
  interval2 = 0;

  counter = 0;
  onButton1: () => void;
  onButton2: () => void;

  constructor() {
    super();
    this.onButton1 = () => {
      this.interval2 = 0;
      this.buttonTime1 = Date.now();
      if (this.buttonTime2) {
        this.interval2 = 2 * Math.round(Math.abs(this.buttonTime1 - this.buttonTime2) / 20) * 20;
        console.log(this.interval2);
        this.time2 = this.time;
        this.buttonTime1 = 0;
        this.buttonTime2 = 0;
      }
    };
    this.onButton2 = () => {
      this.interval2 = 0;
      this.buttonTime2 = Date.now();
      if (this.buttonTime1) {
        this.interval2 = 2 * Math.round(Math.abs(this.buttonTime1 - this.buttonTime2) / 20) * 20;
        console.log(this.interval2);
        this.time2 = this.time;
        this.buttonTime1 = 0;
        this.buttonTime2 = 0;
      }
    };
  }

  onEnter() {
    super.onEnter();
    range.classList.add('hide');
    switches.classList.remove('hide');
    W.reset(c2d);
    W.camera({y:0.5,z:7, rx:-7, fov: 10});

    switch1.addEventListener('click', this.onButton1);
    switch2.addEventListener('click', this.onButton2);

    W.group({n:"G1",ry:0});
    W.cube({g:"G1", w:0.1,h:1,d:0.1, x:0,y:0.5, ns:1,b:colorDark});
    
    W.group({n:"G2",ry:0});
    W.cube({g:"G2", w:0.1,h:1,d:0.1, x:0,y:0.5, ns:1,b:colorWhite});
  }

  onLeave() {
    super.onLeave();
    range.classList.remove('hide');
    switches.classList.add('hide');
  }

  onUpdate(delta: number) {
    this.time += delta;
    if (this.time > this.interval) {
      this.time -= this.interval;
    }
    this.time2 += delta;
    if (this.time2 > this.interval2) {
      this.time2 -= this.interval2;
    }

    let rz = 30 * Math.cos(2 * Math.PI * this.time / this.interval);
    W.move({n:"G1", x:-0.5, y:-0.5, rz});
    
    let pos = 0;
    if (!this.interval2) {
      pos = this.buttonTime1 ? 0 : this.buttonTime2 ? 0.5 : 0.25;
    } else {
      pos = this.time2 / this.interval2;
    }
    rz = 30 * Math.cos(2 * Math.PI * pos);
    W.move({n:"G2", x: 0.5, y:-0.5, rz});
    
    this.counter++;
    if (this.counter > 20) {
      this.counter = 0;
      this.calculatePower();
    }
  }

  calculatePower() {
    const intervalDiff = Math.pow(1 - Math.abs(this.interval - this.interval2) / 1000, 3);
    super.calculatePower(intervalDiff);
  }
}

export const metronome2Level = new Metronome2Level();
