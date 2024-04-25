import { State } from '@/core/state';
import { Level } from '@/core/level';
import W from '@/lib/w';
import { colorDark, colorWhite } from '@/core/draw-engine';
import { circleRange, circleRange2 } from '@/core/controls';

class HelixLevel extends Level implements State {
  counter = 0;
  time1 = 0;
  time2 = 0;
  interval = 2 * 1000;

  speed = 1.5;
  angleOffset = 180;
  ry1 = 0;
  ry2 = 0;

  onEnter() {
    // two wave SVGs enterlaced
    // the user has to synchronize the phase
    // and the speed of the waves
    // to form a correct helix shape

    super.onEnter();
    W.reset(c2d);
    range.classList.add('hide');
    circleRange.toggle(true);
    circleRange2.toggle(true);
    W.camera({x:0,y:0,z:1.8, rz:45});
    W.ambient(1);
    W.helix({n:'H1', w:0.1,d:0.1,h:1, ns:1,b:colorDark});
    W.helix({n:'H2', w:0.1,d:0.1,h:1, ns:1,b:colorWhite});
  }

  onLeave() {
    super.onLeave();
  }

  onUpdate(delta: number) {
    this.time1 += delta;
    if (this.time1 > this.interval) {
      this.time1 -= this.interval;
    }
    this.time2 += this.speed * delta;
    if (this.time2 > this.interval) {
      this.time2 -= this.interval;
    } else if (this.time2 < 0) {
      this.time2 += this.interval;
    }

    this.ry1 = 360 * this.time1 / this.interval;
    W.helix({n:'H1', ry: this.ry1});

    this.ry2 = 360 * this.time2 / this.interval - this.angleOffset;
    W.helix({n:'H2', x:0.01,z:0.01, ry: this.ry2 - 180});

    this.counter++;
    if (this.counter > 20) {
      this.counter = 0;
      this.calculatePower();
    }

    this.updateRange();
  }

  updateRange() {
    this.angleOffset = 360 * circleRange.getValue();
    this.speed = 3 * (circleRange2.getValue() - 0.5);
    this.speed = Math.round(this.speed * 5) / 5;
  }

  calculatePower() {
    const angleDiff = 1 - Math.abs(this.ry1 - this.ry2 + 360) % 360 / 360;
    const speedDiff = Math.max(0, 1 - Math.abs(this.speed - 1));
    console.log(angleDiff);
    
    super.calculatePower(speedDiff * angleDiff);
  }
}

export const helixLevel = new HelixLevel();
