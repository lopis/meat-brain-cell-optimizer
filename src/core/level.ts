import { gameStateMachine } from "@/game-state-machine";
import { newResultState } from "@/game-states/result.state";

export class Level {
  score = 0;

  calculatePower(value: number) {
    this.score = 5 * (value) + 0.5; // 10% perfect bonus
    const totalLedsOn = Math.floor(this.score);

    for (let index = 0; index < 5; index++) {
      lights.children[index].classList.toggle('on', totalLedsOn >= index+1);
    }
  }

  submit() {
    submit.classList.add('clicked');
    setTimeout(() => {
      gameStateMachine.setState(newResultState(this.score));
    }, 500);
  }
}