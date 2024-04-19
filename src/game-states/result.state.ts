import { colorDark } from '@/core/draw-engine';
import { gameData } from '@/core/game-data';
import { State } from '@/core/state';
import { gameStateMachine } from '@/game-state-machine';
import W from '@/lib/w';

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
    text: 'These results are very promising.'
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

  constructor() {
    nextLevel.addEventListener('click', () => {
      const nextLevel = gameData.nextLevel();
      if(nextLevel) {
        gameData.level++;
        gameData.storeLevel();
        gameStateMachine.setState(nextLevel);
      }
    });
    retry.addEventListener('click', () => {
      const prevLevel = gameData.getLevel();
      if(prevLevel) {
        gameStateMachine.setState(prevLevel);
      }
    });
  }

  onEnter() {
    W.reset(c2d);
    document.body.style.background = colorDark;
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

export const newResultState = (score: number) => {
  const result = score > 5 ? results.perfect
    : score > 4.5 ? results.great
    : results.bad;

  resultState.title = result.title;
  resultState.text = result.text;
  resultState.pass = result.pass;
  
  return resultState;
};
