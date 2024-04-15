import { colorWhite, color6 } from '@/core/draw-engine';
import { State } from '@/core/state';
import W from '../../lib/w.js';
import { Level } from '@/core/level';

class TwoCubesLevel extends Level implements State {
  frameG1 = 0;
  frameG2 = 0;
  speed = -0.5;
  counter = 0;
  score = 0;
  inputListener: (event: Event) => void;
  submitListener: () => void;

  targetSpeed = 1;

  constructor() {
    super();
    this.inputListener = () => this.updateRange();
    this.submitListener = () => this.submit();
  }

  onEnter() {
    controls.classList.add('slide');
    range.value = '45';
    this.updateRange();

    W.reset(c2d);
    W.camera({y:4,z:7, rx:-30, fov: 10});
    W.light({x:0,y:-5,z:0});
    W.ambient(0.8);
    document.body.style.background = color6;

    W.group({n:"G1",ry:0});
    W.cube({g:"G1", w:1.5,h:1,d:1, x:0,y:0,b:colorWhite});
    
    W.group({n:"G2",ry:0});
    W.cube({g:"G2", w:1.5,h:1,d:1, x:0,y:0,b:colorWhite});
    range.addEventListener('input', this.inputListener);
    submit.addEventListener('click', this.submitListener);
  }

  onLeave() {
    W.reset(c2d);
    document.removeEventListener('input', this.inputListener);
    controls.classList.remove('slide');
  }

  onUpdate() {
    this.frameG1++;
    if (this.frameG1 > 360) {
      this.frameG1 -= 360;
    }
    W.move({n:"G1",ry:this.frameG1});

    this.frameG2 += this.speed;
    if (this.frameG2 > 360) {
      this.frameG2 -= 360;
    } else if (this.frameG2 < 0) {
      this.frameG2 += 360;
    }
    W.move({n:"G2",ry:this.frameG2});
    
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

  submit() {  
    document.removeEventListener('submit', this.inputListener);
    super.submit();
  }

  calculatePower() {
    const speedDifference = 1 - Math.abs(this.targetSpeed - this.speed);
    const phaseDifference = 1 - Math.abs((this.frameG1 % 180) - (this.frameG2 % 180)) / 180;
    // Exagerate the error
    this.score = Math.pow((speedDifference * phaseDifference), 5);

    super.calculatePower(this.score);
  }
}

export const twoCubesLevel = new TwoCubesLevel();
