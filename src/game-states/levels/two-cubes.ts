import { color0, color4 } from '@/core/draw-engine';
import { State } from '@/core/state';
import { newResultState, results } from '../result.state';
import { gameStateMachine } from '@/game-state-machine';
import W from '../../lib/w.js';

class TwoCubesLevel implements State {
  frameG1 = 0;
  frameG2 = 0;
  speed = -0.5;
  counter = 0;
  inputListener: (event: Event) => void;
  submitListener: () => void;

  targetSpeed = 1;

  constructor() {
    this.inputListener = (event) => this.updateRange(event);
    this.submitListener = () => this.submit();
  }

  onEnter() {
    controls.classList.add('slide');
    range.value = '25';

    W.reset(c2d);
    W.clearColor(color4);
    W.camera({y:0.5,z:7, rx:-7, fov: 10});
    document.body.style.background = color4;

    W.group({n:"G1",ry:0});
    W.cube({g:"G1", w:1.5,h:1,d:1, x:0,y:0, ns:1,b:color0});
    
    W.group({n:"G2",ry:0});
    W.cube({g:"G2", w:1.5,h:1,d:1, x:0,y:0, ns:1,b:color0});
    range.addEventListener('input', this.inputListener);
    submit.addEventListener('click', this.submitListener);
  }

  onLeave() {
    W.reset(c2d);
    W.clearColor(color4);
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

  updateRange(event: Event) {
    // @ts-ignore
    this.speed = 2 * (event?.target?.value - 50) / 100;
  }

  submit() {  
    document.removeEventListener('submit', this.inputListener);
    submit.classList.add('clicked');
    setTimeout(() => {
      gameStateMachine.setState(newResultState(results.great));
    }, 500);
  }

  calculatePower() {
    const speedDifference = 1 - Math.abs(this.targetSpeed - this.speed);
    const phaseDifference = 1 - Math.abs((this.frameG1 % 180) - (this.frameG2 % 180)) / 180;
    
    // Exagerate the error
    const value = Math.pow((speedDifference * phaseDifference), 5);

    const totalLedsOn = Math.round(5 * value);

    for (let index = 0; index < 5; index++) {
      lights.children[index].classList.toggle('on', totalLedsOn >= index+1);
    }
  }
}

export const twoCubesLevel = new TwoCubesLevel();
