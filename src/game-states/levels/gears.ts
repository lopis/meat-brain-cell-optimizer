import { colorWhite, colorDark } from '@/core/draw-engine';
import { State } from '@/core/state';
import W from '../../lib/w.js';
import { Level } from '@/core/level';

class TwoGearsLevel extends Level implements State {
  frameG1 = 0;
  frameG2 = 0;
  speed = -0.5;
  counter = 0;
  targetSpeed = 1;

  onEnter() {
    range.value = '50';
    range.step = '10';

    W.reset(c2d);
    W.camera({y:0.5,z:7, rx:-7, fov: 10});
    W.light({x:1,y:-5,z:-1});
    W.ambient(0.5);

    W.group({n:"G1",ry:0});
    W.cube({g:"G1", w:0.5,h:1,d:1, x:-0.25,y:0, b:colorDark});
    
    W.group({n:"G2",ry:0});
    W.cube({g:"G2", w:0.5,h:1,d:1, x:0.25,y:0, b:colorWhite});

    super.onEnter();
  }

  onUpdate() {
    this.frameG1++;
    if (this.frameG1 > 360) {
      this.frameG1 -= 360;
    }
    W.move({n:"G1",rx:this.frameG1,ry:45});

    this.frameG2 += this.speed;
    if (this.frameG2 > 360) {
      this.frameG2 -= 360;
    } else if (this.frameG2 < 0) {
      this.frameG2 += 360;
    }
    W.move({n:"G2",rx:this.frameG2,ry:45});
    
    this.counter++;
    if (this.counter > 20) {
      this.counter = 0;
      this.calculatePower();
    }
  }

  updateRange() {
    const value = parseInt(range.value) || 0;
    this.speed = (value - 50) / 40;
  }

  calculatePower() {
    const speedDifference = 1 - Math.abs(this.targetSpeed - this.speed);
    const phaseDifference = 1 - Math.abs((this.frameG1 % 90) - (this.frameG2 % 90)) / 90;
    
    // Exagerate the error
    const value = Math.pow((speedDifference * phaseDifference), 5);

    super.calculatePower(value);
  }
}

export const twoGearsLevel = new TwoGearsLevel();
