import { color0, color4, color5 } from '@/core/draw-engine';
import { State } from '@/core/state';
import { newResultState, results } from '../result.state.js';
import { gameStateMachine } from '@/game-state-machine';
import W from '../../lib/w.js';
import { twoCubesLevel } from './two-cubes.js';

const MAX_FRAMES = 60;
const AMPLITUDE_RANGE = 1.5;

class Metronome implements State {
  frame = 0;
  amplitudeG1 = 1;
  amplitudeG2 = 0;
  counter = 0;
  totalLedsOn = 0;
  inputListener: (event: Event) => void;
  submitListener: () => void;

  constructor() {
    this.inputListener = (event) => this.updateRange(event);
    this.submitListener = () => this.submit();
  }

  onEnter() {
    controls.classList.add('slide');
    range.value = '0';

    W.reset(c2d);
    W.clearColor(color4);
    W.camera({y:0.5,z:7, rx:-7, fov: 10});
    document.body.style.background = color4;

    W.group({n:"G1",ry:0});
    W.cube({g:"G1", w:0.1,h:1,d:0.1, x:0,y:0.5, ns:1,b:color5});
    
    W.group({n:"G2",ry:0});
    W.cube({g:"G2", w:0.1,h:1,d:0.1, x:0,y:0.5, ns:1,b:color0});
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
    this.frame++;
    if (this.frame > MAX_FRAMES) {
      this.frame = 0;
    }
    W.move({n:"G1", x:-0.5, y:-0.5, rz: this.amplitudeG1 * 30 * Math.cos(2 * Math.PI * this.frame / MAX_FRAMES)});
    W.move({n:"G2", x: 0.5, y:-0.5, rz: this.amplitudeG2 * 30 * Math.cos(2 * Math.PI * this.frame / MAX_FRAMES)});
    
    this.counter++;
    if (this.counter > 20) {
      this.counter = 0;
      this.calculatePower();
    }
  }

  updateRange(event: Event) {
    // @ts-ignore
    this.amplitudeG2 = AMPLITUDE_RANGE * (event?.target?.value) / 100;
  }

  calculatePower() {
    const amplituceDifference = Math.abs(this.amplitudeG1 - this.amplitudeG2);
    const value = 1 - amplituceDifference / AMPLITUDE_RANGE;
    const totalLedsOn = Math.round(5 * value);

    this.totalLedsOn = totalLedsOn;
    for (let index = 0; index < 5; index++) {
      lights.children[index].classList.toggle('on', totalLedsOn >= index+1);
    }
  }

  submit() {  
    document.removeEventListener('submit', this.inputListener);
    submit.classList.add('clicked');
    setTimeout(() => {
      const result = this.totalLedsOn === 5 ? results.great : results.bad;
      gameStateMachine.setState(newResultState(result, twoCubesLevel, this));
    }, 500);
  }
}

export const metronome = new Metronome();
