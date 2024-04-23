import { gameStateMachine } from "@/game-state-machine";
import { newResultState } from "@/game-states/result.state";
import { background } from "./draw-engine";
import { gameData } from "./game-data";

function updateLeds(totalLedsOn: number) {
  for (let index = 0; index < 5; index++) {
    lights.children[index].classList.toggle('on', totalLedsOn >= index+1);
  }
}

export class Level {
  score = 0;

  inputListener: (event: Event) => void;
  submitListener: () => void;

  constructor() {
    this.inputListener = () => this.updateRange();
    this.submitListener = () => this.submit();
  }

  hide() {
    [range2, circleRangeElement, overlay, plane]
    .map((e: HTMLElement|SVGElement) => e.classList.add('hide'));
  }

  onEnter() {
    background(gameData.color());
    range.addEventListener('input', this.inputListener);
    range2.addEventListener('input', this.inputListener);
    submit.addEventListener('click', this.submitListener);
    controls.classList.add('slide');
    this.hide();
  }

  onLeave() {
    range.removeEventListener('input', this.inputListener);
    range2.removeEventListener('input', this.inputListener);
    submit.removeEventListener('click', this.submitListener);
    controls.classList.remove('slide');
    submit.classList.remove('clicked');
    range.step = '1';
    range2.step = '1';
    this.hide();
    updateLeds(0);
  }

  calculatePower(value: number) {
    this.score = 5 * (value) + 0.25; // 5% perfect bonus
    const totalLedsOn = Math.floor(this.score);

    updateLeds(totalLedsOn);
  }

  submit() {
    submit.removeEventListener('submit', this.inputListener);
    submit.classList.add('clicked');
    setTimeout(() => {
      gameStateMachine.setState(newResultState(this.score));
    }, 500);
  }

  updateRange() {}
}