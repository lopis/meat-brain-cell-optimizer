import { colorWhite, colorDark } from '@/core/draw-engine';
import { State } from '@/core/state';
import W from '../../lib/w.js';
import { Level } from '@/core/level';

class TwoGearsLevel extends Level implements State {
  timeG1 = 0;
  timeG2 = 0;
  angle1 = 0;
  angle2 = 0;
  speed = -0.5;
  counter = 0;
  targetSpeed = 1;
  interval = 5 * 1000;

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

  onUpdate(delta: number) {
    this.timeG1 += delta;
    if (this.timeG1 > this.interval) {
      this.timeG1 -= this.interval;
    }
    this.angle1 = 360 * this.timeG1 / this.interval;
    W.move({n:"G1",rx:this.angle1,ry:45});

    this.timeG2 += delta * this.speed;
    if (this.timeG2 > this.interval) {
      this.timeG2 -= this.interval;
    } else if (this.timeG2 < 0) {
      this.timeG2 += this.interval;
    }
    this.angle2 = 360 * this.timeG2 / this.interval;
    W.move({n:"G2",rx:this.angle2,ry:45});
    
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
    const phaseDifference = 1 - Math.abs(this.angle1%90 - this.angle2%90) / 90;
    
    // Exagerate the error
    const value = Math.pow((speedDifference * phaseDifference), 3);

    super.calculatePower(value);
  }
}

export const twoGearsLevel = new TwoGearsLevel();
