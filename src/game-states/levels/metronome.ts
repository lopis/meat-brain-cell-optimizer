import { colorWhite, colorDark } from '@/core/draw-engine';
import { State } from '@/core/state';
import W from '../../lib/w.js';
import { Level } from '@/core/level.js';

class MetronomeLevel extends Level implements State {
  interval = 1 * 1000;
  amplitudeRange = 1.5;

  time = 0;
  amplitudeG1 = 1;
  amplitudeG2 = 0;
  counter = 0;
  score = 0;

  onEnter() {
    super.onEnter();
    range.value = '0';
    this.updateRange();

    W.reset(c2d);
    W.camera({y:0.5,z:7, rx:-7, fov: 10});

    W.group({n:"G1",ry:0});
    W.cube({g:"G1", w:0.1,h:1,d:0.1, x:0,y:0.5, ns:1,b:colorDark});
    
    W.group({n:"G2",ry:0});
    W.cube({g:"G2", w:0.1,h:1,d:0.1, x:0,y:0.5, ns:1,b:colorWhite});
  }

  onUpdate(delta: number) {
    this.time += delta;
    if (this.time > this.interval) {
      this.time -= this.interval;      
    }
    const angle = 30 * Math.cos(2 * Math.PI * this.time / this.interval);
    W.move({n:"G1", x:-0.5, y:-0.5, rz: this.amplitudeG1 * angle});
    W.move({n:"G2", x: 0.5, y:-0.5, rz: this.amplitudeG2 * angle});
    
    this.counter++;
    if (this.counter > 20) {
      this.counter = 0;
      this.calculatePower();
    }
  }

  updateRange() {
    this.amplitudeG2 = this.amplitudeRange * (parseInt(range.value)) / 100;
  }

  calculatePower() {
    const amplituceDifference = 1 - Math.abs(this.amplitudeG1 - this.amplitudeG2);
    super.calculatePower(amplituceDifference);
  }
}

export const metronomeLevel = new MetronomeLevel();
