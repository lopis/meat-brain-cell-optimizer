import { background, colorDark } from '@/core/draw-engine';
import { gameData } from '@/core/game-data';
import { State } from '@/core/state';
import { gameStateMachine } from '@/game-state-machine';
import W from '@/lib/w';
import { levelListState } from './list';

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
        gameStateMachine.setState(nextLevel);
      }
    });
    retry.addEventListener('click', () => {
      const prevLevel = gameData.getLevel();
      if(prevLevel) {
        gameStateMachine.setState(prevLevel);
      }
    });
    thanks.addEventListener('click', () => {
      gameStateMachine.setState(levelListState);
    });
  }

  onEnter() {
    background(colorDark);
    W.reset(c2d);

    if (this.pass && gameData.nextLevel()) {
      gameData.level++;
      gameData.storeLevel();
    }

    if (this.pass && !gameData.nextLevel()) {
      resultTitle.innerText = 'End of experiment';
      resultText.innerText = 'You have demonstrated promising results for your species. We will keep in touch.';
      result.classList.remove('hide');
      thanks.classList.remove('hide');
      nextLevel.classList.add('hide');
      
    } else {
      resultTitle.innerText = this.title;
      resultText.innerText = this.text;
      thanks.classList.add('hide');
      result.classList.remove('hide');
      nextLevel.classList.toggle('hide', !this.pass);
    }
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
