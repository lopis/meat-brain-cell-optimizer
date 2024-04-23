import { color1, color2, color3, colorWhite } from '@/core/draw-engine';
import { State } from '@/core/state';
import W from '../../lib/w.js';
import { Level } from '@/core/level.js';

class CircleLevel extends Level implements State {
  count = 8;
  time = 0;
  maxTime = 5000;
  size = 0.1;
  counter = 0;
  animationScale = 1;
  offset = 0;

  onEnter() {
    super.onEnter();
    range.value = '75';
    range2.value = '25';
    this.updateRange();

    range2.classList.remove('hide');
    overlay.classList.remove('hide');

    W.reset(c2d);
    W.camera({y:0,z:2, fov: 30});

    for(let i=0; i < this.count; i++) {
      W.group({n:`G${i}`, rz:i*180/this.count});

      const b = [colorWhite, color1, color2, color3][i%4];
      W.sphere({g:`G${i}`,n:`N${i}`, w:this.size,h:this.size,d:this.size, x:0,y:0.5, ns:1,b});
    }
  }

  easeInOutSine(x: number): number {
    return -(Math.cos(Math.PI * (this.animationScale * x)) - 1) / 2;
  }

  updateObjects() {
    for(let i=0; i < this.count; i++) {
      const y = this.offset + this.easeInOutSine((i/this.count + 2 * this.time / this.maxTime)) - 0.5;
      W.move({n:`N${i}`, y});
    }
  }

  onUpdate(delta: number) {
    this.time += delta;
    if (this.time >= this.maxTime/this.animationScale) {
      this.time -= this.maxTime/this.animationScale;
    }

    this.updateObjects();
    
    this.counter++;
    if (this.counter > 20) {
      this.counter = 0;
      this.calculatePower();
    }
  }

  updateRange() {
    this.animationScale = (3 * parseInt(range.value) +25) / 100;
    this.offset = 0.4 * parseInt(range2.value) / 100 - 0.2;
  }

  calculatePower() {
    const scaleDifference = 1 - Math.abs(1 - this.animationScale);
    const offsetDifference = 1 - Math.abs(this.offset * 4);
    
    // Exagerate the error
    const value = scaleDifference * offsetDifference;

    super.calculatePower(value);
  }
}

export const circleLevel = new CircleLevel();
