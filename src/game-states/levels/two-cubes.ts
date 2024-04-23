import { colorWhite } from '@/core/draw-engine';
import { State } from '@/core/state';
import W from '../../lib/w.js';
import { Level } from '@/core/level';

class TwoCubesLevel extends Level implements State {
  interval = 8 * 1000;
  timeG1 = 0;
  timeG2 = 0;
  angle1 = 0;
  angle2 = 0;
  speed = -0.5;
  counter = 0;
  score = 0;

  targetSpeed = 1;

  constructor() {
    super();
  }

  onEnter() {
    range.value = '45';

    W.reset(c2d);
    W.camera({y:4,z:7, rx:-30, fov: 10});
    W.light({x:0,y:-5,z:0});
    W.ambient(0.8);

    W.group({n:"G1",ry:0});
    W.cube({g:"G1", w:1.5,h:1,d:1, x:0,y:0,b:colorWhite});
    
    W.group({n:"G2",ry:0});
    W.cube({g:"G2", w:1.5,h:1,d:1, x:0,y:0,b:colorWhite});
    super.onEnter();
  }

  onLeave() {
    document.removeEventListener('input', this.inputListener);
    controls.classList.remove('slide');
  }

  onUpdate(delta: number) {
    this.timeG1 += delta;
    if (this.timeG1 > this.interval) {
      this.timeG1 -= this.interval;
    }
    this.angle1 = 360 * (this.timeG1/this.interval);
    W.move({n:"G1", ry: this.angle1});

    this.timeG2 += delta * this.speed;
    if (this.timeG2 > this.interval) {
      this.timeG2 -= this.interval;
    } else if (this.timeG2 < 0) {
      this.timeG2 += this.interval;
    }
    this.angle2 = 360 * (this.timeG2/this.interval);
    W.move({n:"G2", ry: this.angle2});
    
    this.counter++;
    if (this.counter > 20) {
      this.counter = 0;
      this.calculatePower();
    }
  }

  updateRange() {
    // @ts-ignore
    this.speed = 2 * (range.value - 50) / 100;
  }

  calculatePower() {
    const speedDifference = 1 - Math.abs(this.targetSpeed - this.speed);
    const phaseDifference = 1 - Math.abs(this.angle1%180 - this.angle2%180) / 180;
    // Exagerate the error
    this.score = Math.pow((speedDifference * phaseDifference), 3);

    super.calculatePower(this.score);
  }
}

export const twoCubesLevel = new TwoCubesLevel();
