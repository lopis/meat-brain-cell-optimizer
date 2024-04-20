import { State } from '@/core/state';
import { Level } from '@/core/level.js';
import { circleRange, circleRange2 } from '@/core/controls';
import { exponencialSmoothing } from '@/core/draw-engine';

const A1 = 90;
const A2 = 210;
const MAX_RANGE = 4;
class FlyLevel extends Level implements State {
  frame = 0;
  counter = 0;

  angle1 = A1;
  targetAngle1 = A1;
  angle2 = A2;
  targetAngle2 = A2;

  onEnter() {
    c2d.classList.add('hide');
    plane.classList.remove('hide');
    range2.classList.remove('hide');

    range.value = '50';
    range2.value = '50';
    this.updateAngles();

    super.onEnter();
  }

  onLeave() {
    c2d.classList.remove('hide');
    plane.classList.add('hide');
    circleRange.toggle(false);
    circleRange2.toggle(false);
    super.onLeave();
  }

  onUpdate(delta: number) {
    this.targetAngle1 = MAX_RANGE * (parseInt(range.value) - 50) + A1;
    this.targetAngle2 = MAX_RANGE * (parseInt(range2.value) - 50) + A2;
    this.angle1 = exponencialSmoothing(this.angle1, this.targetAngle1, delta);
    this.angle2 = exponencialSmoothing(this.angle2, this.targetAngle2, delta);
    this.updateAngles();

    this.counter++;
    if (this.counter > 20) {
      this.counter = 0;
      this.calculatePower();
    }
  }

  calculatePower() {
    const value = 1 - (Math.abs(this.angle1 / 400) + Math.abs((360 - this.angle2) / 400));
    super.calculatePower(Math.pow(value, 5));
  }

  updateAngles() {
    pl1.style.transform = `rotate(${this.angle1}deg)`;
    pl2.style.transform = `rotate(${this.angle2}deg)`;
  }
}

export const flyLevel = new FlyLevel();
