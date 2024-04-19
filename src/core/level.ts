import { gameStateMachine } from "@/game-state-machine";
import { newResultState } from "@/game-states/result.state";
import { circleRange } from "./controls";

export class Level {
  score = 0;

  inputListener: (event: Event) => void;
  submitListener: () => void;

  constructor() {
    this.inputListener = () => this.updateRange();
    this.submitListener = () => this.submit();
  }

  onEnter() {
    range.addEventListener('input', this.inputListener);
    submit.addEventListener('click', this.submitListener);
    this.updateRange();
    controls.classList.add('slide');
  }

  onLeave() {
    circleRange.toggle(true);

    range.removeEventListener('input', this.inputListener);
    submit.removeEventListener('click', this.submitListener);
    controls.classList.remove('slide');
  }

  calculatePower(value: number) {
    this.score = 5 * (value) + 0.25; // 5% perfect bonus
    const totalLedsOn = Math.floor(this.score);

    for (let index = 0; index < 5; index++) {
      lights.children[index].classList.toggle('on', totalLedsOn >= index+1);
    }
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