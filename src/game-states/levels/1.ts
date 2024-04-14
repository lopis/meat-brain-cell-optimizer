import { color0, color4 } from '@/core/draw-engine';
import { State } from '@/core/state';
import { resultState } from '../result.state';
import { gameStateMachine } from '@/game-state-machine';

class Level1 implements State {
  private frameG1 = 0;
  private frameG2 = 0;
  private speed = -0.5;
  private inputListener: (event: Event) => void;
  private submitListener: () => void;

  constructor() {
    this.inputListener = (event) => this.updateRange(event);
    this.submitListener = () => this.submit();
  }

  onEnter() {
    controls.classList.remove('hide');
    range.value = '25';

    W.reset(c2d);
    W.clearColor(color4);
    W.camera({y:0.5,z:5, rx:-7, fov: 10});
    document.body.style.background = color4;

    W.group({n:"G1",ry:0});
    W.cube({g:"G1",x:0,y:0,ns:1,b:color0});
    
    W.group({n:"G2",ry:0});
    W.cube({g:"G2",x:0,y:0,ns:1,b:color0});
    range.addEventListener('input', this.inputListener);
    submit.addEventListener('click', this.submitListener);
  }

  onLeave() {
    document.removeEventListener('input', this.inputListener);
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
  }

  updateRange(event: Event) {
    // @ts-ignore
    this.speed = 2 * (event?.target?.value - 50) / 100;
  }

  submit() {  
    document.removeEventListener('submit', this.inputListener);
    submit.classList.add('clicked');
    setTimeout(() => {
      gameStateMachine.setState(resultState);
    }, 500);
  }
}

export const level1 = new Level1();
