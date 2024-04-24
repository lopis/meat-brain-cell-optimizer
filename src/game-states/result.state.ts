import { background, colorDark } from '@/core/draw-engine';
import { gameData } from '@/core/game-data';
import { State } from '@/core/state';
import { gameStateMachine } from '@/game-state-machine';
import W from '@/lib/w';
import { menuState } from './menu.state';
import { stopAudio } from '@/core/audio';

type Result = {
  title: string
  text: string
  pass: boolean
}
type Results = {
  perfect: Result;
  great: Result;
  bad: Result;
  end: Result;
}

export const results: Results = {
  perfect: {
    pass: true,
    title: 'Perfect!',
    text: 'I\'m making a note here: huge success!',
  },
  great: {
    pass: true,
    title: 'Good job',
    text: 'These results are very promising.'
  },
  bad: {
    pass: false,
    title: 'Disappointing',
    text: 'These results are not satisfactory. Try again.'
  },
  end: {
    pass: true,
    title: 'End of experiment',
    text: 'You have demonstrated promising results for your species. We will keep in touch.',
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
      } else {
        this.setEnd();
      }
      gameData.level++;
      gameData.storeLevel();
    });
    retry.addEventListener('click', () => {
      const prevLevel = gameData.getLevel();
      if(prevLevel) {
        gameStateMachine.setState(prevLevel);
      }
    });
    thanks.addEventListener('click', () => {
      gameStateMachine.setState(menuState);
    });
  }

  onEnter() {
    background(colorDark);
    W.reset(c2d);

    thanks.classList.add('hide');
    result.classList.remove('hide');
    nextLevel.classList.toggle('hide', !this.pass);
  }

  onLeave() {
    result.classList.add('hide');
  }

  onUpdate() {}

  setEnd() {
    this.setResult(results.end);
    thanks.classList.remove('hide');
    nextLevel.classList.add('hide');
    retry.classList.add('hide');
    stopAudio();
  }

  setResult(result: Result) {
    this.title = result.title;
    this.text = result.text;
    this.pass = result.pass;
    resultTitle.innerText = this.title;
    resultText.innerText = this.text;
  }
}

const resultState = new ResultState();

export function newResultState (score: number) {
  const result = score > 5 ? results.perfect
    : score > 4.5 ? results.great
    : results.bad;

  resultState.setResult(result);
  
  return resultState;
};
