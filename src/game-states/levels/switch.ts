import { colorWhite, colorDark, easeInOutSine, minAngleDistanceWithin90 } from '@/core/draw-engine';
import { State } from '@/core/state';
import W from '../../lib/w.js';
import { Level } from '@/core/level';

class SwitchLevel extends Level implements State {
  counter = 0;
  interval = 5 * 1000;

  previous = 0;
  selected = 1;
  progress = 1;
  sizes = [0,1,0];
  angles = [0.8,.16,.24];
  states = [1,1,1];

  onEnter() {
    this.sizes = [0,1,0];
    this.angles = [0.8,.16,.24];
    this.states = [1,1,1];
    super.onEnter();
    range.classList.add('hide');
    switches.classList.remove('hide');
    this.updateRange();

    switch1.addEventListener('click', () => {
      if (this.progress >= 1) {
        this.previous = this.selected;
        this.selected = (this.selected + 1) % 3;
        this.progress = 0;
      }
    });

    switch2.addEventListener('click', () => {
      this.states[this.selected] = 1 - this.states[this.selected];
    });

    W.reset(c2d);
    W.camera({x:-1.5,y:1.8,z:1.5, rx:-45, ry:-45});
    W.light({x:1,y:-5,z:-1});
    W.ambient(0.1);

    W.group({n:"G1"});
    W.cube({g:"G1", w:0.33,h:1,d:1, x:-0.33,y:0, b:colorWhite});
    
    W.group({n:"G2"});
    W.cube({g:"G2", w:0.33,h:1,d:1, x:0.0,y:0, b:colorDark});

    W.group({n:"G3"});
    W.cube({g:"G3", w:0.33,h:1,d:1, x:0.33,y:0, b:colorWhite});
  }

  onLeave() {
    super.onLeave();
    range.classList.remove('hide');
  }

  onUpdate(delta: number) {
    if (this.progress < 1) {
      this.progress += delta / 200;
      for (let i = 0; i < this.sizes.length; i++) {
        if (this.selected === i) {
          this.sizes[i] = easeInOutSine(this.progress);
        } else if (this.previous === i) {
          this.sizes[i] = easeInOutSine(1 - this.progress);
        }
      }
    }

    for(let i = 0; i < 3; i++) {
      this.angles[i] += this.states[i] *  delta / this.interval;
      const s = 0.7 + 0.3 * this.sizes[i];
      const rx = 360 * this.angles[i];
      W.move({n:`G${i+1}`, rx, h:s,d:s});
    }
    
    this.counter++;
    if (this.counter > 20) {
      this.counter = 0;
      this.calculatePower();
    }
  }

  calculatePower() {    
    const diff1 = (minAngleDistanceWithin90(this.angles[0] * 360, this.angles[1] * 360)) / 90;
    const diff2 = (minAngleDistanceWithin90(this.angles[1] * 360, this.angles[2] * 360)) / 90;
    console.log(diff1, diff2);
    
    // Exagerate the error
    const value = Math.pow(1 - (diff1 + diff2)/2, 4);

    super.calculatePower(value);
  }
}

export const switchLevel = new SwitchLevel();
