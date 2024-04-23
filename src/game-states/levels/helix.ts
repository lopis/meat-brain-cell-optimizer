import { colorDark, colorWhite } from '@/core/draw-engine';
import { State } from '@/core/state';
import W from '../../lib/w.js';
import { Level } from '@/core/level.js';
import { circleRange } from '@/core/controls.js';

const HEIGHT = 0.3;
const WIDTH = 0.2;

class HelixLevel extends Level implements State {
  numObjects = 12; // Number of objects to draw in the circle
  radius = 0.9;
  maxFrames = 20 * 1000;

  frame = 0;
  counter = 0;

  radiusOffset = 0;
  objectArc = 360 / this.numObjects;
  expectedRadius = 0.8;
  expectedAngle = 360 / this.numObjects;

  onEnter() {
    super.onEnter();
    range.value = '0';
    circleRange.toggle(true);
    circleRange.multiplier = 8;
    this.updateRange();

    W.reset(c2d);
    W.camera({y:1,z:1.8, rx:-45, fov: 38});

    for (let i = 0; i < this.numObjects; i++) {
      W.group({n:`GG${i}`});
      W.group({g:`GG${i}`, n:`G${i}`});
      W.pyramid({g:`G${i}`, n:`P${i}`, ns:1, w:WIDTH,h:HEIGHT,d:WIDTH, b:i%2?colorDark:colorWhite});
    }
  }

  updateObjects() {
    for (let i = 0; i < this.numObjects; i+=2) {
        // Calculate the angle for each object
        const ratio = 1 / this.numObjects;
        const offset = i * ratio;
        const pos = (offset + (this.frame / this.maxFrames));
        const angleDeg = pos * 360;
        const fastAngle = angleDeg * 8;

        W.move({n:`GG${i}`, ry: angleDeg});
        W.move({n:`G${i}`, rx: fastAngle, z: this.radius});
        W.move({n:`P${i}`, y:HEIGHT/2});

        W.move({n:`GG${i+1}`, ry: angleDeg + circleRange.getValue() - this.expectedAngle});
        W.move({n:`G${i+1}`, rx: fastAngle+180, z: this.radius - this.radiusOffset});
        W.move({n:`P${i+1}`, y:HEIGHT/2});
    }
  }

  onUpdate(delta: number) {
    this.frame += delta;
    if (this.frame >= this.maxFrames) {
      this.frame -= this.maxFrames;
    }
    this.updateObjects();

    this.counter++;
    if (this.counter > 20) {
      this.counter = 0;
      this.calculatePower();
    }
  }

  updateRange() {
    this.radiusOffset = this.expectedRadius - (parseInt(range.value) / 100);
  }

  calculatePower() {
    const radius = 1 - Math.abs(this.radiusOffset);
    const angle = Math.max(0, 1 - Math.abs(this.expectedAngle - circleRange.getValue()));
    const value = (angle + radius) / 2;
    super.calculatePower(value);
  }
}

export const helixLevel = new HelixLevel();
