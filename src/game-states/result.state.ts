import { State } from '@/core/state';
import { gameStateMachine } from '@/game-state-machine';

type Result = {
  title: string
  text: string
  pass: boolean
}
type Results = {
  perfect: Result;
  great: Result;
  bad: Result;
}

export const results: Results = {
  perfect: {
    pass: true,
    title: 'Perfect!',
    text: 'I\'m making a note here: huge success!',
  },
  great: {
    pass: true,
    title: 'Great job',
    text: 'Your test results are very promising.'
  },
  bad: {
    pass: false,
    title: 'Disappointing',
    text: 'These results are not satisfactory. Try again.'
  }
};

class ResultState implements State {
  title = '';
  text = '';
  pass = true;
  nextLevel: State | null = null;
  previousLevel: State | null = null;

  constructor() {
    nextLevel.addEventListener('click', () => {
      if(this.nextLevel) {
        gameStateMachine.setState(this.nextLevel);
      }
    });
    retry.addEventListener('click', () => {
      if(this.previousLevel) {
        gameStateMachine.setState(this.previousLevel);
      }
    });
  }

  onEnter() {
    resultTitle.innerText = this.title;
    resultText.innerText = this.text;
    result.classList.remove('hide');
    nextLevel.classList.toggle('hide', !this.pass);
  }

  onLeave() {
    result.classList.add('hide');
  }

  onUpdate() {
  }
}

const resultState = new ResultState();

export const newResultState = (result: Result, nextLevel: State | null = null, previousLevel: State | null = null) => {
  resultState.title = result.title;
  resultState.text = result.text;
  resultState.pass = result.pass;
  resultState.nextLevel = nextLevel;
  resultState.previousLevel = previousLevel;
  
  return resultState;
};
